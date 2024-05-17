class Graph{
    constructor(){
        this.adjacent={}
    }
    addNode(x){
        if(!this.adjacent[x]) this.adjacent[x]=[]
    }
    connectNode(x,...dest){
        if(this.adjacent[x].length === 0){
            this.adjacent[x].push(...dest)
        }
    }
    findSize(){
        return (Object.keys(this.adjacent).length)
    }
    cycleDetection(curr,vis,recStack){
         vis[curr]=true
         recStack[curr]=true

         for(let i=0;i<this.adjacent[curr].length;i++){
            if(recStack[this.adjacent[curr][i]] === true){
                return true
            }else if(vis[this.adjacent[curr][i]] === false){
                if(this.cycleDetection(this.adjacent[curr][i],vis,recStack)){
                    return true
                }
            }
         }

         recStack[curr]=false
         return false
    }

    topoLogicalSort(curr,vis,stack){
        vis[curr]=true
        for(let i=0; i < this.adjacent[curr].length ; i++){
            if(vis[this.adjacent[curr][i]] !== true){
                this.topoLogicalSort(this.adjacent[curr][i],vis,stack)
            }
        }
        stack.push(curr)
    }

}

g= new Graph()

g.addNode(0)
g.addNode(1)
g.addNode(2)
g.addNode(3)
// g.addNode(4)
// g.addNode(5)

/* Input set 1  output : 5 4 3 2 0 1*/

// g.connectNode(2,3)
// g.connectNode(3,1)
// g.connectNode(4,0,1)
// g.connectNode(5,0,2)

/* Input set 2  output :  3 0 1 2*/
g.connectNode(0,1)
g.connectNode(1,2)
g.connectNode(3,1,2)


ltg=g.findSize() //Here ltg is length of graph

vis=[]
stack=[]

for(i=0;i<ltg;i++){
    vis[i]=false
    // recStack[i]=false
}

for(i=0;i<ltg;i++){
    if(vis[i] === false){
        g.topoLogicalSort(i,vis,stack)
    }
}
while(stack.length !== 0){
     console.log(stack.pop())
}

console.log(g)
