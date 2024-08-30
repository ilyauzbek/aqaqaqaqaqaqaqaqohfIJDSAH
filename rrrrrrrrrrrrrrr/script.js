const qu1 = prompt('Введите ссылку на кртинку')
const qu11 = prompt('Введите ссылку на кртинку 2')
const qu2 = prompt('Введите имя')
const qu3 = prompt('Введите фамилию')
const qu4 = prompt('Введите возраст')

const box = document.createElement('div')
const photo = document.createElement('img')
const photo1 = document.createElement('img')
const name = document.createElement('h1')
const surname = document.createElement('h2')
const age = document.createElement('h3')
const wrap = document.createElement('div1')
const yes = document.createElement('button')
const no = document.createElement('button')

const body = document.querySelector('body')

photo.src = qu1
photo1.src = qu11
name.innerText = qu2
surname.innerText = qu3
age.innerText = qu4

box.append(photo)
box.append(photo1)
box.append(name)
box.append(surname)
box.append(age)
box.append(wrap)

wrap.append(yes)
wrap.append(no)

box.classList = 'box'
box.style.width = '300px'
box.style.margin = '0 auto'
box.style.border = '1px solid black'

photo.style.width = '150px'
photo1.style.width = '150px'



name.style.margin = '0 auto'


yes.style.backgroundColor = 'red'
yes.style.color = 'white'
yes.style.width = '150px'
yes.style.height = '50px'
no.style.backgroundColor = 'blue'
no.style.color = 'white'
no.style.width = '50px'


body.append(box)

