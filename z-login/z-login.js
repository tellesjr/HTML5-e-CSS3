const input = document.querySelector('input');
const button = document.querySelector('#botao');
button.addEventListener('click', botao);
function botao () {
    if(input.type == 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}
