### Description

For this project, you will create a Monster Game program using classes. The game will create monsters with initial life values, and minimum life values for the monster to be alive. Once the game is running, each monster’s life will be drained by a random amount, and the game will continue until all of the monsters have died. The game will include a delay before each life drain.

### Code

**p5-monster-game.js**

// Required code modules
const Monster = require("./p5-monster.js");


/*** Game Class ***/
/* Constructor expects an object */
// IMPORTANT: When declaring a class within a module,
// the class is the ONLY export!
module.exports = class MonsterGame {
  constructor({
    monsterList = [],
    gameDelayInMilliseconds = 5000,
    minimumLifeDrain = 1,
    maximumLifeDrain = 30,
  }) {
    console.log("Initializing monsters...");
    this.gameDelayInMilliseconds = gameDelayInMilliseconds;
    this.minimumLifeDrain = minimumLifeDrain;
    this.maximumLifeDrain = maximumLifeDrain;
    this.createMonsters(monsterList);
    console.log("Monsters initialized, ready to play!");
  }

  // List monsters
 listMonsters = (monster) => listMonsters.forEach(monster => console.log(monster));

  // Create monsters from monster information
  createMonsters = (monsterList = []) => {
    this.monsters = monsterList.map((monster) => new Monster(monster));
  };

  // Update monster life value
  
  updateLife = (lifeChange = 0) =>
    this.monsters.forEach((monster) => monster.updateLife(lifeChange));
  

  // Main game playing method, will exit when all monsters have died
  async playGame(GameDelay) {
    console.log("Starting game...");
    let monstersAreAlive = true;
    do {
      // Sleep game
      console.log(
        `Sleeping for ${this.gameDelayInMilliseconds} milliseconds...`
      );
      await sleep(this.gameDelayInMilliseconds);

      // Call each monster's random life drain method
      this.monsters.forEach((monster) => {
          if (monster.isAlive) {
            monster.randomLifeDrain(this.minimumLifeDrain, this.maximumLifeDrain)
          }
        }
      );

      // List monsters
      this.listMonsters();

      // Check if any monsters are alive and set Boolean
      monstersAreAlive =
        this.monsters.filter((monster) => monster.isAlive).length > 0;

      // See if any monsters are still alive
      if (!monstersAreAlive) {
        console.log('All monsters have died, game over!');
      }
    } while (monstersAreAlive);
  }
};

// Game loop

/*** Utility Functions ***/
// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

**p5-monster.js**

module.exports = class Monster {
    constructor() {
      
      this.monsterName = 'Unknown';
      this.minimumLife = 0;
      this.currentLife = 100;
      this.isAlive = this.currentLife >= 0;
      if(this.isAlive = 0) {
          return false;
      }
      else true;
    }
    updateLife(lifeChangeAmount){
        if(currentLife <= 0){
            currentLife == 0;
        }
        if (this.currentLife < minimunLife) {
            isAlive == true;
        }
    }

    randomLifeDrain(minimumLifeDrain, maximumLifeDrain){
        updateLife(math.random() * (maximumLifeDrain - minimumLifeDrain) + minimumLifeDrain)
    }
};

**p5.js**

/*
    CIT 281 Project 5:

    Name: Troy Munson
*/

// IMPORTANT: Note no object deconstruction when importing a class
// from a class module
const MonsterGame = require("./p5-monster-game.js");
const Monster = require("./p5-monster.js");

// Game monsters setup information
const monsterList = [
  {
    monsterName: "King Kong",
    minimumLife: 10,
    currentLife: 150,
  },
  {
    monsterName: "Godzilla",
    minimumLife: 10,
    currentLife: 200,
  },
];
// Game configuration information
const minimumLifeDrain = 10;
const maximumLifeDrain = 50;
const gameDelayInMilliseconds = 5000; // 5 second game delay

// Create Monster Game instance
const monsterGame = new MonsterGame(
  {
    monsterList, gameDelayInMilliseconds, minimumLifeDrain, maximumLifeDrain
  }
);

// List monsters
monsterGame.listMonsters();

// Start game
monsterGame.playGame();
