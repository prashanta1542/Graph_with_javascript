class PriorityQueue{
    constructor(){
        this.items=[]
    }
    enqueue(element,priority){
        const item={element,priority}
        let added=false
        for(let i=0;i < this.items.length;i++){
            if(item.priority < this.items[i].priority){
                  this.items.splice(i,0,item)
                  added=true
                  break
            }
        }
        if(!added){
            this.items.push(item)
        }
    }
}

myQueue=new PriorityQueue()

myQueue.enqueue("A",4)
myQueue.enqueue("B",3)
myQueue.enqueue("C",7)
myQueue.enqueue("D",5)
myQueue.enqueue("E",2.5)
myQueue.enqueue("E",3.7)


console.log(myQueue)
