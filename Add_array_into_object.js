class Graph{
    constructor(){
        this.adjacent={}   
        }
    addnode(node){
        if(!this.adjacent[node]){this.adjacent[node]=[]}
    }
    addEdge(node,obj){
        this.adjacent[node].push(obj)
    }
      
}

g=new Graph()
g.addnode(0)
g.addnode(1)
g.addnode(2)
g.addEdge(0,[1,2])
g.addEdge(0,[1,2])

g.addEdge(1,[2,3])

console.log(Object.keys(g.adjacent).length)
