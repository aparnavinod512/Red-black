export class RedBlackNode {
  constructor(value) {
    this.value = value;
    this.color = "RED";
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export class RedBlackTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new RedBlackNode(value);

    if (this.root === null) {
      newNode.color = "BLACK";
      this.root = newNode;
      return true;
    }

    let current = this.root;
    let parent = null;

    while (current !== null) {
      parent = current;

      if (value === current.value) {
        return false;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    newNode.parent = parent;

    if (value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }

    this.fixInsert(newNode);
    return true;
  }

  fixInsert(node) {
    while (
      node !== this.root &&
      node.parent.color === "RED"
    ) {
      const parent = node.parent;
      const grandparent = parent.parent;

      if (parent === grandparent.left) {
        const uncle = grandparent.right;

        if (uncle !== null && uncle.color === "RED") {
          parent.color = "BLACK";
          uncle.color = "BLACK";
          grandparent.color = "RED";
          node = grandparent;
        } else {
          if (node === parent.right) {
            node = parent;
            this.rotateLeft(node);
          }

          node.parent.color = "BLACK";
          node.parent.parent.color = "RED";
          this.rotateRight(node.parent.parent);
        }
      } else {
        const uncle = grandparent.left;

        if (uncle !== null && uncle.color === "RED") {
          parent.color = "BLACK";
          uncle.color = "BLACK";
          grandparent.color = "RED";
          node = grandparent;
        } else {
          if (node === parent.left) {
            node = parent;
            this.rotateRight(node);
          }

          node.parent.color = "BLACK";
          node.parent.parent.color = "RED";
          this.rotateLeft(node.parent.parent);
        }
      }
    }

    this.root.color = "BLACK";
  }

  rotateLeft(node) {
    const rightChild = node.right;

    node.right = rightChild.left;

    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  rotateRight(node) {
    const leftChild = node.left;

    node.left = leftChild.right;

    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }

  search(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) {
        return current;
      }

      current =
        value < current.value
          ? current.left
          : current.right;
    }

    return null;
  }
}