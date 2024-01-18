// window.onload = function() {
//     var body = document.getElementsByClassName('body-top');
//     body[0].style.backgroundColor = '#000000';
// };
// execBtn

// ID modal

import './assets/button.css';

// const options = {
//     type: 'basic',
//     iconUrl: 'path/to/icon.png', // アイコンのパス
//     title: '通知のタイトル',
//     message: '通知の本文'
//   };

//   // 通知を表示
//   chrome.notifications.create('notificationId', options, function(notificationId) {
//     // 通知がクリックされたときの処理
//   });

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
        execButton.id = '';
        execButton.className = 'einput';
    });

    if (execButtons[0]) { 
        execButtons[0].className += ' rainbow excuteB';
        //@ts-ignore
        execButtons[0].value = '！実行！';
        // execButtons[0].onclick = '';
    }
    if (execButtons[1]) { 
        execButtons[1].className += ' redButton excuteB';
    }
    if (execButtons[2]) { 
        execButtons[2].id = 'submitBtn';
        execButtons[2].className += ' blueButton excuteB';
    }

    // const execPanel = document.getElementById('executePanel');
    // const execButton = execPanel?.appendChild(document.createElement('div'));
    // if (!execButton) return;
});

export {}