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
 ++a 
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
/*const hello = 'Hello'
const world = 'World'

const greeting = hello + ' ' + world
console.log(greeting)
*/
// Шаблонные строки:
/*
const myName = 'Aliaksei'
const myCity = 'Minsk'

const greeting = "Hello, my is " + `${myName}` + " im live in " + `${myCity}` + '!'
console.log(greeting)
*/

// Функциональные выражения(Функция без имени):
/*function(a, b) {
    ...
}

setTimeout(function() {
    console.log('Отложенное сообщение')
}, 2000)
*/

// Стрелочные функции:
/*const myFunction = (a, b) => {
    let c 
    a = a + 1
    c = a + b
    return c
}

myFunction(5, 3)

//Стрелочная функция в вызове другой функции:
setTimeout(() => {
    console.log('Hello')
}, 1000)
*/

//Значения параметров функции по умолчанию:
/*
function multByFactor(value, multiplier = 1) {
    return value * multiplier
}

multByFactor(5, 10)


const newPost = (post, addedAt = Date()) => { //Переписать эту часть кода так, чтобы она возвращала явно!!! тайм код : 5:07:00!!!
    post,
    addedAt,
}

const firstPost = {
    id: 1,
    author: 'Aliaksei'
}

const ultraNewPost = newPost(firstPost)
console.log(ultraNewPost)
console.table(ultraNewPost)
console.dir(ultraNewPost)
*/

// Обработка ошибок: 
/*
const fnWithError = () => {
    throw new Error('Some error...')
}

fnWithError()

console.log('Continue...')
*/

// try/catch: 
/*
const fnWithError = () => {
    throw new Error('Some error...')
}

try{
    fnWithError()    
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')
*/

// Инструкции: 
// Инструкция обычно заканчтвается точкой с запятой!!!
// Исключение: Точка с запятой не требуется после блока инструкций!!!
// !!!Точку с запятой можно опускать!!!
/*
let a; 

const b = 5;

if (a > b) {
    console.log('...');
} // <-------------------- !!!Точка с запятой не нужна!!!

for (let i = 0; i++; i < 5) {
    console.log('i');
} // <-------------------- !!!Точка с запятой не нужна!!!
*/

// Выражение-инструкция:(Если выражение написано на отдельной строке)
/*
'abc';

a = a + 3;

c = a + b;

d = 'Good ' + 'Evening';

myFunction(c, d);

console.log('hey');
// Инструкция не модет быть трансформирована в выражение!!!
*/

// Как отличить инструкцию от выражения?:
/*
function myBeautifulFunction(a){
    console.log(a += 1);
}

const b = false

let a = 20
let c = 11

myBeautifulFunction(5)
myBeautifulFunction(false)
myBeautifulFunction(a + c)
myBeautifulFunction(c = a + b )
myBeautifulFunction(c = c += a)
myBeautifulFunction(c = c += a;) // <-------- с = с += a; инструкция
myBeautifulFunction(let b) // <------ let b инструкция 
*/

// Массивы(Массив - это объект с цифровыми именами свойств):

// Первый способ вызова массива:
/*
const myIntArray = [1, 2, 3]
console.log(myIntArray)

const myStrArray = ['Hi', 'Hello', ')']
console.log(myStrArray)
*/

// ----------------------------------------------------------------------------

// Второй способ вызова массива:
/*
const myIntArray2 = new Array(1, 2, 3)
console.log(myIntArray2)

const myStrArray2 = new Array('Hello', 'Hi', ')')
console.log(myStrArray2)

const myArray = [1, true, false, 'Hello']
console.log(myArray)
*/

//Массив против Объекта:
/*
const myObject = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}

console.log(myObject)

const myArray = [1, 2, 3]
console.log(myArray)
// Визуально массив и объект похожи, однако они имеют разные прототипы и поведение!!!
*/

// Чтение значений массива: 
/*
const myArray = ['Hello', 2, true, 5]

console.log(myArray)
console.log(myArray[0])
console.log(myArray[2])
console.log(myArray[1])
console.log(myArray.length)
console.log(myArray.length = 4)
console.log(myArray)
*/

// Длина массива, изменения значений массива, удаление/добавление значения массивов: 
/*
const myArray = [1, 2, 3, 4, 5]

console.log(myArray)
console.log(myArray.length)
myArray[2] = 'Lesha'
myArray[0] = false
myArray[1] = true
myArray[5] = 70
console.log(myArray)
delete myArray[2]
console.log(myArray)
console.log(myArray.length)
*/

// Методы массивов(push, pop, shift, unshift, forEach, map):
/* 
// PUSH(Добавляет новый элемент в конец массива):
const myArray = [1, 2, 3]

console.log(myArray)
myArray.push(54)
console.log(myArray)
myArray.push(false)
console.log(myArray)
*/

// POP(Удаляет элемент с конца массива):
/*
const myArray = [1, 2, 3, 4, 5, 6]

console.log(myArray)
myArray.pop()
console.log(myArray)
// Так же может возвращать в консоль удаленный элемент массива!!!
const removedElement = myArray.pop()

console.log(myArray)
console.log(removedElement)
*/

// UNSHIFT(Позволяет добавить элемент в начале массива):
/*
const myArray = [1, 2, 3]

console.log(myArray)
myArray.unshift(true)
console.log(myArray)
myArray.unshift(false)
console.log(myArray)
*/

// SHIFT(Аналогичен методу POP. Удаляет первый элемент в массиве):
/*
const myArray = [true, 1, 2, 3, 4]

console.log(myArray)
myArray.shift()
console.log(myArray)

// Так же можно вернуть в консоль удаленный элемент как при использовании метода POP!!!
const removedElement = myArray.shift()
console.log(myArray)
console.log(removedElement)
*/
// Все эти методы(push, pop, unshift, shift) не создают новый массив! Они мутируют оригинальный массив!!!

//forEach(Не меняет оригинальный массив!!!)
/*
// С помощью этого метода можно перебрать каждый элемент массива и выполнить определенные действия с этими элементами!!!
// Этот метод не должен ничего возвращать. Он нужен исключительно для перебора элемментов и выполнения каких либо действий с ними
const myArray = [1, 2, 3, 10]
console.log(myArray)

myArray.forEach(el => console.log(el * 2))// -------- тут мы передаем функцию(В этом случае колбэк функцию), так же мы не меняем оригинальный массивб мы лишь выполняем действия с его элеменатми!

console.log(myArray)
*/

// MAP(Возвращает новый массив):
/*
// MAP всегда вернет массивой той длины, которой был оригинальный массив!
//Создает новый массив и возвращает колбэк функцию определенное количество раз, в зависимости от количества элементов в массиве!
// Так же как и в методе forEach, ожидает колбэк функцию в качестве аргумента!!!
const myArray = [1, 2, 3]
console.log(myArray)
// Ниже мы присвоили метод MAP новой переменной на основе старой переменной, где новая переменная приняла значения старого массива!
// А так же в функции мы берем каждый элемент массива и умножаем его на три, а полученные значения присваиваем новому массиву!
const newArray = myArray.map(el => el * 3)//Создает новый массив и формирует его исходя из результатов этой колбэк функции
console.log(newArray)//Новый массив [3, 6, 9]
console.log(myArray)//Старый массив(не изменился) [1, 2, 3]
*/

// Деструктизация объектов:
// Для объектов фигурные скобки
/* 
const myProfile = {
    name: 'Aliaksei',
    password: 1234, 
    hasSignedAgreement: true,
}

// Ниже происходит объявление новых переменных и присваивание значений на основе значений свойств объекта
// Перед равно находятся названия новых переменных которые будут автоматически объявлены
// После равно находится переменная содержащая объект
const {name, password, hasSignedAgreement} = myProfile

console.log(name)
console.log(password)
console.log(hasSignedAgreement)
*/

// Деструктуризация массивов:
// Для массивов квадратные скобки
/*
const vegetables = ['cucumber', 'potato', 'corn']

const [vegetableOne, vegetableTwo, vegetableThree] = vegetables

console.log(vegetableOne)
console.log(vegetableTwo)
console.log(vegetableThree)
console.log(vegetables)
*/

// Деструктуризация в функциях:
/* 
const myProfile = {
    name: 'Aliaksei',
    password: 1234, 
    hasSignedAgreement: true,
}

//       Деструктуризация параметров
//                     |
//                     | 
//                     |
//                     |
//                     V
const myInfo = ({name, password}) => {
    if (!password) {
        return `User ${name} has no password`
    }

    return `User ${name} password is ${password}`
}

console.log(myInfo(myProfile))
*/

// Условные конструкции(if, if...else, switch, тернарный оператор):
/*
let a = 20
let b = 20
if (a > b == true) {
    console.log('a bigger than b !')
}
else if (a < b == true) {
    console.log('a smaller than b !')
} else {
    console.log('both numbers are equal !')
}
*/
// IF: 
/*
if (Условие) {
    //Блок кода, выполняемый однократно, если Условие правдиво
}

let val = 10

if (val > 5) {
    val += 20
}

console.log(val)

const person = {
    age: 20
}
if (!person.name) {
    console.log('Имя не указано')
}
*/

// IF ELSE:
/*
if (Условие) {
    //Блок кода, выполняемый однократно, если Условие правдиво
} else {
    // Блок кода, выолняемый однократно, если Условие ложно
}


let val = 10

if (val < 5) {
    val += 20
} else {
    val -= 20
}
console.log(val)
*/

// IF ELSE IF:
/*
if (Условие) {
    //Блок кода, выполняемый однократно, если Условие правдиво
} else if (Условие 2) {
    // Блок кода, выолняемый однократно, если Условие 2 правдиво
} else {
    // Блок кода, выполняемый однократно, если предыдушие условия ложны
}
*/

/*
let a = 20
let b = 20
if (a > b == true) {
    console.log('a bigger than b !')
} else if (a < b == true) {
    console.log('a smaller than b !')
} else {
    console.log('both numbers are equal !')
}
*/

// Предпочтительный формат IF:
/*
if (Условие 1) {
    //Блок кода, выполняемый однократно, если Условие 1 правдиво
}

if (Условие 2) {
    //Блок кода, выполняемый однократно, если Условие 2 правдиво
}

if (Условие 3) {
    //Блок кода, выполняемый однократно, если Условие 3 правдиво
}


const age = 25

if (age >= 18) {
    console.log('Is Adult')
}

if (age < 18 && age >= 12) {
    console.log('Is teenager')
}
if (age <= 18 && age <= 12) {
    console.log('Is child')
}

*/

// Использование if в функциях:
/*
const sumOfPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of arguments is not a number'
    }
    if (a <= 0 || b <= 0){
        return 'Numbers are not positive'
    }
    return a + b
}

console.log(sumOfPositiveNumbers(5, 0))
*/


// Оператор switch&case:
/*
switch (Выражение) {
    case A:
        //Действия если Выражение === А
        break 
        // break обязательно!!! Если не будет break то неважно, равно ли действие А или нет, мы все ровно пойдем анализировать кейсы дальше
    case B:
        //Действия если Выражение === B
        break
    default: // выполняется, если выражение не равно А и не равно В
    //Действия по умолчанию
}


const month = 4

switch (month){
    case 12:
        console.log('Это декабрь')
    break
    case 5: 
        console.log('Это май')
    break
    case 4:
        console.log('Это aпрель')
    break
    default: 
        console.log('Тут нет нужного месяца...')
}
*/

// Тернарный оператор(Имеет 3 операнда!!!):

// Конструкция с тернарным оператором это выражение!!!
// Выражение всегда возвращает значение!!!

//Синтаксис тернарного оператора: 
/*
Условие ? Выражение 1 : Выражение 2
*/
//  / \
//   |
//   |
//   |
//   |
// Любое выражение

// Возвращает результат Выражения 1 либо Выражения 2
// ? и : - это часть синтаксиса тернарного оператора!!!

// Как следует записывать тернарный оператор:
/*
Условие
 ? Выражение 1
 : Выражение 2
*/

/*
const value = 10
value
 ? console.log('Условие истинно')
 : console.log('Условие ложно')



 const value1 = 11
 const value2 = 30

 value1 && value2 ? myFunction(value1, value2) : myFunction2()


 let value = 11
 console.log(value >= 0 ? value : -value)

 value = -5 
const res = value >= 0 ? value : -value
console.log(res)
*/


// Циклы:
// ЦИКЛЫ МОЖНО ИСПОЛЬЗОВАТЬ ДЛЯ МАССИВОВ, ОДНАКО ДЕЛАТЬ ЭТО НЕ РЕКМОЕНДУЕТСЯ!!!
// ЛУЧШЕ ИСПОЛЬЗОВАТЬ ФУНКЦИИ ВЫСШЕГО ПОРЯДКА МАССИВОВ, ТАКИЕ КАК: forEach, map, reduce 

// Типы циклов:
/*
1. for
2. for ... in ...
3. while
4. do ... while ...
5. for ... of ...
*/

// FOR:
/*
for (Начальная инструкция; Условие; Итерационное действие) {
    Блок кода, выполняемый на каждой итерации
}
/*

for (let i = 0; i < 5; i++) {
    console.log(i)
}
*/

/*
// ИПОЛЬЗОВАНИЕ МЕТОДА МАССИВА FOREACH, ДЛЯ ПЕРЕБОРА ЕЛЕМЕНТОВ МАССИВА:
const myArray = ['first', 'second', 'third']
myArray.forEach((element, index) => {
    console.log(element, index)
})
*/

// ЦИКЛ WHILE:
// ЦИКЛ ВЫПОЛНЯЕТСЯ ПОКА УСЛОВИЕ ПРАВДИВО
// ЕСЛИ УСЛОВИЕ ЛОЖНО, ЦИКЛ НЕ ВЫПОЛНИТСЯ НИ РАЗУ!!!

/*
while (Условие) {
    Блок кода, выполняемый на каждой итерации
}
*/

/*
let i = 0

while (i < 5) {
    console.log(i)
    i++
}
*/

// БЕСКОНЕЧНЫЙ ЦИКЛ:
/*
let i = 0
while (i < 5) {
    console.log(i)
}
*/

// ЦИКЛ DO WHILE:
/*
do {
    Блок кода, выполняемый на каждой итерации
} while (Условие)
*/

/*
let i = 0

do {
    console.log(i)
    i++
}while (i < 5)
*/


// ЦИКЛ FOR IN:
/*
for (key in Object) {
    Действия с каждым свойством объекта
    Значения свойства - Object[key]
}
*/

/*
const myObject = {
    name: 'Aliaksei',
    surname: 'Matsiyuk',
    age: 18
}

for (const key in myObject) {
    console.log(key, myObject[key])
}
*/


// FOR IN ДЛЯ МАССИВОВ(НЕ РЕКОМЕНДУЕТСЯ):

/*
const myArray = [true, 10, 'abc']
for (const key in myArray) {
    console.log(myArray[key])
}
*/


// ЦИКЛ FOR OF:
// !!!не для объектов!!!

/*
for (Element of Iterable) {
    Действия с определенным элементом
}
*/

/*
const myString = 'Hey'
for (const letter of myString) {
    console.log(letter)
}
*/

// Методы:






