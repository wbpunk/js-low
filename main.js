// Вложенные свойства:

/*const myCompany = {
    name: 'Bogomol',
    info: { //вложенный объект
        year: 2005,
        country: 'Paris'
    }
}
console.log(myCompany)
console.log(myCompany.info)
delete myCompany.info['year']//скобочная запись
console.log(myCompany.info.year)
*/

// Сокращенный формат записи свойств:
/*const name = 'Aliaksei'
const password = 1234

const userProfile = {
    name,//(сокращенный формат записи) его можно использовать в том случае, если у свойства такое же название как и у значения свойства.Нужно это для того, чтобы не дублировать слова
    userPassword: password
} */

/* Глобальные объекты:
 for node.js: global/globalThis
 for WebBrowser: window/globalThis 
 for WebBrowser: window/globalThis 
*/

// Методы объекта:
/*const myCompany = {
    country: 'USA',
    name: 'Godsfelling',
    companySize() { // Метод объекта
        console.log('The company size is about 300m')
    }
 }
 myCompany.companySize() // Вызов метода объекта 
 console.log(myCompany.name)
 console.log(myCompany)
*/

// JSON(JAVASCRIPT OBJECT NOTATION):
/*
 JSON.parse() - Если нужно JSON конвертировать в ОБЪЕКТ
 JSON.stringify() - Если нужно конвертировать ОБЪЕКТ в JSON
*/

// Мутация в JavaScript:
// Мутация объекта на который ссылается переменная
/*const person = {
    name: 'Aliaksei',
    age: 18,
    gender: 'male'
}
console.log(person) // {name: 'Aliaksei', age: 18, gender: 'male'}


person.color = 'white'
person.name = 'Maksim'
person.age = 20
console.log(person) // {name: 'Maksim', age: 20, gender: 'male', color: 'white'} (оригинал объекта не изминился! Так как переменная хранит лишь ссылку на объект )

// Мутация копий:
const person = {
    name: 'Lesha',
    age: 18
}
const person2 = person

person2.name = 'Maksim'
person2.age = 20
console.log(person) // person поменялся только потому что эти переменные(person и person2) ссылаются на один и тот же объект
console.log(person.age)
*/

// Как избежать мутаций:

// (1 Вариант)(плохой вариант): 
// const person2 = Object.assign({}, person) - создается новый объект и запишет в него все свойства объекта person, следоватьельно будет меняться только новый объект(person2) а не оригинал.
// Однако если у объекта есть вложенные объекты, то ссылки на них сохранятся

// (2 Вариант)(плохой вариант): 
// const person2 = {...person} - (spread/оператор разделения объекта на свойства), ссылки на вложенные объекты сохраняются.

// (3 Вариант)(хороший вариант):
// const person2 = JSON.parse(JSON.stringify(person)) - происходит двойная конвертация: ОБЪЕКТ в JSON, JSON в ОБЪЕКТ, ссылки на вложеннные объекты не сохраняются.


// Функции:
/*let a = 10
let b = 12

function sum(){
    const c = a + b
    console.log(c)
}

sum(a, b)

a = 400
b = 500

sum(a, b)

function myFn(a, b){
    let c 
    a = a + 1
    c = a + b
    return c 
}

output1 = myFn(10, 15)
output2 = myFn(1, 5)
output3 = myFn(17, 25)
console.log(output1)
console.log(output2)
console.log(output3)

function myVoid(){}
myVoid()
*/

//Передача значения по ссылке:
//Не рекомендуется мутировать внешние объекты внутри функции(person и person2)!!!
/*const personOne = {
    age: 15,
    name: 'Aliaksei'
}

const personTwo = {
    age: 18,
    name: 'Maksim'
}

function increasePersonAge(person) {
    person.age += 1
    return person
}

function decreasePersonAge(person2) {
    person2.age += 1
    return person2
}


increasePersonAge(personOne)
console.log(personOne.age)

decreasePersonAge(personTwo)
console.log(personTwo.age)

//Создание копии объекта:
const personOne = {
    age: 16,
    name: 'Aliaksei'
}

function increasePersonAge(person){
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)
*/

// Колбэк функции:
/* 
function anotherFunction() {
 console.log(1 + 6)
}

function fnWithCallback(callbackFunction){
    callbackFunction()
}
fnWithCallback(anotherFunction)

function printMyName() {
    console.log('Aliaksei')
}
setTimeout(printMyName, 3000) // setTimeout - встроенная колбэк функция. Вызывает функцию printMyName через определенное количество времени
*/
/*Правила работы с функциями:
1. Называть функции исходя из выполняемых задач
2. *Одна* функция должна выполнять *одну* задачу
3. Не рекомендуется изменять внешние относительно функции переменные
*/

// Области видимости: 
/*let a 
let b //----------------------------------------------
//                                                   |
function myFn() {//--                                |
    let b//         |                                |
    a = false//     |--> локальная область видимости |
    b = 10//        |--> область видимости функции   |
    console.log(b)//|                                |----> глобальная область видимости
}//------------------                                |
//                                                   |
myFn()//                                             |
console.log(a)//                                     |
console.log(b)//--------------------------------------
*/

// Цепочка областей видимости: 
/*const a = 10

function myFn(){
    function innerFn(){
        console.log(a)
    }
    innerFn()
}

myFn()
*/


// Строгий режим:
// В начале программы вписать - 'use strict' --> !!! запрещает использование необъявленных переменных !!!:
/*'use strict'
function myFn(){
    function innerFn(){
        a = true // Uncaught ReferenceError ReferenceError: a is not defined at innerFn
        console.log(a)
    }
    innerFn()
}

myFn()
*/

// Операторы: 
/*
 Арифметические: +, -, *, /
 Сравнения: ===, !==, <=, >=
 Логические: !, &&, ||
 Присваивания: =
*/

// Текстовые операторы: 
// typeof, instanceof, new, delete

// Инфиксная запись(Оператор находится между операндами):
/*
 a = true
 a + b
 a += 5
 a || b
 a > b
*/

// Префиксная запись(Оператор находится слева от операнда):
/*
 a++ 
 delete obj.a
 tupeof a 
*/

// Постфиксная запись(Оператор находится справа от операнда):
/*
 a++
 myFunction()
*/

// Логические операторы(Более подробно): 
/*
 !  - не - всегда возвращает значение boolean(true or false)
 && - и
 || - или
*/

// Оператор ... :
/*const person = {
    name: 'Aliaksei',
    surname: 'Matsiuyk'
}

const personAge = {
    ...person,
    age: 18,
    adult: true

}

console.table(personAge)
*/

// Объединение объектов с помощью оператора ...
/*const bookFilling = {
    topic: 'Dragons',
    width: 18,
    height: 20
}

const bookPrice = {
    price: '200$'
}

const book = {
    ...bookFilling,
    ...bookPrice
}

console.table(book)
*/

// Конкатенация строк: 








