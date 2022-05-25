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
    location.href = "https://www.amazon.com/-/es/gp/product/B0923NLF73/ref=dbs_a_def_rwt_bibl_vppi_i0";
}

