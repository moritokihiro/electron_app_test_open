import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  getSims: () => ipcRenderer.invoke('get-sims'),
});
