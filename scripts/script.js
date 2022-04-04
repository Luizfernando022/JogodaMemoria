const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"

let techs = 
["bootstrap",
 "firebase", 
 "mongo",
 "electron",
 "html",
 "css",
 "javascript",
 "react",
 "node",
 "jquery"]
 let cards = null

 function startGame(){
    cards = createCardsWithTechs(techs)

    shuffleCards(cards)
    console.log(cards)
    initializeCards(cards)
 
 }

 function initializeCards(cards){
   let gameboard = document.getElementById('gameboard')
      
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

function createCardsWithTechs(techs){
   let cards = []

   techs.forEach(tech => {
      cards.push(createPairWithTech(tech))
   });
   return cards.flatMap(pair=>pair)
}

function createPairWithTech(tech){
   return [{id:createID(tech),icon:tech,flipped:false},{id:createID(tech),icon:tech,flipped:false}]
}

function createID(tech){
return tech + parseInt((Math.random()*1000))
}

function shuffleCards(cards){
   let contentIndex = cards.length
   let randomIndex = 0

   while(contentIndex !== 0){
      randomIndex = Math.floor(Math.random()*contentIndex)
      contentIndex--

      [cards[randomIndex],cards[contentIndex]] = [cards[contentIndex],cards[randomIndex]]
   }

}

function flipCard(){
this.classList.add('flip')

setTimeout(()=>{
   this.classList = "card"
},2000)
}