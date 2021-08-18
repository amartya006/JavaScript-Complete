console.log("Iterators Tutorial");

const fruits = ['apple', 'mango', 'grapes', 'banana'];

function fruitsIterator(array){
    let count = 0;
    return{
        next: function(){
            if(count<array.length){
                return{
                    value: array[count++],
                    done: false
                }
            } else{
                return{
                    done: true
                }
            }
        }
    }
}

let result = fruitsIterator(fruits);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next());