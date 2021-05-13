const BinaryHeap = require('./binary_heap.js');


describe('BinaryHeap', () => {
    describe('.head()', () => {
        it('should return the lowest element when elements inserted in any order', () => {
            const heap = new BinaryHeap();
            heap.push(5)
                .push(2)
                .push(4)
                .push(3)
                .push(1);
            expect(heap.head().priority).toBe(1);
        });

        it('should throw RangeError when get head element from an empty heap', () => {
            const heap = new BinaryHeap();
            expect(() => {
                heap.head()
            }).toThrow(ReferenceError);
        });
    });

    describe('.size()', () => {    
        it('should return 5 when heap has 5 elements', () => {
            const heap = new BinaryHeap();
            heap.push(5)
                .push(2)
                .push(4)
                .push(3)
                .push(1);
            expect(heap.size()).toBe(5);
        });
    });

    describe('.empty()', () => {
        it('should return true when heap is empty', () => {
            const heap = new BinaryHeap();
            expect(heap.empty()).toBe(true);
        });

        it('should return false when heap is not empty', () => {
            const heap = new BinaryHeap();
            heap.push(1);
            expect(heap.empty()).toBe(false);
        });
    });
    
    describe('.push()', () => {
        it('should push 1 to the heap', () => {
            const heap = new BinaryHeap();
            heap.push(1);
            expect(heap.head().priority).toBe(1);
        });

        it('should return the lowest element when elements inserted in descending order', () => {
            const heap = new BinaryHeap();
            heap.push(5)
                .push(4)
                .push(3)
                .push(2)
                .push(1);
            expect(heap.head().priority).toBe(1);
        });

        it('should return the lowest element when elements inserted in ascending order', () => {
            const heap = new BinaryHeap();
            heap.push(1)
                .push(2)
                .push(3)
                .push(4)
                .push(5);
            expect(heap.head().priority).toBe(1);
        });

        it('should return the biggest element when elements inserted in descending order', () => {
            const heap = new BinaryHeap((a,b) => b.priority - a.priority);
            heap.push(5)
                .push(4)
                .push(3)
                .push(2)
                .push(1);
            expect(heap.head().priority).toBe(5);
        });

        it('should return the biggest element when elements inserted in ascending order', () => {
            const heap = new BinaryHeap((a,b) => b.priority - a.priority);
            heap.push(1)
                .push(2)
                .push(3)
                .push(4)
                .push(5);
            expect(heap.head().priority).toBe(5);
        });
    });

    describe('.pop()', () => {
        it('should return the smallest element when poped 1 element', () => {
            const heap = new BinaryHeap();
            heap.push(5)
                .push(2)
                .push(4)
                .push(3)
                .push(1);
            
            const el = heap.pop();

            expect(el.priority).toBe(1);
            expect(heap.size()).toBe(4);
            expect(heap.head().priority).toBe(2);
        });

        it('should return the smallest element each time an element is poped', () => {
            const heap = new BinaryHeap();
            heap.push(5)
                .push(2)
                .push(4)
                .push(3)
                .push(1);
            
            let el = heap.pop().priority;

            expect(el).toBe(1);
            expect(heap.size()).toBe(4);
            expect(heap.head().priority).toBe(2);

            el = heap.pop().priority;

            expect(el).toBe(2);
            expect(heap.size()).toBe(3);
            expect(heap.head().priority).toBe(3);

            el = heap.pop().priority;

            expect(el).toBe(3);
            expect(heap.size()).toBe(2);
            expect(heap.head().priority).toBe(4);

            el = heap.pop().priority;

            expect(el).toBe(4);
            expect(heap.size()).toBe(1);
            expect(heap.head().priority).toBe(5);

            el = heap.pop().priority;

            expect(el).toBe(5);
            expect(heap.size()).toBe(0);
            expect(heap.empty()).toBe(true);
        });

        it('should throw RangeError when popping an empty heap', () => {
            const heap = new BinaryHeap();

            expect(() => {
                heap.pop()
            }).toThrow(RangeError);
        });

        it('should throw RangeError when popping a heap that has just become empty', () => {
            const heap = new BinaryHeap();
            heap.push(5)
                .push(2);
            
            heap.pop();
            heap.pop();

            expect(() => {
                heap.pop()
            }).toThrow(RangeError);
        });
    });
});
