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
          cell1.innerText = course.dept;

          let cell2 = row.insertCell();
          cell2.innerText = course.courseNum;

          let cell3 = row.insertCell();
          cell3.innerText = course.courseName;

          let anchor = document.createElement("a");
          anchor.href = `details.html?courseid=${course.id}`;
          anchor.text = "See details";
          let cell4 = row.insertCell();
          cell4.appendChild(anchor);
        }
      });
  }

  loadCoursesTable();
};
