function calculateBudget() {
  //runs when button is clicked
  if (validForm()){
    openModal('Form is valid');
  } else {
    openModal('Form is not valid');
  }
}

function validForm() {
  var numberOfFields = $('form input').length,
  numberOfValidFields = 0;

  $('form input').each(function (){
    if ($(this).val().length !== 0){
      numberOfValidFields += 1
    }
  });
  return numberOfFields === numberOfValidFields;
}

function openModal(content) {
  //modal handling goes here
  //takes a string as an arg to know what to display
  closeModal();
  var closeBtn = '<div class="modal-close">Close</div'>
  $('body').append('<div class="modal">' + closeBtn + content + '</div>');
  $('.modal-close').one('click', closeModal);
}

function closeModal() {
  $('.modal').remove();
}

$('form a.calculate').on('click', calculateBudget);
