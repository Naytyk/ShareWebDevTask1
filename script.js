const hamicon = document.querySelector('#ham');
const hamMenu = document.querySelector('#hammenu');
const hamMenulist = document.querySelector('#liham ul');
const hammenua = hamMenulist.getElementsByTagName('a')

hamicon.addEventListener('click', ()=>{hamMenu.classList.toggle('active');});
hamMenulist.addEventListener('click', ()=>{hamMenu.classList.toggle('active');});