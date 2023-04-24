
let darkmode = document.getElementById('btncor');
let darklog = document.getElementById('darklogo');
let lua = document.getElementById('luaa');
let dia = document.getElementById('sol');

darkmode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darklog.classList.toggle('dark-mode');
    darkmode.classList.toggle('btncora');
    dia.classList.toggle('addsol');
    darkmode.classList.toggle('remoluaaa');
    
});

dia.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darklog.classList.toggle('dark-mode');
    darkmode.classList.toggle('btncora');
    dia.classList.toggle('addsol');
    darkmode.classList.toggle('remoluaaa');
    
});


//darkmode.addEventListener('click', () =>{
    //document.body.style.backgroundColor = '#222';
    //darklog.style.color = '#fff';
//});
