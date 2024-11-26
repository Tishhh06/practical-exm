//  Stack Functions using object

class Stack {
    constructor() {
        this.items = {};
    }

    push(element) {
        this.top++; // 1  2 3 4 ...
        this.items[this.top] = element;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is underflow");
            return undefined;
        }

        let poppedElement = this.items[this.top];
        delete this.items[this.top];
        this.top--;
        return poppedElement;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
            return undefined;
        }
        return this.items[this.top];
    }

    isEmpty() {
        return this.top < 0;
    }
}

let stack = new Stack();

console.log(stack.peek());