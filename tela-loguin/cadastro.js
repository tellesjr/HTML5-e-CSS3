let btn = Document.querySelector(".olho")

btn.addEventListener('click', ()=>{

    let inputSenha = document.querySelector('#senha')
  


    if(iputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'text')
    }


})