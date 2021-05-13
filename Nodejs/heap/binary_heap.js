class Node {
    data = null;
    priority = null;

    constructor(priority, data) {
        this.priority = priority;
        this.data = data;
    }
}

class BinaryHeap {
    #nodes = [];
    #cmp;

    constructor(cmp) {
        this.#cmp = cmp || this.#compare;
    }

    size() {
        return this.#nodes.length;
    }

    head() {
        const nodes = this.#nodes;

        if (this.empty()) {
            throw new ReferenceError("No element at head");
        }

        return nodes[0];
    }

    empty() {
        return this.#nodes.length === 0;
    }

    push(priority, data = null) {
        const nodes = this.#nodes;
        nodes.push(new Node(priority, data));
        this.#bubbleUp(nodes.length - 1);
        return this;
    }

    pop() {
        const nodes = this.#nodes;
        const len = nodes.length;

        if (len <= 0) {
            throw new RangeError("Empty binary heap");
        }

        const data = nodes[0];

        this.#swap(0, len - 1);

        nodes.pop();

        this.#bubbleDown(0);

        return data;
    }

    #compare(a, b) {
        return a.priority - b.priority;
    }

    #parent(node) {
        return Math.ceil(node/2.0) - 1;
    }

    #left(node) {
        return (2 * node) + 1;
    }

    #right(node) {
        return (2 * node) + 2;
    }

    #swap(i, j) {
        const nodes = this.#nodes;
        const el = nodes[j];
        nodes[j] = nodes[i];
        nodes[i] = el;
    }

    #bubbleUp(index) {
        const nodes = this.#nodes;
        const cmp = this.#cmp;
        const parent = this.#parent;
        const value = nodes[index];
        let father = parent(index);
        
        while(index > 0 && cmp(value, nodes[father]) < 0) {
            nodes[index] = nodes[father];
            index = father;
            father = parent(index);
        }

        nodes[index] = value;
    }

    #bubbleDown(index) {
        const nodes = this.#nodes;
        const cmp = this.#cmp;
        const left = this.#left;
        const right = this.#right;
        const value = nodes[index];
        const end = nodes.length - 1;
        let lowerIndex = index;
        let lowerValue = value;

        while (index < end) {
            const leftIndex = left(index);
            const rightIndex = right(index);

            let tempValue = nodes[leftIndex];

            if (leftIndex <= end && cmp(lowerValue, tempValue) >= 0) {
                lowerIndex = leftIndex;
                lowerValue = tempValue;
            }

            tempValue = nodes[rightIndex];

            if (rightIndex <= end && cmp(lowerValue, tempValue) >= 0) {
                lowerIndex = rightIndex;
                lowerValue = tempValue;
            }

            if (lowerIndex != index) {
                nodes[index] = lowerValue;
                index = lowerIndex;
                lowerValue = value; // reset lowerValue to value
                continue;
            }

            break;
        }

        if (end >= 0) {
            nodes[index] = value;
        }
    }
}


module.exports = BinaryHeap;
