// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const LeastFavoriteCustomer='bob';


function upperCaseCustomerName(){
  return customerName = customerName.toUpperCase();
}
// the question says modify the customer Name var thats tricky bt its testing on scopes
// upperCaseCustomerName();
// console.log(customerName);
// console.log(upperCaseCustomerName(customerName));
// customerName=upperCaseCustomerName('bob');
function setBestCustomer(){
 return bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob';
}
function changeLeastFavoriteCustomer(){
    return LeastFavoriteCustomer = 'maybe bob';
}