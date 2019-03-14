let TabUserEvent=new Array();
let TabRub=new Array();//5

for (let i=0;i<5;i++){
    TabRub[i]=document.getElementById("RubriqueMenu0"+i);
//console.log(TabRub[i]);
}
let NbrRub=TabRub.length;
let MyRub="";
        document.getElementById("Menu00").addEventListener("mouseover",function(){
            for(let i=0;i<NbrRub;i++){
                MyRub=TabRub[i];
                if(i===0){				
                 MyRub.style.visibility="visible";
				
                }else{
                    MyRub.style.visibility="hidden";
					
                }
            }
            });
        document.getElementById("Menu01").addEventListener("mouseover",function(){
            for(let i=0;i<NbrRub;i++){
               MyRub=TabRub[i];
                if(i===1){
                  MyRub.style.visibility="visible";
					
                }else{
                   MyRub.style.visibility="hidden";					
                }
            }
            });
        document.getElementById("Menu02").addEventListener("mouseover",function(){
                for(let i=0;i<NbrRub;i++){
                    MyRub=TabRub[i];
                    if(i===2){						
						 MyRub.style.visibility="visible";						
                    }else{
                       MyRub.style.visibility="hidden";
						
                    }
                }
                });
        document.getElementById("Menu03").addEventListener("mouseover",function(){
            for(let i=0;i<NbrRub;i++){
                MyRub=TabRub[i];
                if(i===3){
                   MyRub.style.visibility="visible";
                }else{
                    MyRub.style.visibility="hidden";
                }
            }
            });
        document.getElementById("Menu04").addEventListener("mouseover",function(){
                for(let i=0;i<NbrRub;i++){
                    MyRub=TabRub[i];
                    if(i===4){
                        MyRub.style.visibility="visible";
                    }else{
                        MyRub.style.visibility="hidden";
                    }
                }
                });
                document.getElementById("RubriqueMenu00").addEventListener("mouseleave",function(){
                    for(let i=0;i<NbrRub;i++){
                        MyRub=TabRub[i];
                        if(i===0){
                           MyRub.style.visibility="hidden";
                        }
                    }
                    });
                document.getElementById("RubriqueMenu01").addEventListener("mouseleave",function(){
                    for(let i=0;i<NbrRub;i++){
                        MyRub=TabRub[i];
                        if(i===1){
                            MyRub.style.visibility="hidden";
                        }
                    }
                    });
                

                document.getElementById("RubriqueMenu02").addEventListener("mouseleave",function(){
                    for(let i=0;i<NbrRub;i++){
                        MyRub=TabRub[i];
                        if(i===2){
                           MyRub.style.visibility="hidden";
                        }
                    }
                    });
                document.getElementById("RubriqueMenu03").addEventListener("mouseleave",function(){
                    for(let i=0;i<NbrRub;i++){
                        MyRub=TabRub[i];
                        if(i===3){
                           MyRub.style.visibility="hidden";
                        }
                    }
                    });
                document.getElementById("RubriqueMenu04").addEventListener("mouseleave",function(){
                    for(let i=0;i<NbrRub;i++){
                        MyRub=TabRub[i];
                        if(i===4){
                            MyRub.style.visibility="hidden";
                        }
                    }
                    });

                