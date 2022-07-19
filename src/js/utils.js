// Рисуем новые карточки
export const displayCard = (cards) => {
   if(cards) {
    const searchCard = cards.map((card) =>{
       return `
      
         <div class="card" id ="${card.id}">
            <div class="card-img">
               <img src="${card.src}"></img>
            <div class="card-board">
             <button class="addToBoard-1" id="addToBoard-1"> Добавить на доску №1
             </button>
             <button class="addToBoard-2" id="addToBoard-2"> Добавить на доску №2
             </button>
             <button class="addToBoard-3" id="addToBoard-3"> Добавить на доску №3
             </button>
            
                </div>

            </div>
            <div class="card-title"> 
                <h4> ${card.label} </h4>
                   </div>
          </div>
        
                      `;
       }).join('');
   
   card_wrapper.innerHTML = searchCard;
   
  }
} 

