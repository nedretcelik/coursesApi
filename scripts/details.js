"use strict";

window.onload = function () {

  const courseDetailTB = document.querySelector("#courseDetailTB")
  const urlParams = new URLSearchParams(location.search);
  let id = -1;

  if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");
    loadCourse(id);
  } 

  function loadCourse(id) {
    fetch(`http://localhost:8081/api/courses/${id}`)
      .then((response) => response.json())
      .then((course) => {
        let row = courseDetailTB.insertRow();

          let cell0 = row.insertCell();
          cell0.innerText = "";

          let cell1 = row.insertCell();
          cell1.innerText = course.dept;

          let cell2 = row.insertCell();
          cell2.innerText = course.courseNum;

          let cell3 = row.insertCell();
          cell3.innerText = course.courseName;

          let cell4 = row.insertCell();
          cell4.innerText = course.instructor;

      });
  }
};
