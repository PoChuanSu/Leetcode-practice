class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (val < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                } else {
                    return undefined;
                }
            }
        }
    }

    find(val) {
        if (!this.root) return undefined;

        var current = this.root,
            found = false;

        while (current && !found) {
            if (val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else if (val === current.value) {
                found = true;
            }
        }

        if (current) return current;
        else return undefined;
    }

    BFS() {
        var prio = [],
            data = [],
            node = this.root;

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
        var data = [];
        var cur = this.root;

        function preHelper(node) {
            data.push(node.value);
            if (node.left) return preHelper(node.left);
            if (node.right) return preHelper(node.right);
        }
        preHelper(cur);
        return data;
    }

    DFSPostOrder() {
        var data = [];
        var cur = this.root;

        function postHelper(node) {
            if (node.left) return postHelper(node.left);
            if (node.right) return postHelper(node.right);
            data.push(node.value);
        }
        postHelper(cur);
        return data;
    }

    DFSInOrder() {
        var data = [];
        var cur = this.root;

        function inHelper(node) {
            if (node.left) return inHelper(node.left);
            data.push(node.value);
            if (node.right) return inHelper(node.right);
        }
        inHelper(cur);
        return data;
    }
}
