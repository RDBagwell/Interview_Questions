class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertFirst(value){
        this.head = new Node(value,this.head);
    }

    size(){
        let node = this.head;
        let length = 0
        while (node) {
            length++;
            node = node.next;
        }
        return  length;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head) return null;
        let node = this.head;
        while (node) { 
            if(!node.next){
                return node;
            }
            node = node.next;  
        }
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head) return null;
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head) return null;
        if(!this.head.next) {
            this.head = null 
            return;
        }
        let previous = this.head;
        let node = this.head.next
        while (node) { 
            previous = node;
            node = node.next;  
        }
        previous.next = null;
    }

    insertLast(value){
        const lastNode = this.getLast()
        if(lastNode){
            lastNode.next = new Node(value);
        } else{
            this.head = new Node(value);
        }
    }

    getAt(index){
        if(index < 0) return null;
        let counter = 0;
        let currentHead = this.head;
        while (counter !== index) {
            currentHead = currentHead.next;
            counter++;
        }
        return currentHead;
    }

    removeAt(index){
        if(!this.head) return null;
        if(index === 0) {
            this.head = this.head.next
            return this.head
        };
        const previous = this.getAt(index - 1);
        if(!previous || !previous.next) return;

        return previous.next = previous.next.next;
    }
}

const ll = new LinkedList()
ll.insertFirst(1)
ll.insertFirst(2)
ll.insertFirst(3)
ll.insertFirst(4)
ll.insertLast(0)
console.log(ll.removeAt(1))