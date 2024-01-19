import './assets/main.css';

const projectVersion = "1.0.0";

console.log("Ready PeMT-Tools!!");

const restrict = document.getElementById('restrict');
restrict?.remove();

const controls = document.getElementById('controls');
if (controls) controls.innerHTML = `
<a href="https://github.com/kuwacom/PeMT-Tools" class="pemttcredit gaming">PeMT-Tools - v${projectVersion} - 導入済み</a>
` + controls.innerHTML;

export { projectVersion }