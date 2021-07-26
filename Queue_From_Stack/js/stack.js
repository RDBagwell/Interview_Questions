class Stack{
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