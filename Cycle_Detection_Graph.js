class Graph{
    constructor(){
        this.adjacent=[]
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
}

g= new Graph()

g.addNode(0)
g.addNode(1)
g.addNode(2)
g.addNode(3)

/* Input 1  =============  output Cycle Exixt*/
g.connectNode(0,2)
g.connectNode(1,0)
g.connectNode(2,3)
g.connectNode(3,0)

/* Input 2 =============  output Cycle Exixt*/
// g.connectNode(0,1,2)
// g.connectNode(1,2)
// g.connectNode(2,0,3)
// g.connectNode(3,3)

/* Input 3 =============  output Cycle Not Exixt*/

// g.connectNode(0,1,2)
// g.connectNode(1,2)
// g.connectNode(2,3)

ltg=g.findSize() //Here ltg is length of graph

vis=[]
recStack=[]

for(i=0;i<ltg;i++){
    vis[i]=false
    recStack[i]=false
}
if(g.cycleDetection(1,vis,recStack)){
    console.log("cycle exist")
    console.log(vis)
    console.log(recStack)
}else{
    console.log("Cycle is not exist")
}
console.log(g)
