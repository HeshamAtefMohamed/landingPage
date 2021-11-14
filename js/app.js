// global variables
const sections=document.querySelectorAll("section");
//

//First build scrollTosec fun that prevents default scrolling and makes it smooth

const scrollToSec= function(event){

    Sections.forEach(function (){

    // for preventing the default scrolling
        event.preventDefault();
    // add scrolling event and make it smoothly
        section.scrollIntoView({behavior:"smooth", block:"centre"});
    });
    
};


//second Build navigation bar in ul 

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

//third determine the active section "the section in viewport"

// determine which section is in viewport

//Build the viewport function to check which section is in viewport and active
const isInViewport= (section) => {
    //use section.getBoundingClientRect() method to determine section position from all dimensions in the viewoirt
    const bounding = section.getBoundingClientRect();
    return (
    // it will check the function and work clearly wether in pc or small devices
       bounding.top >= 0 &&
       bounding.left >= 0 &&
       bounding.top <=250 &&
       bounding.right <= window.innerWidth    );
}; 
// build a function to give the active class style to section in viewport

const activeClass = ()=>{
//looping over sections and give active class to section in viewport
for(section of sections){
//condition to detect which section is in the viewport and pass the section as an argument to the isInViewport function
if(isInViewport(section)){ 
//add active class if condition is true 
section.classList.add("your-active-class");
}
else{
// remove active class if condition is false
section.classList.remove("your-active-class");    
}
};
};
// build the event that when scroll in the window the section in the viewport take the active class
window.addEventListener("scroll", activeClass);


