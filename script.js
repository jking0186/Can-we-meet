function countdown() {
    var now = new Date();
    var eventDate = new Date("November 15, 2020 00:00:00");
    var hoursLeft = new Date("November 15, 2020");
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
    m = (m < 10) ? "0" + m : m; 
    s = (s < 10) ? "0" + s : s;
    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    
    if(remTime <= hoursLeft) {
        document.getElementById("answer").textContent = "No";
    } else if(remTime <= eventDate) {
        document.getElementById("answer").textContent = "YES! Happy Birthday!";
        table.style.display = "none";
    }

    setTimeout(countdown, 1000);
}

countdown();
