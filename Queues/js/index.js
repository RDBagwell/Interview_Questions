class Node{
    constructor(value){
        this.value = value;
        this.next = undefined;
    }
}

class Queue{
    constructor(){
        this.first = undefined;
        this.last = undefined;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return undefined;
        let temp = this.first;
        if(this.first === this.last){
            this.last = undefined;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

class Queue2{
    constructor(){
        this.data = [];
    }
    add(val){
        this.data.unshift(val)
    }
    remove(){
        this.data.pop();
    }
}