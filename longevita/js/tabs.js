let garancyBtn = document.querySelector('._garancy');
let questionBtn = document.querySelector('._questions');
let garancy = document.querySelector('.service-garancy');
let questions = document.querySelector('.service-questions');

garancyBtn.onclick = function() {
   garancyBtn.classList.add('_active-btn');
   questionBtn.classList.remove('_active-btn');
   garancy.classList.remove('hidden');
   questions.classList.add('hidden');
}
questionBtn.onclick = function() {
   questionBtn.classList.add('_active-btn');
   garancyBtn.classList.remove('_active-btn');
   garancy.classList.add('hidden');
   questions.classList.remove('hidden');
}


let spoiler = document.querySelector('.service-questions');
let items = spoiler.querySelectorAll('.service-questions__item');
let line = spoiler.querySelectorAll('.service-questions__line');

function toggleSpoiler() {
  let thisItem = this.parentNode;
  
  items.forEach(item => {
    if (thisItem == item ) {
      // if this item is equal to the clicked item, open it.
      thisItem.classList.toggle('active');
      return;
    } 
    // otherwise, remove the open class
    item.classList.remove('active');
  });
}

line.forEach(question => question.addEventListener('click', toggleSpoiler));
