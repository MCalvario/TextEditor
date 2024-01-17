const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Added an event handler to the `beforeinstallprompt` event.

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event; 
    butInstall.classList.toggle("hidden", false);
});


// Implemented a click event handler on the `butInstall` element.

//This is the event listener.
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }


  // This will show the prompt.
  promptEvent.prompt();
  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
