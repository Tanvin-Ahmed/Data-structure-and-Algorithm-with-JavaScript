class Item {
  constructor() {
    this.value;
    this.priority;
  }
}

const pq = [];

for (let i = 0; i < 1000; i++) {
  pq.push(new Item());
}

let size = -1;

const enqueue = (value, priority) => {
  size++;

  pq[size] = new Item();
  pq[size].priority = priority;
  pq[size].value = value;
};

const peek = () => {
  let heighestPriority = Number.MIN_SAFE_INTEGER;
  let index = -1;

  for (let i = 0; i <= size; i++) {
    if (
      heighestPriority === pq[i].priority &&
      index > -1 &&
      pq[index].value < pq[i].value
    ) {
      heighestPriority = pq[i].priority;
      index = i;
    } else if (heighestPriority < pq[i].priority) {
      heighestPriority = pq[i].priority;
      index = i;
    }
  }

  return index;
};

const dequeue = () => {
  const index = peek();

  for (let i = index; i < size; i++) {
    pq[i] = pq[i + 1];
  }

  size--;
};

enqueue(10, 2);
enqueue(14, 4);
enqueue(16, 4);
enqueue(12, 3);

// Stores the top element
// at the moment
let ind = peek();

console.log(pq[ind].value);

// Dequeue the top element
dequeue();

// Check the top element
ind = peek();
console.log(pq[ind].value);

// Dequeue the top element
dequeue();

// Check the top element
ind = peek();
console.log(pq[ind].value);
