class Node{
    constructor(data){
        this.data = data;
        this.childern = [];
    }

    add(data){
        this.childern.push(new Node(data));
    }

    remove(data){
        this.childern.filter(node => {
            return node.data !== data; 
        })
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    traverseBF(fn){
        const arr = [this.root]
        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.childern);
            fn(node)
        }
    }

    traverseDF(fn){
        const arr = [this.root]
        while (arr.length) {
            const node = arr.shift();
            arr.unshift(...node.childern);
            fn(node);
        }
    }
}