(function () {
    const seconds = 1000,
          minutes = seconds * 60,
          hour = minutes * 60,
          day = hour * 24;
  
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/31/",
        christday = dayMonth + yyyy;
    
    today = mm + "-" + dd + "-" + yyyy;
    if (today > christday) {
      christday = dayMonth + nextYear;
    }
  
    
    const countDown = new Date(christday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minutes)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minutes)) / seconds);
  
          
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
        
        }, 0)
    }());