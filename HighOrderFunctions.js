const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    
    }
];

// forEach
todos.forEach(function(todo) {

    console.log(todo.text)
});

// map
const todoText = todos.map(function(todo) {

        return todo.text
})

console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todo) {
     return todo.isCompleted == true;
 }).map(function(todo) {

    return todo.text;
 })

 console.log(todoCompleted);

let vv = 0;

todos.forEach(function(todo) {
      vv = todo.text

})

console.log(vv);

