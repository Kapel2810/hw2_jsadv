
let mainParagraphElement = document.getElementById('main-p')
let mainDivElement = document.getElementById('main-div')
let numberInputElement = document.getElementById('number-input')
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
//     showRandomNumber(getRandomNumber)
// }

// const getRandomNumber = () => {
//  let number =0
//   do ( (setInterval(() => {
//     let randomNumber = Math.floor(Math.random() * 100)
//     mainDivElement.innerHTML = randomNumber
//     console.log(randomNumber)
// }, 1000)){
//   } while {
// numberInputElement.innerText = number++
//   }
// }

// const showRandomNumber = (callback) => {
//     callback()
// }

const loadCode = () => {
    showNumber(getRandomNumber)

}

const getRandomNumber = () => {
    setInterval(() => {
        let randomInputNumber = Math.floor(Math.random() * 101)
        let randomNumber = Math.floor(Math.random() * 101)
        
        numberInputElement.value = randomInputNumber
        mainDivElement.innerHTML = randomNumber
       
    }, 1000);
}

const showNumber = (callback) => {
    callback()

}