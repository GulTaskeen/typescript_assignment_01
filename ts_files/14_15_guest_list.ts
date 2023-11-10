const guestList: string[] = ['Seerat', 'Sher Jan', 'Nainsa'];

export function inviteToDinner() {
  guestList.forEach((guest, index) => {
    console.log(`\nDear ${guest}, \nI would like to invite you to dinner at my place. \nPlease join us for a great evening!`);
  });
}

const guestCancelled = guestList[0];
const newGuest = 'Shehryar Khan';

export const updatedDinnerGuests = guestList.map((guest) => (guest !== guestCancelled) ? guest : newGuest);

export function newInvitations() {
  updatedDinnerGuests.forEach((guest, index) => {
    if (guest == newGuest)
      console.log(`Unfortunately, ${guestCancelled} can't make it to the dinner.`);
    console.log(`\nDear ${guest}, \nI would like to invite you to dinner at my place. \nPlease join us for a great evening!`);
  });
}
