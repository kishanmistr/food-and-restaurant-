// active navbar

let nav = document.querySelector('.navigation-wrap');
window.onscroll =  function() {

    if(document.documentElement.scrollTop > 20) {

        nav.classList.add('scroll-on');
    }
    else {

        nav.classList.remove('scroll-on');
    }
}


// nav hide (koi par (nav-item ni under nav-link) click kare tyare menu bandh)

let navbar = document.querySelectorAll('.nav-link');
let navCollapse  = document.querySelector('.navbar-collapse.collapse');

navbar.forEach( (a) => {

    a.addEventListener('click', () => {

        navCollapse.classList.remove('show'); // boostrap class show (mobile screen ma boostrap add kare show ne tene kadhvu)
    })
} )




// counter design

document.addEventListener("DOMContentLoaded", () => {

    function counter(id,start,end,duration) {

        let obj = document.getElementById(id),
        current = start ,
        range = end - start,
        increment = end > start ? 1 : -1 ,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval( () => {

            current += increment ;
            obj.textContent = current ;
            if(current == end) {

                clearInterval(timer);
            } 
        }, step);
    }

    counter("count1",0,1287,3000);
    counter("count2",0,5786,2500);
    counter("count3",0,1440,3000);
    counter("count4",0,7110,3000);
})