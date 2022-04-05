const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"


 function startGame(){
    
    initializeCards(game.createCardsWithTechs())
 
 }

 function initializeCards(cards){
   let gameboard = document.getElementById('gameboard')
      gameboard.innerHTML = ''
      cards.forEach((card)=>{
      let cardElement = document.createElement('div')
      cardElement.id = card.id
      cardElement.classList = CARD
      cardElement.dataset.icon = card.icon
      cardElement.addEventListener('click',flipCard)
      createCardContent(card,cardElement)
    

      gameboard.appendChild(cardElement)
   })


 }

 function createCardContent(card,cardElement){

    createCardFace(FRONT,card,cardElement);
    createCardFace(BACK,card,cardElement);

 }

 function createCardFace(face,card,element){

   let cardElementFace = document.createElement('div')

      cardElementFace.classList.add(face)

      if(face === FRONT){
         let img = document.createElement('img')
         img.classList = ICON
         img.src = `./images/${card.icon}.png`
         cardElementFace.appendChild(img)
      }else{
         cardElementFace.innerHTML = " &lt;/&gt;"
      }

      element.appendChild(cardElementFace)
 }

 startGame()



function flipCard(){
  
   if(game.setCard(this.id)){
      
   this.classList.add('flip')
   if(game.secondCard){
   if(game.checkFace()){
      game.clearCards()
      if(game.gameover()){
         document.getElementById('gameOver').style.display = "flex"
      }
      
   }else{
      setTimeout(()=>{
      let firstCardView = document.getElementById(game.firstCard.id)
      let secondCardView = document.getElementById(game.secondCard.id)
      firstCardView.classList.remove('flip')
      secondCardView.classList.remove('flip')
      game.unFlipCards()
   },1000)
}
   }

}

}

function restart(){
   game.clearCards()
   startGame()
   document.getElementById('gameOver').style.display = "none"
}