const FRONT = "card_front"
const BACK = "card_back"

let techs = 
["bootstrap",
 "firebase", 
 "mongoDB",
 "electron",
 "html",
 "css",
 "javascript",
 "react",
 "node",
 "jquery"]
 let cards = null

 function startGame(){
   cards = createCardWithTech(techs)
   shuffleCards(cards)
   console.log(cards)
 }

 function createCardWithTech(techs){

    let cards = []

     for(let tech of techs){
        cards.push(createPairWithTech(tech))
     }
   
     return cards.flatMap(pair=>pair)
 }


 function createPairWithTech(tech){
   return [{id:createID(tech),icon:tech,flipped:false},{id:createID(tech),icon:tech,flipped:false}]
 }

 function createID(tech){
    return tech + parseInt(Math.random()*1000)
 }

 function shuffleCards(cards){
    let currentIndex = cards.length
    let randomIndex = 0

    while(currentIndex !== 0){
         randomIndex = Math.floor(Math.random()*currentIndex)
         currentIndex--

      [cards[randomIndex],cards[currentIndex]] = [cards[currentIndex],cards[randomIndex]]
    }
 }

 startGame()
