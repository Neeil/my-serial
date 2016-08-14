const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const ipc = require('electron').ipcRenderer

const btn = document.getElementById('test');

btn.addEventListener('click', function(event){
    const modalPath = path.join('file://', __dirname, '../view/serialconfig.html')
    let win = new BrowserWindow({ width: 450, height: 550, frame:true, resizable : true })
    win.webContents.openDevTools()
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
})

const sendBtn = document.getElementById('send-btn')
sendBtn.addEventListener('click', function(event){
    let tx = document.getElementById('tx')
    if(serialport){
        serialport.write(tx.value)
    }
    ipc.send('serialport-send', tx.value)
})

ipc.on('serialport-start', function(event, arg){
    console.log(arg)
})


var Serialport = require('serialport')
var portName
var portBaud
var serialport = new Serialport('COM4')


ipc.on('serialport-send', function(event, arg){
    if(serialport){
        serialport.write(arg)
    }
})

serialport.on('data', function(data){
    console.log('Data: ' + data)
    ipc.send('serialport-received', data)
    let rx = document.getElementById('rx')
    rx.value += data
})
