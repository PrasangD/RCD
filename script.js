document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.navbar-toggler');
    const collapsibleContent = document.querySelector('.collapse');
  
    toggleButton.addEventListener('click', function() {
      collapsibleContent.classList.toggle('show');
    });
  });
  



const prev = document.getElementById('prev-button')
const next = document.getElementById('next-button')
const list = document.getElementById('listcontainer')
const itemWidth = 150
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth + padding)
})


function myFunction(x) {
  x.classList.toggle("change");
}