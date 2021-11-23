export class ViewManager {
    constructor() {
        this.dataList = [];
    }

    setDataList(dataList) {
        return (this.dataList = dataList);
    }

    listItemTemplate(data) {
        return `<li id=${data.taskID} class="task-item">
                    <input type="checkbox" class="done-task">
                    <span class="text-align">${data.task}</span>
                    <button type="button" class="edit-btn">수정</button>
                    <button type="button" class="delete-btn delete-btn-style">❌</button>
                </li>`;
    }

    renderList(listNode) {
        let listItemNodes = "";

        this.dataList.forEach((data) => {
            listItemNodes += this.listItemTemplate(data);
        });

        listNode.insertAdjacentHTML("beforeend", listItemNodes);
    }

    eraseList(listNode) {
        while (listNode.hasChildNodes()) {
            listNode.removeChild(listNode.firstChild);
        }
    }

    addListItem(listNode) {
        const newTask = this.dataList[this.dataList.length - 1];
        const listItemNode = this.listItemTemplate(newTask);

        listNode.insertAdjacentHTML("beforeend", listItemNode);
    }

    toggleDoneTaskClass(taskItem) {
        const taskItemTxt = taskItem.children[1];
        taskItemTxt.classList.toggle("done-task");
    }
}
