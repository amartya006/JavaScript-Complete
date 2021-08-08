function func1(){
    return new Promise(function(resolve, reject){
        const error = false;
        if(!error){
            console.log("Your Promise has Been resolved");
            resolve();
        } else{
            console.log("Your Promise has Not been Resolved");
            reject("Data Not Found");
        }
    })
}

func1().then(function(){
    console.log("Harry: Thanks for Resolving");
}).catch(function(error){
    console.log("Harry: Very Bad Vmro. Reason: "+ error);
})