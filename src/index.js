const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const btn = document.getElementById('test');

btn.addEventListener('click', function(event){
    const modalPath = path.join('file://', __dirname, '../view/serialconfig.html')
    let win = new BrowserWindow({ width: 450, height: 550, frame:false, resizable : false })
//    win.webContents.openDevTools()
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
})

const sendBtn = document.getElementById('send-btn')
sendBtn.addEventListener('click', function(event){
    let tx = document.getElementById('tx')
    console.log(tx.value)
})
