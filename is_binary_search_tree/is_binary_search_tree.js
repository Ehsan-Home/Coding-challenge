class MyNode {
  value;
  right;
  left;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isBinarySearchTree(root) {
  if (!root) {
    return true;
  }

  if (root.left) {
    if (!(root.left.value < root.value)) {
      return false;
    }
  }
  if (root.right) {
    if (!(root.right.value > root.value)) {
      return false;
    }
  }
  return isBinarySearchTree(root.left) && isBinarySearchTree(root.right);
}

// let root = new MyNode(3);
// root.left = new MyNode(5);
// root.left.left = new MyNode(1);
// root.left.right = new MyNode(4);
// root.right = new MyNode(2);
// root.right.left = new MyNode(6);

let root = new MyNode(4);
root.left = new MyNode(2);
root.left.left = new MyNode(1);
root.left.right = new MyNode(3);
root.right = new MyNode(8);
root.right.right = new MyNode(10);
root.right.right.right = new MyNode(-10);

console.log(isBinarySearchTree(root));
