function calculateBudget() {
  //runs when button is clicked
  alert('Calculations!');
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
}

function closeModal() {

}

$('form a.calculate').on('click', calculateBudget);
