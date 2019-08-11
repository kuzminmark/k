// a = 0;
// let a = 0 ? true : false;
// console.log('a->', a);
//a = фолс, потому что 0 - явно ложное значение


// a = ?
// let a = '0' ? true : false;
// console.log('a->', a);
// a = тру, тип данных - строка


// a = ?
// let a = {} ? true : false;
// console.log('a->', a);
// а = тру, тип данных - объект


// a = ?
// let a = [] ? true : false;
// console.log('a->', a);
//а = тру, тип данных - массив


// a = ?
// let a = '' ? true : false;
// console.log('a->', a);
//a = фолс, потому что '' - пустая строка, явно ложное значение


// let a;
// if (1) { 
//   a = true;
// } else {
//     a = false;
// }
// console.log('a->', a);
//a = тру, потому что возвращено значение - число


// a = ?
// let a;
// console.log('a->', a);
// undefined, потому что переменная объявлена, но не определена


// a = ?
// let a;
// let b = 1;
// let c = '1';
// a = b + c;
// console.log('a->', a);
// a = 11, складывается число 1 + строка "1"


// a = ?
// let a;
// let b = 1;
// let c = '1';
// a = b + + c;
// console.log('a->', a);
//a = 2. Используется унарный оператор, строка преобразована в число


// a = ?
// c = ?
// let a;
// let b = 1;
// let c = 1;
// a = b + c++
// console.log('a->', a);
// console.log('c->', c);
//a = 2. Используется постфиксная форма инкремента, поэтому возвращено старое значение переменной с (1)
//c = 2. инкремент к 1 = 2


// a = ?
// c = ?
// let a;
// let b = 1;
// let c = 1;
// a = b + ++c;
// console.log('a->', a);
// console.log('c->', c);
//a = 3. Используется префиксная форма инкремента к переменной с
//c = 2. инкремент к 1 = 2


// a = ?
// let a;
// let b = 1;
// let c = 1;
// let d = true;
// d && a = b + c;
// console.log('a->', a);
// ошибка... 


// a = ?
// let a;
// let b = 1;
// let c = 2;
// let d = true;
// a = d && b && c
// console.log('a->', a);
//a=2. Возвращается последнее значение из примера


// a = ?
// let a;
// let b = 1;
// let c = 2;
// let d = true;
// a = d && !b && c
// console.log('a->', a);
//a=фолс, т.к. !b = фолс


// a = ?
// let a;
// let b = 1;
// let c = 2;
// let d = true;
// a = d || !b && c
// console.log('a->', a);
//a=тру, т.к. d = тру, значит интерпретатор остановился на первом значении


// a = ?
// let a;
// let b = 1;
// let c = 2;
// let d = true;
// a = !d || !b && c
// console.log('a->', a);
//a=фолс, т.к. фолс перед и после логического ИЛИ 


// a = ?
// let a;
// let b = 1;
// let c = 2;
// let d = true;
// a = !!d && !!b && c
// console.log('a->', a);
//a=2, т.к. тру И тру И 2


// a = ?
// let a;
// let b = 1;
// let c = 2;
// let d = true;
// a = !!d && !!b || c
// console.log('a->', a);
//a=тру, т.к. тру до лочического ИЛИ
