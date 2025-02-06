let email = document.getElementById('email')
let form = document.getElementById('form')

// validation
form.addEventListener('submit', (e)=> {

    let errors= document.getElementById('errors')
e.preventDefault()
let allerrors= ''

if (!email.value.split('').includes('@')){
    allerrors+=' <p>The email should include an @ symbol</p>'
    }
    
    if (!email.value.split('').includes('.')){
        allerrors+=' <p>The email should include an . symbol</p>'
    }
    errors.innerHTML= allerrors 

});