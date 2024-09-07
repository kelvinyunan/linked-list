class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first node - prepend
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //insert last node - append
    append(data) {
        let node = new Node(data);

        //if empty, make it the head
        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //return list size
    showSize() {
        console.log(this.size)
    }

    //return first node
    showHead() {
        console.log(this.head)
    }

    //return last node
    showTail() {
        let counter = 0
        let current = this.head

        while(counter < this.size - 1) {
            current = current.next;
            counter++;
        }
        console.log(current)
    }

    //return at index
    dataAt(index) {
        let counter = 0
        let current = this.head

        while (counter != index) {
            current = current.next;
            counter++;
        }
        console.log(current)
    }

    //remove last element
    popNode() {
        let current = this.head

        while(current.next.next != null) {
            current = current.next;
        }
        current.next = null
    }

    //check if the list contain value
    contains(value) {
        let counter = 0
        let current = this.head

        while(counter <= this.size) {
            if(current.data == value) {
                console.log(true)
                return
            } else if (current.data != value && current.next == null) {
                console.log(false)
                return
            } else {
                current = current.next
                counter++
            }
        }
    }

    //find the index of a value
    find(value) {
        let counter = 0
        let current = this.head

        while(counter <= this.size) {
            if(current.data == value) {
                console.log(counter)
                return
            } else if (current.data != value && current.next == null) {
                console.log(null)
                return
            } else {
                current = current.next
                counter++
            }
        }
    }

    //print out in string format
    toString() {
        let counter = 0
        let current = this.head
        let holder = ''

        while(counter <= this.size) {
            if(current.next != null) {
                holder += `( ${current.data} ) -> `
                current = current.next
                counter++
            } else {
                holder += `( ${current.data} ) -> null`
                console.log(holder)
                return;
            }
        }
    }

    //insert at index
    insertAt(data, index) {
        let counter = 0;
        let current = this.head;

        while (counter != index) {
            current = current.next;
            counter++;
        }
        current.next = new Node(data, current.next);
        this.size++
    }

    //remove at index
    removeAt(index) {
        let counter = 0;
        let current = this.head;

        while (counter != index) {
            current = current.next;
            counter++;
        }
        current.data = current.next.data;
        current.next = current.next.next;
        this.size--
    }

    //clear list

    //print list
    printList() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.toString()