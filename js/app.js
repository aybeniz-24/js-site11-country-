function light() {
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");
    const nav = document.querySelector("nav");
    const bar = document.querySelector("#bar");
    const menu = document.querySelector("#menu");
    const link = menu.querySelectorAll('a')
    const slidermenu = document.querySelector("#slidermenu");
    const earth = document.querySelector("#earth");
    const main = document.querySelector("main");
    const h1 = document.querySelector("h1")
    const footer = document.querySelector("footer");
    const footertext = document.querySelectorAll(".footertext");

    if (sun.style.display === 'block' || sun.style.display === '') {
        sun.style.display = 'none';
        moon.style.display = 'block';
        slidermenu.style.background = 'rgb(17, 24, 39)';
        document.body.classList.add('dark-mode'); 
        nav.style.background = 'rgb(17, 24, 39)';
        main.style.background = '#1f2937';
        h1.style.color = '#d4d4d8';
        footer.style.background = 'rgb(17, 24, 39)';
        moon.style.color = '#d4d4d8';
        for (let i = 0; i < footertext.length; i++) {
           footertext[i].style.color = "#d4d4d8"
        }
        for (let i = 0; i < link.length; i++) {
           link[i].style.color = '#d4d4d8'
        }       
       if(bar) {
        bar.style.color = '#d4d4d8';
       }
    } else {
        sun.style.display = 'block';
        moon.style.display = 'none';  document.body.classList.remove('dark-mode'); 
        nav.style.background = '#fff';
        main.style.background = '#e5e7eb';
        h1.style.color = 'initial';
        footer.style.background = '#fff';
        slidermenu.style.background = 'initial';
        slidermenu.style.color = 'initial';
        for (let i = 0; i < link.length; i++) {
            link[i].style.color = 'initial'
         }  
        for (let i = 0; i < footertext.length; i++) {
            footertext[i].style.color = 'initial'
         }  
        if(bar){
            bar.style.color = "initial"
        }
    }
}

function menu(){
    const bar = document.querySelector("#bar")
    const menu = document.querySelector("#menu")
    if( menu.style.display === 'none' || menu.style.display === '' ){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}

