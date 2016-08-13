const ipc = require('electron').ipcRenderer

const asyncMsgBtn = document.getElementById('async-msg')

asyncMsgBtn.addEventListener('click', function(event){
    ipc.send('asynchronous-message', 'ping')
    ipc.send('serialport-start', 'ok')
    console.log('hello')
})

const portName = document.getElementById("portName")


const testBtn = document.getElementById('test-port')

testBtn.addEventListener('click', function(event){
    window.close()
})