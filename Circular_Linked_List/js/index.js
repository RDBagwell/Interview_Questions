const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

l.head = a;
a.next = b;
b.next = c;
c.next = b;

function circular(list) {
    let slow = list.head;
    let fast = list.head;
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if(fast === slow) return true
    }
    return false
}

console.log(circular(l))