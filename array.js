// Tome el siguiente array:

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];

// Manipule su array utilizando varios métodos, como pop(), push(), shift() y unshift(), y transfórmelo en lo siguiente:

// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]


// ---------------------------------------------------------------------------------

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, ['one', 'two']];

theList.shift();
theList.pop();
theList.unshift("FIRST");
theList[3]= "hola mundo"
theList[2]= "MIDDLE"
theList.splice(4,2);
theList.push("LAST");

console.log(theList)




