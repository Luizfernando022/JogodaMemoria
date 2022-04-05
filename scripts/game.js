let game = {

  lockMode:false,
  firstCard:null,
  secondCard:null,

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  gameover:function(){
    this.cards.forEach((card)=>{
      if(card.flipped === true){
        return true
      }
    })
  },

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  checkFace:function(){
    if(!this.firstCard || !this.secondCard ){
      return false
    }
    return this.firstCard.icon === this.secondCard.icon
  },

 // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  unFlipCards:function(){
    this.firstCard.flipped = false
    this.secondCard.flipped = false
    this.clearCards()
  },

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  clearCards:function(){
    this.firstCard = null
    this.secondCard = null
    this.lockMode = false
  },

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  setCard:function(id){
    let card = this.cards.filter(card=>card.id===id)[0]
    if(card.flipped || this.lockMode){
      return false
    }
    if(!this.firstCard){
      this.firstCard = card
      this.firstCard.flipped = true
      return true
    }else{
      this.secondCard = card
      this.lockMode = true
      this.secondCard.flipped = true
      return true
    }

  },

  gameover:function(){
    return this.cards.filter(card => !card.flipped).length == 0
    
  },

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  techs: [
    "bootstrap",
    "firebase",
    "mongo",
    "electron",
    "html",
    "css",
    "javascript",
    "react",
    "node",
    "jquery",
  ],

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  cards: null,

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  createCardsWithTechs: function () {
    let cards = [];

    this.techs.forEach((tech) => {
      cards.push(this.createPairWithTech(tech));
    });
    this.cards = cards.flatMap((pair) => pair);
    this.shuffleCards()
    return this.cards
  },

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  createPairWithTech: function (tech) {
    return [
      { id: this.createID(tech), icon: tech, flipped: false },
      { id: this.createID(tech), icon: tech, flipped: false },
    ];
  },

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  createID: function (tech) {
    return tech + parseInt(Math.random() * 1000);
  },

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

   shuffleCards:function(cards){
    let contentIndex = this.cards.length
    let randomIndex = 0
 
    while(contentIndex !== 0){
       randomIndex = Math.floor(Math.random()*contentIndex)
       contentIndex--
 
       [this.cards[randomIndex],this.cards[contentIndex]] = [this.cards[contentIndex],this.cards[randomIndex]]
    }
 
 }

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

};
