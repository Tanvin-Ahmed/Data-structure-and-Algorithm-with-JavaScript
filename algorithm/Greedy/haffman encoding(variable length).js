class HaffmanNode {
  constructor() {
    this.data = 0; // frequency
    this.c = ""; // character
    this.left = null;
    this.right = null;
  }
}

const queue = [];

const printCode = (root, s) => {
  if (
    root.left === null &&
    root.right === null &&
    root.c.toLowerCase() !== root.c.toUpperCase()
  ) {
    console.log(root.c + ": " + s);
    return;
  }

  printCode(root.left, `${s}0`);
  printCode(root.right, `${s}1`);
};

const makeHaffmanTree = (charArray, frequencyArray) => {
  const n = charArray.length;

  for (let i = 0; i < n; i++) {
    const nh = new HaffmanNode();
    nh.data = frequencyArray[i];
    nh.c = charArray[i];
    nh.left = null;
    nh.right = null;

    queue.push(nh);
  }

  let root = null;
  queue.sort((a, b) => a.data - b.data);

  while (queue.length > 1) {
    const x = queue.shift();
    const y = queue.shift();

    const f = new HaffmanNode();

    f.data = x.data + y.data;
    f.c = "-";
    f.left = x;
    f.right = y;

    root = f;

    queue.push(f);
    queue.sort((a, b) => a.data - b.data);
  }

  printCode(root, "");
};

const haffmanEncoding = (charArray, charfreq) => {
  makeHaffmanTree(charArray, charfreq);
};

let charArray = ["a", "b", "c", "d", "e", "f"];
let charfreq = [5, 9, 12, 13, 16, 45];

haffmanEncoding(charArray, charfreq);
