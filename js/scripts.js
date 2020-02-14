// function Accounts(){
//   this.
// }

function Account(name) {
  this.name = name
}

function Checking(balance, deposit, withdrawal) {
  this.balance = balance;
  this.deposit = deposit;
  this.withdrawal = withdrawal
}

Checking.prototype.deposit = function(add) {
  return (parseInt(balance) + parseInt(add));

}

Checking.prototype.withdrawal = function(subtract) {

    return (parseInt(balance) - parseInt(subtract));

  }

function Savings(balance, deposit, withdrawal) {
  this.balance = balance;
  this. deposit = deposit,
  this. withdrawal = withdrawal;
}

Savings.prototype.deposit = function(add) {

  return (parseInt(balance) + parseInt(add));
}

Savings.prototype.withdral = function(subtract) {

  return (parseInt(balance) - parseInt(subtract));
}


var name;
var balance;
var add;
var subtract;
// front end logic
$(document).ready(function(){
  $('form#register').submit(function(event){
    event.preventDefault();
    name = $('input#name').val();
    initialDeposit = $('input#initialDeposit').val();
    account = new Account(name);
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
