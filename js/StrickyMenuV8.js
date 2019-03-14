//-------------------Positionnement Sticky Menu -------------------------------
let MyMenu = document.querySelector('.navbar');
let MyMenuPosition = MyMenu.getBoundingClientRect().top;
let MyMenuPositionBottom = MyMenu.getBoundingClientRect().bottom;
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= MyMenuPosition) {
        MyMenu.style.position = 'fixed';
        MyMenu.style.top = '0px';
    } else {
        MyMenu.style.position = 'static';
        MyMenu.style.top = '';
    }
});
//-------------------Positionnement Modal -------------------------------

for (let i=0;i<NbrRub;i++){

window.addEventListener('scroll', function() {
	let MyMenuPositionBottom = MyMenu.getBoundingClientRect().bottom;
	MyMenuPositionBottom=MyMenuPositionBottom-4;
    if (window.pageYOffset >= MyMenuPosition) {			
        TabRub[i].style.position = 'fixed';
        TabRub[i].style.marginTop = '0px';	
    } else {
        TabRub[i].style.position = 'fixed';
        TabRub[i].style.top = MyMenuPositionBottom+"px";
    }
});
}//fin for