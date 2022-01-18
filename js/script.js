const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = ['Analista de Sistemas','Densenvolvedor Front End']
let idx = 1
let speed = 300 / 2
let i =0
var nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})




// ocultar menu ao clique no link

  navLinks.forEach((l) => {
    if( document.documentElement.clientWidth < 992){
    l.addEventListener('click', () => { bsCollapse.toggle() })
    }
})



// Tirar transparencia ao rolar a pagina
      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-dark', 'shadow');
        } else {
          nav.classList.remove('bg-dark', 'shadow');
        }
       
      });

      
// Escrever texto no banner
writeText()
function writeText(){
      textEl.innerText = text[i].slice(0, idx)
    idx++
    

    if(idx > text[i].length){
        idx = 1
        i++
    }
    if(i == text.length){
      i=0
    }
    
    setTimeout(writeText, speed)
     
    
}

