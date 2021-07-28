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