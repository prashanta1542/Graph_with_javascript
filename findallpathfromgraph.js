// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
class Graph{
    constructor(){
        this.adjacent={}
    }
    addNode(node){
        if(!this.adjacent[node]){this.adjacent[node]=[]}
    }
    addConnect(x1,x2){
        this.adjacent[x1].push(x2)
        this.adjacent[x2].push(x1)
    }
    
}

function dfs(graph,curr,vis){

    console.log(curr)
    vis.push(curr)
  for(let i=0;i<graph.adjacent[curr].length;i++){
    neighbour=graph.adjacent[curr][i]
      if(!vis.includes(neighbour)){
          dfs(graph,neighbour,vis)
      }
  }
}

function findShortestPath(graph,curr,vis,path,target){
    if(curr==target){
        console.log(path)
        return
    }

    for(let i=0;i<graph.adjacent[curr].length;i++){
        neighboures=graph.adjacent[curr][i];
        if(!vis.includes(neighboures)){
            vis.push(neighboures)
            findShortestPath(graph,neighboures,vis,path+neighboures,target)
            vis.shift(neighboures)
        }
    }
}

myGraph=new Graph()
v=[]
myGraph.addNode(0)
myGraph.addNode(1)
myGraph.addNode(2)
myGraph.addNode(3)
myGraph.addNode(4)
myGraph.addNode(5)
myGraph.addNode(6)

myGraph.addConnect(0,1)
myGraph.addConnect(0,2)
myGraph.addConnect(1,3)
myGraph.addConnect(2,4)
myGraph.addConnect(3,4)
myGraph.addConnect(3,5)
myGraph.addConnect(4,5)
myGraph.addConnect(5,6)

findShortestPath(myGraph,0,v,'0',5)


/* 
       OUTPUT 
0102435
013135
0134345
0201345
020245
024245
0243435


*/




