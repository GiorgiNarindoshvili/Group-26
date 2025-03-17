const form = document.getElementById('myForm');

function formSubmit() {
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const radio = form.elements.radio.value;
    

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.log("Sex" + radio);
    form.reset();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    formSubmit();
})

//checked is a boolran method which has two values true and false and this determines if our button radios or cherckbox are checked 
//checked არის ფუნქცია რომელსაც აქვს ორი არგუმენტი სიმართლე და სიცრუე და ეს განსაზღვარვს თუ ჩვენი ბათონი, რადიო ინფუთი ანდ ჩექბოქსი თუა მონიშნული