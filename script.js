// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnOpenElement.addEventListener('click', ()=> {
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')
  }, 500)
  setTimeout(()=>{
    document.querySelector('.container-letter').classList.add('hidden');
    document.querySelector('.options').classList.add('hidden');
    document.querySelector('.main').classList.add('hidden');
    document.querySelector('.carta').classList.remove('hidden');
    document.documentElement.style.overflow = '';
  },2800)
})
btnCloseElement.addEventListener('click', ()=> {

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)

  document.querySelector('.container-letter').classList.remove('hidden');
  document.querySelector('.options').classList.remove('hidden');
  document.querySelector('.main').classList.remove('hidden');
  document.querySelector('.carta').classList.add('hidden');
})