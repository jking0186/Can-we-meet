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

    // if(remTime <= june3) {
    //     document.getElementById("answer").textContent = "One day closer.";
    // } else 
    // if(remTime <= june4) {
    //     document.getElementById("answer").textContent = "Nope.";
    // } else 
    // if(remTime = twoWeeks) {
    //     document.getElementById("answer").textContent = "Two more weeks.";
    // }  else 
    // if(remTime <= june6) {
    //     document.getElementById("answer").textContent = "Less than two weeks away.";
    // } else if(remTime <= june7) {
    //     document.getElementById("answer").textContent = "Not likely.";
    // } else  
    // if(remTime <= june8) {
    //     document.getElementById("answer").textContent = "Slow and steady wins the race.";
    // } else 
    // if(remTime <= june9) {
    //     document.getElementById("answer").textContent = "You look so pretty today, but no.";
    // } else 
    // if(remTime <= june10) {
    //     document.getElementById("answer").textContent = "Date night can't get here soon enough.";
    // } else 
    // if(remTime <= june11) {
    //    document.getElementById("answer").textContent = "Ugh, no.";
    // } else 
    // if(remTime <= oneWeek) {
    //    document.getElementById("answer").textContent = "We're so close. One week to go.";
    // } else 
    // if(remTime <= june13) {
    //    document.getElementById("answer").textContent = "The anticipation is killing me.";
    // } else 
    // if(remTime <= june14) {
    //    document.getElementById("answer").textContent = "It's a no.";
    // } else 
    //   if(remTime <= daysAway) {
    //    document.getElementById("answer").textContent = "Literally days away.";
    // } else 
    //   if(remTime <= comeSoFar) {
    //    document.getElementById("answer").textContent = "Don't give up now. We've come so far.";
    // } else 
    //   if(remTime <= canYou) {
    //    document.getElementById("answer").textContent = "Wow! Two days left.";
    // } else 
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
