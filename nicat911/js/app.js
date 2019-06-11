function Change(a){
    var content=document.getElementsByClassName("tabContent")
    for(var i=0; i<content.length;i++){
        content[i].classList.remove("active")
    }
    document.getElementById(a).classList.add("active")
}

    