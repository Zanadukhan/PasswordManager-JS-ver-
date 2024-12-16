import PasswordGenerator from "./password-generator.js";


const pass = new PasswordGenerator(10);

pass.generate();

console.log(pass.password)