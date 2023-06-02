const list = document.querySelectorAll('.list');
console.log(list)
function activeLink() {
    list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    })
}

list.forEach(ele => {
    ele.addEventListener('click', activeLink)
})