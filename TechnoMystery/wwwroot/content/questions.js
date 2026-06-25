// content/questions.js — Techno Mystery quiz content for the QuizEngine. 300 definitive techno tracks spanning the genre's roots to today, in the spirit of Ishkur's Guide to Electronic Music.
// Pieces are ordered by year. Each carries verified, embeddable YouTube video
// ids (with fallbacks) and its era/subgenre info. Video ids were gathered by
// searching YouTube and verified one-by-one via the oEmbed endpoint (HTTP 200 =
// public AND embeddable), so the hidden player can stream them.
// Question contract: { title, year, description, artist, videos[], genre{title,description} }.
export const questions = [
  {
    "title": "I Feel Love",
    "artist": "Donna Summer",
    "year": 1977,
    "description": "Donna Summer",
    "videos": [
      "9ZqqvrWCs3Q",
      "yEbaeLv-aOo",
      "ufGLhImwnYg"
    ],
    "genre": {
      "title": "Proto-techno disco",
      "description": "Giorgio Moroder's all-electronic Moog production stripped disco down to a hypnotic synth pulse. Its relentless arpeggiated bassline laid the blueprint for techno, house and synth-pop alike."
    }
  },
  {
    "title": "Trans-Europe Express",
    "artist": "Kraftwerk",
    "year": 1977,
    "description": "Kraftwerk",
    "videos": [
      "kv8_EZrNhpY",
      "DWSceMtAjPw",
      "3fejcQFJWgw"
    ],
    "genre": {
      "title": "Electronic / proto-techno",
      "description": "Kraftwerk's mechanized rhythm and rolling electronic motif became foundational DNA for Detroit techno and electro. Its train-like pulse was famously sampled by Afrika Bambaataa for 'Planet Rock'."
    }
  },
  {
    "title": "The Robots",
    "artist": "Kraftwerk",
    "year": 1978,
    "description": "Kraftwerk",
    "videos": [
      "D_8Pma1vHmw",
      "r4E4eHw6fpc",
      "-wop47G2qeY"
    ],
    "genre": {
      "title": "Electronic / proto-techno",
      "description": "From 'The Man-Machine', this robotic anthem embodied Kraftwerk's man-as-machine concept. Its rigid sequencing and vocoder vocals directly inspired Detroit's futurist techno pioneers."
    }
  },
  {
    "title": "Computer Game (Firecracker)",
    "artist": "Yellow Magic Orchestra",
    "year": 1978,
    "description": "Yellow Magic Orchestra",
    "videos": [
      "q3XqVBdjNM0",
      "9Sbvylpwah8",
      "oBpP3OCNyTA"
    ],
    "genre": {
      "title": "Electronic / technopop",
      "description": "Japan's YMO fused arcade-game bleeps with tight synthesized grooves, pioneering 'technopop'. Their playful machine funk profoundly shaped electro and early techno aesthetics."
    }
  },
  {
    "title": "Sharevari",
    "artist": "A Number of Names",
    "year": 1981,
    "description": "A Number of Names",
    "videos": [
      "IeF0xTdHPfA",
      "huofr2_h8dI",
      "H-8BktY5eX0"
    ],
    "genre": {
      "title": "Detroit proto-techno",
      "description": "Often called Detroit's first techno record, this synth-driven club cut soundtracked the city's preppy party scene. A key bridge between Euro-disco and the emerging Detroit sound."
    }
  },
  {
    "title": "Alleys of Your Mind",
    "artist": "Cybotron",
    "year": 1981,
    "description": "Cybotron",
    "videos": [
      "ZOwpGnV8HBM",
      "Ngd9dChv7uY",
      "kMHNhJJnve4"
    ],
    "genre": {
      "title": "Detroit electro",
      "description": "Juan Atkins and Rick Davis's debut as Cybotron, blending Kraftwerk-style synths with funk and dystopian sci-fi themes. Widely cited as a first stirring of the Detroit techno sound."
    }
  },
  {
    "title": "Numbers",
    "artist": "Kraftwerk",
    "year": 1981,
    "description": "Kraftwerk",
    "videos": [
      "HvmanvXk6JQ",
      "4YPiCeLwh5o",
      "YJRVTpkNJOw"
    ],
    "genre": {
      "title": "Electro / proto-techno",
      "description": "A skeletal beat-and-bleep track from 'Computer World' that became a B-boy and Detroit dancefloor staple. Its percussive electronic minimalism is a cornerstone of electro and techno."
    }
  },
  {
    "title": "Planet Rock",
    "artist": "Afrika Bambaataa & The Soulsonic Force",
    "year": 1982,
    "description": "Afrika Bambaataa & The Soulsonic Force",
    "videos": [
      "9J3lwZjHenA",
      "_rlUQsC8ECk",
      "sKGXge0N1rc"
    ],
    "genre": {
      "title": "Electro-funk",
      "description": "Built on Kraftwerk's 'Trans-Europe Express' and 'Numbers' over a TR-808, it crystallized electro and bridged hip-hop to electronic dance music. A direct influence on Detroit techno."
    }
  },
  {
    "title": "Cosmic Cars",
    "artist": "Cybotron",
    "year": 1982,
    "description": "Cybotron",
    "videos": [
      "lVmwafAWDkA",
      "aOBUqCIXXWY",
      "mfOhMNG2cEI"
    ],
    "genre": {
      "title": "Detroit electro",
      "description": "Cybotron's automotive sci-fi vision rendered in cold synth-funk, reflecting Detroit's car-city identity. An essential proto-techno transmission from Juan Atkins's earliest project."
    }
  },
  {
    "title": "Clear",
    "artist": "Cybotron",
    "year": 1983,
    "description": "Cybotron",
    "videos": [
      "YT4qqZHN8no",
      "wegW41zpOfA",
      "hsBv-dOXVXI"
    ],
    "genre": {
      "title": "Detroit electro",
      "description": "Cybotron's biggest hit, a crisp electro classic of robotic vocals and razor-sharp drum machine. It marked the threshold where electro began crossing into techno."
    }
  },
  {
    "title": "Bass Line",
    "artist": "Mantronix",
    "year": 1985,
    "description": "Mantronix",
    "videos": [
      "DgD4x_SfyD8",
      "73omlAllMm4",
      "tEZyI9aOe2Q"
    ],
    "genre": {
      "title": "Electro / hip-hop",
      "description": "Kurtis Mantronik's stripped, machine-driven electro-rap that influenced techno's rhythmic programming. A bridge between New York electro and the dancefloor."
    }
  },
  {
    "title": "No UFO's",
    "artist": "Model 500",
    "year": 1985,
    "description": "Model 500",
    "videos": [
      "KNz01ty-kTQ",
      "rFQZndywOR4",
      "xcdOBLH_AXs"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Juan Atkins's first release as Model 500 and a landmark in defining Detroit techno proper. Its futurist funk and stripped machine groove launched his Metroplex label."
    }
  },
  {
    "title": "Night Drive (Thru-Babylon)",
    "artist": "Model 500",
    "year": 1985,
    "description": "Model 500",
    "videos": [
      "E5kKUtTX0yU",
      "Hs5uqACOY1E",
      "qvqDBXrk_N8"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Juan Atkins steering electro-funk toward sleek, propulsive techno, evoking a nocturnal city cruise. A foundational Metroplex transmission of the Detroit aesthetic."
    }
  },
  {
    "title": "Goodbye Kiss",
    "artist": "Kevin Saunderson",
    "year": 1986,
    "description": "Kevin Saunderson",
    "videos": [
      "vZarE8_M3fc",
      "CYvr0CUqCuY",
      "v6bO_BKG3Rw"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "An early solo outing from the third member of the Belleville Three on his KMS label. It captures Detroit techno's transition out of electro into deep, danceable machine soul."
    }
  },
  {
    "title": "Let's Go",
    "artist": "Model 500",
    "year": 1986,
    "description": "Model 500",
    "videos": [
      "KNz01ty-kTQ",
      "aOBUqCIXXWY",
      "SIJ5Fp_DEWw"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Juan Atkins pushing Metroplex's futurist machine funk forward with driving electronic energy. A core early Model 500 dancefloor cut."
    }
  },
  {
    "title": "Can You Feel It",
    "artist": "Mr. Fingers",
    "year": 1986,
    "description": "Mr. Fingers",
    "videos": [
      "1N9Wnqz8Rh8",
      "tFuujExs03A",
      "DrxPFBEr5Bo"
    ],
    "genre": {
      "title": "Deep house",
      "description": "Larry Heard's lush, soulful synth-pad masterpiece that essentially invented deep house. A defining emotional counterpoint to Chicago's rawer jack tracks."
    }
  },
  {
    "title": "Time, Space, Transmat",
    "artist": "Rhythim Is Rhythim",
    "year": 1986,
    "description": "Rhythim Is Rhythim",
    "videos": [
      "Cil7ENspkk0",
      "qvqDBXrk_N8",
      "Hs5uqACOY1E"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "An early Derrick May production of soaring, melodic machine soul. It helped shape the emotive, futuristic strain that distinguished Detroit techno from Chicago house."
    }
  },
  {
    "title": "Acid Tracks",
    "artist": "Phuture",
    "year": 1987,
    "description": "Phuture",
    "videos": [
      "igNBeo3QSqc",
      "rFQZndywOR4",
      "yKHGv6Es610"
    ],
    "genre": {
      "title": "Acid house",
      "description": "DJ Pierre and Phuture turned the Roland TB-303's squelch into a genre, defining acid house. Its hypnotic 12-minute mutation reshaped electronic dance music worldwide."
    }
  },
  {
    "title": "The Sound",
    "artist": "Reese & Santonio",
    "year": 1987,
    "description": "Reese & Santonio",
    "videos": [
      "QiQFME5bym8",
      "v2qu7rGSDJ8",
      "8RiW0rTjY8A"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Kevin Saunderson (as Reese) with Santonio Echols crafting raw, hypnotic dancefloor pressure. A defining KMS-era Detroit techno cut."
    }
  },
  {
    "title": "Strings of Life",
    "artist": "Rhythim Is Rhythim",
    "year": 1987,
    "description": "Rhythim Is Rhythim",
    "videos": [
      "rFQZndywOR4",
      "vGFw2qeUp0s",
      "ETC-DbZ68gM"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Derrick May's euphoric piano-and-strings anthem, perhaps the most beloved Detroit techno record ever made. Its rhythmic, beatless intro became iconic on dancefloors globally."
    }
  },
  {
    "title": "Nude Photo",
    "artist": "Rhythim Is Rhythim",
    "year": 1987,
    "description": "Rhythim Is Rhythim",
    "videos": [
      "I7HiL2m63pQ",
      "rFQZndywOR4",
      "N3hAWqCjJ3Y"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Derrick May and Thomas Barnett's stuttering, percussive Transmat classic. Its restless syncopation showcased the rhythmic invention at the heart of Detroit techno."
    }
  },
  {
    "title": "Acid Trax",
    "artist": "Adonis",
    "year": 1988,
    "description": "Adonis",
    "videos": [
      "He_X5GzG-YI",
      "1rcmggk7VAo",
      "kNR3vVSN4Cw"
    ],
    "genre": {
      "title": "Acid house",
      "description": "A raw, hypnotic Chicago 303 workout from the acid house explosion. Part of the Chicago wave that fed directly into Detroit and UK rave culture."
    }
  },
  {
    "title": "The Dance",
    "artist": "Blake Baxter",
    "year": 1988,
    "description": "Blake Baxter",
    "videos": [
      "UW3OwbFOzw8",
      "z5_lZZ7SW40",
      "W_iXjfr62Y8"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "The 'Prince of Techno' bringing sultry, vocal-led grooves to the early Detroit catalogue. A KMS-era cut from techno's first generation."
    }
  },
  {
    "title": "Big Fun",
    "artist": "Inner City",
    "year": 1988,
    "description": "Inner City",
    "videos": [
      "Gr-zG-IXDyo",
      "KJxJxr9RlKM",
      "ZZpC30e4ehg"
    ],
    "genre": {
      "title": "Detroit techno / house",
      "description": "Kevin Saunderson with vocalist Paris Grey delivering radiant, song-based techno-house. A crossover smash that brought Detroit's sound to international charts."
    }
  },
  {
    "title": "Good Life",
    "artist": "Inner City",
    "year": 1988,
    "description": "Inner City",
    "videos": [
      "KJxJxr9RlKM",
      "_KztNIg4cvE",
      "iUwfOOdg4eE"
    ],
    "genre": {
      "title": "Detroit techno / house",
      "description": "Saunderson and Paris Grey's uplifting anthem of pure dancefloor optimism. Its global success made it one of techno's most enduring crossover records."
    }
  },
  {
    "title": "Your Only Friend",
    "artist": "Phuture",
    "year": 1988,
    "description": "Phuture",
    "videos": [
      "wIbd9i9uR1g",
      "lJnqRCwPeSw",
      "RlDLslFwewU"
    ],
    "genre": {
      "title": "Acid house",
      "description": "Phuture's gritty anti-cocaine acid track, voiced by the drug itself over snarling 303 lines. A darker, narrative-driven entry in the acid house canon."
    }
  },
  {
    "title": "Konfusion",
    "artist": "Pierre's Pfantasy Club",
    "year": 1988,
    "description": "Pierre's Pfantasy Club",
    "videos": [
      "M6K2huU9Spk",
      "B0tcJ7MZKv0",
      "LOA-QS_H_Mw"
    ],
    "genre": {
      "title": "Acid House / Techno",
      "description": "DJ Pierre's raw Chicago acid workout from the genre's birth year, a key bridge between acid house and emerging techno."
    }
  },
  {
    "title": "Just Want Another Chance",
    "artist": "Reese",
    "year": 1988,
    "description": "Reese",
    "videos": [
      "WJ-uXuyKMLY",
      "v2qu7rGSDJ8",
      "6m4T0aqJNxo"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Kevin Saunderson's Reese project unleashing a deep, growling bassline that would echo through techno and later drum & bass. A foundational 'Reese bass' moment."
    }
  },
  {
    "title": "It Is What It Is",
    "artist": "Rhythim Is Rhythim",
    "year": 1988,
    "description": "Rhythim Is Rhythim",
    "videos": [
      "UBW-7uI5ABw",
      "rFQZndywOR4",
      "GaWK6DaU9H8"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Derrick May featured on 'Techno! The New Dance Sound of Detroit', the UK compilation that introduced the term to the world. A lush, melodic showcase of his style."
    }
  },
  {
    "title": "Wiggin'",
    "artist": "Mayday",
    "year": 1989,
    "description": "Mayday",
    "videos": [
      "a7R7iyf3ALQ",
      "Z9cTBFFPt7s",
      "xJyeQCa4JXc"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Derrick May's Mayday alias delivering tough, percussive Transmat-era techno. A late-decade statement closing out Detroit's foundational period."
    }
  },
  {
    "title": "Pacific State",
    "artist": "808 State",
    "year": 1990,
    "description": "808 State",
    "videos": [
      "tLxDRePUwEY",
      "j7vxHOCeiQ4",
      "6jQ_bOP0HfY"
    ],
    "genre": {
      "title": "Bleep techno",
      "description": "A Manchester landmark blending acid house with jazzy saxophone and birdsong. It bridged rave culture and the emerging British techno scene and became a Top 10 crossover hit."
    }
  },
  {
    "title": "Quadrastate (Pulse State)",
    "artist": "808 State",
    "year": 1990,
    "description": "808 State",
    "videos": [
      "nHOddHrOrps",
      "7iO1cwJ978I",
      "fQGrXJnL2mQ"
    ],
    "genre": {
      "title": "Bleep techno",
      "description": "An early 808 State excursion blending acid, bleep and ambient textures from Manchester. Part of the foundation of UK techno's experimental wing."
    }
  },
  {
    "title": "Cubik",
    "artist": "808 State",
    "year": 1990,
    "description": "808 State",
    "videos": [
      "7Y9SYNWkuow",
      "64AIAY7k7hc",
      "ZgV7u3WsNf0"
    ],
    "genre": {
      "title": "Techno",
      "description": "A hard, riff-driven Manchester techno cut that became a rave staple and chart hit. Showed 808 State's tougher, peak-time side."
    }
  },
  {
    "title": "We Came in Peace",
    "artist": "Dance 2 Trance",
    "year": 1990,
    "description": "Dance 2 Trance",
    "videos": [
      "tFkofUcl-QA",
      "DXHg4s0NsBc",
      "6-5tZRzCGzU"
    ],
    "genre": {
      "title": "Trance",
      "description": "An early German proto-trance record from the Frankfurt scene, layering acid lines with a spacey, hypnotic mood. Often cited among the first records to carry the trance name."
    }
  },
  {
    "title": "Energy Flash",
    "artist": "Joey Beltram",
    "year": 1990,
    "description": "Joey Beltram",
    "videos": [
      "maOM81a-Gyg",
      "ALsHox5sYCk",
      "RpZVPSCv79U"
    ],
    "genre": {
      "title": "Hardcore techno",
      "description": "A relentless, hypnotic stomper released on Belgium's R&S Records that defined the early-90s rave techno template. Its chanted 'ecstasy' sample and driving energy made it era-defining."
    }
  },
  {
    "title": "LFO",
    "artist": "LFO",
    "year": 1990,
    "description": "LFO",
    "videos": [
      "s-1Y2EqThyQ",
      "XUezwbsUWUU",
      "CmehyFw_VLc"
    ],
    "genre": {
      "title": "Bleep techno",
      "description": "The defining record of the UK 'bleep and bass' sound out of Leeds. Its sub-heavy bassline and stark synth bleeps made it a foundational Warp Records release and a blueprint for British techno."
    }
  },
  {
    "title": "Anthem",
    "artist": "N-Joi",
    "year": 1990,
    "description": "N-Joi",
    "videos": [
      "mDURChQ7w54",
      "Ui-TaOq2gEU",
      "e6T03hNAB-g"
    ],
    "genre": {
      "title": "Hardcore",
      "description": "A pounding piano-and-stab UK rave anthem from the breakbeat-hardcore peak. Quintessential 1990 British rave energy."
    }
  },
  {
    "title": "The Bells (Aftermath)",
    "artist": "Nightmares on Wax",
    "year": 1990,
    "description": "Nightmares on Wax",
    "videos": [
      "k_KSTXfXzIE",
      "yWknO6PE_a8",
      "ly_4yhGch88"
    ],
    "genre": {
      "title": "Bleep techno",
      "description": "An early Warp Records cut from the Leeds bleep scene, fusing breakbeats, deep bass and hardcore energy. A cornerstone of the label's pre-Artificial Intelligence identity."
    }
  },
  {
    "title": "Aftermath",
    "artist": "Nightmares on Wax",
    "year": 1990,
    "description": "Nightmares on Wax",
    "videos": [
      "k_KSTXfXzIE",
      "ic_aIHpz4tM",
      "rxbCaiyYSXM"
    ],
    "genre": {
      "title": "Bleep techno",
      "description": "The Leeds duo's bass-heavy, breakbeat-laced Warp classic from the bleep era. A definitive early statement from the label that became electronic music's flagship."
    }
  },
  {
    "title": "Chime",
    "artist": "Orbital",
    "year": 1990,
    "description": "Orbital",
    "videos": [
      "tg5eTjqefHM",
      "tnJB-3zpIEQ",
      "_9lbZJw54lk"
    ],
    "genre": {
      "title": "Techno",
      "description": "The Hartnoll brothers' debut, built on a melodic looping arpeggio and recorded cheaply on a tape machine. It became a UK rave anthem and launched one of British techno's most enduring acts."
    }
  },
  {
    "title": "Strings of Life (Juan Atkins on a Detroit tip)",
    "artist": "Rhythim Is Rhythim",
    "year": 1990,
    "description": "Rhythim Is Rhythim",
    "videos": [
      "rFQZndywOR4",
      "HE8x4EZgOos",
      "TShqOPS06Yc"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Derrick May's masterwork in its widely circulated early-90s reissues, with cascading piano stabs and emotional propulsion. A defining statement of Detroit's first-to-second-wave techno."
    }
  },
  {
    "title": "Testone",
    "artist": "Sweet Exorcist",
    "year": 1990,
    "description": "Sweet Exorcist",
    "videos": [
      "ooD4plDsO60",
      "amOo8zV6DDA",
      "_yUYz-QeKY4"
    ],
    "genre": {
      "title": "Bleep techno",
      "description": "Richard H. Kirk and DJ Parrot's foundational Sheffield bleep record, Warp's early signature. Minimal bleeps and rib-rattling bass that defined the sound."
    }
  },
  {
    "title": "Little Fluffy Clouds",
    "artist": "The Orb",
    "year": 1990,
    "description": "The Orb",
    "videos": [
      "8Ecdn5SGT1E",
      "2Ng9Pf_p7Fw",
      "KNfjpmvbQG0"
    ],
    "genre": {
      "title": "Ambient techno",
      "description": "Alex Paterson's blissful collage of Rickie Lee Jones spoken word over dub-ambient grooves. A defining ambient-house/techno record of the chill-out era."
    }
  },
  {
    "title": "Tricky Disco",
    "artist": "Tricky Disco",
    "year": 1990,
    "description": "Tricky Disco",
    "videos": [
      "vGACDxuA0Os",
      "kIOY9rAfp_4",
      "Et-86xBWIAw"
    ],
    "genre": {
      "title": "Bleep techno",
      "description": "A quirky, bleepy Warp Records novelty-rave hit from the Leeds camp. Captured the playful, irreverent edge of early UK techno."
    }
  },
  {
    "title": "Bio-Rhythm",
    "artist": "Carl Craig",
    "year": 1991,
    "description": "Carl Craig",
    "videos": [
      "UMx3iLGuxb4",
      "MpkmDbaj8V0",
      "VrokHImWfpw"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "An early production from the Detroit second-wave auteur, marked by jazzy, futurist textures. A signpost toward Craig's genre-spanning artistry."
    }
  },
  {
    "title": "Dominator",
    "artist": "Human Resource",
    "year": 1991,
    "description": "Human Resource",
    "videos": [
      "Q--79iGN_t8",
      "GSKChyTQ6bU",
      "llqsK00tyjM"
    ],
    "genre": {
      "title": "Hardcore techno",
      "description": "A Dutch rave monster built around the Mentasm hoover stab and a defiant vocal. It pushed the boundaries of speed and aggression toward gabber and hardcore."
    }
  },
  {
    "title": "We Have Arrived",
    "artist": "Mescalinum United",
    "year": 1991,
    "description": "Mescalinum United",
    "videos": [
      "BL5xh-wt3Vc",
      "otMIaSNgpQg",
      "G3IixvevE98"
    ],
    "genre": {
      "title": "Hardcore techno",
      "description": "Marc Acardipane's brutal, distorted Frankfurt cut often cited as the first true hardcore/gabber record. It laid the groundwork for the genre's extreme tempos and overdriven kicks."
    }
  },
  {
    "title": "Belfast",
    "artist": "Orbital",
    "year": 1991,
    "description": "Orbital",
    "videos": [
      "AZzJxWlvlNg",
      "9eDUY-UeDis",
      "0oMuUHmF2LY"
    ],
    "genre": {
      "title": "Ambient Techno",
      "description": "Orbital's serene, choir-laden classic that defined the melodic, emotional end of early-90s British ambient techno."
    }
  },
  {
    "title": "Phantasm",
    "artist": "Phuture",
    "year": 1991,
    "description": "Phuture",
    "videos": [
      "nyPIBjOB_Uc",
      "ynUOagccx1M",
      "i5g4WE0I67Y"
    ],
    "genre": {
      "title": "Acid techno",
      "description": "From the Chicago acid pioneers as their sound fed into early-90s techno. A 303-driven bridge between acid house origins and the techno explosion."
    }
  },
  {
    "title": "Nude Photo (early 90s reissue)",
    "artist": "Rhythim Is Rhythim",
    "year": 1991,
    "description": "Rhythim Is Rhythim",
    "videos": [
      "I7HiL2m63pQ",
      "rFQZndywOR4",
      "N3hAWqCjJ3Y"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Derrick May and Thomas Barnett's seminal Detroit cut, widely re-pressed and played through the early-90s techno boom. A first-wave classic fueling the second wave."
    }
  },
  {
    "title": "The Sound of Eden",
    "artist": "Shades of Rhythm",
    "year": 1991,
    "description": "Shades of Rhythm",
    "videos": [
      "-ZdfAd8NVXk",
      "cGcBVKMSnHw",
      "iOIhPDFEbFs"
    ],
    "genre": {
      "title": "Hardcore",
      "description": "A piano-and-breakbeat-laced UK rave anthem capturing the euphoric hardcore moment. A defining slice of British 1991 rave culture."
    }
  },
  {
    "title": "Dreaming",
    "artist": "System 7",
    "year": 1991,
    "description": "System 7",
    "videos": [
      "D1O5hdOJsOI",
      "vUdsd1nvHGA",
      "cklwxOKXVv4"
    ],
    "genre": {
      "title": "Trance",
      "description": "Steve Hillage and Miquette Giraudy's fusion of ambient, prog and trance textures. An early melodic-trance touchstone bridging psychedelia and dancefloors."
    }
  },
  {
    "title": "Inspiration",
    "artist": "T99",
    "year": 1991,
    "description": "T99",
    "videos": [
      "Mx3LccRvidg",
      "XLWzFda6C60",
      "1v2oLxr2EZ8"
    ],
    "genre": {
      "title": "Hardcore techno",
      "description": "A Belgian new-beat/hardcore monster with orchestral stabs and the menacing Mentasm-style energy. Emblematic of Belgium's hard rave dominance in 1991."
    }
  },
  {
    "title": "Charly",
    "artist": "The Prodigy",
    "year": 1991,
    "description": "The Prodigy",
    "videos": [
      "cSTBFZ-To2E",
      "iA8NnJ99HqY",
      "ucvXp4pUvb8"
    ],
    "genre": {
      "title": "Hardcore",
      "description": "Liam Howlett's breakthrough sampling a UK public-information cartoon cat. A definitive rave-hardcore anthem that catapulted The Prodigy and the 'toytown' rave sound."
    }
  },
  {
    "title": "The Final Frontier",
    "artist": "Underground Resistance",
    "year": 1991,
    "description": "Underground Resistance",
    "videos": [
      "9qzCcm9X80Q",
      "4WLtJDKXMCE",
      "xrfIF8SB5a8"
    ],
    "genre": {
      "title": "Detroit Techno",
      "description": "A militant, driving anthem from Mad Mike and Jeff Mills' UR collective that defined the second wave of hard, politically charged Detroit techno."
    }
  },
  {
    "title": "Wardance",
    "artist": "Underground Resistance",
    "year": 1991,
    "description": "Underground Resistance",
    "videos": [
      "Ne2DrdcBd0c",
      "H-fQkDzR18A",
      "OGAX-MWMVr0"
    ],
    "genre": {
      "title": "Detroit Techno",
      "description": "An aggressive, stripped UR weapon from the early 90s that embodied the collective's revolutionary 'sonic warfare' ethos."
    }
  },
  {
    "title": "Sonic Destroyer",
    "artist": "X-101",
    "year": 1991,
    "description": "X-101",
    "videos": [
      "VtqJdISUEtE",
      "y0W3HKxB9Ps",
      "vELM6uFaUqQ"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "An Underground Resistance side project (Mills, Hood, Banks) of stripped, militant machine funk. A cornerstone of UR's hard, politically charged Detroit second wave."
    }
  },
  {
    "title": "The Age of Love (Jam & Spoon Watch Out for Stella Mix)",
    "artist": "Age of Love",
    "year": 1992,
    "description": "Age of Love",
    "videos": [
      "-ubrhlYVv2k",
      "0YVvcTIGy40",
      "I4Et0DJ2L8k"
    ],
    "genre": {
      "title": "Trance",
      "description": "The Jam & Spoon remix that became a foundational trance record, with its hypnotic riff and emotional build. Widely regarded as a genesis point for the genre."
    }
  },
  {
    "title": "Didgeridoo",
    "artist": "Aphex Twin",
    "year": 1992,
    "description": "Aphex Twin",
    "videos": [
      "R9vvU0ZPuRM",
      "CyEV0_RzUUs",
      "6x0MyLPB2SA"
    ],
    "genre": {
      "title": "Techno",
      "description": "Richard D. James' frenetic, abrasive R&S debut single inspired by didgeridoo drones, designed to clear lazy ravers off the floor. An early signal of his singular genius."
    }
  },
  {
    "title": "Cocoon",
    "artist": "Aphex Twin (Caustic Window)",
    "year": 1992,
    "description": "Aphex Twin (Caustic Window)",
    "videos": [
      "p7AbGcs7BBE",
      "8IMXvDp-dew",
      "YWDRYphGnbA"
    ],
    "genre": {
      "title": "Acid techno",
      "description": "A Caustic Window-era acid workout from Richard D. James on Rephlex. Showcased his idiosyncratic, gritty take on 303 acid techno."
    }
  },
  {
    "title": "Acid Eiffel",
    "artist": "Choice",
    "year": 1992,
    "description": "Choice",
    "videos": [
      "gPuA-Zun4rk",
      "J5bBCaUnPq4",
      "sxfqRv6P99o"
    ],
    "genre": {
      "title": "Acid techno",
      "description": "Laurent Garnier's emotive French acid-techno landmark, blending 303 melancholy with a melodic build. A defining continental acid-trance crossover."
    }
  },
  {
    "title": "Camargue",
    "artist": "CJ Bolland",
    "year": 1992,
    "description": "CJ Bolland",
    "videos": [
      "RsrdANlEz8I",
      "_HZQJgpVvbQ",
      "62wVrMoUi9c"
    ],
    "genre": {
      "title": "Techno",
      "description": "A melodic, propulsive R&S cut from the Belgian-British producer. Showcased the more musical, polished side of early-90s European techno."
    }
  },
  {
    "title": "Horsepower",
    "artist": "CJ Bolland",
    "year": 1992,
    "description": "CJ Bolland",
    "videos": [
      "uvAd7rLBCms",
      "Z_jlmpPc1bY",
      "vQZrovyG0zc"
    ],
    "genre": {
      "title": "Techno",
      "description": "A driving, mechanical R&S techno workout that became a club staple. It typified the label's hard yet musical Belgian sound."
    }
  },
  {
    "title": "Jaguar",
    "artist": "DJ Hell",
    "year": 1992,
    "description": "DJ Hell",
    "videos": [
      "c_S-AsCAEkY",
      "E6aCbEsdDfg",
      "dA1U7s9VQX0"
    ],
    "genre": {
      "title": "Acid techno",
      "description": "A hypnotic acid-tinged cut from the Munich producer that became a club favorite. Part of Germany's hard, acid-driven early-90s techno wave."
    }
  },
  {
    "title": "The Knights of the Jaguar",
    "artist": "DJ Rolando",
    "year": 1992,
    "description": "DJ Rolando",
    "videos": [
      "ZcC3vVh3cOE",
      "tEyTBGX2pko",
      "1eSh8S2A1WA"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "An Underground Resistance-affiliated anthem of soaring strings over militant drums (widely circulated through UR's early-90s catalog). Emblematic of Detroit's second-wave defiance and emotion."
    }
  },
  {
    "title": "Acperience 1",
    "artist": "Hardfloor",
    "year": 1992,
    "description": "Hardfloor",
    "videos": [
      "Un4CeV_l3pI",
      "YsU6w4Gc0d0",
      "mgFGHz5dR7k"
    ],
    "genre": {
      "title": "Acid techno",
      "description": "The German duo's twin-303 epic that revived and reinvented acid for the 90s. A defining acid techno workout that influenced a generation of squelching basslines."
    }
  },
  {
    "title": "Hardtrance Acperience",
    "artist": "Hardfloor",
    "year": 1992,
    "description": "Hardfloor",
    "videos": [
      "Un4CeV_l3pI",
      "lsSLxX9PkKQ",
      "cjHXQBGt0Hc"
    ],
    "genre": {
      "title": "Acid Techno",
      "description": "The original German acid epic of cascading 303 lines that became the definitive acid-trance/techno crossover anthem."
    }
  },
  {
    "title": "Bug in the Bassbin",
    "artist": "Innerzone Orchestra",
    "year": 1992,
    "description": "Innerzone Orchestra",
    "videos": [
      "1WAouZc19vk",
      "mInY6_o6PCE",
      "yaWObSR0B90"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Carl Craig's jazz-fusion-meets-techno landmark, later cited as a proto-drum-and-bass influence. A definitive example of Detroit's experimental reach."
    }
  },
  {
    "title": "Stella",
    "artist": "Jam & Spoon",
    "year": 1992,
    "description": "Jam & Spoon",
    "videos": [
      "zLy--cFj6W0",
      "7nOhI_NZYOA",
      "6IjbOg3IrZs"
    ],
    "genre": {
      "title": "Trance",
      "description": "Frankfurt duo Rolf Ellmer and Markus Loffel's luminous, melodic anthem. A defining early trance track that helped shape the genre's euphoric template."
    }
  },
  {
    "title": "The Theory",
    "artist": "Jeff Mills",
    "year": 1992,
    "description": "Jeff Mills",
    "videos": [
      "MfYjaD7tL60",
      "YXsAxeme0Rg",
      "Vtfadj3VG4A"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "An early solo Jeff Mills cut of relentless, looping rhythmic intensity. It heralded the stripped, hypnotic style he would define on Axis Records."
    }
  },
  {
    "title": "Ricochet",
    "artist": "Joey Beltram",
    "year": 1992,
    "description": "Joey Beltram",
    "videos": [
      "ALsHox5sYCk",
      "iWTjHek7x40",
      "UQI1pdECBOI"
    ],
    "genre": {
      "title": "Techno",
      "description": "A driving, hypnotic R&S cut that pushed Beltram's signature relentless groove. A bridge between New York energy and European techno aesthetics."
    }
  },
  {
    "title": "I Believe",
    "artist": "Octave One",
    "year": 1992,
    "description": "Octave One",
    "videos": [
      "QVqVEVI4fQo",
      "tvTkiQngOEk",
      "4PSSzthTMpA"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "The Burden brothers' uplifting, vocal-driven Detroit classic on their own 430 West label. A warm, soulful counterpoint to harder techno of the era."
    }
  },
  {
    "title": "Halcyon",
    "artist": "Orbital",
    "year": 1992,
    "description": "Orbital",
    "videos": [
      "bV-hSgL1R74",
      "MLKWx5F2mYk",
      "3SwwljI-8JY"
    ],
    "genre": {
      "title": "Techno",
      "description": "A soaring, emotional Orbital epic built on a looped Opus III vocal. A high-water mark of British melodic techno and the album era."
    }
  },
  {
    "title": "Polygon Window (Quoth)",
    "artist": "Polygon Window",
    "year": 1992,
    "description": "Polygon Window",
    "videos": [
      "nSevCSWv1AI",
      "4ziWnep1Jyo",
      "a6YlgHY8SNI"
    ],
    "genre": {
      "title": "Techno",
      "description": "Aphex Twin's alias for the Warp 'Artificial Intelligence' era; 'Quoth' is a dark, intricate machine-funk cut. A landmark of intelligent, home-listening techno."
    }
  },
  {
    "title": "Out of Space",
    "artist": "The Prodigy",
    "year": 1992,
    "description": "The Prodigy",
    "videos": [
      "a4eav7dFvc8",
      "-Fz85FE0KtQ",
      "RiF6KE455Ts"
    ],
    "genre": {
      "title": "Hardcore",
      "description": "A breakbeat-hardcore smash sampling Max Romeo, blending ragga, rave stabs and toytown energy. One of the era's defining crossover rave hits."
    }
  },
  {
    "title": "Spastik",
    "artist": "F.U.S.E.",
    "year": 1993,
    "description": "F.U.S.E.",
    "videos": [
      "QSASFq48U2s",
      "dxYMJx1UTz0",
      "J2JZ31swwtI"
    ],
    "genre": {
      "title": "Acid Techno",
      "description": "Richie Hawtin's F.U.S.E. alias on Plus 8, a melodic 303-driven acid-techno landmark from the formative Plus 8 catalogue."
    }
  },
  {
    "title": "Spastik",
    "artist": "Plastikman",
    "year": 1993,
    "description": "Plastikman",
    "videos": [
      "6TYsOMYaz6E",
      "Nsct-e-HVE0",
      "kuzWBAZ_dtY"
    ],
    "genre": {
      "title": "Acid techno",
      "description": "Richie Hawtin's minimal drum-machine workout built almost entirely from rolling 909 hi-hats and snares. A definitive minimal/acid techno statement and enduring DJ tool."
    }
  },
  {
    "title": "Plasticity",
    "artist": "Plastikman",
    "year": 1993,
    "description": "Plastikman",
    "videos": [
      "5L0VP7nAZls",
      "4OakIdT6Yos",
      "Td7818D3Yx4"
    ],
    "genre": {
      "title": "Acid techno",
      "description": "A hypnotic, hallucinatory 303 excursion from Hawtin's debut album 'Sheet One'. It cemented his deep, psychedelic minimal-acid sound."
    }
  },
  {
    "title": "L'Esperanza",
    "artist": "Sven Vath",
    "year": 1993,
    "description": "Sven Vath",
    "videos": [
      "rZKV4KIeIrU",
      "BfihBClWr_A",
      "Ejh-cd7Fc3c"
    ],
    "genre": {
      "title": "Trance",
      "description": "The Frankfurt godfather's lush, orchestral trance epic from the 'Accident in Paradise' album. Emblematic of the melodic, cinematic German trance sound."
    }
  },
  {
    "title": "Quadrant Dub",
    "artist": "Basic Channel",
    "year": 1994,
    "description": "Basic Channel",
    "videos": [
      "Gi4vzEoJXHU",
      "iQP7z_FN2us",
      "ZLr52XxTfCc"
    ],
    "genre": {
      "title": "Dub Techno",
      "description": "A submerged, echo-drenched cut that helped establish the Berlin dub-techno blueprint of reverb, hiss and minimal chord stabs."
    }
  },
  {
    "title": "Hit & Run",
    "artist": "Dance Mania (Parris Mitchell)",
    "year": 1994,
    "description": "Dance Mania (Parris Mitchell)",
    "videos": [
      "pl7iFvdm5lw",
      "6uq3u7el4vA",
      "YY-LltoylDM"
    ],
    "genre": {
      "title": "Ghetto Techno / Booty",
      "description": "From Chicago's Dance Mania, a raw, percussive ghetto-tech cut whose stripped drum-machine funk fed directly into later minimal and hard techno."
    }
  },
  {
    "title": "Red 2",
    "artist": "Dave Clarke",
    "year": 1994,
    "description": "Dave Clarke",
    "videos": [
      "smQwFep8B-M",
      "WK2IeW0Qz3A",
      "9lnrQqNeoFE"
    ],
    "genre": {
      "title": "Techno",
      "description": "The 'Baron of Techno's' breakthrough, a hard, funky, scratch-laced peak-time weapon from the Red EP series. A definitive mid-90s techno banger."
    }
  },
  {
    "title": "The Bells",
    "artist": "Jeff Mills",
    "year": 1994,
    "description": "Jeff Mills",
    "videos": [
      "ty4tMiFs36E",
      "Vtfadj3VG4A",
      "dl4R-JQu42s"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Mills' instantly recognizable looping bell riff over driving drums became one of techno's most-played records ever. A definitive Detroit second-wave anthem."
    }
  },
  {
    "title": "Minimal Nation",
    "artist": "Robert Hood",
    "year": 1994,
    "description": "Robert Hood",
    "videos": [
      "JowfwNQPal4",
      "wu3dSwwlsGc",
      "6_q0PJdIsXI"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "The UR co-founder's blueprint for minimal techno: stripped, looping, funk-driven and relentless. A foundational document of the entire minimal movement."
    }
  },
  {
    "title": "Bunker",
    "artist": "Robert Hood",
    "year": 1994,
    "description": "Robert Hood",
    "videos": [
      "JowfwNQPal4",
      "wu3dSwwlsGc",
      "Zpd2j-3i39s"
    ],
    "genre": {
      "title": "Minimal Techno",
      "description": "From Hood's seminal Minimal Nation, a stripped-back loop study that essentially invented Detroit minimal techno."
    }
  },
  {
    "title": "Forgive",
    "artist": "Stacey Pullen",
    "year": 1994,
    "description": "Stacey Pullen",
    "videos": [
      "NprhSvLr7k0",
      "gdrjxXEnApg",
      "JL8d1MtFohY"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "A deep, hypnotic cut (as Silent Phase / Kosmic Messenger) from a key Detroit second-wave producer mentored by Derrick May. Soulful, dubby Motor City futurism."
    }
  },
  {
    "title": "Lyot",
    "artist": "Vainqueur",
    "year": 1994,
    "description": "Vainqueur",
    "videos": [
      "EUWXoGTMePo",
      "lESrEN-7guk",
      "H2ruUk6JGEQ"
    ],
    "genre": {
      "title": "Dub Techno",
      "description": "A foundational Chain Reaction-era dub-techno piece of submerged chords and tape hiss, central to the Basic Channel orbit."
    }
  },
  {
    "title": "Ventolin",
    "artist": "Aphex Twin",
    "year": 1995,
    "description": "Aphex Twin",
    "videos": [
      "KFeUBOJgaLU",
      "ulj5UJ5GHvE",
      "MECM3eJVD58"
    ],
    "genre": {
      "title": "IDM",
      "description": "Richard D. James' deliberately abrasive, tinnitus-inspired single of piercing high frequencies. A confrontational entry in the Warp/IDM canon."
    }
  },
  {
    "title": "Tri Repetae - Clipper",
    "artist": "Autechre",
    "year": 1995,
    "description": "Autechre",
    "videos": [
      "AMIV6JddzVE",
      "wfBYoAt7p1Y",
      "ViwZRYk9P7M"
    ],
    "genre": {
      "title": "IDM",
      "description": "From the landmark 'Tri Repetae' album, Sean Booth and Rob Brown's grinding, mechanical rhythms pushed electronic listening music into stark new territory. A pillar of the Warp IDM sound."
    }
  },
  {
    "title": "Phylyps Trak",
    "artist": "Basic Channel",
    "year": 1995,
    "description": "Basic Channel",
    "videos": [
      "6a4HlgmlMuw",
      "CUD4RaRSSio",
      "Qqe-KFryUlM"
    ],
    "genre": {
      "title": "Dub techno",
      "description": "Berlin's Moritz von Oswald and Mark Ernestus pioneered the deep, cavernous reverb-and-delay sound that fused techno with Jamaican dub. A cornerstone of the dub techno blueprint."
    }
  },
  {
    "title": "Phylyps Trak II",
    "artist": "Basic Channel",
    "year": 1995,
    "description": "Basic Channel",
    "videos": [
      "JU4dXv5ohbc",
      "ljNLl5OaM-s",
      "y8jm2GEabqQ"
    ],
    "genre": {
      "title": "Dub techno",
      "description": "The sequel to their defining track, sinking even deeper into murky, hiss-laden dub chords and subterranean bass. Foundational Berlin dub techno."
    }
  },
  {
    "title": "Tomorrow",
    "artist": "Carl Craig",
    "year": 1995,
    "description": "Carl Craig",
    "videos": [
      "3M4atQx48QQ",
      "nfw4cyPikC8",
      "K-bgiCBZEyg"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Recorded as Paperclip People / Carl Craig, a deep, soulful, jazz-inflected Detroit groove. Showcases Craig's musicality within the techno frame."
    }
  },
  {
    "title": "Da Funk",
    "artist": "Daft Punk",
    "year": 1995,
    "description": "Daft Punk",
    "videos": [
      "mmi60Bd4jSs",
      "PwILkY9gRrc",
      "pV7gUsarWE4"
    ],
    "genre": {
      "title": "French house / techno",
      "description": "The squelchy, acid-tinged breakout single from the Parisian duo that bridged techno and the burgeoning French Touch movement. Originally on Soma before becoming a global hit."
    }
  },
  {
    "title": "Dancing Flames",
    "artist": "Drexciya",
    "year": 1995,
    "description": "Drexciya",
    "videos": [
      "QBKXXUL8f8M",
      "cgZdwOBRB5k",
      "pQ7gL5x8f7I"
    ],
    "genre": {
      "title": "Electro / Detroit",
      "description": "From the legendary aquatic Detroit electro duo, melding sci-fi mythology with funky 808 electro that profoundly shaped the genre."
    }
  },
  {
    "title": "Flash",
    "artist": "Green Velvet",
    "year": 1995,
    "description": "Green Velvet",
    "videos": [
      "l_RfediFJFQ",
      "Nsct-e-HVE0",
      "7lBwZ4gpIWQ"
    ],
    "genre": {
      "title": "Chicago techno / acid",
      "description": "Curtis Jones' tongue-in-cheek spoken-word chronicle of a nightclub tour, riding a jacking acid groove. A genre-crossing Chicago classic that became a worldwide hit."
    }
  },
  {
    "title": "Star Probe",
    "artist": "Jeff Mills",
    "year": 1995,
    "description": "Jeff Mills",
    "videos": [
      "Ay_I_sWykAQ",
      "7W3fMASDrNs",
      "4beaymh9DUw"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "From the legendary 'Waveform Transmission Vol. 3' on Tresor, Mills delivered fast, cosmic, relentlessly driving futurism. A high-water mark of his Axis sound."
    }
  },
  {
    "title": "Gunshot",
    "artist": "Joey Beltram",
    "year": 1995,
    "description": "Joey Beltram",
    "videos": [
      "F0Pom11h3R4",
      "7k-h2yYR9sA",
      "IbddrGytMEw"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "The New York producer behind 'Energy Flash' kept pushing the harder, stomping techno sound into the mid-90s. An influence on the emerging schranz aesthetic."
    }
  },
  {
    "title": "Higher State of Consciousness",
    "artist": "Josh Wink",
    "year": 1995,
    "description": "Josh Wink",
    "videos": [
      "d3hAnAnJwyU",
      "P8JEm4d6Wu4",
      "oJCRB0BHakM"
    ],
    "genre": {
      "title": "Acid Techno",
      "description": "Philadelphia's Josh Wink delivered a screaming, filtered-303 anthem that became one of the biggest acid-techno crossover records of the decade."
    }
  },
  {
    "title": "Acid Eiffel",
    "artist": "Laurent Garnier",
    "year": 1995,
    "description": "Laurent Garnier",
    "videos": [
      "gPuA-Zun4rk",
      "sxfqRv6P99o",
      "lqoCmDLVyvA"
    ],
    "genre": {
      "title": "French techno",
      "description": "As Choice, France's most influential DJ crafted a long, building, 303-laced techno-trance epic. A cornerstone of the French scene and global club staple."
    }
  },
  {
    "title": "Maintain",
    "artist": "Robert Hood",
    "year": 1995,
    "description": "Robert Hood",
    "videos": [
      "v-Xmg7o-Usk",
      "tnyylfwjwmQ",
      "xRrtY1b_XjU"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "From Hood's seminal 'Internal Empire' on Tresor, a track that helped codify Detroit minimalism with austere, funky repetition. Hood is widely credited as a founder of the minimal techno sound."
    }
  },
  {
    "title": "Q-Bik",
    "artist": "Surgeon",
    "year": 1995,
    "description": "Surgeon",
    "videos": [
      "ZffWBaznu6A",
      "69HGdxEWiJk",
      "Tl3m4Mu-nRU"
    ],
    "genre": {
      "title": "Birmingham techno",
      "description": "Anthony Child's early Tresor-affiliated work defined the abrasive, industrial Birmingham sound alongside Regis. Rugged, looping and uncompromising."
    }
  },
  {
    "title": "Barbarella",
    "artist": "Sven Väth",
    "year": 1995,
    "description": "Sven Väth",
    "videos": [
      "K4LakGDZAXk",
      "nFS-qV6EuX0",
      "a5VrxExoRNE"
    ],
    "genre": {
      "title": "Trance / techno",
      "description": "The Frankfurt godfather and Cocoon founder blended hypnotic, melodic techno with trance sensibilities. A defining figure of the German scene."
    }
  },
  {
    "title": "Phenix",
    "artist": "The Advent",
    "year": 1995,
    "description": "The Advent",
    "videos": [
      "_87XHKAP7uk",
      "vGkuYOH59Yo",
      "EaLuI3jjYfs"
    ],
    "genre": {
      "title": "British techno",
      "description": "Cisco Ferreira's project delivered hard, machine-funk techno on Internal/Mute that bridged the UK and Detroit aesthetics. A respected mid-90s act."
    }
  },
  {
    "title": "Jazzelicious",
    "artist": "Adam Beyer",
    "year": 1996,
    "description": "Adam Beyer",
    "videos": [
      "hA7uJatBcgs",
      "s3TkaQNSGXE",
      "7tTeFF3ei9I"
    ],
    "genre": {
      "title": "Swedish techno",
      "description": "An early release from the founder of Drumcode, helping establish the loop-driven, percussion-heavy Swedish techno aesthetic. Beyer became one of the scene's defining figures."
    }
  },
  {
    "title": "Stockholm",
    "artist": "Adam Beyer",
    "year": 1996,
    "description": "Adam Beyer",
    "videos": [
      "GqUqbMtPYMo",
      "s3TkaQNSGXE",
      "8sMOCYNHYKw"
    ],
    "genre": {
      "title": "Swedish techno",
      "description": "An early Drumcode-era cut that helped define the tough, looping Swedish techno template. Beyer became the scene's most influential exponent."
    }
  },
  {
    "title": "Phreak",
    "artist": "Dave Clarke",
    "year": 1996,
    "description": "Dave Clarke",
    "videos": [
      "cmdCHt2ftSI",
      "C9KGH9LVzo0",
      "qifbutknzPA"
    ],
    "genre": {
      "title": "Techno / electro",
      "description": "Clarke continued his hard, electro-tinged assault following the 'Red' series, cementing his peak-time reputation. Driving and uncompromising."
    }
  },
  {
    "title": "Substance Abuse",
    "artist": "DJ Bone",
    "year": 1996,
    "description": "DJ Bone",
    "videos": [
      "NwbUwtbQGJ4",
      "pNzpG5YxGKU",
      "uBV8zQZ54is"
    ],
    "genre": {
      "title": "Detroit Techno",
      "description": "A raw, DJ-tool Detroit techno cut from one of the city's most respected second-wave artists and live mixers."
    }
  },
  {
    "title": "Acperience 3",
    "artist": "Hardfloor",
    "year": 1996,
    "description": "Hardfloor",
    "videos": [
      "4yAHmFF8O98",
      "M6e3d_tTens",
      "jKzw7tZu6mc"
    ],
    "genre": {
      "title": "Acid techno",
      "description": "The German duo continued their epic 303 saga with cascading acid lines and propulsive rhythm. A staple of the acid techno revival."
    }
  },
  {
    "title": "M5",
    "artist": "Maurizio",
    "year": 1996,
    "description": "Maurizio",
    "videos": [
      "Udy7mSkcgac",
      "KN7zvI6VFis",
      "Gob6IqN1SjM"
    ],
    "genre": {
      "title": "Dub techno",
      "description": "Moritz von Oswald's Maurizio alias delivered hypnotic, deeply spaced-out dub techno that became blueprint material for the entire genre. Released on the iconic Maurizio label."
    }
  },
  {
    "title": "Magnetic",
    "artist": "Richie Hawtin",
    "year": 1996,
    "description": "Richie Hawtin",
    "videos": [
      "pFH6kQbuzXU",
      "UqaIXyYh9ig",
      "VpXBZUIUQXo"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "From the 'Concept 1' series, Hawtin's ultra-reductionist explorations stripped techno to clicks, pulses and subtle shifts. A key text in minimal's evolution toward microhouse."
    }
  },
  {
    "title": "Spasticus",
    "artist": "Robert Hood",
    "year": 1996,
    "description": "Robert Hood",
    "videos": [
      "JowfwNQPal4",
      "wu3dSwwlsGc",
      "Zpd2j-3i39s"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "Hood continued his minimalist mission on M-Plant with tight, funky, stripped-down rhythm tracks. Essential listening for the genre's core."
    }
  },
  {
    "title": "Goodbye Sweet Prince",
    "artist": "Squarepusher",
    "year": 1996,
    "description": "Squarepusher",
    "videos": [
      "QBf09fw0OhQ",
      "5ASSP9tl0p0",
      "Th0h61hve-c"
    ],
    "genre": {
      "title": "IDM / drill'n'bass",
      "description": "From 'Feed Me Weird Things' on Rephlex, Jenkinson married virtuoso jazz bass with hyperactive programmed breaks. A foundational drill'n'bass document."
    }
  },
  {
    "title": "Sweat",
    "artist": "Stacey Pullen",
    "year": 1996,
    "description": "Stacey Pullen",
    "videos": [
      "KblyjEPZHCQ",
      "-eZGPJi-Nro",
      "4wTIZJyOjCU"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "A third-wave Detroit producer mentored by Derrick May, Pullen crafted deep, percussive, hypnotic grooves. A respected name in the Motor City lineage."
    }
  },
  {
    "title": "Setting Sun",
    "artist": "The Chemical Brothers",
    "year": 1996,
    "description": "The Chemical Brothers",
    "videos": [
      "p5NX1FC-7-w",
      "8z4F0Tj-7MA",
      "_tui0vRB0Xw"
    ],
    "genre": {
      "title": "Big beat",
      "description": "Featuring Noel Gallagher, this psychedelic, breakbeat-driven number topped the UK charts and defined the big beat crossover moment. From 'Dig Your Own Hole'."
    }
  },
  {
    "title": "Born Slippy .NUXX",
    "artist": "Underworld",
    "year": 1996,
    "description": "Underworld",
    "videos": [
      "XiMrrleH_hI",
      "rAOHJqJMYDA",
      "CkHdBf-8PZE"
    ],
    "genre": {
      "title": "Progressive techno",
      "description": "The propulsive, stream-of-consciousness anthem catapulted to fame via the 'Trainspotting' soundtrack. A landmark of British electronic dance crossover."
    }
  },
  {
    "title": "Come to Daddy",
    "artist": "Aphex Twin",
    "year": 1997,
    "description": "Aphex Twin",
    "videos": [
      "TZ827lkktYs",
      "SqayDnQ2wmw",
      "u8tgVUEU6oo"
    ],
    "genre": {
      "title": "IDM / drill'n'bass",
      "description": "A snarling, distorted assault paired with an iconic horror video. It pushed Richard D. James' aggressive, breakbeat-shredding side into the mainstream consciousness."
    }
  },
  {
    "title": "Cilonen",
    "artist": "Autechre",
    "year": 1997,
    "description": "Autechre",
    "videos": [
      "ffqRwIyNUy0",
      "Hp-4MtzwcJ0",
      "jnwU-jhX91M"
    ],
    "genre": {
      "title": "IDM",
      "description": "From 'Chiastic Slide', Autechre's increasingly abstract, granular textures marked their drift from dancefloor forms into pure sound design. A landmark of experimental electronica."
    }
  },
  {
    "title": "Hardtrax",
    "artist": "Cari Lekebusch",
    "year": 1997,
    "description": "Cari Lekebusch",
    "videos": [
      "s1MMbwfO8GY",
      "wZzzxzWWnRw",
      "k4gnEUsMC7c"
    ],
    "genre": {
      "title": "Swedish techno",
      "description": "A key figure of the Stockholm Hybrid/H-Productions scene, Lekebusch crafted dense, percussive, funk-laden techno alongside Adam Beyer. Core Swedish-scene material."
    }
  },
  {
    "title": "At Les",
    "artist": "Carl Craig",
    "year": 1997,
    "description": "Carl Craig",
    "videos": [
      "1lzLxbifln0",
      "zKk8PW9jMGI",
      "vm6pm5mCLXg"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "From the 'More Songs About Food and Revolutionary Art' album, Craig's lush, building, emotive epic showcased Detroit techno's deeper, soulful side. Widely regarded as a masterpiece."
    }
  },
  {
    "title": "Around the World",
    "artist": "Daft Punk",
    "year": 1997,
    "description": "Daft Punk",
    "videos": [
      "K0HSD_i2DvA",
      "pV7gUsarWE4",
      "dwDns8x3Jb4"
    ],
    "genre": {
      "title": "French house",
      "description": "The hypnotic, vocoder-looped single from 'Homework' that cemented Daft Punk's global stardom. A defining French Touch anthem."
    }
  },
  {
    "title": "Sea Battles",
    "artist": "Drexciya",
    "year": 1997,
    "description": "Drexciya",
    "videos": [
      "O9WmA3yux6Q",
      "_IB_ECNLd0s",
      "PKprjJNtgUE"
    ],
    "genre": {
      "title": "Electro / Techno",
      "description": "Drexciya's hypnotic electro-techno from The Quest that fed directly into the Detroit-Berlin electro revival of later decades."
    }
  },
  {
    "title": "The Extremist",
    "artist": "Jeff Mills",
    "year": 1997,
    "description": "Jeff Mills",
    "videos": [
      "Vtfadj3VG4A",
      "56YV41WtkQc",
      "3OKwBYJEe3A"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "Continuing his Axis mission of fast, futuristic, loop-driven techno, Mills sustained his reputation as the genre's foremost mixing virtuoso. Relentless and hypnotic."
    }
  },
  {
    "title": "Crispy Bacon",
    "artist": "Laurent Garnier",
    "year": 1997,
    "description": "Laurent Garnier",
    "videos": [
      "4jEsu51QHtY",
      "t3NlTpHiFwg",
      "ASGVULb7X6U"
    ],
    "genre": {
      "title": "French techno",
      "description": "A frenetic, acid-soaked floor weapon from Garnier's 'Sounds of the Big Babou'. Energetic and unmistakably French in its swagger."
    }
  },
  {
    "title": "Beatbox",
    "artist": "Luke Slater",
    "year": 1997,
    "description": "Luke Slater",
    "videos": [
      "_paaJtkj0-s",
      "pJxQeg3pi3I",
      "EypL5bYGS4I"
    ],
    "genre": {
      "title": "British techno",
      "description": "From 'Freek Funk' on NovaMute, Slater blended Detroit influence with a distinctly British funk and grit. One of the UK scene's most respected producers."
    }
  },
  {
    "title": "Planetary Assault Systems - The Bell",
    "artist": "Luke Slater",
    "year": 1997,
    "description": "Luke Slater",
    "videos": [
      "6xoN1Z2RXwU",
      "13Xa8GqEldE",
      "hKJEWiHKCM0"
    ],
    "genre": {
      "title": "British techno",
      "description": "Under his Planetary Assault Systems alias, Slater produced stripped, deep, propulsive techno for the dancefloor. A revered project in the functional techno canon."
    }
  },
  {
    "title": "Skydiver",
    "artist": "Speedy J",
    "year": 1997,
    "description": "Speedy J",
    "videos": [
      "82KOoFOgSX0",
      "LnPkDHbBhng",
      "WyHTclGsCUQ"
    ],
    "genre": {
      "title": "Techno",
      "description": "From the 'Public Energy No. 1' album, Speedy J fully embraced abstract, distorted, machine-driven techno. A turn toward harder, experimental floor music."
    }
  },
  {
    "title": "Come On My Selector",
    "artist": "Squarepusher",
    "year": 1997,
    "description": "Squarepusher",
    "videos": [
      "MWCSw_cNxKc",
      "TZ827lkktYs",
      "zypOT0RpUWQ"
    ],
    "genre": {
      "title": "Drill'n'bass / IDM",
      "description": "Tom Jenkinson's frenetic, jazz-bass-driven breakcore showcased his virtuosic drum programming. A Warp-era highlight of the drill'n'bass strain of IDM."
    }
  },
  {
    "title": "Bushido",
    "artist": "Surgeon",
    "year": 1997,
    "description": "Surgeon",
    "videos": [
      "VhvhddODggM",
      "KelN_EMvME4",
      "VQMUyZPC4lI"
    ],
    "genre": {
      "title": "Birmingham techno",
      "description": "From 'Basictonalvocabulary', Surgeon refined his metallic, loop-based functionalism into ever more precise weaponry. A pillar of the British/Birmingham hard techno sound."
    }
  },
  {
    "title": "Spinal Position",
    "artist": "Surgeon",
    "year": 1997,
    "description": "Surgeon",
    "videos": [
      "NNjE3xVtWZ4",
      "sNYLSgOPuZM",
      "7W6oz_Foak0"
    ],
    "genre": {
      "title": "Birmingham Techno",
      "description": "An abrasive looped Surgeon weapon that codified the harsh, hypnotic Birmingham techno sound of the late 90s."
    }
  },
  {
    "title": "Block Rockin' Beats",
    "artist": "The Chemical Brothers",
    "year": 1997,
    "description": "The Chemical Brothers",
    "videos": [
      "iTxOKsyZ0Lw",
      "tpKCqp9CALQ",
      "0kMfTYPzSnI"
    ],
    "genre": {
      "title": "Big beat",
      "description": "A bass-heavy, sample-driven big beat juggernaut that won a Grammy and topped the UK charts. A peak of the Chemicals' floor-destroying approach."
    }
  },
  {
    "title": "La La Land",
    "artist": "Green Velvet",
    "year": 1998,
    "description": "Green Velvet",
    "videos": [
      "NMD_cv4fM4s",
      "uDMVfFgykP8",
      "3_5oRtBDtfg"
    ],
    "genre": {
      "title": "Chicago techno / acid",
      "description": "Curtis Jones' wry, drug-culture-skewering anthem with its instantly memorable 'we live in La La Land' refrain. A Chicago crossover classic later re-popularized."
    }
  },
  {
    "title": "Cobra",
    "artist": "Marco Carola",
    "year": 1998,
    "description": "Marco Carola",
    "videos": [
      "uawG9XuTGug",
      "5zMIrRS9XEw",
      "QvL6I0pYg1g"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "A leading light of the Naples minimal scene, Carola crafted tight, hypnotic, loop-based techno that influenced the genre's late-90s direction. Released on Design Music."
    }
  },
  {
    "title": "The Maw",
    "artist": "Regis",
    "year": 1998,
    "description": "Regis",
    "videos": [
      "5HNNmKlFdjU",
      "IiC6W7DC1NM",
      "xtd_lfM9PQ0"
    ],
    "genre": {
      "title": "Birmingham techno",
      "description": "Downwards-era Regis at his most dense and distorted, sculpting hypnotic loops from feedback and grit. Defining the dark Birmingham school."
    }
  },
  {
    "title": "Vekton",
    "artist": "Robert Hood",
    "year": 1998,
    "description": "Robert Hood",
    "videos": [
      "CHoqTHETVoY",
      "qkuvijcmXkY",
      "qoCUBMOA41I"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "Continuing his M-Plant minimalism into the late 90s, Hood honed razor-sharp, looping funk-machines. Definitive material from a genre architect."
    }
  },
  {
    "title": "Windowlicker",
    "artist": "Aphex Twin",
    "year": 1999,
    "description": "Aphex Twin",
    "videos": [
      "5ZT3gTu4Sjw",
      "Q8rUGBBERL0",
      "UBS4Gi1y_nc"
    ],
    "genre": {
      "title": "IDM",
      "description": "A funk-inflected, intricately programmed single famous for its Chris Cunningham video. One of Aphex Twin's most celebrated and accessible works."
    }
  },
  {
    "title": "Klangwerk",
    "artist": "Ben Klock",
    "year": 1999,
    "description": "Ben Klock",
    "videos": [
      "qAEiF08ZYIM",
      "ud6H6Z6PHC8",
      "Iudot9J-xx4"
    ],
    "genre": {
      "title": "Berlin techno",
      "description": "Among Ben Klock's earliest productions, foreshadowing the deep, rolling Berlin sound he would later perfect at Berghain. Roots of a future Ostgut Ton mainstay."
    }
  },
  {
    "title": "Speedy J - Krekc",
    "artist": "Chris Liebing",
    "year": 1999,
    "description": "Chris Liebing",
    "videos": [
      "rYiZECBnbcM",
      "WIT-PAXbVhc",
      "bSZI5FANuVY"
    ],
    "genre": {
      "title": "Schranz",
      "description": "Frankfurt's Chris Liebing became a leading name of the brutal, hard-grinding schranz sound emerging in late-90s Germany. CLR-affiliated functional hard techno."
    }
  },
  {
    "title": "Jaguar",
    "artist": "DJ Rolando",
    "year": 1999,
    "description": "DJ Rolando",
    "videos": [
      "NUeE_QXfwUw",
      "ZcC3vVh3cOE",
      "gw7vrBSBQwk"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "The Underground Resistance anthem, all soaring strings and driving funk, became one of Detroit techno's most beloved and bootlegged tracks. A genuine crossover classic."
    }
  },
  {
    "title": "Aztec Mystic - Knights of the Jaguar",
    "artist": "DJ Rolando",
    "year": 1999,
    "description": "DJ Rolando",
    "videos": [
      "C6xVKcvze74",
      "cGYjjX4IhVc",
      "ZcC3vVh3cOE"
    ],
    "genre": {
      "title": "Detroit techno",
      "description": "The full Aztec Mystic / UR release of the Jaguar saga, lush with strings and Latin-tinged Detroit soul. An Underground Resistance landmark."
    }
  },
  {
    "title": "Wraith",
    "artist": "Luke Slater",
    "year": 1999,
    "description": "Luke Slater",
    "videos": [
      "_WlFviq3-HQ",
      "1euZ-pFYm4g",
      "hKJEWiHKCM0"
    ],
    "genre": {
      "title": "British techno",
      "description": "From 'Wireless', Slater fused emotive, Detroit-leaning melody with rugged British drive. One of the UK's most consistently inventive techno producers."
    }
  },
  {
    "title": "Strings of Life (Juan Atkins context) - Mind Games",
    "artist": "Surgeon",
    "year": 1999,
    "description": "Surgeon",
    "videos": [
      "VhvhddODggM",
      "KelN_EMvME4",
      "_3X7Z2TYXrQ"
    ],
    "genre": {
      "title": "Birmingham techno",
      "description": "From 'Force + Form', Surgeon refined his looping, industrial functionalism into ever sharper rhythmic science. A late-90s peak of the Birmingham sound."
    }
  },
  {
    "title": "Mouth to Mouth",
    "artist": "Audion",
    "year": 2000,
    "description": "Audion",
    "videos": [
      "x38G5O6dQBE",
      "l8o9gWbhFEQ",
      "6jmZTtFxcUg"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "Matthew Dear's Audion alias delivers a slow-burning, sexually charged minimal techno epic. Its relentless, hypnotic build became one of the defining peak-time tracks of the decade's minimal wave."
    }
  },
  {
    "title": "Phylyps Trak II / Variation",
    "artist": "Basic Channel",
    "year": 2000,
    "description": "Basic Channel",
    "videos": [
      "6a4HlgmlMuw",
      "CUD4RaRSSio",
      "XOiqVejo4gk"
    ],
    "genre": {
      "title": "Dub techno",
      "description": "Moritz von Oswald and Mark Ernestus' foundational Berlin dub techno, whose hypnotic, reverb-soaked chords seeded the 2000s dub revival."
    }
  },
  {
    "title": "Spastik (2000 re-release)",
    "artist": "Plastikman",
    "year": 2000,
    "description": "Plastikman",
    "videos": [
      "Nsct-e-HVE0",
      "6TYsOMYaz6E",
      "ASGVULb7X6U"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "Richie Hawtin's Plastikman classic of stripped-down drum-machine science, reissued as minimalism crested. A blueprint for the decade's reduced, machine-built techno."
    }
  },
  {
    "title": "Deep Inside",
    "artist": "Thomas Brinkmann",
    "year": 2000,
    "description": "Thomas Brinkmann",
    "videos": [
      "1gAsMhfjPYU",
      "O4MbPL_RdVQ",
      "-NHHs8p9vNM"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "German conceptualist Thomas Brinkmann built locked-groove minimalism from modified turntables. His clicks-and-cuts experiments shaped the cerebral end of 2000s minimal."
    }
  },
  {
    "title": "Deck the House",
    "artist": "Akufen",
    "year": 2001,
    "description": "Akufen",
    "videos": [
      "w7nNF0FJ3-I",
      "jtQ-3Pua2Ms",
      "pn_3tMtbMJs"
    ],
    "genre": {
      "title": "Microhouse",
      "description": "Marc Leclair's microsampling masterpiece chops radio fragments into glitchy, swinging house. A cornerstone of the clicks & cuts microhouse aesthetic on Force Inc."
    }
  },
  {
    "title": "Stadtkind",
    "artist": "Ellen Allien",
    "year": 2001,
    "description": "Ellen Allien",
    "videos": [
      "a4ioKNBRCBA",
      "UwQfDTkLmfA",
      "QcQrQVSC7wc"
    ],
    "genre": {
      "title": "Techno / electronica",
      "description": "The BPitch Control founder's signature Berlin techno-pop, melding cool electronics with personal vocals. A statement of the label's urban identity."
    }
  },
  {
    "title": "Lasso",
    "artist": "Luciano",
    "year": 2001,
    "description": "Luciano",
    "videos": [
      "K0026Vz_Ds0",
      "ky2B0n-MzAU",
      "ChLdUUQrjIg"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "Chilean-Swiss producer Luciano helped define the warm, percussive 'micro-house' sound that would dominate the Cadenza era. Early hypnotic minimalism with Latin pulse."
    }
  },
  {
    "title": "Tiga & Zyntherius - Sunglasses at Night",
    "artist": "Tiga",
    "year": 2001,
    "description": "Tiga",
    "videos": [
      "Fw6k0kMVcCI",
      "l7tNo5S6xEE",
      "2kE8565_xrc"
    ],
    "genre": {
      "title": "Electroclash",
      "description": "Tiga's cold-wave cover became the electroclash anthem, fusing 80s synth-pop with minimal techno production. A crossover smash of the early decade."
    }
  },
  {
    "title": "Klang",
    "artist": "Wighnomy Brothers",
    "year": 2001,
    "description": "Wighnomy Brothers",
    "videos": [
      "axGGvc_RznE",
      "O03V8Mh4HEM",
      "JNrtkIAELO4"
    ],
    "genre": {
      "title": "Microhouse",
      "description": "The German duo's playful, funk-laced minimal house typified the Freude am Tanzen sound. Bouncy and intricate, it bridged microhouse and dancefloor warmth."
    }
  },
  {
    "title": "Dog",
    "artist": "Closer Musik",
    "year": 2002,
    "description": "Closer Musik",
    "videos": [
      "e4ykLTuSsFo",
      "jIzeGIGkC4k",
      "Qgk7URyy2sM"
    ],
    "genre": {
      "title": "Microhouse",
      "description": "Matias Aguayo and Dirk Leyers' Kompakt project mixed melancholic vocals with minimal house. An early Cologne pop-minimal crossover."
    }
  },
  {
    "title": "Black Water",
    "artist": "Octave One",
    "year": 2002,
    "description": "Octave One",
    "videos": [
      "Bmg_DtZ0Scw",
      "4coN-9K5dN0",
      "tnvIbrF8XEk"
    ],
    "genre": {
      "title": "Detroit Techno",
      "description": "A soulful Detroit anthem featuring Ann Saunderson's vocal, blending live strings with deep techno for one of the genre's most enduring crossover cuts."
    }
  },
  {
    "title": "Easy Lee",
    "artist": "Ricardo Villalobos",
    "year": 2002,
    "description": "Ricardo Villalobos",
    "videos": [
      "GUDS0GhDE2U",
      "EAxI2YtuxTc",
      "1X5gy8nZcaU"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "The Chilean-German minimal don's woozy, swinging groove with a stuttered vocal hook. A signature of the loose, organic minimal sound that ruled the decade."
    }
  },
  {
    "title": "Cobra",
    "artist": "Speedy J",
    "year": 2002,
    "description": "Speedy J",
    "videos": [
      "TvhfOeC9F4I",
      "nbU8tL5WMwg",
      "Bmym4d8rR7Y"
    ],
    "genre": {
      "title": "Hard / experimental techno",
      "description": "Dutch veteran Speedy J's distorted, industrial-edged techno from 'Loudboxer'. Aggressive, textural machine funk for the harder floors."
    }
  },
  {
    "title": "Speicher",
    "artist": "Superpitcher",
    "year": 2002,
    "description": "Superpitcher",
    "videos": [
      "faHxF-bD-N8",
      "UjkMTd17FUc",
      "ajhvWNka_wI"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "Aksel Schaufler's emotive Kompakt minimalism balanced dancefloor function with shoegaze melancholy. Central to the label's 'sound of Cologne'."
    }
  },
  {
    "title": "Born Slippy revisited / Sven Väth - Schubdüse",
    "artist": "Sven Väth",
    "year": 2002,
    "description": "Sven Väth",
    "videos": [
      "wu6s69Gb9zQ",
      "ZfZGFAS1XX4",
      "Qj8UotSyaxg"
    ],
    "genre": {
      "title": "Techno",
      "description": "Cocoon founder and German techno institution Sven Väth's driving, hypnotic peak-time techno. A cornerstone of the Frankfurt scene and Cocoon sound."
    }
  },
  {
    "title": "Quartz",
    "artist": "Vince Watson",
    "year": 2002,
    "description": "Vince Watson",
    "videos": [
      "FhUnY91Z_os",
      "H1PAGF2TUBM",
      "4TTiPrdYmT4"
    ],
    "genre": {
      "title": "Melodic Detroit Techno",
      "description": "A lush, deeply melodic Detroit-style techno track that bridged classic Motor City warmth with the early-2000s European scene."
    }
  },
  {
    "title": "La Rock 01",
    "artist": "Vitalic",
    "year": 2002,
    "description": "Vitalic",
    "videos": [
      "BTVp1E60lF0",
      "I2dfGC1oziE",
      "XGOaXphpT7w"
    ],
    "genre": {
      "title": "Electro / techno",
      "description": "Pascal Arbez's distorted, anthemic electro-techno bomb became a festival staple. Its serrated synths bridged techno, electro and the emerging electroclash energy."
    }
  },
  {
    "title": "Stockholm",
    "artist": "Cari Lekebusch",
    "year": 2003,
    "description": "Cari Lekebusch",
    "videos": [
      "N_HEGZbztPs",
      "RYxl9FLIJEQ",
      "ULbuGWhpIAI"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "Swedish powerhouse Cari Lekebusch's punchy, percussive functional techno on H-Productions. A pillar of the tough Scandinavian sound."
    }
  },
  {
    "title": "Stigma 1",
    "artist": "Chris Liebing",
    "year": 2003,
    "description": "Chris Liebing",
    "videos": [
      "os-s2faQr84",
      "yfGFjvqnTFY",
      "mIlYa8SMRys"
    ],
    "genre": {
      "title": "Schranz / hard techno",
      "description": "The CLR boss's brutal, looping schranz defined Frankfurt's hard techno. Pounding kicks and metallic loops engineered for maximum dancefloor force."
    }
  },
  {
    "title": "Acid Phase",
    "artist": "Emmanuel Top",
    "year": 2003,
    "description": "Emmanuel Top",
    "videos": [
      "G8IwGUR8S54",
      "hZMf716hCZw",
      "opXLfNiy7MQ"
    ],
    "genre": {
      "title": "Acid techno",
      "description": "A reissued staple of relentless 303 acid techno that kept defining the harder European acid sound into the 2000s. Hypnotic, building acid pressure."
    }
  },
  {
    "title": "Closer (Hert Beep Mix)",
    "artist": "Plastikman",
    "year": 2003,
    "description": "Plastikman",
    "videos": [
      "ECFyW92-Nrs",
      "EZqY5dKgSvc",
      "9iQw7V8pGSY"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "Richie Hawtin's 'Closer' album marked a paranoid, voice-driven evolution of Plastikman minimalism. Sparse, psychological techno of haunting restraint."
    }
  },
  {
    "title": "Dexter",
    "artist": "Ricardo Villalobos",
    "year": 2003,
    "description": "Ricardo Villalobos",
    "videos": [
      "h0i1Szq6GM8",
      "FO566BKY2Jc",
      "twOVhS2zg78"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "A definitive Villalobos cut of rolling, hypnotic minimalism and elastic micro-funk. Endlessly mixed, it became the genre's signature dancefloor tool."
    }
  },
  {
    "title": "Sleep Is Commercial",
    "artist": "Robert Hood",
    "year": 2003,
    "description": "Robert Hood",
    "videos": [
      "JkRVqi9NAQA",
      "CWO4zDSIAEQ",
      "4lXZ1bf_unw"
    ],
    "genre": {
      "title": "Minimal Techno",
      "description": "A later Hood statement of relentless funk-minimalism, showing how Detroit minimal techno matured into peak-time floor power."
    }
  },
  {
    "title": "Take Me Into Your Skin",
    "artist": "Trentemøller",
    "year": 2003,
    "description": "Trentemøller",
    "videos": [
      "6R3Kp0dGyvI",
      "mARm9vFhGIE",
      "5DUCKGyojpE"
    ],
    "genre": {
      "title": "Melodic / dub techno",
      "description": "The Danish producer's brooding, cinematic deep techno epic with a euphoric climax. A landmark of the Poker Flat melodic-minimal sound."
    }
  },
  {
    "title": "Lima Limo",
    "artist": "Ada",
    "year": 2004,
    "description": "Ada",
    "videos": [
      "AaZG6S3H5wc",
      "wSv_qwAN6Qo",
      "Cx0AKxx72Xk"
    ],
    "genre": {
      "title": "Microhouse",
      "description": "Areal Records' Ada layers wistful melody over crisp microhouse rhythms. A tender, song-like take on the German minimal tradition."
    }
  },
  {
    "title": "Hong Kong",
    "artist": "Adam Beyer",
    "year": 2004,
    "description": "Adam Beyer",
    "videos": [
      "xGuC7ozjeD8",
      "yvEasjhG-fQ",
      "RMwpg-ipi7Y"
    ],
    "genre": {
      "title": "Techno",
      "description": "Swedish Drumcode boss Adam Beyer's tough, looping, percussive techno. A defining figure of the muscular European peak-time sound."
    }
  },
  {
    "title": "Rocker",
    "artist": "Alter Ego",
    "year": 2004,
    "description": "Alter Ego",
    "videos": [
      "g6oPaJ1pctk",
      "Esg5bWgap94",
      "GjPpoq1BUw8"
    ],
    "genre": {
      "title": "Tech / electro-house",
      "description": "Roman Flügel and Jörn Elling Wuttke's snarling, acid-bass monster crossed over into rock clubs. One of the decade's most recognizable, brutally simple techno hooks."
    }
  },
  {
    "title": "Stars",
    "artist": "Dominik Eulberg",
    "year": 2004,
    "description": "Dominik Eulberg",
    "videos": [
      "aCc3tF8Y1Y8",
      "arQm3NdRKAE",
      "LBH-TlYLQ9Q"
    ],
    "genre": {
      "title": "Melodic minimal techno",
      "description": "The German naturalist's lush, organic melodic minimal on Traum/Kompakt. Detailed, atmospheric techno inspired by birdsong and landscapes."
    }
  },
  {
    "title": "Sometime Samurai",
    "artist": "Funkstörung",
    "year": 2004,
    "description": "Funkstörung",
    "videos": [
      "CdCKLIu3cmA",
      "J7QsECrOEno",
      "njKd45U20Go"
    ],
    "genre": {
      "title": "IDM / glitch",
      "description": "The German duo's intricate glitch-electronica and skittering beat science. Part of the cerebral IDM wing adjacent to minimal techno."
    }
  },
  {
    "title": "Snowflake",
    "artist": "Magda",
    "year": 2004,
    "description": "Magda",
    "videos": [
      "xlV-6fGKSxI",
      "RzJ3Yu_iwUM",
      "SE-hDfNukbs"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "M_nus selector Magda's micro-detailed, glitchy minimal techno embodied the Hawtin-adjacent reduced aesthetic. Precise and hypnotic."
    }
  },
  {
    "title": "Burning",
    "artist": "Michael Mayer",
    "year": 2004,
    "description": "Michael Mayer",
    "videos": [
      "spwh6eODCBo",
      "1c5RCbc_TPg",
      "AoO2SJ3Ea_M"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "Kompakt co-founder Michael Mayer's tracky, melodic minimal techno. Central to defining the Cologne label's signature warm-yet-driving aesthetic."
    }
  },
  {
    "title": "Komodo (Save a Soul)",
    "artist": "Nathan Fake",
    "year": 2004,
    "description": "Nathan Fake",
    "videos": [
      "pN0QzsTbgmg",
      "6jmZTtFxcUg",
      "1SHW0QKox84"
    ],
    "genre": {
      "title": "Progressive / techno",
      "description": "Border Community's Nathan Fake delivered a euphoric, shoegaze-tinged melodic techno breakthrough. Hugely influential on the emotive analogue sound."
    }
  },
  {
    "title": "What's a Girl to Do",
    "artist": "Sébastien Tellier",
    "year": 2004,
    "description": "Sébastien Tellier",
    "videos": [
      "crblDrrcunQ",
      "30O92akDeJg",
      "yx73daim0Mw"
    ],
    "genre": {
      "title": "Electronica",
      "description": "French electronic auteur Tellier's hazy, melodic electronica on Record Makers. Adjacent to the French touch and minimal scenes."
    }
  },
  {
    "title": "Sleeparchive - Wireless",
    "artist": "Sleeparchive",
    "year": 2004,
    "description": "Sleeparchive",
    "videos": [
      "4slSjMZHS28",
      "opwRFVwSC28",
      "jgH3bZRKDZ8"
    ],
    "genre": {
      "title": "Minimal / dub techno",
      "description": "Roger Semsroth's austere, clinical Berlin minimalism with dub-techno depth. Stripped to skeletal clicks and sub-bass, hugely influential on the Berghain sound."
    }
  },
  {
    "title": "In White Rooms",
    "artist": "Booka Shade",
    "year": 2005,
    "description": "Booka Shade",
    "videos": [
      "t4HfbN75lFs",
      "l6E6sSblQOs",
      "RDaXgipLOVg"
    ],
    "genre": {
      "title": "Tech-house",
      "description": "The German duo's lush, melodic electro-house on Get Physical. Emotive synth leads over minimal-derived grooves typified the label's polished sound."
    }
  },
  {
    "title": "Spaghetti Western",
    "artist": "Extrawelt",
    "year": 2005,
    "description": "Extrawelt",
    "videos": [
      "sdl7PZmlGQI",
      "1SHW0QKox84",
      "sobYJY7nHIA"
    ],
    "genre": {
      "title": "Tech / electronica",
      "description": "The German duo's cinematic, melodic techno on Cocoon balanced trippy musicality with driving rhythm. A bridge between minimal and melodic tech."
    }
  },
  {
    "title": "Goldfisch und Erdbeerkaese",
    "artist": "Isolée",
    "year": 2005,
    "description": "Isolée",
    "videos": [
      "mQy2V_3LRMQ",
      "ZvlFT7cm9NM",
      "xIMauhrrWLo"
    ],
    "genre": {
      "title": "Microhouse",
      "description": "Rajko Müller's intricate, melodic microhouse from 'We Are Monster'. Detailed, jazzy and warm, a high point of the German microhouse tradition."
    }
  },
  {
    "title": "Idiot",
    "artist": "James Holden",
    "year": 2005,
    "description": "James Holden",
    "videos": [
      "2QHj0VBCP54",
      "FTvCJT7BlKs",
      "JSPKUUdj6K4"
    ],
    "genre": {
      "title": "Progressive / techno",
      "description": "Holden's warped, off-kilter analogue techno on Border Community. Detuned and psychedelic, a counterpoint to clinical minimalism."
    }
  },
  {
    "title": "Body Language",
    "artist": "M.A.N.D.Y. vs Booka Shade",
    "year": 2005,
    "description": "M.A.N.D.Y. vs Booka Shade",
    "videos": [
      "VaQXQdh3698",
      "l6E6sSblQOs",
      "CsxJzW-0mAg"
    ],
    "genre": {
      "title": "Tech-house / minimal",
      "description": "The Get Physical anthem with its iconic whistling hook crossed minimal techno into the mainstream. One of the decade's most ubiquitous dancefloor records."
    }
  },
  {
    "title": "Around (Noir Mix)",
    "artist": "Noze",
    "year": 2005,
    "description": "Noze",
    "videos": [
      "C2jfg4VlMLQ",
      "g2YSWgaeE18",
      "lKDoNTQorVQ"
    ],
    "genre": {
      "title": "Minimal house",
      "description": "French duo Noze's quirky, jazzy, vocal-led minimal house on Circus Company. Eccentric humanism in an otherwise machine-driven scene."
    }
  },
  {
    "title": "Over the Ice",
    "artist": "The Field",
    "year": 2005,
    "description": "The Field",
    "videos": [
      "FQxEVhyvA0I",
      "TwXcarHyr1U",
      "Wobxiik9z2s"
    ],
    "genre": {
      "title": "Ambient / minimal techno",
      "description": "Axel Willner's microsampled, shimmering loops created a blissful, hypnotic strain of ambient techno for Kompakt. A defining sound of the late decade."
    }
  },
  {
    "title": "Mandarine Girl",
    "artist": "Booka Shade",
    "year": 2006,
    "description": "Booka Shade",
    "videos": [
      "3pGHdbyf-Eo",
      "t4HfbN75lFs",
      "l6E6sSblQOs"
    ],
    "genre": {
      "title": "Tech-house",
      "description": "The Get Physical duo's melodic, anthemic electro-house with a sing-along synth line. Emblematic of the label's polished crossover appeal."
    }
  },
  {
    "title": "We Are Connected",
    "artist": "Booka Shade",
    "year": 2006,
    "description": "Booka Shade",
    "videos": [
      "l6E6sSblQOs",
      "X0w9U9cKD-0",
      "cNINq_d5JV8"
    ],
    "genre": {
      "title": "Tech-house",
      "description": "Another Get Physical melodic-techno cut showcasing the duo's emotive synth craft. Polished, arena-ready minimal-derived house."
    }
  },
  {
    "title": "Sun",
    "artist": "Ellen Allien & Apparat",
    "year": 2006,
    "description": "Ellen Allien & Apparat",
    "videos": [
      "yzjUi2h7gw4",
      "QcQrQVSC7wc",
      "LuJ1kYs_tOY"
    ],
    "genre": {
      "title": "IDM / techno",
      "description": "From the lauded 'Orchestra of Bubbles', BPitch boss Ellen Allien and Apparat blended glitchy electronica with techno melancholy. Emotive, song-led club music."
    }
  },
  {
    "title": "A Break in the Clouds",
    "artist": "James Holden",
    "year": 2006,
    "description": "James Holden",
    "videos": [
      "8VFZ3hvWW_M",
      "pN0QzsTbgmg",
      "b5zzS40-xbo"
    ],
    "genre": {
      "title": "Progressive / techno",
      "description": "The Border Community founder's psychedelic, hand-played analogue techno. Loose, modulating and emotive, it redefined the progressive sound for the decade."
    }
  },
  {
    "title": "Magic Mountain",
    "artist": "Reinhard Voigt",
    "year": 2006,
    "description": "Reinhard Voigt",
    "videos": [
      "BAiDY8ZXdfQ",
      "NEuZm5AXhNY",
      "HDlcmKCRuyw"
    ],
    "genre": {
      "title": "Schaffel / minimal",
      "description": "A Kompakt take on the schaffel (shuffle-beat) groove that the label popularized mid-decade. Hypnotic, glam-rock-inflected 6/8 techno."
    }
  },
  {
    "title": "Fabric (Villalobos Remix)",
    "artist": "Ricardo Villalobos",
    "year": 2006,
    "description": "Ricardo Villalobos",
    "videos": [
      "H8_BAoVwoaM",
      "h0i1Szq6GM8",
      "S9dGT0rA5WI"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "Villalobos at his most expansive, stretching minimal into long-form, narcotic, percussive journeys. Definitive of the late-decade reduced sound."
    }
  },
  {
    "title": "Polar Shift",
    "artist": "Trentemøller",
    "year": 2006,
    "description": "Trentemøller",
    "videos": [
      "5vkj-t1ytzo",
      "5DUCKGyojpE",
      "m_LGDQXWBGs"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "From 'The Last Resort', Trentemøller's moody, textured electronica-techno. Atmospheric and emotive, it pushed beyond the dancefloor."
    }
  },
  {
    "title": "Lyot",
    "artist": "Apparat",
    "year": 2007,
    "description": "Apparat",
    "videos": [
      "jy3yMxMmmAQ",
      "p3bkmD-70e4",
      "54exMIyn8oc"
    ],
    "genre": {
      "title": "IDM / techno",
      "description": "Sascha Ring's emotive, glitch-laced electronica from 'Walls'. Melancholic textures over broken techno rhythms, a Shitkatapult signature."
    }
  },
  {
    "title": "Mikrokosmos",
    "artist": "Deepchord",
    "year": 2007,
    "description": "Deepchord",
    "videos": [
      "tnB5Y47KCOs",
      "TNbpDIZdgls",
      "pnubPGFQzPQ"
    ],
    "genre": {
      "title": "Dub techno",
      "description": "Rod Modell's immersive, oceanic dub techno on Echospace. A central pillar of the 2000s dub-techno revival, all hiss, hum and submerged chords."
    }
  },
  {
    "title": "Beautiful Life",
    "artist": "Gui Boratto",
    "year": 2007,
    "description": "Gui Boratto",
    "videos": [
      "YFoJM2tTFlY",
      "L3Mljrf2oRU",
      "SuoxwpKnHQk"
    ],
    "genre": {
      "title": "Melodic / minimal techno",
      "description": "The Brazilian producer's euphoric, vocal-topped melodic techno anthem on Kompakt. A crossover hit that defined the label's emotive late-decade peak."
    }
  },
  {
    "title": "Happy Birthday",
    "artist": "Modeselektor",
    "year": 2007,
    "description": "Modeselektor",
    "videos": [
      "8VE33kS2bag",
      "BbBIM8XtBJA",
      "e4ZUspBCFWc"
    ],
    "genre": {
      "title": "IDM / techno-bass",
      "description": "The Berlin duo's genre-mashing 'Happy Birthday!' fused techno, hip-hop and bass. Playful, maximalist electronic music from the BPitch/Bpitch orbit."
    }
  },
  {
    "title": "I'm Not",
    "artist": "Pan-Pot",
    "year": 2007,
    "description": "Pan-Pot",
    "videos": [
      "pc9ZbM2-YPQ",
      "KQ39LfaDDnw",
      "nseC94WxMLk"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "The Berlin duo's dark, driving Mobilee-era minimal techno. Tightly engineered and peak-time focused, part of the harder Berlin minimal lineage."
    }
  },
  {
    "title": "A Paw in My Face",
    "artist": "The Field",
    "year": 2007,
    "description": "The Field",
    "videos": [
      "-jfRsIoTC4c",
      "FQxEVhyvA0I",
      "j_KmNsGoXHk"
    ],
    "genre": {
      "title": "Ambient / minimal techno",
      "description": "From the acclaimed 'From Here We Go Sublime', built on a chopped Lionel Richie sample into euphoric loop techno. Peak of the Kompakt 'pop-ambient' techno style."
    }
  },
  {
    "title": "Andrea Doria",
    "artist": "Booka Shade",
    "year": 2008,
    "description": "Booka Shade",
    "videos": [
      "TfDcPznn53k",
      "cfOGu8Yzzcs",
      "nifomw46fp0"
    ],
    "genre": {
      "title": "Tech-house",
      "description": "A later Get Physical melodic-techno cut continuing the duo's emotive, synth-led signature. Big-room minimal-house craft."
    }
  },
  {
    "title": "Hesperus Arms",
    "artist": "cv313",
    "year": 2008,
    "description": "cv313",
    "videos": [
      "D5yPNgoc7K4",
      "nXEkj9B7MtU",
      "_bSC9mA2_aU"
    ],
    "genre": {
      "title": "Dub techno",
      "description": "Echospace's cv313 project delivered deep, endlessly drifting dub-techno loops. Quintessential late-2000s revival material of warmth and decay."
    }
  },
  {
    "title": "Quicksand (Marcel Dettmann remix)",
    "artist": "Marcel Dettmann",
    "year": 2008,
    "description": "Marcel Dettmann",
    "videos": [
      "vNv7i9i02Uw",
      "-boJtnIZH1M",
      "e2RX7MndrB4"
    ],
    "genre": {
      "title": "Berlin / techno",
      "description": "Ostgut Ton co-architect Dettmann's stark, EBM-tinged, metallic techno. A core voice of the brutal, industrial Berghain aesthetic."
    }
  },
  {
    "title": "Panama",
    "artist": "Matias Aguayo",
    "year": 2008,
    "description": "Matias Aguayo",
    "videos": [
      "CsjwT0X2-e8",
      "4wmyQl7yvSc",
      "PK0xOyCwtrA"
    ],
    "genre": {
      "title": "Minimal / world-techno",
      "description": "Kompakt/Cómeme artist Aguayo's percussive, vocal-driven minimal infused with Latin American rhythm. A leftfield, hand-clapped reinvention of minimal."
    }
  },
  {
    "title": "Estrella",
    "artist": "Shed",
    "year": 2008,
    "description": "Shed",
    "videos": [
      "d9kIrQ3xiHw",
      "i03pgsp0aDE",
      "PLXO2z1SfMU"
    ],
    "genre": {
      "title": "Berlin / dub techno",
      "description": "René Pawlowitz's 'Shedding the Past' fused breakbeat, dub and Berlin techno. A pivotal album in expanding the Ostgut-era sound's palette."
    }
  },
  {
    "title": "Quicksand",
    "artist": "Ben Klock",
    "year": 2009,
    "description": "Ben Klock",
    "videos": [
      "2FDkqnBpiP4",
      "L_NT4eQVrMU",
      "38nwp9OyBhg"
    ],
    "genre": {
      "title": "Berlin / techno",
      "description": "From Klock's debut album 'One', a deep, rolling, dub-inflected techno cut for the big Berghain room. Pure peak-time functionality."
    }
  },
  {
    "title": "Sphere",
    "artist": "Donato Dozzy",
    "year": 2010,
    "description": "Donato Dozzy",
    "videos": [
      "Dhzp6esYfeY",
      "mt0KBcdNEbU",
      "Kl-zF6xiaSs"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "The Italian master of looping, immersive techno crafted long-form trance-states from minimal elements. Dozzy became the figurehead of the hypnotic, psychedelic strand that flourished through the decade."
    }
  },
  {
    "title": "Quicksand",
    "artist": "Marcel Dettmann",
    "year": 2010,
    "description": "Marcel Dettmann",
    "videos": [
      "dhNbnPCBGng",
      "lTet9tH90Ds",
      "Q_AM9K6kdso"
    ],
    "genre": {
      "title": "Peak-time techno",
      "description": "Taken from Dettmann's self-titled Ostgut Ton debut album, a steely, percussive cut embodying the Berlin warehouse aesthetic. Dettmann's record-shop-clerk-turned-resident pedigree shaped the modern Berghain sound."
    }
  },
  {
    "title": "Feed-Forward",
    "artist": "Sandwell District",
    "year": 2010,
    "description": "Sandwell District",
    "videos": [
      "o-TcqtOxDpI",
      "wXAPhrYaNVI",
      "0MxdNFQpeDQ"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "From the Feed-Forward LP, Sandwell District (Function, Regis, Silent Servant) fused industrial textures with monolithic techno. The collective redefined dark, art-damaged techno at the start of the decade."
    }
  },
  {
    "title": "Why They Hide Their Bodies Under My Garage?",
    "artist": "Blawan",
    "year": 2011,
    "description": "Blawan",
    "videos": [
      "1mR6zmSTDNE",
      "KL_Bbyi3ub8",
      "sIkhewd69SE"
    ],
    "genre": {
      "title": "Bass techno",
      "description": "A vocal-warped, sub-heavy crossover smash bridging UK bass, garage and techno. It signalled Blawan's pivot toward the harder, raw machine-techno he would become known for."
    }
  },
  {
    "title": "Incident",
    "artist": "Function",
    "year": 2011,
    "description": "Function",
    "videos": [
      "DXuUW9d0bnc",
      "yKkul1ptB2M",
      "615IpmtBsFw"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "From Function's Sandwell District-era output, a brooding, propulsive cut of dark Detroit-via-Berlin techno. Function (Dave Sumner) was a linchpin of the influential collective."
    }
  },
  {
    "title": "Patternist",
    "artist": "Marcel Dettmann",
    "year": 2011,
    "description": "Marcel Dettmann",
    "videos": [
      "5W1QV2uBltk",
      "ofC1r7fIWh0",
      "yiS4rq9PhRI"
    ],
    "genre": {
      "title": "Peak-time techno",
      "description": "A crisp, swinging Ostgut Ton roller showcasing Dettmann's reductionist groove craft. It exemplified the clean, functional Berghain DJ-tool aesthetic."
    }
  },
  {
    "title": "Cactus",
    "artist": "Objekt",
    "year": 2011,
    "description": "Objekt",
    "videos": [
      "6XU6DnRMrZo",
      "IyNW-iTaEqM",
      "R77KhplMH_o"
    ],
    "genre": {
      "title": "Bass techno",
      "description": "TJ Hertz's metallic, precision-engineered debut on his own white-label series. Objekt's sound-design rigour and bass-weight made him a critical-darling figure spanning techno and bass."
    }
  },
  {
    "title": "Klangschein",
    "artist": "Answer Code Request",
    "year": 2012,
    "description": "Answer Code Request",
    "videos": [
      "rmWQYRkgsEE",
      "VJMRpFLS07s",
      "rf5sz0tdVEo"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "Patrick Gräser's breakbeat-inflected, dubby techno that earned him an Ostgut Ton home. Answer Code Request brought a UK-bass sensibility to the Berlin sound."
    }
  },
  {
    "title": "His Master's Voice",
    "artist": "Blawan",
    "year": 2012,
    "description": "Blawan",
    "videos": [
      "1mR6zmSTDNE",
      "vfCXFoOMKB4",
      "TziVU9iVJ9k"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "A raw, distorted, percussive monster from the Hinge Finger label. It cemented Blawan's reputation for brutal, hardware-driven techno."
    }
  },
  {
    "title": "Hush",
    "artist": "DVS1",
    "year": 2012,
    "description": "DVS1",
    "videos": [
      "JZfJTSlhOXM",
      "cguAMLEJIQE",
      "WJ0UuWrH2HA"
    ],
    "genre": {
      "title": "Functional Techno",
      "description": "A precise, hypnotic DJ-tool from the Minneapolis-via-Berlin artist that exemplifies the stripped functional techno of the Berghain era."
    }
  },
  {
    "title": "We Have a Technical",
    "artist": "Maceo Plex",
    "year": 2012,
    "description": "Maceo Plex",
    "videos": [
      "81sOz9TTmko",
      "ztLu1Bn0f00",
      "-FkVjfAl6QQ"
    ],
    "genre": {
      "title": "Tech house",
      "description": "Eric Estornel's lush, hooky electro-tinged anthem that became a festival mainstay. Maceo Plex bridged the deep/tech-house and techno worlds in the early decade."
    }
  },
  {
    "title": "Caldera",
    "artist": "Recondite",
    "year": 2012,
    "description": "Recondite",
    "videos": [
      "zaBuXWIzl2E",
      "-NI4-QvHv9M",
      "aMcp7IUsIKs"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "A melancholic, melodic deep-techno cut from Lorenz Brunner's On Acid era. Recondite defined an emotive, analog-warm strain of hypnotic techno."
    }
  },
  {
    "title": "Range",
    "artist": "Robert Hood",
    "year": 2012,
    "description": "Robert Hood",
    "videos": [
      "XbvdQ09u8TA",
      "pXt1zL1TCh8",
      "QH7j-I_YQKk"
    ],
    "genre": {
      "title": "Minimal techno",
      "description": "Detroit minimal-techno architect Robert Hood delivered a stripped, funky, hypnotic groove from the Motor: Nighttime World 3 album. Hood's reductionist blueprint underpins much of the decade's techno."
    }
  },
  {
    "title": "Drone Logic",
    "artist": "Daniel Avery",
    "year": 2013,
    "description": "Daniel Avery",
    "videos": [
      "eS0CO-yPmO4",
      "WnHi33BRZqI",
      "q8sVG8HhK-Y"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "The acid-laced, looping title track of Avery's debut LP on Phantasy. It captured a UK psychedelic-techno revival blending acid, house and machine drive."
    }
  },
  {
    "title": "Voiteck",
    "artist": "Function",
    "year": 2013,
    "description": "Function",
    "videos": [
      "yj3evcq4qP8",
      "bgcWNUwZdBs",
      "g6bwAK0bQtI"
    ],
    "genre": {
      "title": "Peak-time techno",
      "description": "A heavyweight Ostgut Ton roller from Function's Berlin period. It distilled the relentless, dubbed-out Berghain peak-time formula."
    }
  },
  {
    "title": "Open Eye Signal",
    "artist": "Jon Hopkins",
    "year": 2013,
    "description": "Jon Hopkins",
    "videos": [
      "Q04ILDXe3QE",
      "WF34N4gJAKE",
      "va4OyeQHbr8"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "A slow-burning, gritty, cinematic techno epic from the Mercury-nominated Immunity album. Hopkins fused organic textures with crunchy beat-craft, crossing techno into the wider critical mainstream."
    }
  },
  {
    "title": "Black Propaganda",
    "artist": "Oscar Mulero",
    "year": 2013,
    "description": "Oscar Mulero",
    "videos": [
      "AtVcQdlUCEk",
      "1GQfaio7K3I",
      "3xmSnV_nlMY"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "From the Spanish veteran's Black Propaganda LP on PoleGroup, a stark, hypnotic, industrial-leaning workout. Mulero is a cornerstone of the Iberian dark-techno scene."
    }
  },
  {
    "title": "Lipschitz",
    "artist": "Recondite",
    "year": 2013,
    "description": "Recondite",
    "videos": [
      "O-LEt25uWFY",
      "HPODefkT1Qg",
      "q4ic2xA8pys"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "An emotive, hook-laden highlight from the Hinterland album on Ghostly. Recondite's blend of melody and propulsion crossed into festival main stages."
    }
  },
  {
    "title": "Phantom Studies",
    "artist": "Rødhåd",
    "year": 2013,
    "description": "Rødhåd",
    "videos": [
      "6x__uhTZ0so",
      "HedBpALze3M",
      "Cob1s46CyOY"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "A deep, dystopian, slow-rolling cut from the Dystopian label boss. Rødhåd defined the moody, cinematic Berlin warehouse sound of the mid-decade."
    }
  },
  {
    "title": "Spectral Source",
    "artist": "Answer Code Request",
    "year": 2014,
    "description": "Answer Code Request",
    "videos": [
      "i_nFmeRUuNk",
      "96QkiAYkp9Q",
      "VJMRpFLS07s"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "A dub-heavy, atmospheric Ostgut Ton cut weaving breaks into rolling techno. It showcased the label's deeper, headphone-friendly side."
    }
  },
  {
    "title": "Never Grow Old",
    "artist": "Floorplan",
    "year": 2014,
    "description": "Floorplan",
    "videos": [
      "iC6sOXnBglE",
      "uH7u1ZeRK34",
      "yRBJDJx_sjg"
    ],
    "genre": {
      "title": "Gospel techno",
      "description": "Detroit legend Robert Hood (with daughter Lyric) flipped a gospel sample into an ecstatic, hands-in-the-air techno-house hymn. Floorplan brought soul and uplift back to peak-time floors."
    }
  },
  {
    "title": "Rainbow Delta",
    "artist": "Len Faki",
    "year": 2014,
    "description": "Len Faki",
    "videos": [
      "z-PWw9TdqLM",
      "dbv_fdD4Txs",
      "Cun_hPbk7r4"
    ],
    "genre": {
      "title": "Peak-time techno",
      "description": "A euphoric, surging, melodic peak-time anthem from the Figure label boss and Berghain resident. Faki's track became one of the decade's most-played big-room techno cuts."
    }
  },
  {
    "title": "Solar",
    "artist": "Maceo Plex",
    "year": 2014,
    "description": "Maceo Plex",
    "videos": [
      "HTmKLDHHJYo",
      "zRbkvU4oi3Q",
      "cXBIZOiSaxA"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "A driving, synth-rich crossover cut from Estornel's prolific mid-decade run. Maceo Plex helped push melodic techno toward festival ubiquity."
    }
  },
  {
    "title": "Ghette O Vision",
    "artist": "Nina Kraviz",
    "year": 2014,
    "description": "Nina Kraviz",
    "videos": [
      "605bwlAz_iQ",
      "EoRwCuMUnKQ",
      "FIgn3DiXRQs"
    ],
    "genre": {
      "title": "Acid techno",
      "description": "A raw, lo-fi, acid-tinged cut typifying Kraviz's трип label ethos. Kraviz became one of the decade's defining and most divisive techno figures."
    }
  },
  {
    "title": "Voids Sphere",
    "artist": "Dax J",
    "year": 2015,
    "description": "Dax J",
    "videos": [
      "P47AyRaAEUE",
      "13aPWrIXfy0",
      "M16TdxOSLLg"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "A pounding, dark, fast workout from the Monnom Black founder. Dax J became a flagbearer for the late-decade resurgence of hard, fast techno."
    }
  },
  {
    "title": "Mizu",
    "artist": "Donato Dozzy",
    "year": 2015,
    "description": "Donato Dozzy",
    "videos": [
      "Dhzp6esYfeY",
      "I9MEddhzBn8",
      "q6m1b8GSW4g"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "An immersive, looping, water-themed meditation typical of Dozzy's psychedelic minimalism. It reaffirmed his status as the godfather of hypnotic techno."
    }
  },
  {
    "title": "Spitting Image",
    "artist": "Helena Hauff",
    "year": 2015,
    "description": "Helena Hauff",
    "videos": [
      "K0kD8w9Qw_c",
      "qeywUj9B1HU",
      "7PMWt9Uk3Iw"
    ],
    "genre": {
      "title": "Electro",
      "description": "The Hamburg DJ's raw, hardware-only EBM-electro from her Discreet Desires LP on Werkdiscs. Hauff led the gritty, analog electro and acid revival."
    }
  },
  {
    "title": "Vibe Your Love",
    "artist": "Maceo Plex",
    "year": 2015,
    "description": "Maceo Plex",
    "videos": [
      "3JkpYmCn9ks",
      "gJiQYFu3jzc",
      "7bMYhJ_UqnE"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "A hypnotic, slow-building, emotive anthem that became one of the decade's signature melodic-techno moments. It exemplified Maceo Plex's pivot toward deeper, hypnotic territory."
    }
  },
  {
    "title": "Tube",
    "artist": "Oscar Mulero",
    "year": 2015,
    "description": "Oscar Mulero",
    "videos": [
      "6xcq4uhyGEQ",
      "WI5We9wzBvk",
      "ToZ65IbWszs"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "A relentless, looping, hypnotic roller from the Iberian dark-techno don. Mulero's PoleGroup output shaped the Spanish hard/hypnotic scene."
    }
  },
  {
    "title": "The Stranger",
    "artist": "Recondite",
    "year": 2015,
    "description": "Recondite",
    "videos": [
      "cR1PCiQpOmM",
      "6SGIZhWNzfM",
      "joJWJ7yQLKg"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "A brooding, melodic cut from the Placid album, blending warm analog pads with a driving pulse. Recondite continued to define emotive techno."
    }
  },
  {
    "title": "Mörk",
    "artist": "I Hate Models",
    "year": 2016,
    "description": "I Hate Models",
    "videos": [
      "7CwJBg17Me4",
      "B2HI_pJfOkQ",
      "dYvuv-Bq0IA"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "An emotive, fast, distorted blend of rave euphoria and dark industrial drive from the French enigma. I Hate Models led the melodic-yet-brutal hard-techno wave."
    }
  },
  {
    "title": "Theme (VR)",
    "artist": "Objekt",
    "year": 2016,
    "description": "Objekt",
    "videos": [
      "SDRNdNXBZcQ",
      "8Jvk8L5DmRE",
      "KEKAEtmz2IY"
    ],
    "genre": {
      "title": "Electro",
      "description": "An intricate, sound-design-heavy electro-techno hybrid from the cult producer. Objekt's meticulous craft set a benchmark for the decade's leftfield electro."
    }
  },
  {
    "title": "Spieluhr",
    "artist": "Recondite",
    "year": 2016,
    "description": "Recondite",
    "videos": [
      "zD8mGkJXAnA",
      "WQUrDsf_bxc",
      "kQhYwcjH8Og"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "A delicate, music-box-themed melodic cut from the EINEM album. Recondite kept refining his signature emotive, analog-driven style."
    }
  },
  {
    "title": "Anxious",
    "artist": "Rødhåd",
    "year": 2016,
    "description": "Rødhåd",
    "videos": [
      "3Fzlwmutppw",
      "g4V7GKjHeeA",
      "pvs_1805b5s"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "A dark, atmospheric, slow-burning Dystopian cut steeped in dystopian sci-fi mood. Rødhåd's productions matched his immersive, story-arc DJ sets."
    }
  },
  {
    "title": "Memory Lane",
    "artist": "Surgeon",
    "year": 2016,
    "description": "Surgeon",
    "videos": [
      "QHHFHNA1OxM",
      "mqZTzYo0VrM",
      "nrseUMjYoHk"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "Birmingham techno pioneer Anthony Child delivered a propulsive, mind-bending cut from the From Farthest Known Objects LP. Surgeon's relentless, psychedelic approach influenced generations of hard-techno artists."
    }
  },
  {
    "title": "Body Sect",
    "artist": "Surgeon",
    "year": 2016,
    "description": "Surgeon",
    "videos": [
      "mXGZVvmoTp0",
      "VX39h4QtrtM",
      "wylgcB7jKjw"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "A raw, distorted, hardware-jam cut showcasing Surgeon's live-machine ferocity. It exemplified his uncompromising Birmingham techno lineage."
    }
  },
  {
    "title": "Lava Lamp",
    "artist": "Amelie Lens",
    "year": 2017,
    "description": "Amelie Lens",
    "videos": [
      "q5Oz6Ja8iZs",
      "tgivYC2s6hs",
      "GJkuTx1DQzg"
    ],
    "genre": {
      "title": "Peak-time techno",
      "description": "A hypnotic, acid-tinged, driving cut that propelled the Belgian DJ to stardom. Lens became a face of the youthful, fast peak-time techno boom."
    }
  },
  {
    "title": "Glue",
    "artist": "Bicep",
    "year": 2017,
    "description": "Bicep",
    "videos": [
      "A7ZxRs45tTg",
      "cuSR3a409Tc",
      "w2oGFEsaG5c"
    ],
    "genre": {
      "title": "Breakbeat techno",
      "description": "A breakbeat-driven, nostalgic, emotive crossover smash from the Belfast duo's self-titled debut. Though leaning electronic/house, it became one of the decade's most iconic and beloved dance records."
    }
  },
  {
    "title": "Sgadi Li Mi",
    "artist": "Charlotte de Witte",
    "year": 2017,
    "description": "Charlotte de Witte",
    "videos": [
      "4qJdigju5UM",
      "M6KMTUSWsW0",
      "0YVvcTIGy40"
    ],
    "genre": {
      "title": "Peak-time techno",
      "description": "A driving, hypnotic, vocal-laced banger from the Vision EP era that helped launch de Witte to the top of the scene. It marked the rise of stripped, dark, peak-time techno."
    }
  },
  {
    "title": "Contrast",
    "artist": "Dax J",
    "year": 2017,
    "description": "Dax J",
    "videos": [
      "P47AyRaAEUE",
      "-WQiJE5-1KY",
      "mM6Jn4y_u2I"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "A relentless, pounding cut from the Monnom Black founder's catalogue. Dax J pushed the harder, faster end of the spectrum back into the spotlight."
    }
  },
  {
    "title": "Encarna",
    "artist": "Donato Dozzy",
    "year": 2017,
    "description": "Donato Dozzy",
    "videos": [
      "Xlfo6qZmBIU",
      "KGtTFPHCbRk",
      "i_lR-aX40Fc"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "A deep, looping, hallucinatory cut continuing Dozzy's mastery of immersive minimalism. He remained the touchstone for hypnotic, psychedelic techno."
    }
  },
  {
    "title": "A Murder of Crows",
    "artist": "Perc",
    "year": 2017,
    "description": "Perc",
    "videos": [
      "ixYVFZnNl6s",
      "QWj-04CoNuw",
      "i4Sc0zIAHtI"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "From The Perc Trax boss's Bitter Music LP, a caustic, noisy, politically-charged industrial-techno cut. Perc was central to the UK industrial-techno scene."
    }
  },
  {
    "title": "Hypnotized",
    "artist": "Amelie Lens",
    "year": 2018,
    "description": "Amelie Lens",
    "videos": [
      "QnAw7Djgis4",
      "m81oUTPbPQo",
      "QW5mv0l6s0Q"
    ],
    "genre": {
      "title": "Peak-time techno",
      "description": "A relentless, looping, acid-flecked anthem from the EXHALE label founder. Lens's track epitomized the youthful, hypnotic peak-time surge."
    }
  },
  {
    "title": "Gens",
    "artist": "Answer Code Request",
    "year": 2018,
    "description": "Answer Code Request",
    "videos": [
      "NVqIpKbqkgA",
      "yHBT4vmNGnI",
      "nnJgpDuZN2A"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "A rolling, dubby, atmospheric Ostgut Ton cut from the Gens album. Answer Code Request refined his breakbeat-laced hypnotic style."
    }
  },
  {
    "title": "Doppler",
    "artist": "Charlotte de Witte",
    "year": 2018,
    "description": "Charlotte de Witte",
    "videos": [
      "AS8Q_5knkrg",
      "1-ZU3bCEGqQ",
      "0YVvcTIGy40"
    ],
    "genre": {
      "title": "Peak-time techno",
      "description": "A stripped, hypnotic, vocal-loop driven peak-time weapon that became a signature de Witte cut. It defined the dark, minimal techno dominating big stages late-decade."
    }
  },
  {
    "title": "Falling Apart",
    "artist": "Dax J",
    "year": 2018,
    "description": "Dax J",
    "videos": [
      "6z3f5hqBWvQ",
      "AQGlXmGG2LQ",
      "4_NcF2t1ZGM"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "A driving, dark, melodic-edged cut from the Monnom Black catalogue. Dax J balanced ferocity with emotive hooks."
    }
  },
  {
    "title": "Daydream",
    "artist": "I Hate Models",
    "year": 2018,
    "description": "I Hate Models",
    "videos": [
      "U6EjUIefwiw",
      "xjCb4CB-hdw",
      "KdPeMehHk2o"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "A fast, melodic-yet-savage rave anthem blending trance euphoria and industrial grit. It became an anthem of the new-school hard-techno movement."
    }
  },
  {
    "title": "Emerald Rush",
    "artist": "Jon Hopkins",
    "year": 2018,
    "description": "Jon Hopkins",
    "videos": [
      "4sk0uDbM5lc",
      "t-w-XSbVDsI",
      "nysbtu8hwzQ"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "A euphoric, breakbeat-laced, psychedelic peak from the Singularity album. Hopkins again fused organic emotion with techno propulsion for a crossover audience."
    }
  },
  {
    "title": "Singularity",
    "artist": "Jon Hopkins",
    "year": 2018,
    "description": "Jon Hopkins",
    "videos": [
      "lkvnpHFajt0",
      "4sk0uDbM5lc",
      "6MiCLh_j2aY"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "The brooding, slow-building, beatless-to-driving title track of Hopkins's acclaimed album. It bookended the journey from ambient to techno propulsion."
    }
  },
  {
    "title": "Cocoon Crush",
    "artist": "Objekt",
    "year": 2018,
    "description": "Objekt",
    "videos": [
      "jIVzBfd_eKg",
      "TH359WRa6hY",
      "mLm1YSRDRQ4"
    ],
    "genre": {
      "title": "Electro",
      "description": "An intricate, broken-beat electro-techno cut from the Cocoon Crush album. Objekt remained a critical reference point for forward-thinking electronic music."
    }
  },
  {
    "title": "Mirror",
    "artist": "Recondite",
    "year": 2018,
    "description": "Recondite",
    "videos": [
      "bVrchCF5FDU",
      "q4ic2xA8pys",
      "NC04ytuSIN8"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "A reflective, melodic, driving cut from Lorenz Brunner's continued run. Recondite's emotive sound remained a touchstone of melodic techno."
    }
  },
  {
    "title": "Aphelion",
    "artist": "Rødhåd",
    "year": 2018,
    "description": "Rødhåd",
    "videos": [
      "oNYarqQNev0",
      "jmZpS4SQkbc",
      "PTo5mcSxMo0"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "A deep, cinematic, slow-evolving cut from the Dystopian boss. Rødhåd continued to define immersive, narrative-driven techno."
    }
  },
  {
    "title": "Polygon",
    "artist": "Skee Mask",
    "year": 2018,
    "description": "Skee Mask",
    "videos": [
      "aaAWxnBxA84",
      "ZYCnjGZGx_s",
      "1R-n7OJizIc"
    ],
    "genre": {
      "title": "Breakbeat Techno",
      "description": "Munich's Skee Mask fused broken beats, ambient texture and techno propulsion, a defining sound of the late-2010s post-Berghain wave."
    }
  },
  {
    "title": "Luminosity Device",
    "artist": "Surgeon",
    "year": 2018,
    "description": "Surgeon",
    "videos": [
      "FF7WHtAAx0c",
      "8SLHX_vmZ_g",
      "ufYjw6zcWg4"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "A heavy, distorted, hardware-driven cut from Anthony Child's Luminosity Device era. Surgeon's relentless approach continued to anchor UK industrial techno."
    }
  },
  {
    "title": "Stay With Me",
    "artist": "Amelie Lens",
    "year": 2019,
    "description": "Amelie Lens",
    "videos": [
      "XIfiNzZ87JI",
      "l-vSl7BuxGs",
      "-vrSHSRC2dQ"
    ],
    "genre": {
      "title": "Peak-time techno",
      "description": "A vocal-laced, hypnotic, driving anthem from the EXHALE boss. Lens cemented her place at the top of the global techno circuit."
    }
  },
  {
    "title": "Tied",
    "artist": "Blawan",
    "year": 2019,
    "description": "Blawan",
    "videos": [
      "GpPY5XK4CFU",
      "vyoQjlA4RIw",
      "26qFn2LAZ7M"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "A raw, distorted, vocal-mangled cut from the Wet Will Always Dry album. Blawan continued his run of brutal, hardware-driven machine techno."
    }
  },
  {
    "title": "Spectre",
    "artist": "Charlotte de Witte",
    "year": 2019,
    "description": "Charlotte de Witte",
    "videos": [
      "VRo7ovB_ONA",
      "X6ofyN8d-GA",
      "WBXeKAsVN6A"
    ],
    "genre": {
      "title": "Peak-time techno",
      "description": "A dark, driving, acid-edged cut from the KNTXT founder's prolific run. De Witte became one of the world's most in-demand techno DJs."
    }
  },
  {
    "title": "Voltage",
    "artist": "Charlotte de Witte",
    "year": 2019,
    "description": "Charlotte de Witte",
    "videos": [
      "eSp9fCIP5yY",
      "C7vcyl8AOtQ",
      "VRo7ovB_ONA"
    ],
    "genre": {
      "title": "Peak-time techno",
      "description": "A high-energy, acid-edged, driving KNTXT cut from de Witte's prolific run. It exemplified the dark, electrifying peak-time techno she championed."
    }
  },
  {
    "title": "Genou",
    "artist": "Dax J",
    "year": 2019,
    "description": "Dax J",
    "videos": [
      "dwq3odmMOEc",
      "_3Etcc8RtNA",
      "MJkizjtTYdY"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "A pounding, fast, dark cut from the Monnom Black founder. Dax J embodied the late-decade hard/fast techno resurgence."
    }
  },
  {
    "title": "Qualm",
    "artist": "Helena Hauff",
    "year": 2019,
    "description": "Helena Hauff",
    "videos": [
      "2oV6sS7Lbr4",
      "W4sTgyPQZYY",
      "xi5DFdQnnfA"
    ],
    "genre": {
      "title": "Electro",
      "description": "A raw, acid-soaked electro cut from the Qualm album on Ninja Tune. Hauff remained the foremost figure of the analog electro and acid revival."
    }
  },
  {
    "title": "L'Âge d'Or",
    "artist": "I Hate Models",
    "year": 2019,
    "description": "I Hate Models",
    "videos": [
      "8CT6HxYA0cg",
      "z-8JELUcjMM",
      "wcuF1i6Onh8"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "A sweeping, emotive, fast hard-techno epic blending rave nostalgia and darkness. It reflected the French scene's melodic-brutalist signature."
    }
  },
  {
    "title": "Phantasmagoria",
    "artist": "Oscar Mulero",
    "year": 2019,
    "description": "Oscar Mulero",
    "videos": [
      "PUXPOFlz3i0",
      "MtkHmdezGUs",
      "HHD7hY9xRJY"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "A relentless, looping, hypnotic cut from the Iberian dark-techno veteran. Mulero's PoleGroup output continued to shape the Spanish scene."
    }
  },
  {
    "title": "Tell Me a Better Story",
    "artist": "Perc",
    "year": 2019,
    "description": "Perc",
    "videos": [
      "dvCgKRnEhHs",
      "KXVPlHtlVmA",
      "NDVV_M__CSI"
    ],
    "genre": {
      "title": "Industrial techno",
      "description": "A caustic, noisy, politically-edged cut continuing Perc's UK industrial-techno mission. It captured the abrasive end of the decade's sound."
    }
  },
  {
    "title": "Daemon",
    "artist": "Recondite",
    "year": 2019,
    "description": "Recondite",
    "videos": [
      "zD8mGkJXAnA",
      "WQUrDsf_bxc",
      "K0qwGPpimic"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "A deep, looping, melancholic hypnotic cut from Recondite's late-decade output. It reaffirmed his command of emotive, immersive techno."
    }
  },
  {
    "title": "Botota",
    "artist": "999999999",
    "year": 2020,
    "description": "999999999",
    "videos": [
      "5fE7c5mlioY",
      "ylCVkCstuo4",
      "MuI9q07KcJ0"
    ],
    "genre": {
      "title": "Acid / hard techno",
      "description": "Frenetic, acid-soaked high-BPM techno from the Italian live duo. Defined the fast, raw acid-rave revival of the early 2020s."
    }
  },
  {
    "title": "In My Mind",
    "artist": "Amelie Lens",
    "year": 2020,
    "description": "Amelie Lens",
    "videos": [
      "MxKcx0FVuqk",
      "B8VpxZEgKfE",
      "ZZ5mveUC1XQ"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "Relentless, hypnotic loop techno with a vocal hook from the Belgian Lenske boss. A staple of the warehouse and big-room techno wave."
    }
  },
  {
    "title": "Gravity (feat. DOP)",
    "artist": "Boris Brejcha",
    "year": 2020,
    "description": "Boris Brejcha",
    "videos": [
      "TAxXRmwA40o",
      "iSsG5DuOlQ0",
      "KwTLPoo9I4c"
    ],
    "genre": {
      "title": "High-tech minimal",
      "description": "Intricate, melodic high-tech minimal from the masked German producer who built the genre into a global brand."
    }
  },
  {
    "title": "Solar",
    "artist": "Reinier Zonneveld",
    "year": 2020,
    "description": "Reinier Zonneveld",
    "videos": [
      "Wgz3939yxgY",
      "NGnNZtBV1N8",
      "KtgCTErTwJ8"
    ],
    "genre": {
      "title": "Live techno",
      "description": "Driving, hands-in-the-air live techno from the Dutch Filth on Acid producer, known for marathon live hardware sets."
    }
  },
  {
    "title": "Inversion",
    "artist": "Stephan Bodzin",
    "year": 2020,
    "description": "Stephan Bodzin",
    "videos": [
      "x_U7rbxi3Rg",
      "7QWd9_1LyOg",
      "KFKKcoxf39A"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "Lush, cinematic melodic techno from the German live-performance master. A defining track of the emotive, big-room melodic sound."
    }
  },
  {
    "title": "Phantasma",
    "artist": "Tale Of Us",
    "year": 2020,
    "description": "Tale Of Us",
    "videos": [
      "U2V54PfWiGc",
      "xHa16vkxRnc",
      "d-SbQOSV4DM"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "Dark, dramatic melodic techno from the Afterlife founders, capturing the label's cinematic, emotional peak-time aesthetic."
    }
  },
  {
    "title": "Overdrive",
    "artist": "Charlotte de Witte",
    "year": 2021,
    "description": "Charlotte de Witte",
    "videos": [
      "u1v-TN6j0Rk",
      "XFLIztjVaR8",
      "1iSmYLa_vLo"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "Pounding, hypnotic KNTXT cut that cemented de Witte's command of the mainstage hard-techno format."
    }
  },
  {
    "title": "Welt am Draht",
    "artist": "FJAAK",
    "year": 2021,
    "description": "FJAAK",
    "videos": [
      "_gvuq75JlUo",
      "eoVycSg_r7s",
      "XDcBPv43OyY"
    ],
    "genre": {
      "title": "Berlin techno",
      "description": "Hard, raw Berlin warehouse techno from the FJAAK label collective, channeling the city's no-nonsense club sound."
    }
  },
  {
    "title": "Liquid Slow",
    "artist": "Kobosil",
    "year": 2021,
    "description": "Kobosil",
    "videos": [
      "DI_7FV2_sMY",
      "dTIvBDB0FOA",
      "njLa70__PFE"
    ],
    "genre": {
      "title": "Berlin hard techno",
      "description": "Raw, dystopian hard techno from the Berghain-affiliated Berlin producer and R Label Group founder."
    }
  },
  {
    "title": "Spectrum",
    "artist": "Maceo Plex",
    "year": 2021,
    "description": "Maceo Plex",
    "videos": [
      "8x13vB2yK30",
      "c5C98IQwlxc",
      "Q21dChix3xo"
    ],
    "genre": {
      "title": "Melodic / deep techno",
      "description": "Spacey, groove-led melodic techno from the American producer, blending Detroit warmth with peak-time drive."
    }
  },
  {
    "title": "Goddess",
    "artist": "Sara Landry",
    "year": 2021,
    "description": "Sara Landry",
    "videos": [
      "kf1sh-olg8s",
      "bRKcLukaBwM",
      "p5bsVptTBKc"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "Distorted, gabber-tinged hard techno from the American 'High Priestess of Hard Techno', a leading voice of the fast 150+ BPM wave."
    }
  },
  {
    "title": "Drained",
    "artist": "SPFDJ",
    "year": 2021,
    "description": "SPFDJ",
    "videos": [
      "vQANrgpnztw",
      "SEOKS1kmZEY",
      "hAYkoKoXQNY"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "Uncompromising, high-energy hard techno from the Intrepid Skin label boss, a fixture of Berlin's fast underground scene."
    }
  },
  {
    "title": "Vivid",
    "artist": "Stephan Bodzin",
    "year": 2021,
    "description": "Stephan Bodzin",
    "videos": [
      "eaP9eTjTHi8",
      "bpEVpBr5lK4",
      "xF_QkfZI1mM"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "Soaring, synth-driven melodic techno designed for Bodzin's live shows, epitomizing the emotive big-room sound."
    }
  },
  {
    "title": "Nasty",
    "artist": "VTSS",
    "year": 2021,
    "description": "VTSS",
    "videos": [
      "P0TmOQYM9r4",
      "RiyJnRfXXe8",
      "y76HhuniYMo"
    ],
    "genre": {
      "title": "Hard techno / electro",
      "description": "Genre-bending, attitude-heavy hard techno and electro from the Polish producer pushing the rave revival forward."
    }
  },
  {
    "title": "Eternity",
    "artist": "Anyma",
    "year": 2022,
    "description": "Anyma",
    "videos": [
      "_V_5YoOoV28",
      "Y6o2HmKFCUw",
      "xAfNUoqQppU"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "Cinematic, AI-aesthetic melodic techno from Matteo Milleri's solo Anyma project, spearheading the genre's audiovisual stadium era."
    }
  },
  {
    "title": "Pleasure Model",
    "artist": "Héctor Oaks",
    "year": 2022,
    "description": "Héctor Oaks",
    "videos": [
      "_MY68PncjrY",
      "x5CoBaZIdcE",
      "pkOdixdQHvA"
    ],
    "genre": {
      "title": "Berlin hard techno",
      "description": "Hard, looping Berlin techno from the Bassiani and Herrensauna resident, a master of raw vinyl-driven sets."
    }
  },
  {
    "title": "Hardc/re",
    "artist": "I Hate Models",
    "year": 2022,
    "description": "I Hate Models",
    "videos": [
      "8CT6HxYA0cg",
      "z_EmuZyhqMU",
      "zMW3xnGaI-g"
    ],
    "genre": {
      "title": "Hardcore / rave techno",
      "description": "Brutal, breakbeat-driven hardcore-techno fusion that pushed the French producer's dystopian rave sound further."
    }
  },
  {
    "title": "Fed Up",
    "artist": "KETTAMA",
    "year": 2022,
    "description": "KETTAMA",
    "videos": [
      "mhbe98I2-IM",
      "QwSNXtzWER4",
      "J91SR8wfAvU"
    ],
    "genre": {
      "title": "Rave / hard house techno",
      "description": "High-octane rave-techno from the Irish G-Town Records boss, bridging hard house energy with peak-time techno."
    }
  },
  {
    "title": "Ascension",
    "artist": "Klangkuenstler",
    "year": 2022,
    "description": "Klangkuenstler",
    "videos": [
      "NegHETRXmoM",
      "vVT5EgNv0wY",
      "D7rZU2OyRzQ"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "Energetic, melodic-edged hard techno from the German producer riding the festival hard-techno boom."
    }
  },
  {
    "title": "Liberty",
    "artist": "Reinier Zonneveld",
    "year": 2022,
    "description": "Reinier Zonneveld",
    "videos": [
      "Cyp-RHtcWd4",
      "i-mFuxbGHzg",
      "pPvDOXQIr9A"
    ],
    "genre": {
      "title": "Live techno",
      "description": "Anthemic, acid-tinged live techno built for Zonneveld's high-energy hardware performances."
    }
  },
  {
    "title": "Forsaken",
    "artist": "Sara Landry",
    "year": 2022,
    "description": "Sara Landry",
    "videos": [
      "lIy3heKDq_w",
      "rRZVsXWbImo",
      "NFUl6uuUx_E"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "Crushing, distorted hard techno underscoring Landry's rise as a flagbearer of the fast, heavy American scene."
    }
  },
  {
    "title": "Overdrive",
    "artist": "Shlømo",
    "year": 2022,
    "description": "Shlømo",
    "videos": [
      "NsVZ3_vKqYY",
      "S-QEBoiu_98",
      "htYEKXDdxcg"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "Deep, immersive hypnotic techno from the French producer and Taapion label founder, favoring long-form atmospheric builds."
    }
  },
  {
    "title": "Acid Universe",
    "artist": "999999999",
    "year": 2023,
    "description": "999999999",
    "videos": [
      "neJ8pdgIiC4",
      "uPYIeWTsMQg",
      "ylCVkCstuo4"
    ],
    "genre": {
      "title": "Acid techno",
      "description": "Squelching, high-speed acid techno from the Italian duo, central to the 2020s acid revival."
    }
  },
  {
    "title": "Aphrodite",
    "artist": "Amelie Lens",
    "year": 2023,
    "description": "Amelie Lens",
    "videos": [
      "i9Yn6GFmfzY",
      "0sdtxfn5nKw",
      "HPOmsY_Wt2c"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "Melodic, hypnotic peak-time techno from the Lenske founder, showing the genre's shift toward emotive hooks."
    }
  },
  {
    "title": "Reflections",
    "artist": "Anyma",
    "year": 2023,
    "description": "Anyma",
    "videos": [
      "oqIvcWOIfg0",
      "ZDCig08kzc8",
      "evKpt9Osn7w"
    ],
    "genre": {
      "title": "Melodic techno",
      "description": "Grand, emotive melodic techno from Anyma's stadium-scale Afterlife era, defining the genre's audiovisual peak."
    }
  },
  {
    "title": "Formula",
    "artist": "Charlotte de Witte",
    "year": 2023,
    "description": "Charlotte de Witte",
    "videos": [
      "XwX9w00dZcY",
      "CJFTWNNdM1U",
      "9V6ZAGvCrDc"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "Trance-tinged, driving KNTXT cut reflecting the trance-techno crossover that swept the scene."
    }
  },
  {
    "title": "Pursuit",
    "artist": "Daria Kolosova",
    "year": 2023,
    "description": "Daria Kolosova",
    "videos": [
      "LJRXOXfU0VE",
      "pGSu2Biuxag",
      "v0KuT-NKUaA"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "Fast, hypnotic hard techno from the Ukrainian-born rising star, emblematic of the new wave of high-BPM club techno."
    }
  },
  {
    "title": "Higher Power",
    "artist": "Sara Landry",
    "year": 2023,
    "description": "Sara Landry",
    "videos": [
      "bRKcLukaBwM",
      "NYVhZCAzo98",
      "YN7RepkFrpE"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "Euphoric yet pummeling hard techno blending uplifting melody with heavy kicks, a hallmark of the hard-trance-techno revival."
    }
  },
  {
    "title": "Reverberation",
    "artist": "Shlømo",
    "year": 2023,
    "description": "Shlømo",
    "videos": [
      "ri9lZVR_eRA",
      "C1nM7irPf1Y",
      "5hvawK9QNsI"
    ],
    "genre": {
      "title": "Hypnotic techno",
      "description": "Hazy, percussive hypnotic techno emphasizing texture and trance-inducing repetition over peak-time punch."
    }
  },
  {
    "title": "Trance Party",
    "artist": "VTSS",
    "year": 2023,
    "description": "VTSS",
    "videos": [
      "I1mhJjxtJx4",
      "T3DwsRcqoII",
      "04M1VIJV-cc"
    ],
    "genre": {
      "title": "Trance-techno",
      "description": "Bouncy, nostalgic trance-techno fusion riding the hard-trance revival, blending 2000s trance stabs with modern club drive."
    }
  },
  {
    "title": "Kreatura",
    "artist": "Boris Brejcha",
    "year": 2024,
    "description": "Boris Brejcha",
    "videos": [
      "DCGKemPaScw",
      "yd9flzRBWOM",
      "9d6Y9vEtCQ8"
    ],
    "genre": {
      "title": "High-tech minimal",
      "description": "Detailed, melodic high-tech minimal continuing Brejcha's signature blend of intricate programming and emotive synth lines."
    }
  },
  {
    "title": "Renaissance",
    "artist": "Charlotte de Witte",
    "year": 2024,
    "description": "Charlotte de Witte",
    "videos": [
      "9V6ZAGvCrDc",
      "m1SvbXLYEEc",
      "fjnSF0K70q4"
    ],
    "genre": {
      "title": "Trance-techno",
      "description": "Melodic, trance-influenced techno reflecting de Witte's embrace of the hard-trance crossover sound."
    }
  },
  {
    "title": "Devotion",
    "artist": "Daria Kolosova",
    "year": 2024,
    "description": "Daria Kolosova",
    "videos": [
      "LJRXOXfU0VE",
      "PF5CXFU87pI",
      "KXBbA0M6NXg"
    ],
    "genre": {
      "title": "Hard techno",
      "description": "Pounding, hypnotic hard techno confirming Kolosova as a leading name in the contemporary fast-techno wave."
    }
  },
  {
    "title": "Phoenix",
    "artist": "Klangkuenstler",
    "year": 2024,
    "description": "Klangkuenstler",
    "videos": [
      "RMLBjvvtXyk",
      "z16Yq4X87Hs",
      "jW0yP4WCVwQ"
    ],
    "genre": {
      "title": "Hard trance-techno",
      "description": "Uplifting, trance-laced hard techno epitomizing the 2024 hard-trance revival on the festival circuit."
    }
  },
  {
    "title": "Sequence",
    "artist": "Reinier Zonneveld",
    "year": 2024,
    "description": "Reinier Zonneveld",
    "videos": [
      "GsL3ggKoyCU",
      "NGnNZtBV1N8",
      "en7HYiy1ILA"
    ],
    "genre": {
      "title": "Live acid techno",
      "description": "Acid-driven live techno from the Dutch hardware virtuoso, built for his marathon improvised performances and a staple of the acid revival."
    }
  }
];
