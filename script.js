// NavBar Toggle Handling
var menubar=document.querySelector('.menubar');
        function toggle(e){
            if(e.name=='menu-outline'){
                e.name='close-outline';
                menubar.style.display='Block';
                // menubar.classList.replace('top-[150vw]','left-0');
                // console.log('checked')
            }
            else{
                e.name='menu-outline';
                // menubar.classList.replace('top-57','left-0');
                menubar.style.display='none';
            }
        }