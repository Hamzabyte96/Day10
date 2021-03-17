function getUsername(email) {
  var username = email;
  var email = {
  "user1@mail.com": "user1",
  "user2@mail.com": "user2"
  };

  return username;
}
getUsername("user1@mail.com");
console.log(getUsername("user1@mail.com"));

module.exports = getUsername;
