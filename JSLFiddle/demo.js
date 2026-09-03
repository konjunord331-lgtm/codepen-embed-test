const frame=document.getElementById('ugoPreview');
const status=document.getElementById('bridgeStatus');
frame.addEventListener('load',()=>{status.textContent='UGO preview loaded · inb4-vb01';setTimeout(()=>{status.style.opacity='0'},1800)});