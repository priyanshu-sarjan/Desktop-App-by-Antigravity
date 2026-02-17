const { contextBridge } = require('electron')

// Expose safe APIs to the website if needed
contextBridge.exposeInMainWorld('myAPI', {
  desktop: true
})
