class Graph{
    constructor(){
        this.adjacent=[]
    }

    addNode(node){
        this.adjacent[node]=[]
    }
    addPropInNode(node,...prop){
         this.adjacent[node].push(...prop)
    //    for(let i=0;i<prop.length;i++){
    //     this.adjacent[node].push(prop[i])
    //    }
    }
    findELem(node,x){
        if(this.adjacent[node].includes(x)){
            console.log(this.adjacent[node].includes(x))
        }
    }

}
myGraph=new Graph()
myGraph.addNode(1)
myGraph.addNode(2)

myGraph.addPropInNode(1,2,3,4,5,6,7)
myGraph.addPropInNode(2,1,3,4,5,6,7)
myGraph.findELem(1,3)
myGraph.removeNode(myGraph,1)
// console.log(myGraph)
