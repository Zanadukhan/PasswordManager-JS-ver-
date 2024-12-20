import PasswordGenerator from "../../modules/password-generator";


const pass = new PasswordGenerator(12)


window.generate = () => {
    console.log('this works')
    pass.generate()
    field.value = pass.password;
    
}


let view_buttons = document.getElementsByClassName("view");
let iframe_div = document.getElementById("view-frame");
const iframe = document.getElementById('iframe');

console.log(view_buttons)

for (let button of view_buttons) {
    button.addEventListener('click', () => {
        const entryId = button.getAttribute('data-id')
        let visiblity_style = window.getComputedStyle(iframe_div)
        let iframe_visiblity = visiblity_style.getPropertyValue('visibility')
        if (iframe_visiblity === 'collapse') {
            iframe_div.style.visibility = 'visible';
        }
        iframe.src = `/entry/${entryId}`;
    })
}

export {generate}