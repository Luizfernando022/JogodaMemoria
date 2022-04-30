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

function initializeCubicsAnimation(){
   let body = document.getElementsByTagName('body')[0]
   for(let i = 0;i < 10;i++){
      let cubo = document.createElement('div')

      let random = (min,max)=>parseInt(Math.random()*(max - min) + min)

      let randomSize = random(20,120)
      let randomPosition = random(1,99)
      let randomDelay = random(0.1,5)
      let randomDuration = random(5,10)

         cubo.classList.add('cubo')
         cubo.style.width = `${randomSize}px`
         cubo.style.height = `${randomSize}px`
         cubo.style.bottom = `-${randomSize}px`
         cubo.style.left = `${randomPosition}%`
         cubo.style.animationDelay = `${randomDelay}s`
         cubo.style.animationDuration = `${randomDuration}s`

         body.appendChild(cubo)
   }

}
initializeCubicsAnimation()

function restart(){
   game.clearCards()
   startGame()
   document.getElementById('gameOver').style.display = "none"
}