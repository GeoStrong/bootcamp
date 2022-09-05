function validate() {
  let file = document.getElementById('file');
  let laptopName = document.getElementById('laptop_name').value;
  let nameValidation = /^[A-Za-z0-9!@#$%^&*()_+=]*$/;
  let brand = document.getElementById('select');
  let cpu = document.getElementById('select1');
  let cpuCore = document.getElementById('cpu_core').value;
  let cpuValidation = /^[0-9]*$/;
  let cpuFlow = document.getElementById('cpu_flow').value;
  let ram = document.getElementById('laptop_ram').value;
  const memory = document.querySelectorAll('input[name="memory_type"]');
  const selected = [...memory].some((radio) => radio.checked);
  let price = document.getElementById('laptop_price').value;
  const status = document.querySelectorAll('input[name="lapt_status"]');
  const selected2 = [...status].some((radio) => radio.checked);

  if (file.files.length === 0) {
    error_file.style.color = '#E52F2F';
    file.style.border = '2.8px solid #E52F2F';
    return false;
  } else {
    error_file.style.color = '#62A1EB';
    file.style.border = '2.8px solid #62A1EB';
  }

  if (!laptopName.match(nameValidation) && !laptopName == '') {
    error.textContent = 'გამოიყენე ლათინური ასოები, ციფრები, !@#$%^&*()_+=';
    error.style.color = '#E52F2F';
    laptop_name.style.border = '1.8px solid #E52F2F';
    error_name.style.color = '#E52F2F';
    return false;
  } else if (laptopName.match(nameValidation) && !laptopName == '') {
    error.textContent = 'ლათინური ასოები, ციფრები, !@#$%^&*()_+=';
    error.style.color = '#000000';
    error_name.style.color = '#000000';
    laptop_name.style.border = '1.8px solid #8AC0E2';
  }

  if (laptopName == '') {
    error.textContent = 'ველი არ უნდა იყოს ცარიელი';
    error.style.color = '#E52F2F';
    laptop_name.style.border = '1.8px solid #E52F2F';
    error_name.style.color = '#E52F2F';
    return false;
  }

  if (brand.value == '') {
    brand.style.border = '1.8px solid #E52F2F';
    return false;
  } else {
    brand.style.border = '1.8px solid #EBEBEB';
  }

  if (cpu.value == '') {
    cpu.style.border = '1.8px solid #E52F2F';
    return false;
  } else {
    cpu.style.border = '1.8px solid #EBEBEB';
  }

  if (!cpuCore.match(cpuValidation) && !cpuCore == '') {
    error2.textContent = 'გამოიყენე მხოლოდ ციფრები';
    error2.style.color = '#E52F2F';
    cpu_core.style.border = '1.8px solid #E52F2F';
    error_core.style.color = '#E52F2F';
    return false;
  } else if (cpuCore.match(cpuValidation) && !cpuCore == '') {
    error2.textContent = 'მხოლოდ ციფრები';
    error2.style.color = '#000000';
    error_core.style.color = '#000000';
    cpu_core.style.border = '1.8px solid #8AC0E2';
  }

  if (cpuCore == '') {
    error2.textContent = 'ველი არ უნდა იყოს ცარიელი';
    error2.style.color = '#E52F2F';
    error_core.style.color = '#E52F2F';
    cpu_core.style.border = '1.8px solid #E52F2F';
    return false;
  }

  if (!cpuFlow.match(cpuValidation) && !cpuFlow == '') {
    error3.textContent = 'გამოიყენე მხოლოდ ციფრები';
    error3.style.color = '#E52F2F';
    cpu_flow.style.border = '1.8px solid #E52F2F';
    error_flow.style.color = '#E52F2F';
    return false;
  } else if (cpuFlow.match(cpuValidation) && !cpuFlow == '') {
    error3.textContent = 'მხოლოდ ციფრები';
    error3.style.color = '#000000';
    cpu_flow.style.border = '1.8px solid #8AC0E2';
    error_flow.style.color = '#000000';
  }

  if (cpuFlow == '') {
    error3.textContent = 'ველი არ უნდა იყოს ცარიელი';
    error3.style.color = '#E52F2F';
    error_flow.style.color = '#E52F2F';
    cpu_flow.style.border = '1.8px solid #E52F2F';
    return false;
  }

  if (!ram.match(cpuValidation) && !ram == '') {
    error4.textContent = 'გამოიყენე მხოლოდ ციფრები';
    error4.style.color = '#E52F2F';
    laptop_ram.style.border = '1.8px solid #E52F2F';
    error_ram.style.color = '#E52F2F';
    return false;
  } else if (ram.match(cpuValidation) && !ram == '') {
    error4.textContent = 'მხოლოდ ციფრები';
    error4.style.color = '#000000';
    laptop_ram.style.border = '1.8px solid #8AC0E2';
    error_ram.style.color = '#000000';
  }

  if (ram == '') {
    error4.textContent = 'ველი არ უნდა იყოს ცარიელი';
    error4.style.color = '#E52F2F';
    laptop_ram.style.border = '1.8px solid #E52F2F';
    error_ram.style.color = '#E52F2F';
    return false;
  }

  if (!selected) {
    error_memory.style.color = '#E52F2F';
    warning.style.color = '#C9CB52';
    return false;
  } else {
    error_memory.style.color = '#000000';
    warning.style.color = '#ffffff';
  }

  if (!price.match(cpuValidation) && !price == '') {
    error5.textContent = 'გამოიყენე მხოლოდ ციფრები';
    error5.style.color = '#E52F2F';
    laptop_price.style.border = '1.8px solid #E52F2F';
    error_price.style.color = '#E52F2F';
    return false;
  } else if (price.match(cpuValidation) && !price == '') {
    error5.textContent = 'მხოლოდ ციფრები';
    error5.style.color = '#000000';
    laptop_price.style.border = '1.8px solid #8AC0E2';
    error_price.style.color = '#000000';
  }

  if (price == '') {
    error5.textContent = 'ველი არ უნდა იყოს ცარიელი';
    error5.style.color = '#E52F2F';
    error_price.style.color = '#E52F2F';
    laptop_price.style.border = '1.8px solid #E52F2F';
    return false;
  }

  if (!selected2) {
    error_status.style.color = '#E52F2F';
    warning2.style.color = '#C9CB52';
    return false;
  } else {
    error_status.style.color = '#000000';
    warning2.style.color = '#ffffff';
  }
  // return true;
  return selected;
}
