export function transportationStatements() {
    const favoriteTransportation: string[] = ['Tesla Model S', 'Porsche 911', 'Honda Civic', 'BMW M5'];
    console.log('My favorite modes of transportation:');
  
    favoriteTransportation.forEach((item, index) => {
      console.log(`I would like to own a ${item}.`);
    });
  }
  
  
  