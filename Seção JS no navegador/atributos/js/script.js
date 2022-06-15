let afooter = document.querySelector('footer a')


console.log(afooter.getAttribute('href'))


let link = 'https://www.google.com.br'


afooter.setAttribute('href',link)

console.log(afooter.getAttribute('href'))