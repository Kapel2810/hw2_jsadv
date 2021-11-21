
let mainParagraphElement = document.getElementById('main-p')
let today = new Date()

// ------- ex1---------
//get current time  with callback
const runCode = () => {
    showTime(getTime)

}

const getTime = () => {
   let time = today.getHours() + ':' +today.getMinutes() + ':' + today.getSeconds()
   mainParagraphElement.innerHTML = time
   console.log(time)
}

const showTime = (callback, time) => {
    console.log('start')
    callback(time)
    console.log('end')
}