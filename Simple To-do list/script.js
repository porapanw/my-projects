"use strict";
var _a;
const colorArr = ['#FFCEE5', '#FDFADE', '#E9FAF0', '#D6EFFC', '#F3E2FC'];
;
const incompletedTaskList = document.getElementById('incompleted-task');
const completedTaskList = document.getElementById('completed-task');
let taskList = [];
// save tasks to local storage
function saveTasks() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}
// load tasks from local storage
function loadTasks() {
    const storedTasks = localStorage.getItem('taskList');
    if (storedTasks) {
        try {
            taskList = JSON.parse(storedTasks);
        }
        catch (err) {
            console.error('Error parsing tasks from local storage', err);
        }
    }
}
// add task
function addTask() {
    var element = document.getElementById('task-input');
    if (element) {
        const taskInput = element;
        if (taskInput.value == '') {
            alert("Hey! Fill-in the task first before adding!");
            return;
        }
        const task = {
            topic: taskInput.value,
            completed: false
        };
        taskList.push(task);
        taskInput.value = '';
        reRender();
    }
    else {
        console.error('error adding task');
    }
}
// re-render
function reRender() {
    incompletedTaskList.innerHTML = '';
    completedTaskList.innerHTML = '';
    displayTasks();
    displayCompletedTasks();
    saveTasks();
}
// tasks
// display first 40 characters
// appendChild pattern
// <li><span><i class="fa-regular fa-square"></i> Test</span><span><i class="fa-regular fa-trash-can"></i></span></li>
function displayTasks() {
    const incompletedTask = taskList.filter(task => task.completed === false);
    incompletedTask.forEach(task => {
        const newTask = document.createElement('li');
        const taskTopic = task.topic.length > 40 ? task.topic.slice(0, 41) : task.topic;
        newTask.innerHTML = `
      <span>
        <i class="fa-regular fa-square"></i> ${taskTopic}
      </span>
      <span>
        <i class="fa-regular fa-trash-can"></i>
      </span>`;
        newTask.style.backgroundColor = colorArr[Math.floor(Math.random() * 5)];
        newTask.addEventListener('click', () => {
            task.completed = true;
            task.completedDate = new Date().toLocaleString();
            reRender();
        });
        const trashIcon = newTask.querySelector('i.fa-trash-can');
        if (trashIcon) {
            trashIcon.addEventListener('click', e => {
                e.stopPropagation();
                taskList = taskList.filter(t => t !== task);
                reRender();
            });
        }
        incompletedTaskList.appendChild(newTask);
    });
}
// completed list
// display first 35 characters
// appendChild pattern
// <li><span><i class="fa-regular fa-square-check"></i> <span class="completed">Text</span></span><span><span class="completed-time">completed date and time </span><i class="fa-regular fa-trash-can"></i></span></li>
function displayCompletedTasks() {
    const completedTask = taskList.filter(task => task.completed === true);
    completedTask.forEach(task => {
        const newTask = document.createElement('li');
        const taskTopic = task.topic.length > 35 ? task.topic.slice(0, 36) : task.topic;
        newTask.innerHTML = `
      <span>
        <i class="fa-regular fa-square-check"></i> <span class="completed">${taskTopic}</span>
      </span>
      <span>
        <span class="completed-time">${task.completedDate} </span><i class="fa-regular fa-trash-can"></i>
      </span>`;
        newTask.addEventListener('click', () => {
            task.completed = false;
            task.completedDate = '';
            reRender();
        });
        const trashIcon = newTask.querySelector('i.fa-trash-can');
        if (trashIcon) {
            trashIcon.addEventListener('click', e => {
                e.stopPropagation();
                taskList = taskList.filter(t => t !== task);
                reRender();
            });
        }
        completedTaskList.appendChild(newTask);
    });
}
(_a = document.getElementById('task-input')) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
loadTasks();
reRender();
