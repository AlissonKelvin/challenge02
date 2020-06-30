/* JAVASCRIPT */

const modalOverlay = document.querySelector('.modal-overlay'); // pegando a seção inteira.
const cursos = document.querySelectorAll('.curso');// pega todos os cursos
const  modal = document.querySelector('.modal');

cursos.forEach(curso => { //percorrendo o array de cursos
        curso.addEventListener('click', function(){

            const idCurso = curso.getAttribute('id');
 

            modalOverlay.classList.add('active'); //acrescenta a classe active p/ ativar o modal
            modalOverlay.querySelector('iframe').src= `https://rocketseat.com.br/${idCurso}`; //poem o video dinamicamente no modal
        });
});

modalOverlay.querySelector('.close').addEventListener('click', function(){ //função que fecha o modal

    modalOverlay.classList.remove('active') //remove a classe active 

});

modal.querySelector('.modal span').addEventListener('click', function(){

    if(modal.classList.contains('maximize')== true){

        modal.classList.remove('maximize');
    }else{
        modal.classList.add('maximize');
    }

});

