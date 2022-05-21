
let clock12 = document.getElementById("clock12");
let clock24 = document.getElementById("clock24");

let date = new Date(); 
let hours = date.getHours(); 
let min = date.getMinutes();
let sec = date.getSeconds();


// h12     => hours 12 format
// h24     => hours 24 format
// min     => minits
// sec     => seconds
// amORpm  => AM / PM

let h12, h24, m, s, amORpm;


// 00 : 00 : 00 am/pm


// 0 1 2 3 4 5 6 7 8 9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 
// 1 2 3 4 5 6 7 8 9 10 11 12 1  2  3  4  5  6  7  8  9  10 11 12


// hours in 24 format (0 : 23)
if (hours >= 0 && hours <= 23){
    h24 = hours + 1;
}

// minits (0 : 59)
if (min >= 0 && min <= 59){
    min = min + 1;
}

// seconds (0 : 59)
if (sec >= 0 && sec <= 59){
    sec = sec + 1;
}

// am or pm
if(hours >= 0 && hours <= 11){
    amORpm = "AM"
}
else{
    amORpm = "PM"
}

// hours in 12 format
switch(hours){
    case 0:
        h12 = 1;
        break

        case 1:
            h12 = 2;
            break

        case 2:
            h12 = 3;
            break

        case 3:
            h12 = 4;
            break

        case 4:
            h12 = 5;
            break

        case 5:
            h12 = 6;
            break

        case 6:
            h12 = 7;
            break

        case 7:
            h12 = 8;
            break

        case 8:
            h12 = 9;
            break

        case 9:
            h12 = 10;
            break

        case 10:
            h12 = 11;
            break

        case 11:
            h12 = 12;
            break

        case 12:
            h12 = 01;
            break

        case 13:
            h12 = 02;
            break

        case 14:
            h12 = 03;
            break

        case 15:
            h12 = 04;
            break

        case 16:
            h12 = 05;
            break

        case 17:
            h12 = 06;
            break

        case 18:
            h12 = 07;
            break

        case 19:
            h12 = 08;
            break

        case 20:
            h12 = 09;
            break

        case 21:
            h12 = 10;
            break

        case 22:
            h12 = 11;
            break

        case 23:
            h12 = 12;
            break
}

// adding zero if the number take one digit only

if (h12 < 10){
    h12 = "0" + h12;
}

if(h24 < 10){
    h24 = "0" + h24;
}

if(min < 10){
    min = "0" + min;
}

if(sec < 10){
    sec = "0" + sec;
}

// printing the time on the screen with 12 format
clock12.innerHTML = h12 + ' : ' + min + ' : ' + sec + ' ' + amORpm;
// printing the time on the screen with 24 format
clock24.innerHTML = h24 + ' : ' + min + ' : ' + sec + ' ' + amORpm;

