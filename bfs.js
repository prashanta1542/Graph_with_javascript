// first : create a graph
class Graph{
    v=[];
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
    bfs(node){
        const q=[]
        
        q.push(node);
       while(q.length !== 0){
           const curr=q.shift();
           //console.log(curr)
          if(this.v.indexOf(curr)<0){
              this.v.push(curr);
              while(this.adjacentList[curr].length){
                  q.push(this.adjacentList[curr].shift())
              }
          }
       }
    //   this.printGraph(this.v);
       
    }
    // printGraph(v){
    //     console.log(v.length)
    // }
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

myGraph.bfs(3)
console.log(myGraph)
