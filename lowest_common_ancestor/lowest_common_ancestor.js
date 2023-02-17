// Link: https://www.hackerrank.com/challenges/binary-search-tree-lowest-common-ancestor/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=trees

class MyNode {
  value;
  left;
  right;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function addNode(root, value) {
  if (root.value <= value) {
    if (!root.right) {
      root.right = new MyNode(value);
      return;
    }
    addNode(root.right, value);
  } else {
    if (!root.left) {
      root.left = new MyNode(value);
      return;
    }
    addNode(root.left, value);
  }
}

function formTree(values) {
  let root = new MyNode(values[0]);

  for (let i = 1; i < values.length; i++) {
    addNode(root, values[i]);
  }

  return root;
}

function processData(input) {
  let lines = input.split("\n");

  let values = lines[1].split(" ");
  values = valuesCleanup(values);

  let v1 = parseInt(lines[2].split(" ")[0]);

  let v2 = parseInt(lines[2].split(" ")[1]);

  let root = formTree(values);
  let lca = LCA(root, v1, v2);
  // console.log("lca", lca)
  // return lca.value;
  console.log(lca.value);
}

function LCA(root, v1, v2) {
  let v1Ancestors = [];
  computeAncestors(v1Ancestors, root, v1);

  let v2Ancestors = [];
  computeAncestors(v2Ancestors, root, v2);

  for (let i = v1Ancestors.length - 1; i >= 0; i--) {
    if (v2Ancestors.includes(v1Ancestors[i])) {
      return v1Ancestors[i];
    }
  }
}

// [4,2]
function computeAncestors(ancestors, root, item) {
  if (!root) {
    return;
  }

  ancestors.push(root);
  if (root.value === item) {
    return;
  }

  if (item > root.value) {
    computeAncestors(ancestors, root.right, item);
  } else {
    computeAncestors(ancestors, root.left, item);
  }
}

function valuesCleanup(values) {
  let res = [];
  for (let item of values) {
    res.push(parseInt(item));
  }

  return res;
}
