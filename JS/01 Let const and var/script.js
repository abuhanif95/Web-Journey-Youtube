const accountId = 234556;
let accountEmail = "asdvbh@gmail.com";
var accountPassword = "123445";
accountCity = "Chengdu";
let accountState;

// accountId = 2
accountEmail = "wefdgy@gmail.com";
accountCity = "Sichuan";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
