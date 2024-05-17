class Graph{
    constructor(){
        this.adjacent=[]
    }
    addNode(x){
        if(!this.adjacent[x]) this.adjacent[x]=[]
    }
    connectNode(x1,x2){
        
          if(!this.adjacent[x1].includes(x2))  this.adjacent[x1].push(x2)
          if(!this.adjacent[x2].includes(x1))  this.adjacent[x2].push(x1)
        
    }
    findSize(){
        return (Object.keys(this.adjacent).length)
    }
    cycleDetectionFromUndirected(curr,vis,parent){
        vis[curr]=true
        for(i=0;i < this.adjacent[curr].length; i++){
            if(vis[this.adjacent[curr][i]]  && parent !== this.adjacent[curr][i]){
                return true
            }
            if(!vis[this.adjacent[curr][i]] ){
                if(this.cycleDetectionFromUndirected(this.adjacent[curr][i],vis,this.curr)){
                    return true
                }
            }
        }
    }

}

g= new Graph()

g.addNode(0)
g.addNode(1)
g.addNode(2)
g.addNode(3)
g.addNode(4)
g.addNode(5)

/* Input set 1  output : true*/
g.connectNode(0,1)
g.connectNode(0,4)

g.connectNode(1,0)
g.connectNode(1,2)
g.connectNode(1,4)

g.connectNode(2,1)
g.connectNode(2,3)

g.connectNode(3,2)

g.connectNode(4,0)
g.connectNode(4,1)
g.connectNode(4,5)

g.connectNode(5,4)

/* Input set 2  output : true*/

// g.connectNode(0,1)
// g.connectNode(0,2)

// g.connectNode(1,0)
// g.connectNode(1,2)

// g.connectNode(2,0)
// g.connectNode(2,3)

// g.connectNode(3,2)



ltg=g.findSize() //Here ltg is length of graph

vis=[]
stack=[]

for(i=0;i<ltg;i++){
    vis[i]=false
    // recStack[i]=false
}

if(g.cycleDetectionFromUndirected(0,vis,-1) === true){
    console.log(true)
}else{
    console.log(false)
}


console.log(vis)
console.log(g)
