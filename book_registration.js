const memberName = document.querySelector('#member_name')
const memberPhone = document.querySelector('#member_phone')
const memberIssuedBook = document.querySelector('#member_issued_book')
const submitBtn = document.querySelector('button')
const formResponse = document.querySelector('.form_response')


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    formResponse.style.display = 'none'
    if(memberName.value && memberPhone.value && memberIssuedBook.value){
        handleShowresponse('success')
    }else{
        handleShowresponse('failure')
    }
})


function handleShowresponse (state) {
    formResponse.style.display = 'block'
    if(state === 'success'){
        formResponse.innerText = 'Form Submitted Successfully'
        formResponse.classList.add('success')
        formResponse.classList.remove('failure')
    }else if(state === 'failure'){
        formResponse.innerText = 'Please Fill All The Details'
        formResponse.classList.add('failure')

    }
}