// Build navigation bar in ul 

//start by call ul by id 
const navBar=document.getElementById("navbar__list");

//call the sections to iterate the navBarBuilder function over them
const sections=document.querySelectorAll("section");

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

//Second 

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


