const select = document.getElementById('switch-lang')
const allLang = ['uk', 'en']

document.addEventListener('DOMContentLoaded', () => {
  let lang = select.value
  location.href = window.location.pathname + '#' + lang
  changeLang()
})

function changeCurrentLang() {
  let lang = select.value
  location.href = window.location.pathname + '#' + lang
  changeLang()
  document.querySelectorAll('.group__error').forEach(er => er.textContent = '')
  document.querySelectorAll('input').forEach(inpu => inpu.value = '')
}
select.addEventListener('change', changeCurrentLang)

function changeLang() {
  let hash = window.location.hash
  hash = hash.substring(1)
  if(!allLang.includes(hash)){
    location.href = window.location.pathname + '#' + 'uk'
    hash = 'uk'
  }
  for(let i in langArray){
    document.querySelector(`.group__${i}`).innerHTML = langArray[i][hash]
  }
  errorArray = Object.keys(errorLang).map(key => errorLang[key][hash])
  if(hash === 'uk') succes = 'Реєстрація успішна'
  else succes = 'Registration successful'
  console.log(succes)
}

changeLang()