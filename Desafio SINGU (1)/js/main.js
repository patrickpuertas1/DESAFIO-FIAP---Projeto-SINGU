var modal1 = document.getElementById('simpleModal');

var Editar = document.getElementById('Editar');

var closebtn = document.getElementsByClassName('closeBtn')[0];

Editar.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);

function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}

function outsideClick(){
  if(e.target == modal){
  modal.style.display = 'none';
  }
}
