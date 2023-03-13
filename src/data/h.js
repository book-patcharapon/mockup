const shuffle = () => {
    const slot1 = Math.floor(Math.random()*9+1)
    const slot2 = Math.floor(Math.random()*9+1)
    const slot3 = Math.floor(Math.random()*9+1)
    const allSlot = [slot1,slot2,slot3]
    return allSlot
}

const items = [
    {1 : '❌'},
    {2 : '🍓'}, 
    {3 : '🍋'},
    {4 : '🍉'},
    {5 : '🍒'},
    {6 : '💵'},
    {7 : '🍊'},
    {8 : '🍎'},
    {9 : '7️⃣'}
]

const slots = shuffle()
const slot1 = Object.values(items[slots[0]-1])[0]
const slot2 = Object.values(items[slots[1]-1])[0]
const slot3 = Object.values(items[slots[2]-1])[0]

console.log(slots);
console.log(slot1);
console.log(slot2);
console.log(slot3);

function testWin(array) {
	const slot1 = array[0]
	const slot2 = array[1]
	const slot3 = array[2]
 
	if (((slot1 === slot2 && slot2 === slot3) ||
		(slot1 === slot2 && slot3 === 9) ||
		(slot1 === slot3 && slot2 === 9) ||
		(slot2 === slot3 && slot1 === 9) ||
		(slot1 === slot2 && slot1 === 9) ||
		(slot1 === slot3 && slot1 === 9) ||
		(slot2 === slot3 && slot2 === 9) ) && !(slot1 === slot2 && slot2 === slot3 && slot1===9)){
		console.log("YOU WIN!");
	}else{
		console.log("YOU LOSE!");
	}
} 
testWin(slots)