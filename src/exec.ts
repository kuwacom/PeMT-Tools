// window.onload = function() {
//     var body = document.getElementsByClassName('body-top');
//     body[0].style.backgroundColor = '#000000';
// };
// execBtn

// ID modal

import './assets/button.css';

window.addEventListener('load', () => {
    const modal = document.getElementById('modal');
    modal?.remove();

    const execButtons = [
        document.getElementById('execBtn'),
        document.getElementById('clearBtn'),
        document.getElementById('submitBtn'),
    ]

    execButtons.map((execButton) => {
        if (!execButton) return;
        execButton.id = 'fuck';
        execButton.className = 'einput';
    });

    if (execButtons[0]) { 
        execButtons[0].className += ' rainbow excuteB';
        //@ts-ignore
        execButtons[0].value = '！！実行！！';
    }

    // const execPanel = document.getElementById('executePanel');
    // const execButton = execPanel?.appendChild(document.createElement('div'));
    // if (!execButton) return;
});

export {}