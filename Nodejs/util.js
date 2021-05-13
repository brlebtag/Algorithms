const fs = require('fs').promises;

async function readGraph(filename) {
    const data = await fs.readFile(filename, 'UTF-8');
    const graph =
        data.trim()
            .split('\n')
            .map(l =>
                l.trim()
                 .split(/[\t ]+/)
                 .map(el => parseInt(el))
            );
    return graph;
}

module.exports = {
    readGraph
};