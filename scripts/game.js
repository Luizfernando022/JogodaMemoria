let game = {
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
