let b = 683
while(b>0){
    
    last= b%10
    b = Math.floor(b/10)
    
    if(last==1){
        console.log('one')
    }else if(last==2){ 
        console.log('Two')
    }else if(last==3){
        console.log('Three')
    }else if(last==4){
        console.log('Four')
    }else if(last==5){
        console.log('five')
    }else if(last==6){
        console.log('six')
    }else if(last==7){
        console.log('Seven')
    }else if(last==8){
        console.log('Eight')
    }else if(last==9){
        console.log('Nine')
    }else if(last==0){
        console.log('zero')
    }
    
}