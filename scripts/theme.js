const switchBtn = document.querySelector('.switch-theme')
const body = document.body

document.addEventListener('DOMContentLoaded', () => {
  let t = localStorage.getItem('theme')
  
    if(t === 'light-theme'){
      body.classList.remove('dark-theme')
      body.classList.add('light-theme')
    }
    else if(t === 'dark-theme'){
    body.classList.remove('light-theme')
    body.classList.add('dark-theme')
  }
})

switchBtn.addEventListener('click', () => {
  // body.classList.toggle('light-theme')
  // body.classList.toggle('dark-theme')
  if(body.classList.contains('light-theme')){
    body.classList.remove('light-theme')
    body.classList.add('dark-theme')
    localStorage.setItem('theme', 'dark-theme')
  }else{
    body.classList.remove('dark-theme')
    body.classList.add('light-theme')
    localStorage.setItem('theme', 'light-theme')
  }

})