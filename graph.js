// first : create a graph
class Graph{
    constructor(){
        this.adjacentList={}
    }
    addNode(node){
        if(!this.adjacentList[node]){this.adjacentList[node]=[]}
    }
    makeConnect(x1,x2){
       this.adjacentList[x1].push(x2)
       this.adjacentList[x2].push(x1)
    }
    removeEdge(x1,x2){
        this.adjacentList[x1]=this.adjacentList[x1].filter(ver=>ver!=x2);
        this.adjacentList[x2]=this.adjacentList[x2].filter(ver=>ver!=x1);
    }
    removeNode(node){
        while(this.adjacentList[node].length){
            const neighboures=this.adjacentList[node].pop();
            this.removeEdge(node,neighboures);
        }
        delete this.adjacentList[node]
    }
  
}
myGraph=new Graph();

myGraph.addNode(0);
myGraph.addNode(1);
myGraph.addNode(2);
myGraph.addNode(3);
myGraph.addNode(4);
myGraph.addNode(5);
myGraph.addNode(6);

myGraph.makeConnect(0,1);
myGraph.makeConnect(0,2);
myGraph.makeConnect(1,3);
myGraph.makeConnect(2,4);
myGraph.makeConnect(3,5);
myGraph.makeConnect(3,4);
myGraph.makeConnect(4,5);
myGraph.makeConnect(5,6);

myGraph.removeNode(4)

console.log(myGraph)
