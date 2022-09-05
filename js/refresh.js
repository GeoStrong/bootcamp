if (window.localStorage) {
  var elements = document.querySelectorAll('[name]');

  for (var i = 0, length = elements.length; i < length; i++) {
    (function (element) {
      var name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || '';

      element.onkeyup = function () {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}
document.getElementById('select').onchange = function () {
  localStorage.setItem('selectedtem', document.getElementById('select').value);
};

if (localStorage.getItem('selectedtem')) {
  document.getElementById('select').options[
    localStorage.getItem('selectedtem')
  ].selected = true;
}

document.getElementById('select1').onchange = function () {
  localStorage.setItem('selectedtem', document.getElementById('select1').value);
};

if (localStorage.getItem('selectedtem')) {
  document.getElementById('select1').options[
    localStorage.getItem('selectedtem')
  ].selected = true;
}

document.querySelector(document).ready(function () {
  if (localStorage.selected) {
    document.querySelector('#' + localStorage.selected).attr('checked', true);
  }
  document.querySelector('.inputabs').click(function () {
    localStorage.setItem('selected', this.id);
  });
});
