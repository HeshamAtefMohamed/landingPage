// global variables
const sections=document.querySelectorAll("section");

//


// Build navigation bar in ul 

//start by call ul by id 
    const navBar=document.getElementById("navbar__list");

//call the sections to iterate the navBarBuilder function over them

// declaring the function 
function navBarBuilder(){

//looping over the sections using for of 
for(section of sections){
    
        // create navigition items by li
            const navItem=document.createElement("li");
        /* Build innerHtml text fot li 
        Create the hyperlinks using anchor tag and href which indicates the link's destination*/
        
        //first get anchor id and name
            const itemLink=section.getAttribute("id");
            const itemName=section.getAttribute("data-nav");
        //second build innerHtml for li
        /*
        the template literal technique
        href is the item link
        menu_link is a styling class for navItems"menu_links"
        # to makes href navigate in the same page
        ${ to take the variable
        ` for interprating the text as a link
        */
            navItem.innerHTML=`<a class="menu__link" href="#${itemLink}">${itemName}</a>` ;
        //append li to ul
            navBar.appendChild(navItem);
};
};
    //build the navBar
    navBarBuilder();

//Second determine the active section "in viewport"

// determine which section is in viewport

//Build the viewport function to check which elemnt is in viewport and active
    const isInViewport= function () {
        sections.forEach(function section() {
            //use section.getBoundingClientRect() method to determine section position from all dimensions in the viewoirt
            const bounding = section.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= window.innerHeight &&
                bounding.right <= window.innerWidth
            );
        });  
    };

// build a function to give the active class style to section in viewport

const activeClass = ()=>{
    if(isInViewport){
        section.classlist.add("your-active-class");
    }
    else{
        section.classlist.remove("your-active-class");    
    }
};
// build the event that when scroll in the window the section in the viewport take the active class
    window.addEventListener("scroll", activeClass);






/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


