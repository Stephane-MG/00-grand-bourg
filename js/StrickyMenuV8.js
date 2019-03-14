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
//----------------------------------------------------------------------------
//let TabMyRubrik=new Array();
//let MyRubrikPosition = MyRubrique.getBoundingClientRect().top;
for (let i=0;i<NbrRub;i++){
//TabMyRubrik[i]= TabRub[i];
	//console.log(TabRub[i]);
window.addEventListener('scroll', function() {
	let MyMenuPositionBottom = MyMenu.getBoundingClientRect().bottom;
	MyMenuPositionBottom=MyMenuPositionBottom-4;
    if (window.pageYOffset >= MyMenuPosition) {
		
		console.log(MyMenuPositionBottom);
        TabRub[i].style.position = 'fixed';
        TabRub[i].style.marginTop = '0px';
		//console.log(MyMenuPosition);
    } else {
        TabRub[i].style.position = 'fixed';
        TabRub[i].style.top = MyMenuPositionBottom+"px";
    }
});
}//fin for0