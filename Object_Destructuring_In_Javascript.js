class Graph{
    constructor(src,des,w){
        this.src=src
        this.des=des
        this.w=w
    }   
}

function addNode(v,graph){
   for(let i=0;i<v;i++){
    graph[i]=new Graph()
   }
   graph[0]=[0,1,7]  // destructur using value
//    graph[0].src=0
//    graph[0].des=1
//    graph[0].w=7
   
   graph[1]={src:1,des:2,w:3}   // destructuring using key and value pair
//    graph[1].src=1
//    graph[1].des=2
//    graph[1].w=3

}

g=new Graph()
graph=[]
addNode(2,graph)
console.log(graph)




