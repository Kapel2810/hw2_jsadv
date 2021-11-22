
let mainParagraphElement = document.getElementById('main-p')
let mainDivElement = document.getElementById('main-div')
let numberInputElement = document.getElementById('number-input')
let mainSpanElement = document.getElementById('main-span')

let today = new Date()
let TIME_IN_SECONDS = 3
let TIME_PER_SECOND = 1000


// ------- ex1---------
//get current time  (sync) 
// const runCode = () => {
//     showTime(getTime)

// }

// const getTime = () => {
//    let time = today.getHours() + ':' +today.getMinutes() + ':' + today.getSeconds()
//    mainParagraphElement.innerHTML = time
//    console.log(time)
// }

// const showTime = (callback, time) => {
//     console.log('start')
//     callback(time)
//     console.log('end')
// }

//----------ex2----------
//get curent time acync with timeout 3 sec

// const runCode = () => {
//     showTime(getTime)

// }

// const getTime = () => {
//     setTimeout(() => {
//         let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
//         mainParagraphElement.innerHTML = time
//         console.log(time)
//     }, TIME_IN_SECONDS * 1000);
// }

// const showTime = (callback, time) => {
//     console.log('start')
//     callback(time)
//     console.log('end')
// }

//----------------ex 3---------------

// const runCode = () => {
//     showTime(getTime)
// }
// const getTime = () => {
//     let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
//     setTimeout(() => {
//         mainParagraphElement.innerHTML = time
//         console.log(time)
//     }, TIME_IN_SECONDS * 1000);
// }

// const showTime = (callback, time) => {
//  console.log('start');
//  callback(time)
//  console.log('end');
// }


//--------------ex4-----------------
// set time out 3 sec 

// const runCode = () => {
//     showRandomNumber(getRandomNumber)
// }

// const getRandomNumber = () => {
//     setTimeout(() => {
//         let randomNumber = Math.floor(Math.random() * 100)
//         mainDivElement.innerHTML = randomNumber
//         console.log(randomNumber)
//     }, TIME_PER_SECOND * 3);
//     setTimeout(() => {
//         let randomNumber = Math.floor(Math.random() * 100)
//         mainDivElement.innerHTML = randomNumber
//         console.log(randomNumber)
//     }, TIME_PER_SECOND *5);
//     setTimeout(() => {
//         let randomNumber = Math.floor(Math.random() * 100)
//         mainDivElement.innerHTML = randomNumber
//         console.log(randomNumber)
//     }, TIME_PER_SECOND *7);
// }

// const showRandomNumber = (callback) => {
//     console.log("start")
//     callback()
//     console.log('end')
// }

//-------- ex5--------

// const loadCode = () => {
//     showNumber(getRandomNumber)
// }

// const getRandomNumber = () => {
//     setInterval(() => {

//         let randomInputNumber = Math.floor(Math.random() * 101)
//         let randomNumber = Math.floor(Math.random() * 101)

//         numberInputElement.value = randomInputNumber
//         mainDivElement.innerHTML = randomNumber

//     }, 1000);
// }

// const showNumber = (callback) => {
//     callback()

// }

//---------ex 6 ----------

// const loadCode = () => {
// showRandomBackgroundColor(getRandomBackgroundColor)
// }

// const getRandomBackgroundColor = () => {
//     setInterval(() => {
//          let x = Math.floor(Math.random() * 256);
//     let y = Math.floor(Math.random() * 256);
//     let z = Math.floor(Math.random() * 256);
//     let backgroundgColor = "rgb(" + x + "," + y + "," + z + ")";
//     console.log(backgroundgColor);

//     document.body.style.background = backgroundgColor;
//     }, 1000);
// }

// const showRandomBackgroundColor = (callback) => {
//  callback()
// }

//--------  ex7----------

//-------- ex8 --------

// const runCode = () => {
//     generateRandomNumber()
// }

// const generateRandomNumber = () => {
//     getRandomNumberAfterDelay ((result) => console.log(result))
// }

// const getRandomNumberAfterDelay = (callback) => {
//     setTimeout(() => {
//         let randomNumber = Math.floor (Math.random() *100)
//     callback(randomNumber)
//     }, 5000);
// }

// ---------- ex 9 -----

// const runCode = () => {
//     console.log('start');
//     getRandomNumberAfterDelay((result) => console.log(result), 100)
//     console.log('end');
// }

// const getRandomNumberAfterDelay = (callback, limit) => {
//     setTimeout(() => {
//         return callback(Math.floor(Math.random() * limit))
//     }, 5000);
// }

//--------- ex 10 ---------

// const runCode = () => {
//     console.log('start')
//     getRandomNumberAfterDelay((result) => console.log(result), 100, 1)
//     console.log('end')
// }

// const getRandomNumberAfterDelay = (callback, last, first) => {
//     setTimeout(() => {
//         return callback(Math.floor(Math.random() * (last - first) + first))
//     }, 5000);

// }

//------- ex11 --------
//try-catch doesnt really work

// const runCode = () => {
//     console.log("start")
//     getRandomNumberAfterDelay((result) => console.log(result), 12, 99)
//     console.log('end')
// }

// const getRandomNumberAfterDelay = (callback, first, last) => {
//     setTimeout(() => {
//         try {
//             if (first >= 10 || last < 100)
//                 return callback(Math.floor(Math.random() * (last - first) + first))
//         } catch (err) {
//             console.log("eror")
//         }
//     }, 5000);
// }

//------- ex 12------

// const runCode= () => {
//     getUserFromServer((result) => console.log(result))
// }

// const getUserFromServer =(callback, user) => {
//     setTimeout(() => {
//        return callback(user ={ fistName: "Moshe" , lastName: "Ufnik"})
//     }, 4000);
// }

//------- ex 13--------

// const runCode = () => {
//     getGradesFromServer((result) => console.log(result))
// }

// const getGradesFromServer = (callback, grades) => {
//     setTimeout(() => {
//             return callback( grades= [ 100, 98, 75, 80, 100, 87] )
//     }, 1000);
// }

//------ ex 14 ------- 

// const runCode = () =>  {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//        mainSpanElement.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position) {
//     mainSpanElement.innerHTML = "Latitude: " + position.coords.latitude +
//         "<br>Longitude: " + position.coords.longitude;
// }

// -------- ex 15 -------
//cant change random color  :(
const runCode = () => {
  let today = new Date()
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  mainDivElement.innerHTML = hours + ":" + minutes + ":" + seconds;
  let randomColor = Math.floor(Math.random()*256)
  mainDivElement.hours +=randomColor
  setTimeout(runCode, 1000);
}

const checkTime = (i) => {
  if (i < 10) i = "0" + i;  // add zero in front of numbers < 10
  return i;
}
