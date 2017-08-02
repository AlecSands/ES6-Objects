class Minnesotan {
  constructor(city, dateOfBirth) {
    this.stateOfBirth = 'Minnesota'; // They were all born in Minnesota
    // (depending on how you define Minnesotan)
    this.cityOfBirth = city; // Which city they were born in.
    this.dateOfBirth = dateOfBirth; // Amount of liquid the container holds
  }

  // Add liquid if space is available
  driveInSnow(amountOfSnow) {
    if(amountOfSnow <= oneInch) {
      console.log('Better drive slow.');
    } else if(amountOfSnow >= TenInches){
      console.log('Just stay home');
    } else {
      console.log('No need to worry.  Drive normally.');
    }
  }
  goToMNStateFair(currentDate) {
    if(fairStartDate <= currentDate <= fairEndDate) {
      console.log('Go eat some cheese curds!');
    } else {
      console.log('Sorry, you have to wait for cheese curds.');
    }
  }
  sayYouBetcha() {
    console.log('You Betcha!');
  }
}

class Minneapolian extends Minnesotan {
				constructor(dateOfBirth, address){
					super('Minneapolis', dateOfBirth);
					this.address = address;
				}
			}

let Dave = new Minnesotan('St Paul', 'Yesterday');
let Bob = new Minneapolian('Two Days Ago', '123 ABC Drive');

console.log(Dave);
Dave.sayYouBetcha();
console.log(Bob);
