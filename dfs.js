class Graph{
    constructor(){
        this.adjacentList={}
        this.v=[]
    }
    
    addNode(node){
        if(!this.adjacentList[node]){this.adjacentList[node]=[]}
    }
    connectNode(x1,x2){
        this.adjacentList[x1].push(x2)
        this.adjacentList[x2].push(x1)
    }
    dfs(curr){
        this.v.push(curr)
        for(let i=0;i<this.adjacentList[curr].length;i++){
           
            if(!this.v.includes(this.adjacentList[curr][i])){
                this.dfs(this.adjacentList[curr][i])
            }
        }
     
    }
    
}
myGraph=new Graph()
myGraph.addNode(0)
myGraph.addNode(1)
myGraph.addNode(2)
myGraph.addNode(3)
myGraph.addNode(4)
myGraph.addNode(5)
myGraph.addNode(6)


myGraph.connectNode(0,1)
myGraph.connectNode(0,2)
myGraph.connectNode(1,3)
myGraph.connectNode(2,4)
myGraph.connectNode(3,4)
myGraph.connectNode(3,5)
myGraph.connectNode(4,5)
myGraph.connectNode(5,6)

myGraph.dfs(0)

console.log(myGraph)
