'use strict'

import {BOARD_1_KEY, BOARD_2_KEY,BOARD_3_KEY,
   cardToLocal_1,cardToLocal_2,cardToLocal_3,
   btn_1,btn_2,btn_3,main_str}  from './constants';
import {displayCard} from './utils';

let userValue = '';
let imageCard = [];


const userSearch = document.getElementById('userInput')
const dropbtn = document.getElementById('dropbtn');
const card_wrapper = document.getElementById('card_wrapper')
card_wrapper.className = 'wrapper';


// Запрос с сервера
fetch('https://62c5d1d6134fa108c25d507d.mockapi.io/card')
.then(res => {
   if(res.ok){
      return res.json()
   } else 
   console.log("ERROR")
   throw Error} )
.then(image_Card => {
   imageCard = image_Card;
   
   // Динамичечкм рисуем вёрстку по значением из массива
   imageCard.forEach((image) =>{
      const card = document.createElement('div');
      card.className = 'card';
      card.id = image.id;


      const card_img = document.createElement('div')
      card_img.className = 'card-img';
      const img = document.createElement('img');
      img.src = image.src; 
      card_img.append(img);
      card.append(card_img)  
  

      const card_title = document.createElement('div')
      card_title.className = 'card-title'
      const card_h4 = document.createElement('h4')
      const cardText = document.createTextNode(image.label);
      card_h4.append(cardText);
      card_title.append(card_h4);
      card.append(card_title);


      const card_board = document.createElement('div');
      card_board.className = 'card-board'
      const addToBoard_1 = document.createElement('button');
      addToBoard_1.className = 'addToBoard-1';
      addToBoard_1.innerText = 'Добавить на доску №1'
      const addToBoard_2 = document.createElement('button');
      addToBoard_2.className = 'addToBoard-2';
      addToBoard_2.innerText = 'Добавить на доску №2'
      const addToBoard_3 = document.createElement('button');
      addToBoard_3.className = 'addToBoard-3';
      addToBoard_3.innerText = 'Добавить на доску №3'
      card_board.append(addToBoard_1,addToBoard_2,addToBoard_3)
      card_img.append(card_board)


      card_wrapper.append(card);

      // Сохраняем в LS 
   addToBoard_1.addEventListener('click',() =>{
      const oldCard = JSON.parse(localStorage.getItem(BOARD_1_KEY));
      const newCard = { id:image.id, label:image.label, src: image.src }
      const  cardToSave = oldCard ? [newCard, ...oldCard] : [newCard]
      localStorage.setItem(BOARD_1_KEY, JSON.stringify(cardToSave))
})

   addToBoard_2.addEventListener('click',() =>{
      const oldCard = JSON.parse(localStorage.getItem(BOARD_2_KEY));
      const newCard = { id:image.id, label:image.label, src: image.src }
      const  cardToSave = oldCard ? [newCard, ...oldCard] : [newCard]
      localStorage.setItem(BOARD_2_KEY, JSON.stringify(cardToSave))
})

   addToBoard_3.addEventListener('click',() =>{
      const oldCard = JSON.parse(localStorage.getItem(BOARD_3_KEY));
      const newCard = { id:image.id, label:image.label, src: image.src }
      const  cardToSave = oldCard ? [newCard, ...oldCard] : [newCard]
      localStorage.setItem(BOARD_3_KEY, JSON.stringify(cardToSave))
})
})
} 
).catch(error =>{
   console.log(error)
  }
)

// Поиск(фильтр) по совпадениям из юзер инпут и текстам внутри объекта

userSearch.addEventListener('search',(e) =>{
   userValue =e.target.value.toUpperCase().trim();
   if(userValue !== ''){
    const filterLabel =  imageCard.filter((card) => {
    card_wrapper.classList= 'search-wrapper';
    return card.label.toUpperCase().includes(userValue);
      })
      // Рисуем  карточки(новый массив) по совпавшим результатам
    displayCard(filterLabel)
   } else {
   card_wrapper.className = 'wrapper';
   return card_wrapper = displayCard(imageCard);
}

});


 
dropbtn.addEventListener('click', () => {
   document.getElementById("myDropdown").classList.toggle("show");

})

window.onclick = function(event) {
 if (!event.target.matches('.dropbtn')) {

   const dropdowns = document.getElementsByClassName("dropdown-content");
     for (let i = 0; i < dropdowns.length; i++) {
     const openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show')) {
       openDropdown.classList.remove('show');
     }
   }
 }
};


btn_1.addEventListener('click', () =>{
    if(cardToLocal_1){
      card_wrapper.classList = 'board-wrapper';
      const printCard =  displayCard(cardToLocal_1);
    
    }
  
});

btn_2.addEventListener('click', () =>{
    if(cardToLocal_2){
      card_wrapper.classList= 'board-wrapper';
      const printCard =  displayCard(cardToLocal_2);
    
    }
   });

 
btn_3.addEventListener('click', () =>{
    if(cardToLocal_3){
      card_wrapper.classList= 'board-wrapper';
      const printCard =  displayCard(cardToLocal_3);
    
    }
   });

 main_str.addEventListener('click',() => {

      card_wrapper.className = 'wrapper';
      return card_wrapper = displayCard(imageCard);
   
   
   })











  

