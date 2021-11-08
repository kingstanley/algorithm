class LinkedList{
    constructor(head = null) {
        this.head = head;
    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    getLast() {
        
        let lastNode = this.head;;
        if (lastNode) {
            while (lastNode) {
            lastNode = lastNode.next;
        }}
        return lastNode;
    }
    getFirst() {
        return this.head;
    }
    clear() {
        this.head = null;
    }

    add( newNode,position) {
        let count = 0;
        let node = this.head;
        if (position == 0) {
                
            newNode.next = this.head;
                this.head = newNode;
                // console.log("change head: ", this.head);
            return;
            }
            while (node) {
            
                if (position) {
                    // console.log("count: ", count);
                    let old = node.next;
                    newNode.next = old;
                    node.next = newNode;
                    break;
                } else
                    if (node.next) {
                        node = node.next
                    } else {
                        node.next = newNode;
                        break;
                    }
                count++;
            }
            
        
    }
}

class ListNode{
    constructor(data) {
        this.data = data; this.next = null;
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2


let list = new LinkedList(node1);

// console.log(list.size());

list.add(new ListNode(9),0);
list.add(new ListNode(8),1);
// list.add(new ListNode(4), 2);
 
// console.log( list.getFirst());

console.log(`Last: ${list.getLast()}`);
console.log( list.getFirst());