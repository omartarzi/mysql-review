const db = require('./');

let dranks = [
  {
    drink: "Watermelon Juice",
    alcContent: 0
  },
  {
    drink: "Louie XIII",
    alcContent: 40
  },
  {
    drink: "Johnny Walker Blue Label",
    alcContent: 40
  },
  {
    drink: "Yogurt-Flavored Soju",
    alcContent: 20
  },
  {
    drink: "1942",
    alcContent: 40
  },
  {
    drink: "Ace of Spades by Armand de Brignac",
    alcContent: 12
  },
  {
    drink: "Maison Veuve Clicquot",
    alcContent: 12
  },
  {
    drink: "Corralejo Reposado",
    alcContent: 40
  },
  {
    drink: "Moet & Chandon Imperial",
    alcContent: 12
  },
  {
    drink: "Absinthe",
    alcContent: 75
  },
  {
    drink: "99 Bananas",
    alcContent: 49.5
  },
  {
    drink: "Lagavulin",
    alcContent: 12
  },
  {
    drink: "Highland Park 12",
    alcContent: 12
  },
  {
    drink: "Laphroaig",
    alcContent: 40
  },
  {
    drink: "Macallan 12",
    alcContent: 12
  },
  {
    drink: "Glenlivet",
    alcContent: 40
  },
  {
    drink: "Hibiki",
    alcContent: 49.5
  },
  {
    drink: "Otokoyama",
    alcContent: 40
  },
  {
    drink: "Jaegermeister",
    alcContent: 12
  },
  {
    drink: "Kubota Manju",
    alcContent: 15.5
  }
];

function drinkME() {
  dranks.forEach((drinkNames, index) => {
    db.query(`INSERT INTO drinks (drink, alcContent) VALUES ("${drinkNames.drink}", ${drinkNames.alcContent});`, (err, results) => {
        if (err) {
            console.log(`err`);
        } else {
            console.log(`drink`);
        }
    });
  });
//   db.end();
}

drinkME();