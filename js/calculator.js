 function calculatorModule(){   
    var memory = 0;
    var total = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

var load = function(num){
    if(typeof num === "number"){
    total = num;
    return total;
    }else{num !== "number"
        throw error
    }
}
    

  /**
   * Return the value of `total`
   * @return { Number }
   */

var getTotal = function(){
    return total
}


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

   var add = function(num){
    if(typeof num === "number"){
        total += num;
        return total;
        }else{num !== "number"
            throw error
        }
   }

   
  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

   var subtract = function(num){
   if(typeof num === "number"){
    total -= num;
    return total;
    }else{num !== "number"
        throw error
    }
}

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

   var multiply = function(num){
    if(typeof num === "number"){
        total *= num;
        return total;
        }else{num !== "number"
            throw error
        }
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

   var divide = function(num){
    if(typeof num === "number"){
        total /= num;
        return total;
        }else{num !== "number"
            throw error
        }
   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   var recallMemory = function(){
       return memory
   }


  /**
   * Stores the value of `total` to `memory`
   */

   var saveMemory = function(){
        memory = total
        return memory
   }


  /**
   * Clear the value stored at `memory`
   */

   var clearMemory = function(){
       memory = 0
       return memory
   }

  /**
   * Validation
   */

  return {
      load,
      getTotal,
      add,
      subtract,
      multiply,
      divide,
      recallMemory,
      saveMemory,
      clearMemory
        }
    }
