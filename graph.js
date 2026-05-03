class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(name) {
        if (!this.nodes[name]) {
            this.nodes[name] = [];
        }
    }

    addEdge(node1, node2) {
        if (this.nodes[node1] && this.nodes[node2]) {
            if (!this.nodes[node1].includes(node2)) {
                this.nodes[node1].push(node2);
            }
        }
    }

    removeNode(node) {
        if (this.nodes[node]) {
            delete this.nodes[node];

            for (let n in this.nodes) {
                this.nodes[n] = this.nodes[n].filter(c => c !== node);
            }
        }
    }

    removeEdge(node1, node2) {
        if (this.nodes[node1]) {
            this.nodes[node1] = this.nodes[node1].filter(n => n !== node2);
        }
    }

    display() {
        console.clear();
        for (let node in this.nodes) {
            console.log(node + " -> " + this.nodes[node].join(", "));
        }
    }
}
