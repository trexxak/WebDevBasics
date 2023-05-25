
// Aufgaben zu 3_js_function:

// 1
document.querySelector('.display').textContent = 'Hallo Welt!';

// 2
document.querySelector('.clear').addEventListener('click', function() {
    document.querySelector('.display').textContent = '';
});

// 3
document.querySelectorAll('.number').forEach(function(button) {
    button.addEventListener('click', function() {
        document.querySelector('.display').textContent += button.value;
    });
});