/*Adicione seu codigo abaixo */

/* método map() */
const list = [1, 2, 3, 4, 5, 6];

function minhaCallbackMap(element) {
  return element * element;
}

function meuMetodoMap(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    newArray.push(callback(value));
  }
  return newArray;
}

console.log(meuMetodoMap(list, minhaCallbackMap));

// método Filter
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function callbackFilter(value) {
  if (value % 2 == 0) {
    return true;
  }
  return false;
}

function meuMetodoFilter(list, callback) {
  let array = [];
  for (let i = 0; i < list.length; i++) {
    let element = list[i];
    if (callback(element) == true) {
      array.push(element);
    }
  }
  return array;
}

console.log(meuMetodoFilter(lista, callbackFilter));

// Método find()
let numbers = [4, 16, 19, 21, 35];

function callbackFind(element) {
  if (element % 5 == 0) {
    return true;
  }
}

function meuMetodoFind(list, callback) {
  for (let i = 0; i < list.length; i++) {
    let number = list[i];
    if (callback(number) == true) {
      return number;
    }
  }
}

console.log(meuMetodoFind(numbers, callbackFind));

// método Reduce
const array6 = [3, 9, 6, 8, 9, 7];

function minhaCallbackReduce(countvalue, element) {
  return countvalue + element;
}

function meuMetodoReduce(array, callback) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    count = callback(count, array[i]);
  }
  return count;
}

console.log(meuMetodoReduce(array6, minhaCallbackReduce));

// Médoto includes

const lista1 = [34, 86, 2, 16];

function minhaCallbackIncludes(elementArray, search) {
  if (elementArray == search) {
    return true;
  }
  return false;
}

function meuMetodoIncludes(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], 16) == true) {
      return true;
    }
  }
  return false;
}

console.log(meuMetodoIncludes(lista1, minhaCallbackIncludes));

// Método indexOf
let number = [5, 2, 7, 6, 9, 8, 4, 1];

function minhaCallbackIndexOf(search, element) {
  if (search == element) {
    return true;
  }
  return false;
}

function meuMetodoIndexOf(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(4, array[i]) == true) {
      return i;
    }
  }
  return -1;
}

console.log(meuMetodoIndexOf(number, minhaCallbackIndexOf));
