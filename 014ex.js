// You have below tasks
// [1] Buy milk
// [2] Buy eggs

// If you want to add a task, type `+`. If you want to clear a task, type the number (1-2): +

// What task is it? Learn JavaScript

const fs = require ('fs');
const readLineSync = require ('readline-sync');
const tasks = fs.readFileSync ('014-todos.txt', 'utf8').split ('\n');

console.log ('You have below tasks');
for (let i = 0; i < tasks.length; i++) {
  console.log (`[${i + 1}] ${tasks[i]}`);
}

while (true) {
  const action = readLineSync.question (
    'If you want to add a task, type `+`. If you want to clear a task, type the number (1-' +
      tasks.length +
      '): '
  );
  if (action == '+') {
    const newTasks = readLineSync.question ('What task is it? ');
    tasks.push (newTasks);
    for (let i = 0; i < tasks.length; i++) {
      console.log (`[${i + 1}] ${tasks[i]}`);
    }
    fs.writeFileSync ('014-todos.txt', tasks.join ('\n'));
  } else {
    const clearTask = parseInt (action);

    console.log (clearTask - 1);
    if (!isNaN (clearTask)) {
      tasks.splice (clearTask - 1, 1);
      for (let i = 0; i < tasks.length; i++) {
        console.log (`[${i + 1}] ${tasks[i]}`);
      }
      fs.writeFileSync ('014-todos.txt', tasks.join ('\n'));
    }
  }
}
