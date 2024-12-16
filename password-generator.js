class PasswordGenerator {
  constructor(length) {
    this.password = '';
    this.length = length;
  }

  generate() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$';
    const password = Array.from(crypto.getRandomValues(new Uint32Array(this.length)))
        .map((x) => characters[x % characters.length])
        .join('');

    this.password = password;
  }
}

export default PasswordGenerator;