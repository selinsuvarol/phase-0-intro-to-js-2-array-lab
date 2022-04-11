const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
}
function appendCat(name){
    let newCats = [...cats];
    newCats.push(name);
    return newCats;
}
function prependCat(name){
    let newCats = [...cats];
    newCats.unshift(name);
    return newCats;
}
function removeLastCat(name){
    let newCats = [...cats];
    newCats.pop(name);
    return newCats;
}
function removeFirstCat(name){
    let newCats = [...cats];
    newCats.shift(name);
    return newCats;
}