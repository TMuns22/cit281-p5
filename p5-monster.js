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