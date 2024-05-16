class Graph{
    constructor(){
        this.adjacentList={}
        // this.v=[]
    }
    
    addNode(node){
        if(!this.adjacentList[node]){this.adjacentList[node]=[]}
    }
    connectNode(node,...prop){
        this.adjacentList[node].push(...prop)
    }
    dfs(curr,v,path){

        console.log(path)
        v.push(curr)
        for(let i=0;i<this.adjacentList[curr].length;i++){
           
            if(!v.includes(this.adjacentList[curr][i])){
                this.dfs(this.adjacentList[curr][i],v,path+this.adjacentList[curr][i])
            }
        }
     
    }

    findAllPath(curr,v,path,ter){
        if(curr === ter){
             console.log(path)
             return
        }
        
        
        for(let i=0;i<this.adjacentList[curr].length;i++){
            
            if(!v.includes(this.adjacentList[curr][i])){
                v.push(curr)
                this.findAllPath(this.adjacentList[curr][i],v,path+this.adjacentList[curr][i],ter)
                v.shift(curr)
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

v=[]
myGraph.connectNode(0,1,2)
myGraph.connectNode(1,0,3)
myGraph.connectNode(2,0,4)
myGraph.connectNode(3,1,4,5)
myGraph.connectNode(4,2,3,5)
myGraph.connectNode(5,3,4,6)
myGraph.connectNode(6,5)

myGraph.findAllPath(0,v,'0',5)

console.log(myGraph)
