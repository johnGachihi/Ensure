const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let window;

function createWindow() {

    window = new BrowserWindow({
        width: 900,
        height: 800
    });

    window.loadURL(url.format({
        pathname: path.join(__dirname, '../windows/home.html'),
        protocol: 'file:',
        slashes: true
    }));

    window.on('closed', () => {
        window = null;
    });

    const contents = window.webContents;
    contents.openDevTools({mode: 'bottom'});
}

app.on('ready', createWindow);

app.on('activate', () => {
    if (window == null) {
        createWindow();
    }
})