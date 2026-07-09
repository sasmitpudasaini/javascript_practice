//create a variable of type string and try to add a number to it 
let a = "ole"
let b = 5
console.log(a + b)

//use type of operators to find the datatypes of the string in last question.

console.log(typeof a)
console.log(typeof b)

// try to add a new key to a const object where you can hold a number later

const list = {
    name : "dos",
    roll : 2
}
list['name' ]= "not"
list['new' ]= "pot"
console.log(list)

//wap to create a word meaning dictionary of 5 words

const dict = {
    Delete : "Delete : Action of removing something.",
    Book: "Book: A set of written pages bound together.",
    Easy: "Easy: Not difficult to do.",
    Family: "Family: A group of people related by blood or marriage.",
    New: "New: Not seen or used before."

}
console.log(dict ["Delete"],dict.Book  ,dict.Easy,dict  ["Family"],dict  ["New"])