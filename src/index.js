const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const ipc = require('electron').ipcRenderer
const $ = require('jquery')

var Serialport = require('serialport')
var serialport = new Serialport('COM4')

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
    let rx = document.getElementById('rx').value  + data
    $('#rx').val(rx);
    $('#rx').trigger('autoresize');
})

function sendData(){
    if(serialport){
        console.log('Out...')
//        serialport.write(tx.value);
    }
}


const btn = document.getElementById('test');

btn.addEventListener('click', function(event){
    const modalPath = path.join('file://', __dirname, '../build/serialport.html')
    let win = new BrowserWindow({ width: 450, height: 550, frame:true, resizable : true })
    win.webContents.openDevTools()
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
})

let periodStart = false
var intId =  0
const periodSend = document.getElementById('period-send')
periodSend.addEventListener('change', function(event){
    if(event.target.checked){
        periodStart = true;
        intId = window.setInterval(()=>{serialport.write(tx.value);}, 50);
        console.log(intId)
    }else{
        console.log(intId)
        window.clearInterval(intId)
    }
})

