// const hamburgerIcon = document.querySelector('.menuBar02');
// const collapseContainer = document.querySelector('.headContainer-nav-connect02');

// collapseContainer.style.display = 'none';

// function hamburgerToggle() {
//     if (collapseContainer.style.display === 'none') {
//         collapseContainer.style.display = 'block';
//     } else {
//         collapseContainer.style.display = 'none';
//     }
// }

// hamburgerIcon.onclick = () => {
//     hamburgerToggle();
// };


const hamburgerIcon = document.querySelector('.menuBar02');
const collapseContainer = document.querySelector('.headContainer-nav-connect02');

collapseContainer.style.display = 'none';

hamburgerIcon.addEventListener('click', ()=>{
    if(collapseContainer.style.display === 'none' && collapseContainer.style.display === ''){
        collapseContainer.style.display = 'block'
    }else{
        collapseContainer.style.display = 'none'
    }
})


console.log("hamburgerIcon:", hamburgerIcon);
console.log("collapseContainer:", collapseContainer);
