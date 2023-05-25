// Zuerst greifen wir auf die relevanten Elemente des Formulars zu
let nick = document.querySelector('#nick');
let validate = document.querySelector('#validate');
let vname = document.querySelector('#vname');
let nname = document.querySelector('#nname');
let bday = document.querySelector('#bday');
let legal = document.querySelector('#legal');

let errorBox = document.querySelector('#error_box');
let errorMessage = document.querySelector('#error_message');

// Dann erstellen wir Funktionen zur Validierung jedes Feldes
function isNickValid() {
  // Das Nickname-Feld darf nicht leer sein
  return nick.value !== '';
}

function isEmailOrPhoneValid() {
  // Hier ist eine einfache Prüfung auf das Vorhandensein eines "@"-Symbols oder einer Ziffer
  return validate.value.includes('@') || /\d/.test(validate.value);
}

function isVnameValid() {
  // Das Vorname-Feld darf nicht leer sein
  return vname.value !== '';
}

function isNnameValid() {
  // Das Nachname-Feld darf nicht leer sein
  return nname.value !== '';
}

function isBdayValid() {
  // Das Geburtsdatum-Feld darf nicht leer sein
  return bday.value !== '';
}

function isLegalChecked() {
  // Die rechtliche Zustimmung muss überprüft werden
  return legal.checked;
}

// Überwachen wir die Eingabe-Events für jedes Feld
nick.addEventListener('input', function() {
  if (!isNickValid()) {
    errorBox.style.display = 'block';
    errorMessage.textContent = 'Nickname ist erforderlich.';
  } else {
    errorBox.style.display = 'none';
  }
});

validate.addEventListener('input', function() {
  if (!isEmailOrPhoneValid()) {
    errorBox.style.display = 'block';
    errorMessage.textContent = 'Gültige E-Mail-Adresse oder Handynummer erforderlich.';
  } else {
    errorBox.style.display = 'none';
  }
});

vname.addEventListener('input', function() {
  if (!isVnameValid()) {
    errorBox.style.display = 'block';
    errorMessage.textContent = 'Vorname ist erforderlich.';
  } else {
    errorBox.style.display = 'none';
  }
});

nname.addEventListener('input', function() {
  if (!isNnameValid()) {
    errorBox.style.display = 'block';
    errorMessage.textContent = 'Nachname ist erforderlich.';
  } else {
    errorBox.style.display = 'none';
  }
});

bday.addEventListener('input', function() {
  if (!isBdayValid()) {
    errorBox.style.display = 'block';
    errorMessage.textContent = 'Geburtsdatum ist erforderlich.';
  } else {
    errorBox.style.display = 'none';
  }
});

legal.addEventListener('input', function() {
  if (!isLegalChecked()) {
    errorBox.style.display = 'block';
    errorMessage.textContent = 'Sie müssen bestätigen, dass Sie volljährig sind.';
  } else {
    errorBox.style.display = 'none';
  }
});
