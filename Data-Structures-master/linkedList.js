//This uses psuedoclassical instantiation
function LinkedList() {
	this.head = null;
}

//By using .prototype, I can add the methods to the LinkedList
//This method creates a node. Each node has two key value pairs
//Value tells the value, while next is a reference to the next node
LinkedList.prototype.add = function(value){
	var node = {
		value: value,
		next: null
	};
	var current;
//Check to see if a head exists. If not, point the head to the first node.
	if (this.head === null){
		this.head = node;
		//If we already have a head, point current to that node
	} else {
		current = this.head;
		//By using a while loop here, we can check how long the linked list is
		while(current.next) {
			current = current.next;
		}
		current.next = node;
	}
}

//This method takes one value and searches for it in the list.
//If that value is found, it removes it
//This function also must go back one node and change it's "next" property 
LinkedList.prototype.remove = function(node){
	var current;
	var value = node.value;
//Checking to make sure the list isn't empty
	if(this.head !==null){
		//Special case scenario for if the head (first value) is the one we're looking for
		if(this.head === node){
			//Assign the head to be the second value (first node's "next")
			this.head = this.head=next;
			//Since it's the first, there is no "next"
			node.next = null;
			return value;
		}
		current = this.head;
		//Cycle through the list until there is no "next"
		while(current.next){
			if(current.next===node){
				current.next=node.next;
				return value;
			}
			current = current.next;
		}
	}
}
