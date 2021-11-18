const $ = (selector) => document.querySelector(selector);

const preventFormDefault = (menuForm) => {
    menuForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });
};

class NewTaskGenerator {
    constructor(newTask) {
        this.taskId = Date.now();
        this.task = newTask;
    }

    listItemTemplate() {
        return `<li id=${this.taskId} class="task-item">
                    <input type="checkbox" class="done-task">
                    <span class="text-align">${this.task}</span>
                    <button type="button" class="delete-btn delete-btn-style">❌</button>
                </li>`;
    }
}

const addTaskItem = (taskList, userInput) => {
    const newTask = new NewTaskGenerator(userInput.value);
    const taskItem = newTask.listItemTemplate();
    taskList.insertAdjacentHTML("beforeend", taskItem);
    userInput.value = "";
};

const deleteTaskItem = (e) => {
    const taskItem = e.target.parentElement;
    taskItem.remove();
};

const checkDoneTask = (e) => {
    const taskItemTxt = e.target.nextSibling.nextSibling;
    taskItemTxt.classList.toggle("done-task");
};

const App = () => {
    preventFormDefault($("#task-form"));

    const userInput = $("#input-new-task");
    const taskList = $("#task-list");
    const addBtn = $("#new-task-submit-button");

    userInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addTaskItem(taskList, userInput);
        }
    });

    addBtn.addEventListener("click", (e) => {
        addTaskItem(taskList, userInput);
    });

    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            deleteTaskItem(e);
        } else if (e.target.classList.contains("done-task")) {
            checkDoneTask(e);
        }
    });
};

App();
