const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 900, height: 600})

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/view/index.html`)

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

const ipc = require('electron').ipcMain

ipc.on('asynchronous-message', function(event, arg){
    console.log(arg)  
})


// var Serialport = require('serialport')
// var portName
// var portBaud
// var serialport = new Serialport('COM4')

// ipc.on('serialport-start', function(event, arg){
//     portName = arg.portName;
//     portBaud = arg.baudrate;
//     serialport = new Serialport(portName, {
//         baudrate : portBaud
//     })    
// })

ipc.on('serialport-send', function(event, arg){
    // if(serialport){
    //     serialport.write(arg)
    // }
    console.log(arg)
})

// serialport.on('data', function(data){
//     console.log('Data: ' + data)
//     ipc.send('serialport-received', data)
// })


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
