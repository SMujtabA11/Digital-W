var hours = document.getElementById("Hours");
var minute = document.getElementById("Minute");
var second = document.getElementById("Sec");
var month = document.getElementById("Month");
var year = document.getElementById("year");

function loadTime(){
    var date = new Date();
    hours.innerHTML=date.getHours()%12;
    minute.innerHTML=date.getMinutes();
    second.innerHTML=date.getSeconds();
    month.innerHTML=date.getMonth();
    year.innerHTML=date.getFullYear();
}
setInterval(loadTime,1000);


gsap.fromTo("#Sec", 
    { 
      x: 100,
      color: "#000000" // Starting color
    }, 
    { 
      x: 0, 
      color: "#FF0000", // Ending color
      duration: 1,
      repeat: -1,
    yoyo:true,
    }
  )