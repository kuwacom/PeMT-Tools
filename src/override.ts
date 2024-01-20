// const scripts = document.querySelectorAll('script');

// scripts.forEach((script) => {
//     if (script.src.includes('ace.js')) {
//         script.remove();

//         const newScript = document.createElement('script');
//         newScript.src = chrome.runtime.getURL('ace.js');
//         document.body.appendChild(newScript);
//     }
// });

const languageTools = document.createElement('script');
languageTools.src = chrome.runtime.getURL('ext-language_tools.js');;
document.body.appendChild(languageTools);

const emmetCore = document.createElement('script');
emmetCore.src = chrome.runtime.getURL('https://cloud9ide.github.io/emmet-core/emmet.js');;
document.body.appendChild(emmetCore);


// document.addEventListener('overrideScript', (e) => {
//     // @ts-ignore
//     const _window: Window & typeof globalThis = e.detail;
//     console.log("Done Load!!");

//     // @ts-ignore
//     console.log(_window)
// });


const overrideScript = document.createElement('script');
overrideScript.src = chrome.runtime.getURL('override.js');
document.body.appendChild(overrideScript);
overrideScript.onload = () => {
    overrideScript.remove();
};

export {}