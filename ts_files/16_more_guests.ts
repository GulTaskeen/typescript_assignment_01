import {updatedDinnerGuests} from './14_15_guest_list';


export function addMoreGuests(){
    console.log('Hey guys, I fond a bigger place for the dinner! I\'d like to invite some more friends. It\'ll be fun.');
    const newGuests: string[]  = ['Mazar', 'Naim', 'Roshana'];
    updatedDinnerGuests.unshift(newGuests[0]);
    updatedDinnerGuests.splice(Math.floor(updatedDinnerGuests.length / 2), 0, newGuests[1]);
    updatedDinnerGuests.push(newGuests[2]);
    
    updatedDinnerGuests.forEach((guest,index)=>{
        console.log(`\nDear ${guest} \nI would like to invite you to dinner at my place. \nPlease join us for a great evening!`)
    });
    
}   