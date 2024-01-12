// window.onload = function() {
//     var body = document.getElementsByClassName('body-top');
//     body[0].style.backgroundColor = '#000000';
// };
// execBtn

// ID modal

window.addEventListener('load', () => {
    const execPanel = document.getElementById('executePanel');
    const execButton = execPanel?.appendChild(document.createElement('div'));
    if (!execButton) return;
    execButton.innerHTML = '<input type="button" value="！！実行！！" class="einput" onclick="{execute(curExId, curClsName); }">'
});

export {}