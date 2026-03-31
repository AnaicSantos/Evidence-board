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
            if (!this.nodes[node2].includes(node1)) {
                this.nodes[node2].push(node1);
            }
        }
    }

    display() {
        console.clear();
        for (let node in this.nodes) {
            console.log(node + " -> " + this.nodes[node].join(", "));
        }
    }
}
