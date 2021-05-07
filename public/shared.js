//getting menu elements and menu open status
var menuContent = document.getElementById('dropdown-menu-content');
var closeBtn = document.getElementById('close');
var hamburger = document.getElementById('hamburger');
var menuOpen = false;

const openMenu = () => {
    if (menuContent.style.display == 'flex') {
        menuContent.style.display = 'none';
        closeBtn.style.display = 'none';
        hamburger.style.display = 'block';
        menuOpen = false;
      } 
    else {
        menuContent.style.display = 'flex';
        closeBtn.style.display = 'block';
        hamburger.style.display = 'none';
        menuOpen = true;
        
        /*if(menuOpen == true) {
            window.addEventListener('click', outsideClick);
        } else {
            window.removeEventListener('click', outsideClick)
        }*/
    }
}