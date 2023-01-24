let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];

   function getCollection(array, id) {
    let findCourse = [];

    let lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray; i++) {
        if (array[i].CourseId == id) {
            findCourse.push(array[i]);
        }
    }

    return findCourse;
}

// start of PROG200 course and title of the PROJ500 course
let startDate = getCollection(courses, "PROJ500");
let lengthOf = startDate.length;
for (let i = 0; i < lengthOf; i++) {
    console.log(startDate[i].StartDate); 
    console.log(startDate[i].Title) 

}

function costOfCourse(array) {
    let findCourse = [];

    let lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray; i++) {
        if (array[i].Fee <= 50) {
            findCourse.push(array[i])
        }
    }
    return findCourse;
}

// titles of the courses that cost 50 or less
let findCheaperCourse = costOfCourse(courses)
let lengthOfThisArray = findCheaperCourse.length;
for (let i = 0; i < lengthOfThisArray; i++) {
    console.log(findCheaperCourse[i].Title) 
}

function classesThatMeet(array, site) {
    let locationLocated = []
    let lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray; i++) {
        if (array[i].Location == site) {
            locationLocated.push(array[i])
        }
    }
    return locationLocated;
}

// classes that meet in "Classroom 1"
let answer = classesThatMeet(courses, "Classroom 1")
let lengthOfClassArray = answer.length;
for (let i = 0; i < lengthOfClassArray; i++) {
    console.log(answer[i].Title) 
}