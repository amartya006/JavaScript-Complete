let studentsList = document.getElementById('studentsList');

students = [
    {name: "Amartya", subject: "React.js"},
    {name: "Harry", subject: "JavaScript"}
];

function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        callback();
    }
    ,1000);
    
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

enrollStudent({name: "Qazi", subject:"Node.js"}, getStudentsList);
