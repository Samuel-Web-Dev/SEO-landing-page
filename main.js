
const analysisData = [
  {
    icon: `<span class="material-symbols-outlined">
    search
    </span>`,
    text: `Plagiarism Checker`
  },
  {
    icon: `<span class="material-symbols-outlined">
    edit
    </span>`,
    text: `Article Rewriter`
  },
  {
    icon: `<span class="material-symbols-outlined">
    terminal
    </span>`,
    text: `Grammar Checker`
  },
  {
    icon: `<span class="material-symbols-outlined">
    mobile_friendly
    </span>`,
    text: `Words Counter`
  },
  {
    icon: `<span class="material-symbols-outlined">
    search
    </span>`,
    text: `Plagiarism Checker`
  },
  {
    icon: `<span class="material-symbols-outlined">
    edit
    </span>`,
    text: `Article Rewriter`
  },
  {
    icon: `<span class="material-symbols-outlined">
    terminal
    </span>`,
    text: `Grammar Checker`
  },
  {
    icon: `<span class="material-symbols-outlined">
    mobile_friendly
    </span>`,
    text: `Words Counter`
  },
]

 let analysisDataContainer = document.querySelector('.analysis_data');

  let dataElem = ''
 analysisData.forEach(data => {
   dataElem += `<div>
         ${data.icon}
         <p>${data.text}</p> 
   </div>`

   analysisDataContainer.innerHTML = dataElem
 })

 let closeBtn = document.querySelector('.close_btn')
 let hamburger = document.querySelector('.hamburger_menu');


 let navItems = document.querySelector('.sub_nav_items');

 hamburger.addEventListener('click',() => {
    navItems.classList.add('showMenu');
    document.body.classList.add('overlay')
 })

 closeBtn.addEventListener('click', () => {
   navItems.classList.remove('showMenu')
   document.body.classList.remove('overlay')
 })