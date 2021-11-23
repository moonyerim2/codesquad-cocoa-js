import { UserInputController } from "./controller.js";
import { ViewManager } from "./view.js";
import { TaskManager } from "./model.js";

const $ = (selector) => document.querySelector(selector);

const preventFormDefault = (menuForm) => {
    menuForm.addEventListener("submit", (e) => {
        e.preventDefault();
    });
};

const App = () => {
    preventFormDefault($("#task-form"));

    const $userInput = $("#input-new-task");
    const $taskList = $("#task-list");
    const $addBtn = $("#new-task-submit-button");

    const taskManager = new TaskManager();
    const viewManager = new ViewManager();

    $userInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const userInputValue = new UserInputController($userInput.value);
            const newTask = userInputValue.getNewTaskData();
            taskManager.addTaskItem(newTask);

            viewManager.setDataList(taskManager.dataList);
            viewManager.addListItem($taskList);

            $userInput.value = "";
        }
    });

    $addBtn.addEventListener("click", (e) => {
        const userInputValue = new UserInputController($userInput.value);
        const newTask = userInputValue.getNewTaskData();
        taskManager.addTaskItem(newTask);

        viewManager.setDataList(taskManager.dataList);
        viewManager.addListItem($taskList);

        $userInput.value = "";
    });

    $taskList.addEventListener("click", (e) => {
        const targetNodeclassList = e.target.classList;
        const taskItem = e.target.parentElement;

        if (targetNodeclassList.contains("delete-btn")) {
            taskManager.deleteTaskItem(taskItem);
            viewManager.eraseList($taskList);
            viewManager.renderList($taskList);
        } else if (targetNodeclassList.contains("edit-btn")) {
            taskManager.editTaskItem(taskItem);
            viewManager.eraseList($taskList);
            viewManager.renderList($taskList);
        } else if (targetNodeclassList.contains("done-task")) {
            taskManager.checkDoneTask(taskItem);
            viewManager.toggleDoneTaskClass(taskItem);
        }
    });
};

App();
