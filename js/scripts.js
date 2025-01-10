const btn = document.getElementById('js-btn-start');
const input = document.getElementById('js-input-number');
const mensagem = document.getElementById('js-mensagem');
const numParaAdivinhar = Math.floor(Math.random() * 10) + 1;

btn.addEventListener('click', () =>{
    const number = document.getElementById('js-input-number').value;

    if(!number){
        mensagem.innerText = 'Digite alguma coisa, boy!'
    }else if (number == numParaAdivinhar){
        input.classList.add('sucess');
        mensagem.innerText = 'Você ganhou! Get out on my way!'
        setTimeout(() =>{
            mensagem.innerText = "";
            input.classList.remove('sucess');
        },3000)
        
    }else{
        input.classList.add('wrong');
        mensagem.innerText = 'Errado, tente novamente!'
        setTimeout(() =>{
            mensagem.innerText = "";
            input.classList.remove('wrong');
        },3000)
    }
})