function validate() {
  let firstName = document.getElementById('Name').value;
  let nameValidate = /^[ა-ჰ]+$/;
  let lastName = document.getElementById('lastname').value;
  let team = document.getElementById('select').value;
  let position = document.getElementById('select1');
  let e_mail = document.getElementById('email').value;
  let e_mailValidate = /[\w\d\.]@redberry\.ge/;
  let tel = document.getElementById('phone').value;
  let telValidation = /^(\+?995)?(79\d{7}|5\d{8})$/;

  if (!firstName.match(nameValidate) && !firstName == '') {
    error.textContent = 'გამოიყენე ქართული ასოები';
    error.style.color = '#E52F2F';
    error_name.style.color = '#E52F2F';
    Name.style.border = '1.8px solid #E52F2F';
    return false;
  } else {
    error.textContent = 'მინიმუმ 2 სიმბოლო, ქართული ასოები';
    error.style.color = '#000000';
    error_name.style.color = '#000000';
    Name.style.border = '1.8px solid #8AC0E2';
  }

  if (firstName == '') {
    error.textContent = 'ველი არ უნდა იყოს ცარიელი';
    error.style.color = '#E52F2F';
    error_name.style.color = '#E52F2F';
    Name.style.border = '1.8px solid #E52F2F';
    return false;
  }

  if (firstName.length < 2) {
    error.textContent = 'მინიმუმ 2 სიმბოლო';
    error.style.color = '#E52F2F';
    Name.style.border = '1.8px solid #E52F2F';
    error_name.style.color = '#E52F2F';
    return false;
  }

  if (!lastName.match(nameValidate) && !lastName == '') {
    error2.textContent = 'გამოიყენე ქართული ასოები';
    error2.style.color = '#E52F2F';
    lastname.style.border = '1.8px solid #E52F2F';
    error_surname.style.color = '#E52F2F';
    return false;
  } else {
    error2.textContent = 'მინიმუმ 2 სიმბოლო, ქართული ასოები';
    error2.style.color = '#000000';
    error_surname.style.color = '#000000';
    lastname.style.border = '1.8px solid #8AC0E2';
  }

  if (lastName == '') {
    error2.textContent = 'ველი არ უნდა იყოს ცარიელი';
    error2.style.color = '#E52F2F';
    lastname.style.border = '1.8px solid #E52F2F';
    error_surname.style.color = '#E52F2F';
    return false;
  }

  if (lastName.length < 2) {
    error2.textContent = 'მინიმუმ 2 სიმბოლო';
    error2.style.color = '#E52F2F';
    lastname.style.border = '1.8px solid #E52F2F';
    error_surname.style.color = '#E52F2F';
    return false;
  }

  if (team == '') {
    select.style.border = '1.8px solid #E52F2F';
    return false;
  } else {
    select.style.border = '1.8px solid #EBEBEB';
  }

  if (position.value == '') {
    select1.style.border = '1.8px solid #E52F2F';
    return false;
  } else {
    select1.style.border = '1.8px solid #EBEBEB';
  }

  if (!e_mail.match(e_mailValidate) && !e_mail == '') {
    error3.textContent = 'უნდა მთავრდებოდეს @redberry.ge-ით';
    error3.style.color = '#E52F2F';
    email.style.border = '1.8px solid #E52F2F';
    error_email.style.color = '#E52F2F';
    return false;
  } else if (e_mail.match(e_mailValidate) && !e_mail == '') {
    error3.textContent = 'უნდა მთავრდებოდეს @redberry.ge-ით';
    error3.style.color = '#000000';
    error_email.style.color = '#000000';
    email.style.border = '1.8px solid #8AC0E2';
  }

  if (e_mail == '') {
    error3.textContent = 'ველი არ უნდა იყოს ცარიელი';
    error3.style.color = '#E52F2F';
    email.style.border = '1.8px solid #E52F2F';
    error_email.style.color = '#E52F2F';
    return false;
  }

  if (!tel.match(telValidation) && !tel == '') {
    error4.textContent = 'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს';
    error4.style.color = '#E52F2F';
    phone.style.border = '1.8px solid #E52F2F';
    error_tel.style.color = '#E52F2F';
    return false;
  } else if (tel.match(telValidation) && !tel == '') {
    error4.textContent = 'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს';
    error4.style.color = '#000000';
    error_tel.style.color = '#000000';
    phone.style.border = '1.8px solid #8AC0E2';
  }

  if (tel == '') {
    error4.textContent = 'ველი არ უნდა იყოს ცარიელი';
    error4.style.color = '#E52F2F';
    phone.style.border = '1.8px solid #E52F2F';
    error_tel.style.color = '#E52F2F';
    return false;
  }
  return true;
}
