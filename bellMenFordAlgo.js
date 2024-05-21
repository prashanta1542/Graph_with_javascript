class Graph{
    constructor(){
        this.adjacent=[]
    }
    addNode(node){
        if(!this.adjacent[node])
        {
            this.adjacent[node]=[]
        }
    }
    addEdge(src,des,weight){
        this.adjacent[src].push([des,weight])
    }


    printAllSiblingsOfNode(node){
        for(let i=0;i<this.adjacent[node].length;i++){
            console.log("Parent of ",this.adjacent[node][i])
            for(let j=0;j<this.adjacent[node][i].length;j++){
               if(j==0){
                console.log("Destination : ",this.adjacent[node][i][j])
               } else{
                console.log("Weight : ",this.adjacent[node][i][j])
               }
            }
        }
    }

    bellmenFord(){
       let ltg=this.adjacent.length
       let dis=[]
       for(let i=0;i<ltg;i++){
        dis[i]=Number.MAX_SAFE_INTEGER
       }
       dis[0]=0
       for(let k=0;k<ltg-1;k++){
          for(let j=0;j<ltg;j++){
            for(let i=0;i<this.adjacent[j].length;i++){
                let edge=this.adjacent[j][i]
                let src=j
                let des=edge[0]
                let wt=edge[1]
                if(dis[src]+wt<dis[des]){
                    dis[des]=dis[src]+wt
                }
            }
          }
       }
       console.log(dis)
    }
}
g= new Graph()

g.addNode(0)
g.addNode(1)
g.addNode(2)
g.addNode(3)
g.addNode(4)
// g.addNode(5)


//input 1 [ 0, 32, 12, 44, 9007199254740991 ]

// g.addEdge(0,3,60)
// g.addEdge(0,2,12)

// g.addEdge(1,0,10)

// g.addEdge(2,1,20)
// g.addEdge(2,3,32)

// g.addEdge(4,0,7)

//input 2 [ 0, 2, 3, 8, 6, 9 ]
// g.addEdge(0,1,2)
// g.addEdge(0,2,4)

// g.addEdge(1,2,1)
// g.addEdge(1,3,7)

// g.addEdge(2,4,3)

// g.addEdge(3,5,1)

// g.addEdge(4,3,2)
// g.addEdge(4,5,5)

//input 3 output[ 0, 1, 2, 4, 2, 3 ]
// g.addEdge(0,1,1)
// g.addEdge(0,2,2)

// g.addEdge(1,0,1)
// g.addEdge(1,3,5)
// g.addEdge(1,4,1)


// g.addEdge(2,1,2)
// g.addEdge(2,3,2)
// g.addEdge(2,4,3)

// g.addEdge(3,1,5)
// g.addEdge(3,2,2)
// g.addEdge(3,4,2)
// g.addEdge(3,5,2)

// g.addEdge(4,1,1)
// g.addEdge(4,2,3)
// g.addEdge(4,3,2)
// g.addEdge(4,5,1)

// g.addEdge(5,3,2)
// g.addEdge(5,4,1)

// input 4
g.addEdge(0,1,2)
g.addEdge(0,2,4)

g.addEdge(1,2,-4)

g.addEdge(2,3,2)

g.addEdge(3,4,4)

g.addEdge(4,1,-4)


//length of Graph 
let ltg=Object.keys(g.adjacent).length

//create an Distance array
d=[]
for(let i=0;i<ltg;i++){
     d[i]=Number.MAX_SAFE_INTEGER
}
d[0]=0

// g.printAllSiblingsOfNode(0)
g.bellmenFord()
console.log(g)
