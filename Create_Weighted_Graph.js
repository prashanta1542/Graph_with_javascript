class Graph{
    constructor(){
        this.adjacent={}
    }

    addNode(node){
        if(!this.adjacent[node]){this.adjacent[node]=[]}
    }

    addEdge(node,des,w){
        this.adjacent[node].push(des,w)
        this.adjacent[des].push(node,w)
    }
}

g=new Graph()

g.addNode(0)
g.addNode(1)
g.addNode(2)
g.addNode(3)
g.addNode(4)
g.addNode(5)
g.addNode(6)
g.addNode(7)
g.addNode(8)

g.addEdge(0,1,4)
g.addEdge(0,7,8)

g.addEdge(1,2,8)
g.addEdge(1,7,11)

g.addEdge(2,3,7)
g.addEdge(2,5,4)
g.addEdge(2,8,2)

g.addEdge(3,4,9)
g.addEdge(3,5,14)

g.addEdge(4,5,10)

g.addEdge(5,6,2)

g.addEdge(6,8,6)
g.addEdge(6,7,1)

g.addEdge(7,8,7)

console.log(g)

