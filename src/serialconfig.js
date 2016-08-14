const ipc = require('electron').ipcRenderer

const asyncMsgBtn = document.getElementById('async-msg')

const portNameSelect = document.getElementById('portName')
const baudrateSelect = document.getElementById('baudrate')

asyncMsgBtn.addEventListener('click', function(event){
    var portName = portNameSelect.options[portNameSelect.selectedIndex].value
    var baudrate = baudrateSelect.options[baudrateSelect.selectedIndex].value
    ipc.send('serialport-start', {portName : portName, baudrate : baudrate})
})
 