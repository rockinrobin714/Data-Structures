//This is a function that creates a hash table
var makeHashTable = function() {
//I set the max to 4, but it could be set to whatever.
  var max = 4;

  return {
  
  //_storage is where I store all the buckets
  
    _storage: [],
    
    retrieve: function(key) {
    
    //Use the hash function to get the index of the bucket
     var index = hashFn(key,max);
     var bucket = this._storage[index];
     //Once you get the bucket, loop through the arrays inside the bucket
     for (var i=0;i<bucket.length;i++){
       if (bucket[i][0]===key){
       //Return the value associated with the key
         return bucket[i][1];
       }
     }
    },
    delete: function(key) {
    //Just like retrieve, I use the hash function to get the bucket index
      var index = hashFn(key,max);
      var bucket = this._storage[index];
      //Once you figure out which bucket to use, loop through the bucket's arrays to find the thing you are deleting
      for (var i=0;i<bucket.length;i++){
        if (bucket[i][0]===key){
        //Delete the key from the bucket
        bucket.splice(i,1);
        }
      }
    },
    insert: function(key, value) {
      var index = hashFn(key,max);
      //If the bucket does not exist yet, create it.
      if(!this._storage[index]){
        this._storage[index] = [];
      }
      //Now that it exists, I created a found variable so when I loop through the bucket, 
      //I can see if something exists with that key name and update it
      var bucket = this._storage[index];
      var found = false;
      for (var i=0;i<bucket.length;i++){
        if (bucket[i][0]===key){
        //If it is found, update it with the new value
          bucket[i][1]=value;
          found=true;
        }
    } if (!found){
    //If the key doesn't exist in the bucket, add it
      bucket.push([key,value]);
    }
  }
}
};


var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};
