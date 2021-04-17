function map (array, someFunction) {
    let newArray = [];

    for (let i = 0; i < array.length; i++)
    {
        newArray.push(someFunction(array[i]));
    }

    return newArray;
}

function reduce (array, someFunction, start) {
    let tmp;

    if(start) {
        tmp = start;
        for (let i = 0; i < array.length; i++) {
            tmp = someFunction(array[i], tmp);
        }
    }

    else {
        tmp = array[0];
        for (let i = 1; i < array.length; i++) {
            tmp = someFunction(array[i], tmp);
        }
    }
    return tmp;
}