// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
class Graph{
    constructor(){
        this.adjacent=[]
    }
    addNode(node){
       if(!this.adjacent[node]){this.adjacent[node]=[]} 
    }
    connectNode(node,...x2){
        this.adjacent[node].push(...x2)
    }
    getSizeofGraph(){
      let count=0 
      for(let i=0;i<this.adjacent.length;i++){
        count +=1
      }
        return count
    }

}
mygrp=new Graph()
mygrp.addNode(0)
mygrp.addNode(1)
mygrp.addNode(2)
mygrp.addNode(3)

mygrp.connectNode(1,0)
mygrp.connectNode(1,2)
mygrp.connectNode(0,2)
mygrp.connectNode(2,3)
mygrp.connectNode(3,0)


console.log(mygrp.getSizeofGraph()) // length of my object in graph

//output is 4
 
