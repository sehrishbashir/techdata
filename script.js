let teckKaroData = {
    name: "Teck karo",
    timing: "4 hours",
    noOfStudents: "100",
    groupOfStudent: "2",
    coursDuration: "8 months",
    includingCourseProjects: ["HTML,CSS,JS,React,Wordpress,Php"],
    courseFee: "500",
    leadInstructor: "Tuba",
}


let students = [
    {
        name: "Maria",
        age: "90",
        gender: "female",
        phonNumber: "0322657634",
        cnic: "9019972655342",
        education: "graduation",
        group: "A",
    },
    {
        name: "sehrish",
        age: "190",
        gender: "female",
        phonNumber: "0319290834",
        cnic: "545534534552",
        education: "inter",
        group: "A",
    },
    {
        name: "aisha",
        age: "170",
        gender: "female",
        phonNumber: "03198776098",
        cnic: "90108763242",
        education: "bba",
        group: "A",
    },
    {
        name: "bushra",
        age: "180",
        gender: "female",
        phonNumber: "035543098",
        cnic: 99224222242,
        education: "matric",
        group: "A",
    },
    {
        name: "nida",
        age: "100",
        gender: "female",
        phonNumber: "0327782634",
        cnic: "903037755342",
        education: "graduation",
        group: "A",
    },
]
let studentOfGroupA = ["Maria", "sehrsish", "aisha", "bushra"]

for (let i = 0; i < students.length; i++) {
    if (students[i].group == "A") {
        console.log(students[i]);
    }
}



