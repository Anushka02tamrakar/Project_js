let toggle = document.getElementById('modeToggle');
let body = document.body;

toggle.addEventListener('change', function(){
    body.style.backgroundColor = toggle.checked ? '#bca80e':'white';
});




