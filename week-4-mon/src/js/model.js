export class TaskManager {
    constructor() {
        this.dataList = [];
    }

    addTaskItem(newTask) {
        this.dataList.push(newTask);
    }

    deleteTaskItem(taskItem) {
        this.dataList.forEach((data, i) => {
            if (data.taskID === Number(taskItem.getAttribute("id"))) {
                this.dataList.splice(i, 1);
            }
        });
    }

    checkDoneTask(taskItem) {
        this.dataList.forEach((data) => {
            if (data.taskID === Number(taskItem.getAttribute("id"))) {
                data.checked = true;
            }
        });
    }

    editTaskItem(taskItem) {
        const taskItemTxt = taskItem.children[1];
        let editedTask = prompt("수정", taskItemTxt);

        this.dataList.forEach((data) => {
            if (data.taskID === Number(taskItem.getAttribute("id"))) {
                data.task = editedTask;
            }
        });
    }
}
