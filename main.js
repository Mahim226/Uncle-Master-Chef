// ==================================
//            Nav Selection
// ==================================
  
  //nav animation
let nav = document.querySelector(".custom-nav");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled")
    }
}
                            //Explaination
                            // Parts:

                            // document: This refers to the entire HTML document loaded in the browser window.

                            // .documentElement: This selects the root element of the HTML document, 
                            //                   which is usually the <html> element.
                            // .scrollTop: This is a property specifically for the <html> element 
                            //            (or document.documentElement) that represents the number of pixels currently 
                            //            scrolled vertically from the top of the document.

                            // What it Does:

                            //   When you scroll down a webpage, the content you see on the screen "moves" down, but the 
                            //   actual content isn't physically moving. Instead, the browser scrolls the document upwards, 
                            //   revealing content that was previously hidden below the viewport (visible area of the browser window).
                            //   The document.documentElement.scrollTop property keeps track of this vertical scrolling distance.
                            //   The value returned is the number of pixels the document has been scrolled from its top position (0 pixels).


       //fixed collapse to hide the menu while click
       
let navBar = document.querySelectorAll(".nav-link");
let collapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach((a) => {
    a.addEventListener("click", () => {
        collapse.classList.remove("show"); 
    })
})

   //fixed collapse menu bar side background

let collapsex = document.querySelector(".custom-collapse-x");
let toggler = document.querySelector(".navbar-toggler");
let Cn = document.querySelector(".custom-nav");

toggler.addEventListener("click", () => {
    Cn.classList.toggle("yy");
  });                                           
        
  
navBar.forEach( (NL) => {
    NL.addEventListener("click", () => {
    Cn.classList.toggle("yy");
  }); 
})

   //theme


//var icon = document.getElementById("theme")
var icon = document.getElementById("toggle");
//var icon = document.getElementsByClassName("theme-icon")

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    // if (document.body.classList.contains("dark-theme")) {
    //     icon.classList.remove("fa-sun");
    //     icon.classList.add("fa-moon")
    // } else {
    //     icon.classList.add("fa-sun");
    //     icon.classList.remove("fa-moon")
    // }
}






// toggler.addEventListener("click", () => {
//   if (Cn.classList.contains("yy")) {
//     Cn.classList.remove("yy"); // Remove if already present
//   } else {
//     Cn.classList.add("yy"); // Add if not present
//   }
// });

// navBar.forEach((NL) => {
//     NL.addEventListener("click", () => {
//   if (Cn.classList.contains("yy")) {
//     Cn.classList.remove("yy"); // Remove if already present
//   } else {
//     Cn.classList.add("yy"); // Add if not present
//   }
// });
// })






 

// ==================================
//            Counter Selection
// ==================================

// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration) {
//         let obj = document.getElementById(id),
//         current = start,
//         range = end - start,
//         increment = end > start ? 1 : -1,
//         step = Math.abs(Math.floor(duration / range)),
//         timer = setINterval(() => {
//             current += increment;
//             obj.textContent = current;
//             if ( current == end ) {
//                 clearInterval(timer);
//             }
//         }, step);

//     }
//     counter("count", 0, 3000, 3000);
// })

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let nubmer = document.getElementById(id),
        increment = end > start ? 1 : -1,
        step = duration,
        timer = setInterval(() => {
            start += increment;
            nubmer.textContent = start;
            if ( start == end) {
                clearInterval(timer);
            } 
        }, step)
    }
    counter("count-1", 0, 1000, 1 );
    counter("count-2", 500, 2034, 1);
    counter("count-3", 741, 4932, 1);
    counter("count-4", 358, 3024, 1);
})





