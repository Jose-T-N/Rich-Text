//Elementes
const elements = document.querySelectorAll('.btn');
const tam_texto = document.querySelector('#tam-texto');
const negrito = document.querySelector('#negrito');
const italico = document.querySelector('#italico');
const sublinhado = document.querySelector('#sublinhado');
const lista = document.querySelector('#lista');
const lista_ordenada = document.querySelector('#lista-ordenada');
const esquerda = document.querySelector('#esquerda');
const direita = document.querySelector('#direita');
const centro = document.querySelector('#centro');
const cores = document.querySelector('#cores');
//Event
elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];
        if (command === 'createLink' || command === 'insertImage') {
            let url = prompt('Enter the link here:', 'http://');
            document.execCommand(command, false, url);
        }
        else {
            document.execCommand(command, false, null);
        }
    })
})
//tamanho do texo
tam_texto.onchange = function () {
    let tam = tam_texto.options[tam_texto.selectedIndex].value;
    document.execCommand('styleWithCss',0,true);
    document.execCommand('fontSize', 0, tam);
    console.log(tam);
}
//cor do texto
cores.onchange = function () {
    let cor = cores.options[cores.selectedIndex].value;
    document.execCommand('styleWithCss',0,true);
    document.execCommand('foreColor', 0, cor);
    console.log(cor);
}
//verificar se o texto está negrito
setInterval(function(){
    //negrito
    if(document.queryCommandState('Bold')) negrito.style.color = '#888' ;
    else{negrito.style.color = '#000'}

    //italico
    if(document.queryCommandState('Italic')) italico.style.color = '#888' ;
    else{italico.style.color = '#000'}

    //sublinhado
    if(document.queryCommandState('underline')) sublinhado.style.color = '#888' ;
    else{sublinhado.style.color = '#000'}

    //lista
    if(document.queryCommandState('insertUnorderedList')) lista.style.color = '#888' ;
    else{lista.style.color = '#000'}
    
    //lista ordenada
    if(document.queryCommandState('insertOrderedList')) lista_ordenada.style.color = '#888' ;
    else{lista_ordenada.style.color = '#000'}

    //direita 
    if(document.queryCommandState('justifyRight')) direita.style.color = '#888' ;
    else{direita.style.color = '#000'}

    //centro
    if(document.queryCommandState('justifyCenter')) centro.style.color = '#888' ;
    else{centro.style.color = '#000'}

    //esquerda
    if(document.queryCommandState('justifyLeft')) esquerda.style.color = '#888' ;
    else{esquerda.style.color = '#000'}

},100);