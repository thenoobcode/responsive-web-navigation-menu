function toggleMenuCollapse(event){
    let btn=event.target;
    let menuHolder= btn.nextElementSibling;
    if(menuHolder!=null && menuHolder.matches(".menu-holder")){
        menuHolder.classList.toggle("show");
        btn.classList.toggle("close");
    }
}