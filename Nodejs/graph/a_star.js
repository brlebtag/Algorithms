const dummyNode = new Node();
dummyNode.f = Number.MAX_VALUE;

class Node {
    f = 0;
    g = 0;
    h = 0;
    x = 0; // col
    y = 0; // row
    previous = null;
    obstacle = false;

    constructor(x = 0, y = 0, obstacle = false) {
        this.x = x;
        this.y = y;
        this.obstacle = obstacle;
    }
    
    key() {
        return `${this.x}$${this.y}`;
    }
};

function euclidianDistance(origin, destiny) {
    return Math.sqrt(Math.pow(destiny.x - origin.x, 2) + Math.pow(destiny.y - origin.y, 2));
}

function manhattanDistance(origin, destiny) {
    return Math.abs(destiny.x - origin.x) + Math.abs(destiny.y - origin.y);
}

function diagonalDistance(origin, destiny) {
    return Math.max(Math.abs(destiny.x - origin.x), Math.abs(destiny.y - origin.y));
}

function lowestFValueKey(openSet) {
    let lowestKey = null;

    for (let key in openSet) {
        if (openSet[key].f  < (openSet[lowestKey] || dummyNode).f) {
            lowestKey = key;
        }
    }

    return lowestKey;
}

function clockwise8Neighbors(node, grid) {
    const x = node.x;
    const y = node.y;
    const cols = grid.length;
    const rows = grid[0].length;
    const neighbors = [];
    // ↑
    if (y > 0) {
        neighbors.push(grid[x][y - 1]);
    }

    // ↗
    if (x < cols - 1 && y >  0) {
        neighbors.push(grid[x + 1][y - 1]);
    }
    
    // →
    if (x < cols - 1) {
        neighbors.push(grid[x + 1][y]);
    }

    // ↘
    if (x < cols - 1 && y < rows - 1) {
        neighbors.push(grid[x + 1][y + 1]);
    }

    // ↓
    if (y < rows - 1) {
        neighbors.push(grid[x][y + 1]);
    }

    // ↙
    if (x > 0 && y <  rows - 1) {
        neighbors.push(grid[x - 1][y + 1]);
    }

    // ←
    if (x > 0) {
        neighbors.push(grid[x - 1][y]);
    }

    // ↖
    if (x > 0 && y >  0) {
        neighbors.push(grid[x - 1][y - 1]);
    }

    return neighbors;
}

function clockwise4Neighbors(node, grid) {
    const x = node.x;
    const y = node.y;
    const cols = grid.length;
    const rows = grid[0].length;
    const neighbors = [];

    // ↑
    if (y > 0) {
        neighbors.push(grid[x][y - 1]);
    }

    // →
    if (x < cols - 1) {
        neighbors.push(grid[x + 1][y]);
    }

    // ↓
    if (y < rows - 1) {
        neighbors.push(grid[x][y + 1]);
    }

    // ←
    if (x > 0) {
        neighbors.push(grid[x - 1][y]);
    }    

    return neighbors;
}

function moveToNextLowest(source, destiny, openSet, closedSet, neighbors, heuritic) {
    const key = source.key();
    delete openSet[key];
    closedSet[key] = source;

    if (source === destiny) {
        return source;
    }

    for (let neighbor of neighbors(source, grid)) {
        const tempG = source.g + 1;

        if (!closedSet[neighbor.key()] && !neighbor.obstacle) {
            let newPath = false;

            if (openSet[neighbor.key()]) {
                if (tempG < openSet[neighbor.key()].g) {
                    neighbor.g = tempG;
                    newPath = true;
                }
            } else {
                neighbor.g = tempG;
                const key = neighbor.key(); 
                openSet[key] = neighbor;
                totalOpenSet++;
                newPath = true;
            }

            if (newPath) {
                neighbor.h = heuritic(neighbor, destiny);
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.previous = source;
            }
        }
    }

    return lowestFValueKey(openSet);
}

function aStar(grid, heuritic, neighbors, source, destiny) {

    if (grid.length < 1) {
        throw new Error("Grid is too small");
    }

    if (grid[0].length < 1) {
        throw new Error("Grid is too small");
    }
    
    const closedSet = {};
    const openSet = {};
    let nextNode = source;
    let params;

    do {
        params = [
            nextNode,
            destiny,
            openSet,
            closedSet,
            neighbors,
            heuritic
        ];
    } while ((nextNode = moveToNextLowest(...params)) !== null);

    return nextNode;
}

function path(destiny) {
    const path = [destiny];
    let tempNode = destiny;

    while (tempNode.previous) {
        tempNode = tempNode.previous;
        path.push(tempNode);
    }

    return path;
}

module.exports = {
    aStar,
    moveToNextLowest,
    path,
    clockwise8Neighbors,
    clockwise4Neighbors,
    Node,
    euclidianDistance,
    manhattanDistance,
    diagonalDistance,
}