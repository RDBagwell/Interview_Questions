const l = new LinkedList();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
l.insertLast('e');
l.insertLast('f');

function fromLast(list, n) {
    let slow = list.head;
    let fast = list.head;
    while (n > 0) {
        fast = fast.next;
        n--
    }
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow
}

console.log(fromLast(l, 3))