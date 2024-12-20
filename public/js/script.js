import PasswordGenerator from "../../modules/password-generator";


const pass = new PasswordGenerator(12)


window.generate = () => {
    console.log('this works')
    pass.generate()
    field.value = pass.password;
    
}

export {generate}