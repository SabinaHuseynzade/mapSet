// 1) 
// выведите в консоли каждый элемент из строки ниже с помощью for
let str = 'My name is Samuil';

for(let i = 0; i < str.length; i++){
    console.log(str[i])
}

// 2)
//выведите в консоли каждый элемент из массива ниже с помощью for
let arr1 = [1, 2, 3, 4, 5];

for(let i = 0; i < arr1.length ; i++){
    console.log(arr1[i])
}

// 3)
// создайте набор с помощью new Set()
let drinks = new Set(['tea','cofee','water', 'juice']);

// 4)
// добавьте в созданный ранее набор, элементы 'a', 'b', 'c' с помощью add()


drinks.add('a');
drinks.add('b');
drinks.add('c');

// 5)
//выведите в консоли слово 'Element' для каждого элемента из массива с помощью forEach()
let arr = [1, 2, 3, 4, 5];

arr.forEach(function(value, index, array) {
    array[index] = 'Element'; 
});

// 6)
//выведите все значения из набора
let fruits1 = new Set(['apple', 'banana', 'mango']);

console.log(fruits1.values());
// 7)
//выведите все ключи из набора
let fruits2 = new Set(['apple', 'banana', 'mango']);

console.log(fruits2.keys());
// 8)
//выведите все ключи из набора
let fruits3 = new Set(['apple', 'banana', 'mango']);

console.log(fruits3.keys());
// 9)
//создайте обьект с помощью new Map()

let people = new Map([
    ["Veli", 21],
    ["Murad", 20],
])

// 10)
//добавьте в созданный ранее обьект, с помощью set()
let apple = 500;
let banana = 300;
let orange = 100;

people.set(apple, 500);
people.set(banana, 300);
people.set(orange, 100);

// 11)
//выведите в консоли значение apple с помощью get() из обьекта ниже
let fruits4 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

console.log(fruits4.get('apple'));
// 12)
//выведите в консоли количество элементов в мапе ниже
let fruits5 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

console.log(fruits6.size)
// 13)
//удалите элемент 'apple' из мапа ниже
let fruits6 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

fruits6.delete('apple')
// 14)
//очистите мап ниже
let fruits7 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

fruits7.clear();
// 15)
//проверьте находится ли 'apple' в мапе ниже
let fruits8 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

console.log(fruits8.has('apple'));
// 16)
//выведите все значения из обьекта ниже
let fruits9 = new Set(['apple', 'banana', 'mango']);

console.log(fruits9.values());
// 17)
//выведите все ключи из обьекта ниже
let fruits10 = new Set(['apple', 'banana', 'mango']);

console.log(fruits10.keys());
// 18)
//выведите все ключи/значения из обьекта ниже
let fruits11 = new Set(['apple', 'banana', 'mango']);

console.log(fruits11.entries());
// add_suffix

function addSuffix(suf){
    return function add(word){
        return `${word}${suf}`;
    };
};

let addLy = addSuffix('ly')
console.log(addLy('total'));

//Multiply

function arrayOfMiltiplies(num, length){
    let array = [];
    let nb = 0;
    for(let i = 0; i < length; i++){
        nb = num + nb;
        array.push(nb);
        
    }
    return array;
}

console.log(arrayOfMiltiplies(7, 5));

//keyValue

function keysAndValues(obj){
    let arr = [];
    let keys = Object.keys(obj).sort();
    let values = Object.values(obj);
    arr.push(keys);
    arr.push(values);
    return arr;
}

console.log(keysAndValues({a: 1, b: 2, c: 3}));

//bounds

function intWithinBounds(num1, num2, num3){
    if(!Number.isInteger(num1)){
        return false;
    }else if(!Number.isInteger(num1)){
        return false;
    }else if(!Number.isInteger(num1)){
        return false;
    }else if(num1 < num2 && num2 < num3){
        return true;
    }else{
        return false;
    }

}

console.log(intWithinBounds(1, 3, 9));

//count

function count(num){
    let strNum = String(num);
    let newNum = strNum.replace('-', '');
    
    return newNum.length;
}

console.log(count(-318));