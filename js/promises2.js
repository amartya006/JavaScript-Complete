let studentsList = document.getElementById('studentsList');

students = [
    {name: "Amartya", subject: "React.js"},
    {name: "Harry", subject: "JavaScript"}
];

function enrollStudent(student){
    return new Promise(function(resolve, reject){
        const error = false;
        
            setTimeout(function(){
                students.push(student);
                if(!error){
                    resolve();
                } else{
                    reject();
                }
                
            }
            ,1000);
        
    });
    
    
    
}

function getStudentsList(){
    setTimeout(function(){
        let str="";
        students.forEach((student)=>{
            str+=`<li> ${student.name} </li>
            <li> ${student.subject} </li>`;
        })
        studentsList.innerHTML = str;
    }, 500);
}

enrollStudent({name: "Qazi", subject:"Node.js"}, getStudentsList).then(function(){
    console.log("Student Enrolled");
    getStudentsList();
}).catch(function(){
    console.log("Error Occured");
});
