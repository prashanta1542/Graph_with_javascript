class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enQueue(element, priority) {
        const item = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (item.priority < this.items[i].priority) {
                this.items.splice(i, 0, item);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(item);
        }
    }

    deQueue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}



class Graph {
    constructor() {
        this.adjacent = [];
    }

    addNode(node) {
        if (!this.adjacent[node]) {
            this.adjacent[node] = [];
        }
    }

    addEdge(node, des, w) {
        this.adjacent[node].push([des, w]);
    }

    printArray() {
        for (let i = 0; i < Object.keys(this.adjacent).length; i++) {
            for (let j = 0; j < this.adjacent[i].length; j++) {
                console.log("Parent is:", i, "Child is:", this.adjacent[i][j]);
            }
        }
    }

    dijkstra(src, dis, vis) {
        const pq = new PriorityQueue();
        pq.enQueue(src, dis[0]);
        while (!pq.isEmpty()) {
            const curr = pq.deQueue().element;
            if (!vis[curr]) {
                vis[curr] = true;
                for (let i = 0; i < this.adjacent[curr].length; i++) {
                    const child = this.adjacent[curr][i];
                    const u = curr;
                    const v = child[0];
                    const wt = child[1];
                    if (dis[u] + wt < dis[v]) {
                        dis[v] = dis[u] + wt;
                        pq.enQueue(v, dis[v]);
                    }
                }
            }
        }
        for (let i = 0; i < dis.length; i++) {
            console.log(`Distance from source to node ${i}: ${dis[i]}`);
        }
    }
}

const g = new Graph();

const vis = [];
const dis = [];

g.addNode(0);
g.addNode(1);
g.addNode(2);
g.addNode(3);
g.addNode(4);
g.addNode(5);
g.addNode(6);
g.addNode(7);
g.addNode(8);

g.addEdge(0, 1, 4);
g.addEdge(0, 7, 8);

g.addEdge(1, 2, 8);
g.addEdge(1, 7, 11);

g.addEdge(2, 3, 7);
g.addEdge(2, 5, 4);
g.addEdge(2, 8, 2);

g.addEdge(3, 4, 9);
g.addEdge(3, 5, 14);

g.addEdge(4, 5, 10);

g.addEdge(5, 6, 2);

g.addEdge(6, 8, 6);
g.addEdge(6, 7, 1);

g.addEdge(7, 8, 7);

const lTG = Object.keys(g.adjacent).length; // Here lTG is length of graph

for (let i = 0; i < lTG; i++) {
    vis[i] = false;
    dis[i] = i === 0 ? 0 : Number.MAX_SAFE_INTEGER;
}

g.dijkstra(0, dis, vis);
