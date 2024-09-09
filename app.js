const logoElement = document.querySelector('.logo')
const formElement = document.querySelector('.form-main')
const enrollSectionElement = document.querySelector('.enroll-section')
const footerTopElement = document.querySelector('.footer-top')
const footerBottomElement = document.querySelector('.footer-bottom')
const imageWrapperElement = document.querySelector('.image-wrapper')
const logoTextElement = document.querySelector('.logo-text')
const logoCircleElement = document.querySelector('.logo-circle')
const buttonElement = document.querySelector('.login-button div')
const passwordElement = document.getElementById('password')
const tooltipElement = document.querySelector('.tooltip')

function showPass(){
   passwordElement.type = passwordElement.type === 'password' ? 'text' : 'password'
}

// tried to show tooltip just by css but don't know why not working!!!!!!!
function showTooltip(){
    console.log(tooltipElement.style)
    tooltipElement.style.display = 'inline-block'
}

function hideTooltip(){
    tooltipElement.style.display = 'none'
}


function formHandler(event){
    event.preventDefault()
    setTimeout(()=>{
        formElement.classList.add('reverse-1')
        footerTopElement.classList.add('reverse-2')
        footerBottomElement.classList.add('reverse-2')
        enrollSectionElement.classList.add('reverse-3')
        logoTextElement.classList.add('reverse-4')
        logoCircleElement.classList.add('reverse-5')
        imageWrapperElement.classList.add('reverse-6')
        logoElement.classList.add('reverse-7')
    }, 1000)
}