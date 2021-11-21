
let mainParagraphElement = document.getElementById('main-p')
let today = new Date()
let TIME_IN_SECONSDS = 3

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

const runCode = () => {
    showTime(getTime)

}

const getTime = () => {
    setTimeout(() => {
        let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
        mainParagraphElement.innerHTML = time
        console.log(time)
    }, TIME_IN_SECONSDS * 1000);
}

const showTime = (callback, time) => {
    console.log('start')
    callback(time)
    console.log('end')
}