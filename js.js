function mostrar(caja){

    var info = document.getElementById(caja)
    if(info.style.display =='none') {
        info.style.display= 'block'
    }else{
        info.style.display = 'none'
    }
};
