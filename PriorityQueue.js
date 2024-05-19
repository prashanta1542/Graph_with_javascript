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
    peek(){
        return this.items[0]
    }
    dequeue(){
        console.log(this.items.shift())
    }
    isEmpty(){
       if(this.items.length == 0){
        return true
       }else{
         return false
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

console.log("Peek value is : " , myQueue.peek())

myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

if(myQueue.isEmpty()){
    console.log("Queue is empty")
}

console.log(myQueue)
