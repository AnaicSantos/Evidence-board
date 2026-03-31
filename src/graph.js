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
            this.nodes[node1].push(node2);
            this.nodes[node2].push(node1);
        }
    }

    display() {
        for (let node in this.nodes) {
            console.log(node + " -> " + this.nodes[node].join(", "));
        }
    }
}

// Teste simples
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");

graph.display();
