import "./style.css";

import dayjs from "dayjs";
import _ from "lodash";

const welcome = document.getElementById("welcome");
const date = document.getElementById("date");
const result = document.getElementById("result");

welcome.textContent = "My JavaScript Development Environment!";

const currentDate = dayjs().format("DD MMMM YYYY, hh:mm A");

date.textContent = currentDate;

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "JavaScript",
    "CSS"
];

const uniqueSkills = _.uniq(skills);

result.textContent = uniqueSkills.join(", ");

console.log("Day.js package:", currentDate);
console.log("Lodash package:", uniqueSkills);