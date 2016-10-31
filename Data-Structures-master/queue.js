var Queue = function() {
	var someInstance = {};
	someInstance.storage = {};
	//Output index is the variable that tells us how many have been deleted
	var outputIndex = 0;
	someInstance.enqueue = function(value){
		someInstance.storage[someInstance.size() + outputIndex] = value;
	}
	someInstance.dequeue = function(){
		var dequeued = someInstance.storage[outputIndex];
		delete someInstance.storage[outputIndex];
		outputIndex++;
		return dequeued;
	}
	someInstance.size = function(){
		var len = 0;
		for (var key in someInstance.storage){
			if(someInstance.storage.hasOwnProperty(key)){
				len++
			}
		}
		return len;
	};
	return someInstance;
}