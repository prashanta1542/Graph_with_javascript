class Graph{
    constructor(){
        this.adjacent={}
    }
    addNode(node){
        if(!this.adjacent[node]) this.adjacent[node]=[]
    }
    connect(node,...x1){
        this.adjacent[node].push(...x1)
    }
    findSize(){
        return (Object.keys(this.adjacent).length)
    }
    dfs(curr,v){
        console.log(curr)
        v[curr]=true
        for(let i=0;i<this.adjacent[curr].length;i++){
           if(v[this.adjacent[curr][i]] == false){
            this.dfs(this.adjacent[curr][i],v)
           }       
        }
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

g.connect(0,1,2)
g.connect(1,0,3)
g.connect(2,0,4)
g.connect(3,1,4,5)
g.connect(4,2,3,5)
g.connect(5,3,4,6)
g.connect(6,5)



ltg=g.findSize()  //Length of Graph=ltg

v=[ltg]
/*
   0--->1--->2

   3--->4

   for this kinds of graph use for loop for join together
 
*/

// loop use for disconnected grpah
for(i=0;i<ltg;i++){
    v[i]=false
    child=g.adjacent[i]
    //  g.dfs(i,v)  //output 0 1 2 3 4 5 6
}
g.dfs(0,v) //output 0 1 3 4 2 5 6
console.log(v)
