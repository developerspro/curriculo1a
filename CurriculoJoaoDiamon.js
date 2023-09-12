function typeWrite (elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() =>  elemento.innerHTML += letra , 160 * i)
    });
}




const titulo = document.querySelector('.nomepessoal');
typeWrite (titulo);
typeWrite (document.querySelector('.jefferson'))