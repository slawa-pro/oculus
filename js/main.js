console.log('work')
'use strict'

const tabItem = document.querySelectorAll('.tabs_btn_item');
console.log(tabItem)
const tabContent = document.querySelectorAll('.tabs_content_item');
console.log(tabContent)

tabItem.forEach(function(element){
  element.addEventListener('click', open);
  console.log(element)
});

function open(event){
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;
  console.log(button)

  tabItem.forEach(function(item){
    item.classList.remove('tabs_btn_item_active');
  });

  tabContent.forEach(function(item){
    item.classList.remove('tabs_content_item_active');
  });

  tabTarget.classList.add('tabs_btn_item_active');
  document.querySelector(`#${button}`).classList.add('tabs_content_item_active');
}

const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu_active');  
});

