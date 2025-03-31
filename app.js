let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
let ampm = document.getElementById("ampm");
let day = document.getElementById("day");
let date = document.getElementById("date");


setInterval(()=>{
  let currentTime=new Date();

  hrs.innerHTML= currentTime.getHours();
  min.innerHTML= currentTime.getMinutes();
  sec.innerHTML= currentTime.getSeconds();
  
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 
  day.textContent = days[currentTime.getDay()];

  let meridian = hrs >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hrs = hrs % 12 || 12;
  ampm.textContent = meridian;
  let dayNumber = String(currentTime.getDate()).padStart(2, '0');
  let month = String(currentTime.getMonth() + 1).padStart(2, '0');
  let year = currentTime.getFullYear();
  let formattedDate = `${dayNumber}-${month}-${year}`;
  date.textContent = formattedDate; 
  
 
},1000)
