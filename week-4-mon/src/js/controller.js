export class UserInputController {
    constructor(userInput) {
        this.userInput = userInput;
    }

    getNewTaskData() {
        return { taskID: Date.now(), task: this.userInput, checked: false };
    }
}
