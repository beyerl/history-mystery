# Android wrappers (Capacitor)

Packages each quiz web frontend as a native Android app using
[Capacitor](https://capacitorjs.com/). The web apps are plain static SPAs, so
Capacitor simply bundles their assets into a WebView shell — no app rewrite.

Apps built (see [`apps.json`](./apps.json)):

| key         | source project   | app name         | applicationId                  |
|-------------|------------------|------------------|--------------------------------|
| `herstory`  | `HerstoryMystery`| Herstory Mystery | `com.historymystery.herstory`  |
| `spacerace` | `SampleQuiz`     | Space Race       | `com.historymystery.spacerace` |
| `metal`     | `MetalMystery`   | Metal Mystery    | `com.historymystery.metal`     |
| `art`       | `ArtMystery`     | Art Mystery      | `com.historymystery.art`       |

## How it works

Each web app's assets are split between its own `wwwroot` and the shared
`QuizEngine` (served at `/_content/QuizEngine/` by the .NET host). `assemble.mjs`
combines them into `mobile/www` and writes a per-app `capacitor.config.json`:

```
node assemble.mjs <key>      # e.g. node assemble.mjs metal
```

The generated `www/`, `android/`, `node_modules/` and `capacitor.config.json`
are not committed — they are produced on demand and in CI.

## CI

[`.github/workflows/android.yml`](../.github/workflows/android.yml) builds a
**debug APK for every app** (a matrix job) on push to `main` and on manual
dispatch, uploading each as a `<key>-debug-apk` artifact. GitHub's
`ubuntu-latest` runners ship the Android SDK, so no extra SDK setup is needed.

## Build locally

Prerequisites: Node 18+, JDK 17+ (21 recommended), and the Android SDK
(`ANDROID_HOME` set), e.g. via Android Studio.

```
cd mobile
npm install
node assemble.mjs metal           # pick an app key
npx cap add android               # first time only (regenerates android/)
npx cap sync android
cd android && ./gradlew assembleDebug
# APK: mobile/android/app/build/outputs/apk/debug/app-debug.apk
```

## Pointing the app at the live API (multiplayer)

The bundled `config.js` defaults to `https://localhost:7227/`, which a phone
cannot reach. Set the deployed GameState API URL when assembling:

```
API_BASE_ADDRESS=https://your-gamestate-api.example.com node assemble.mjs metal
```

In CI, set the **`API_BASE_ADDRESS` repository secret** and the workflow injects
it automatically.

> The GameState API's CORS policy must allow the app's WebView origin
> (`https://localhost` / `capacitor://localhost`). See the CORS configuration
> added for issue #14.

## Release signing (manual — needs your keystore)

Debug APKs are signed with Android's debug key and are fine for testing only.
For a Play Store / distributable release you must sign with your own keystore:

1. Create a keystore (once):
   ```
   keytool -genkey -v -keystore release.keystore -alias upload \
     -keyalg RSA -keysize 2048 -validity 10000
   ```
2. Add a `signingConfig` to `mobile/android/app/build.gradle` reading the
   keystore path/passwords from environment variables (do **not** commit the
   keystore or passwords).
3. In CI, store the base64-encoded keystore and passwords as repository secrets,
   decode the keystore in a workflow step, and run `./gradlew assembleRelease`
   (or `bundleRelease` for an `.aab`).

Because the keystore and Play Console account are credentials only the project
owner holds, this step is intentionally left as a documented manual setup rather
than wired into the committed workflow.
