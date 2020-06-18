function countdown() {
    var now = new Date();
    var eventDate = new Date("June 19, 2020 16:00:00");
    var june3 = new Date("June 3, 2020");
    var june4 = new Date("June 4, 2020");
    var twoWeeks = new Date("June 5, 2020");
    var june6 = new Date("June 6, 2020");
    var june7 = new Date("June 7, 2020")
    var june8 = new Date("June 8, 2020")
    var june9 = new Date("June 9, 2020")
    var june10 = new Date("June 10, 2020")
    var june11 = new Date("June 11, 2020")
    var oneWeek = new Date("June 12, 2020");
    var june13 = new Date("June 13, 2020")
    var june14 = new Date("June 14, 2020")
    var daysAway = new Date("June 15, 2020");
    var comeSoFar = new Date("June 16, 2020");
    var canYou = new Date("June 17, 2020");
    var oneDay = new Date("June 18, 2020");
    var hoursLeft = new Date("June 19, 2020");
    var table = document.querySelector("#table")

    
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTime;
    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (h < 10) ? "0" + m : m; 
    s = (h < 10) ? "0" + s : s;
    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

       if(remTime <= oneDay) {
        document.getElementById("answer").textContent = "One more day.";
    } else if(remTime <= hoursLeft) {
        document.getElementById("answer").textContent = "Just a few more hours.";
    } else if(remTime <= eventDate) {
        document.getElementById("answer").textContent = "YES! WE CAN MEET!";
        table.style.display = "none";
    } else {
        document.getElementById("answer").textContent = "Not yet.";
    }

    setTimeout(countdown, 1000);
}

countdown();
