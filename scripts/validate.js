const nameI = document.querySelector('#group__name')
const firstNameI = document.querySelector('#group__firstName')
const emailI = document.querySelector('#group__email')
const passwordI = document.getElementById('group__password')
const confirmPasswordI = document.querySelector('#group__confirmPassword')

const allErrors = document.querySelectorAll(`.group__error`)
allErrors.forEach(e => e.style.display = 'none')

const sendBtn = document.querySelector('.group__send-btn')

const reqError = 'Це поле не може бути пустим'
const minError = 'Мінімальна кількість символів - '
const confirmError = 'Паролі не співпадають'
const eError = 'Неправильна електронна пошта'
const pError = 'Мін. 6 символів, 1 велика літера, 1 цифра'

let errorArray = []
errorArray.push(reqError)
errorArray.push(minError)
errorArray.push(confirmError)
errorArray.push(eError)
errorArray.push(pError)

// name
nameI.addEventListener('input', () => {
    const error = document.getElementById('name__error')

    let nameText = nameI.value

    if(!nameI.value){
        error.style.display = 'block'
        error.textContent = errorArray[0]
    }else if(nameText.length < 3){
        error.style.display = 'block'
        error.textContent = `${errorArray[1]} 3`
    }else{
        error.style.display = 'none'
    }
})

// firstName
firstNameI.addEventListener('input', () => {
    const error = document.getElementById('firstName__error')

    let Text1 = firstNameI.value.trim

    if(!firstNameI.value){
        error.style.display = 'block'
        error.textContent = errorArray[0]
    }else if(Text1.length < 3){
        error.style.display = 'block'
        error.textContent = `${errorArray[1]} 3`
    }else{
        error.style.display = 'none'
    }
})

// email
emailI.addEventListener('input', () => {
    const error = document.getElementById('email__error')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let Text1 = emailI.value

    if(!emailI.value){
        error.style.display = 'block'
        error.textContent = errorArray[0]
    }else if(!emailRegex.test(Text1))
    {
        error.style.display = 'block'
        error.textContent = errorArray[3]
    }else{
        error.style.display = 'none'
    }
})

// password
passwordI.addEventListener('input', () => {
    const error = document.getElementById('password__error')
    const passwordRegex =  /^(?=.*[A-Z])(?=.*\d).{6,}$/

    let Text1 = passwordI.value

    if(!passwordI.value){
        error.style.display = 'block'
        error.textContent = errorArray[0]
    }else if(!passwordRegex.test(Text1)){
        error.style.display = 'block'
        error.textContent = errorArray[4]
    }
    else{
        error.style.display = 'none'
    }
})

// confirmPassword
confirmPasswordI.addEventListener('input', () => {
    const error = document.getElementById('confirmPassword__error')

    let Text1 = confirmPasswordI.value
    let Text2 = passwordI.value
    
    if(!confirmPasswordI.value){
        error.style.display = 'block'
        error.textContent = errorArray[0]
    }else if(Text1 !== Text2){
        error.style.display = 'block'
        error.textContent = errorArray[2]
    }
    else{
        error.style.display = 'none'
    }
})

sendBtn.addEventListener('click', () => {
    // name
    const nameError = document.getElementById('name__error')
    if(!nameI.value){
        nameError.style.display = 'block'
        nameError.textContent = errorArray[0]
    }
    else{
        nameError.style.display = 'none'
    }

    // firstName
    const firstNameError = document.getElementById('firstName__error')
    if(!firstNameI.value){
        firstNameError.style.display = 'block'
        firstNameError.textContent = errorArray[0]
    }
    else{
        firstNameError.style.display = 'none'
    }

    // email
    const emailError = document.getElementById('email__error')
    if(!emailI.value){
        emailError.style.display = 'block'
        emailError.textContent = errorArray[0]
    }
    else{
        emailError.style.display = 'none'
    }

    // password
    const passwordError = document.getElementById('password__error')
    if(!passwordI.value){
        passwordError.style.display = 'block'
        passwordError.textContent = errorArray[0]
    }
    else{
        passwordError.style.display = 'none'
    }

    // confirmPassword
    const confirmPasswordError = document.getElementById('confirmPassword__error')
    if(!confirmPasswordI.value){
        confirmPasswordError.style.display = 'block'
        confirmPasswordError.textContent = errorArray[0]
    }
    else{
        confirmPasswordError.style.display = 'none'
    }
})