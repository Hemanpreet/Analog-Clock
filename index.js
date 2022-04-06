setInterval(()=>{
d = new Date();
htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();
// calculating hrotation 
// 12hr->360 degrees
// 1hr->>360/12 degrees
// h hrs->360*h/12=30*h
// 60mins->30degrees
// 1min->30/6=1/2 degrees
// m mins->m/2
// so for hour hand rotation=30*h+ m/2
hrotation = 30*htime + mtime/2;
// calculating mrotation
// 60 min->360 degrees
// 1min->360/60 ->6 degrees
// m minutes-> 6*m degrees
mrotation = 6*mtime;
// calculating srotation
// 60 seconds->360 degrees
// 1 sec->360/60= 6 degrees
// s sec->6*s degrees
srotation= 6*stime;

hour.style.transform = `rotate(${hrotation}deg)`;
minute.style.transform = `rotate(${mrotation}deg)`;
second.style.transform = `rotate(${srotation}deg)`;
},1000);//i.e we want to repeat it after every 1000ms or every second