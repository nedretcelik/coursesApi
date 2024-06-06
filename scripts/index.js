"use strict";

window.onload = function () {
    const courseDetailTB = document.querySelector("#courseDetailTB");

    function loadCoursesTable() {
        fetch("http://localhost:8081/api/courses")
        .then((response) => response.json())
        .then((courses) => {
          console.log(courses);
          for (const course of courses) {
            let row = courseDetailTB.insertRow();

            let cell0 = row.insertCell();
            cell0.innerText = "";
      
            let cell1 = row.insertCell();
            cell1.innerText = course.courseNum;
      
            let cell2 = row.insertCell();
            cell2.innerText = course.courseName;
      
            let cell3 = row.insertCell();
            cell3.innerText = course.instructor;
      
            let cell4 = row.insertCell();
            cell4.innerText = course.startDate;
      
            let cell5 = row.insertCell();
            cell5.innerText = course.numDays;
          
          }
        });

    }

    loadCoursesTable();


}