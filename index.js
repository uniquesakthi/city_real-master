
var rightHead = document.getElementsByClassName("rightHead");
// var leftHead = document.getElementsByClassName("rightHead");

// console.log(rightHead);
function removeOpacity(element){
    console.log(element)
    element.classList.remove("noOpacity");
    console.log(element);
}


setInterval(() => {
    rightHead[0].classList.remove("noOpacity");
    rightHead[1].classList.remove("noOpacity");
    rightHead[2].classList.remove("noOpacity");
}, 1100);




var otherBtns = document.getElementsByClassName("btn");


var qatarContainer = document.getElementsByClassName("qatar")[0];
var dubaiContainer = document.getElementsByClassName("dubai")[0];
var mauritiusContainer = document.getElementsByClassName("mauritius")[0];
var saudiContainer = document.getElementsByClassName("saudi")[0];

function handleTab(selectedBtn){
    
    for(i=0;i<otherBtns.length;i++){
        otherBtns[i].classList.remove("active");
    }
    selectedBtn.classList.add("active");

   changePhotosContainer(selectedBtn.value)
}


var qatarAbout = document.getElementById("qatarAbout");
console.log(qatarAbout);

let observer = new IntersectionObserver(updates => {
    updates.forEach(update =>{
        console.log(update);
        if(update.isIntersecting){
            update.target.classList.add('addAnimation');
            
        }
        // else{
        //     update.target.classList.remove('addAnimation');

        // }
    });
},{threshold:0});


var allElements = document.querySelectorAll(".element");
console.log(allElements);
allElements.forEach( element =>{
    observer.observe(element);
})

// Function to change Photos in Tab Switching
function changePhotosContainer(value){
    if(value === "UAE"){
        dubaiContainer.classList.add("active");

        qatarContainer.classList.remove("active");
        mauritiusContainer.classList.remove("active");
        saudiContainer.classList.remove("active");
        
    }
    else if(value === "QATAR"){
        qatarContainer.classList.add("active");

        dubaiContainer.classList.remove("active");
        mauritiusContainer.classList.remove("active");
        saudiContainer.classList.remove("active");
        
    }
    else if(value === "MAURITIUS"){
        mauritiusContainer.classList.add("active");
        
        
        qatarContainer.classList.remove("active");
        dubaiContainer.classList.remove("active");
        saudiContainer.classList.remove("active");
        
    }
    else if(value === "SAUDI"){
        saudiContainer.classList.add("active");
        
        
        qatarContainer.classList.remove("active");
        dubaiContainer.classList.remove("active");
        mauritiusContainer.classList.remove("active");
        
    }
}



// setInterval(()=>{
//     // removeOpacity(rightHead);
//     rightHead.style.opacity = 1;
// },1000);