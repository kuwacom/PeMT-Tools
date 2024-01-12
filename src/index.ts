import './assets/main.css';

const projectVersion = "0.1.0";

window.addEventListener('load', () => {
    console.log("Ready PeMT-Tools!!");
    
    const restrict = document.getElementById('restrict');
    restrict?.remove();

    const controls = document.getElementById('controls');
    if (controls) controls.innerHTML = `
    <p class="pemttcredit gaming">PeMT-Tools - v${projectVersion} - 導入済み</p>
    ` + controls.innerHTML

});


export { projectVersion }