const navBar = document.querySelector('.navbar')
const allList = document.querySelectorAll('li')

allList.forEach((li, index) => {
    li.addEventListener("click", e => {
        navBar.querySelector('.active-list').classList.remove('active-list')
        li.classList.add('active-list')

        const indicator = document.querySelector('.indicator')
        indicator.style.transform = `translateX(calc(${index * 90}px))` //movimenta o indicator conforme o index do evento acima

    })
})