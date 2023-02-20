class MyNode {
  value;
  right;
  left;

  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function addNode(root, value) {
  if (value > root.value) {
    if (root.right) {
      addNode(root.right, value);
    } else {
      root.right = new MyNode(value);
      return;
    }
  }
  if (value < root.value) {
    if (root.left) {
      addNode(root.left, value);
    } else {
      root.left = new MyNode(value);
      return;
    }
  }
}

// [7,9]
function BFS(root) {
  let queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let node = queue.shift();

    console.log(node.value);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

// MAIN

let root = new MyNode(8);
addNode(root, 9);
addNode(root, 7);
addNode(root, 10);
addNode(root, 7.5);

// console.log(root);

BFS(root);
