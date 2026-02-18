// Demo Teacher Database
const teachers = [
  {name:"Amit Sir", qualification:"M.Sc", mobile:"9999991111", city:"Patna"},
  {name:"Rahul Sir", qualification:"B.Ed", mobile:"8888882222", city:"Delhi"},
  {name:"Suman Ma'am", qualification:"M.A", mobile:"7777773333", city:"Patna"},
  {name:"Vikas Sir", qualification:"M.Sc", mobile:"6666664444", city:"Mumbai"}
];

// Student Login
function studentLogin(){
let otp = Math.floor(1000 + Math.random() * 9000);
document.getElementById("studentOtp").innerHTML = "Demo OTP: " + otp;

localStorage.setItem("student_name", document.getElementById("s_name").value);
localStorage.setItem("student_class", document.getElementById("s_class").value);
localStorage.setItem("student_city", document.getElementById("s_city").value);

setTimeout(()=>{
window.location.href="dashboard.html";
},2000);
}

// Teacher Login
function teacherLogin(){
let otp = Math.floor(1000 + Math.random() * 9000);
document.getElementById("teacherOtp").innerHTML = "Demo OTP: " + otp;
}

// Load Dashboard
function loadDashboard(){
let name = localStorage.getItem("student_name");
let studentClass = localStorage.getItem("student_class");
let city = localStorage.getItem("student_city");

document.getElementById("d_name").innerText = name;
document.getElementById("d_class").innerText = studentClass;
document.getElementById("d_city").innerText = city;

let list = document.getElementById("teacherList");

teachers.forEach(t=>{
if(t.city.toLowerCase() === city.toLowerCase()){
list.innerHTML += `
<div class="card">
<p><b>Name:</b> ${t.name}</p>
<p><b>Qualification:</b> ${t.qualification}</p>
<p><b>Mobile:</b> ${t.mobile}</p>
</div>
`;
}
});
}