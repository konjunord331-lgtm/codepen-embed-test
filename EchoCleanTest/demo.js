const launch=document.getElementById('cleanLaunch');
const status=document.getElementById('status');
const onEcho=location.hostname==='jsfiddle.net' && location.pathname.startsWith('/echo/html/');

if(onEcho){
  document.body.classList.add('clean-active');
  launch.textContent='CLEAN MODE ACTIVE';
  launch.disabled=true;
  status.textContent='The JSFiddle embed wrapper has been replaced by the echoed HTML document. This page is now the clean content itself.';
}else{
  launch.addEventListener('click',()=>{
    launch.textContent='OPENING…';
    launch.disabled=true;

    // Snapshot the current rendered result. JSFiddle's raw result already
    // contains the generated STYLE + SCRIPT tags, so the echoed document
    // can re-run as a standalone page.
    const snapshot='<!doctype html>'+document.documentElement.outerHTML;

    const form=document.createElement('form');
    form.method='POST';
    form.action='https://jsfiddle.net/echo/html/';
    form.target='_parent';
    form.style.display='none';

    const html=document.createElement('textarea');
    html.name='html';
    html.value=snapshot;

    form.appendChild(html);
    document.body.appendChild(form);
    form.submit();
  });
}
