// ********** UI Elements **********

const button = document.querySelector('#btn');
const message = document.querySelector('#msg');

// ********** SUBMISSION **********

button.addEventListener('click', function(e) {
    e.preventDefault();

    let user_name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let postal_code = document.querySelector('#postal-code').value;

    let email_regex = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
    let phone_regex = /^(?:\+88)?01[0-9]{9}$/;
    let postal_regex = /^[0-9]{4}$/;

    // ********** Input Section **********

    if(user_name === '') {                      
        alert("Add Your Name")
    } else if (email === '') {
        alert("Add Your Email ID")
    } else if (phone === '') {
        alert("Add Your Phone Number")
    } else if (postal_code === '') {
        alert("Add Your Postal Code")
    } 

    // ********** Validation Section **********

    else if (!email_regex.test(email)) {      
        alert('❌Invalid Email ID')
    } else if(!phone_regex.test(phone)) {
        alert('❌Invalid Phone Number')
    } else if(!postal_regex.test(postal_code)) {
        alert('❌Invalid Postal Code')
    } 
    
    // ********** Data PRINT **********
    
    else {

        let form_data = {
            user_name: user_name,
            email: email,
            phone: phone,
            postal_code: postal_code
        }
            
        console.log('Form Data: ', form_data);
        // confirm("✅Data Successfully Printed on Console")
        
        
        submit_msg();
    }

    form_reset()

});

function submit_msg() {
    message.innerHTML = "✅Data Successfully Printed on Console";
        
    setTimeout( () => {
        message.innerHTML = '';
    }, 1500);
}


// ********** Form Reset **********

function form_reset(e) {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#postal-code').value = '';
    // message.value = null;
}