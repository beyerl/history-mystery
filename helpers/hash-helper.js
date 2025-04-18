export class HashHelper {
    static generateGameHash() {
        const array = new Uint8Array(4); // 32 bits = ~6 base36 chars
        crypto.getRandomValues(array);
        const num = Array.from(array).reduce((acc, byte) => acc * 256 + byte, 0);
        return num.toString(36).toUpperCase().slice(0, 5); // base36 gives letters+numbers
    }
}
