const hourel = document.querySelector('.hour')
const mintueel = document.querySelector('.minutes')
const secel = document.querySelector('.seconds')
const ampmel = document.querySelector('.ampm')

function updateclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h>12){
       h = h-12;
       ampm = "PM";
    }

    h = h<10 ? "0"+h : h ;
    m = m<10 ? "0"+m : m ;
    s = s<10 ? "0"+s : s ;

    hourel.innerText = h;
    mintueel.innerText = m;
    secel.innerText = s
    ampmel, (innerText = ampm);
    //it can be called by using settime out method
    setTimeout(()=>{
       updateclock()
    },1000)
}

updateclock();