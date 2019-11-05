// function Accounts(){
//   this.
// }

function BankAccount(name, initialDeposit) {
  this.name = name,
  this.initialDeposit = initialDeposit
}



BankAccount.prototype.deposit = function(add) {
  return (parseInt(initialDeposit) + parseInt(add));

}

BankAccount.prototype.withdrawal = function(subtract) {

    return (parseInt(initialDeposit) - parseInt(subtract));

}


var account;
var name;
var initialDeposit;
var add;
var subtract;
// front end logic
$(document).ready(function(){
  $('form#register').submit(function(event){
    event.preventDefault();
    name = $('input#name').val();
    initialDeposit = $('input#initialDeposit').val();
    account = new BankAccount(name, initialDeposit);
    $('p#currentBalance').text(initialDeposit);

  });
  $('form#funds').submit(function(event){
    event.preventDefault();
    add = $('input#deposit').val();
    $('p#currentBalance').text(account.deposit(add));
    initialDeposit = account.deposit(add);
    subtract = $('input#withdrawal').val();
    $('p#currentBalance').text(account.withdrawal(subtract));
    initialDeposit = account.withdrawal(subtract);

  });
});
