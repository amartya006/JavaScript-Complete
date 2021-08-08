console.log("Event Listeners");
const container = document.querySelectorAll(".container h3");
container.forEach((sel)=>{
    sel.addEventListener("click", (e) => {
        console.log("Hello");
        // console.log(e.target.className);
        // console.log(e.target.id);
        // console.log(e.target.classList);
    })
})