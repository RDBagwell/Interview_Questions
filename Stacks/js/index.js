class Node{
    constructor(value){
        this.value = value;
        this.next = undefined;
    }
}

class Stack {
    constructor(){
        this.first = undefined;
        this.last = undefined;
        this.size = 0
    }
    push(val){
        let newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode;
            this.last = this.first;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.last.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return undefined;
        var temp = this.first;
        if(this.first === this.last){
            this.last = undefined;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

class Stack2{
    constructor(){
        this.data = [];
    }
    push(val){
        this.data.unshift(val)
    }
    pop(){
        return this.data.shift();
    }
    peek(){
        return this.data[0];
    }
}