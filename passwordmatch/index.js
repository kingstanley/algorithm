function checkPassword(password) {
    const containPassword = /password/i;
    // const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])");
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  
  return  !containPassword.test(password) &&  regex.test(password);
}

// console.log(checkPassword('afalopASswordaNospsp424+adkssskko8930sl'));
console.log(checkPassword('PassWoStan123@*'));