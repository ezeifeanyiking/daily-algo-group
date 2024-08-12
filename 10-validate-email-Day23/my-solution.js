function validateEmail(email) {
  return email.indexOf("@") === -1
    ? false
    : email.split("@")[0].length === 0
    ? false
    : email.split("@")[1].indexOf(".") === -1
    ? false
    : true;
}

console.log(validateEmail("john@example.com")); //.toBe(true);
console.log(validateEmail("jane.doe@domain.org")); //.toBe(true);
console.log(validateEmail("invalid-email")); //.toBe(false);
console.log(validateEmail("@domain.com")); //.toBe(false);
console.log(validateEmail("user@domain")); //.toBe(false);
