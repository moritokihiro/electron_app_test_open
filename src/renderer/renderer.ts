export {}; // Make this file a module

declare global {
  interface Window {
    api: {
      getSims: () => Promise<any>;
    };
  }
}

const loadBtn = document.getElementById('loadSims')!;
const result = document.getElementById('result')!;

loadBtn.addEventListener('click', async () => {
  const sims = await window.api.getSims();
  result.textContent = JSON.stringify(sims, null, 2);
});
