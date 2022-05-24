ScrollReveal().reveal('.navbar', { delay: 300 });
ScrollReveal().reveal('.main', { delay: 300 });
ScrollReveal().reveal('.link', { delay: 300 });
ScrollReveal().reveal('.content', { delay: 300 });

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarSupportedContent'
  })

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

function Otrapag () {
    location.href = "https://www.amazon.com/-/es/Juan-Esteban-Guzm%C3%A1n-Yance-ebook/dp/B0923NLF73/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1HHAJJH46LRW7&keywords=libro+basica+para+entender+el+criptoverso&qid=1653430951&sprefix=libro+basica+para+entender+el+criptoverso%2Caps%2C95&sr=8-1";
}

