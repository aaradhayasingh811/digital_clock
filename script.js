
function clock(){
    var today = new Date();

    let h = today.getHours();
    let m = today.getMinutes();
    let s  = today.getSeconds();
    // document.getElementById('hour').innerHTML = today.getHours();
    // document.getElementById('min').innerHTML = today.getMinutes();
    // document.getElementById('sec').innerHTML = today.getSeconds();
    let time =  h +" : " + m +" : " + s;
    document.getElementById('to_show').innerText = time;
    document.getElementById('to_show').textContent = time;

    setInterval(clock, 1000);

}

clock();