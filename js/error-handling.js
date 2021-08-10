console.log("Error handling Tutorial");

let a = undefined;
if(a== undefined){
    try{
        throw new Error("a is Undefined, weird");
    } catch(error){
        console.log(error);
    } finally{
        console.log("M to chalunga hi");
    }
} 


// try {
//     hello();
// } catch (error) {
//     console.log(error.message);
// }