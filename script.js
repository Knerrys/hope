var target_mili_sec = new Date("March 10, 2024 13:00:00").getTime();
function timer() {
    var now_mili_sec = new Date().getTime();
    var remaining_sec = Math.floor( (target_mili_sec - now_mili_sec) /1000 );

    var day = Math.floor(remaining_sec / (3600 * 24));
    var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
    var minute = Math.floor((remaining_sec % 3600) / 60);
    var second = Math.floor(remaining_sec % 60);

    document.querySelector("#day").innerHTML = day;
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#minute").innerHTML = minute;
    document.querySelector("#second").innerHTML = second;
}

setInterval(timer, 1000);