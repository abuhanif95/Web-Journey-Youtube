function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const tea = new createUser("tea", "tea@gmail.com", "1234");
console.log(tea);
