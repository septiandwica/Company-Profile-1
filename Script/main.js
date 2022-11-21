const navBar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll',function(){
    console.log(window.scrollY);
    if (window.scrollY > 1){
        navBar.classList.replace("bg-transparent", "navbar-color");
    } else if(this.window.scrollY <= 0){
        navBar.classList.replace("navbar-color", "bg-transparent")
    }
});
const selectNav = document.querySelectorAll('li a');
selectNav.forEach(a => {
    a.addEventListener("click",()=>{
        resetselectNav();
        a.classList.add("active");
    })
});
function resetselectNav() {
    selectNav.forEach(a => {
        a.classList.remove("active"); 
    });
};

