const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const ipc = require('electron').ipcRenderer

var Serialport = require('serialport')
var serialport = new Serialport('COM4', false)

const portNameSelect = document.getElementById('portName')
const baudrateSelect = document.getElementById('baudrate')

// Open Port button actions.
const openBtn = document.getElementById('open-port')
openBtn.addEventListener('click', function(event){
    var portName = portNameSelect.options[portNameSelect.selectedIndex].value
    var baudrate = baudrateSelect.options[baudrateSelect.selectedIndex].value    
    serialport = new Serialport(portName)
})

// Send button actions.
const sendBtn = document.getElementById('send-btn')
sendBtn.addEventListener('click', function(event){
    let tx = document.getElementById('tx')
    if(serialport){
        serialport.write(tx.value)
    }
    ipc.send('serialport-send', tx.value)
})

// serialport received event handler.
serialport.on('data', function(data){
    console.log('Data: ' + data)
    ipc.send('serialport-received', data)
    let rx = document.getElementById('rx')
    rx.value += data
})
