let digitalElement = document.querySelector('.digital');

let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function upDateClock(){
  let now = new Date();
  let Hour = now.getHours();
  let Minute = now.getMinutes();
  let Second = now.getSeconds();

  digitalElement.innerHTML = `${fixZero(Hour)}:${fixZero(Minute)}:${fixZero(Second)}`;

  let sDeg = ((360/60) * Second) - 90;
  let mDeg = ((360/60) * Minute) - 90;
  let hDeg = ((360/12) * Hour) - 90;
  
  sElement.style.transform = `rotate(${sDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  hElement.style.transform = `rotate(${hDeg}deg)`;
};

function fixZero(time){
  if(time < 10){
    return '0'+time;
  }else{
    return time;
  }

}

setInterval(upDateClock , 1000);
upDateClock();