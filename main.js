// ********** UI Elements **********

const button = document.querySelector('#btn');

// ********** SUBMISSION **********

button.addEventListener('click', function(e) {
    e.preventDefault();

    let user_name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = document.querySelector('#phone').value;
    let post_code = document.querySelector('#post-code').value;

    let email_regex = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
    let phone_regex = /^(?:\+88)?01[0-9]{9}$/;
    let postal_regex = /^[0-9]{4}$/;

    // ********** Input Section **********

    if(user_name === '') {                      
        alert("Naughty Naughty, put some name..")
    } else if (email === '') {
        alert("Naughty Naughty, put some email id..")
    } else if (phone === '') {
        alert("Naughty Naughty, put some phone number..")
    } else if (post_code === '') {
        alert("Naughty Naughty, put some post code..")
    } 

    // ********** Validation Section **********

    else if (!email_regex.test(email)) {      
        alert('Wrong email id')
    } else if(!phone_regex.test(phone)) {
        alert('Wrong phone number')
    } else if(!postal_regex.test(post_code)) {
        
        alert('Wrong postal code')
    } 
    
    // ********** Data PRINT **********
    
    else {

        let form_data = {
            user_name: user_name,
            email: email,
            phone: phone,
            post_code: post_code
        }
            
        console.log('Form Data: ', form_data);
    }

    form_reset()

});


// ********** Form Reset **********

function form_reset(e) {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#post-code').value = '';
}