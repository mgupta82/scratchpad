import axios from 'axios';

//define type of scope variable
let apples:number;
apples = 5;

//define type of object literal
let coordiates : {x:number,y:number} = {
    x: 5,
    y : 10
}

const json = '{"x":10,"y":"30"}';

coordiates = JSON.parse(json);
console.log('coordinates: ' + coordiates.x+'-'+coordiates.y);

//define object of type class
class Car {

}

let car: Car = new Car();

//Define type for interface
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then(response =>{
    const todo = response.data as Todo;
    logTodo(todo.id,todo.title,todo.completed);
});

//define type of function paramters and return type
function logTodo(id: number,title: string,completed: boolean):void {
    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it completed: ${completed}`);
}