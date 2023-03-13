<script setup>
import { baseCompile } from '@vue/compiler-core';
import { ref } from 'vue'

const shuffle = () => {
  const slot1 = Math.floor(Math.random() * 9)
  const slot2 = Math.floor(Math.random() * 9)
  const slot3 = Math.floor(Math.random() * 9)
  const allSlot = [slot1, slot2, slot3]
  return allSlot
}

const items = [
  '❌',
  '🍓',
  '🍋',
  '🍉',
  '🍒',
  '💵',
  '🍊',
  '🍎',
  '7️⃣'
]

const slot1 = ref('💰')
const slot2 = ref('💰')
const slot3 = ref('💰')
const status = ref('YOUR STATUS')
const score = ref(5000)
const historys = ref([])
const winCount = ref(0)
const total = ref(0)
const emoji = ref()
var autoStatus = ref(false)
var Inter = undefined
var check = ref(0)


const clearSlots = () => {
  slot1.value = '💰'
  slot2.value = '💰'
  slot3.value = '💰'
  status.value = 'YOUR STATUS'
  score.value = 40
  historys.value = []
  winCount.value = 0
  total.value = 0

}

const doSlots = () => {
  const slots = shuffle()
  let min = 0;
  let countTime = 30;
  const Timer = setInterval(() => {
    countTime = countTime - 1
    const slotsSpin = shuffle()
    slot1.value = items[slotsSpin[0]]
    slot2.value = items[slotsSpin[1]]
    slot3.value = items[slotsSpin[2]]
    if (countTime <= min) {
      slot1.value = items[slots[0]]
      slot2.value = items[slots[1]]
      slot3.value = items[slots[2]]
      testWin(slots)
      const score = countScore(slots)
      historys.value.unshift(`${total.value}. ${slot1.value} ${slot2.value} ${slot3.value} ${score}`)
      clearInterval(Timer)
    }
  }, 50);
}

const runAutospin = () => {
  if (score == 0) {
    autoStatus.value = true
  }
  if (autoStatus.value === false) {
    if (score == 0) {
    autoStatus.value = false
    window.clearInterval(Inter)
  }
    Inter = setInterval(() => {
      doSlots()
      autoStatus.value = true
    }, 2000);
  }
  if (autoStatus.value === true) {
    window.clearInterval(Inter)
    autoStatus.value = false
  }
}

// const stopAutospin = () => {
//   clearInterval(Inter)
//   check = 0
// }

function testWin(array) {
  const slot1 = array[0]
  const slot2 = array[1]
  const slot3 = array[2]

  if (((slot1 === slot2 && slot2 === slot3) ||
    (slot1 === slot2 && slot3 === 8) ||
    (slot1 === slot3 && slot2 === 8) ||
    (slot2 === slot3 && slot1 === 8) ||
    (slot1 === slot2 && slot1 === 8) ||
    (slot1 === slot3 && slot1 === 8) ||
    (slot2 === slot3 && slot2 === 8)) && !(slot1 === slot2 && slot2 === slot3 && slot1 === 8)) {
    status.value = "YOU WIN!"
  }
  else {
    status.value = "YOU LOSE!"
  }
}
const countScore = (array) => {
  const slot1 = array[0]
  const slot2 = array[1]
  const slot3 = array[2]

  let scoree
  // SAME 3
  if (slot1 === slot2 && slot2 === slot3 && slot1 === 0) {
    scoree = 100
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN! +${scoree}`
  }
  if (slot1 === slot2 && slot2 === slot3 && slot1 === 1) {
    scoree = 200
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (slot1 === slot2 && slot2 === slot3 && slot1 === 2) {
    scoree = 300
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (slot1 === slot2 && slot2 === slot3 && slot1 === 3) {
    scoree = 400
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (slot1 === slot2 && slot2 === slot3 && slot1 === 4) {
    scoree = 500
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (slot1 === slot2 && slot2 === slot3 && slot1 === 5) {
    scoree = 600
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (slot1 === slot2 && slot2 === slot3 && slot1 === 6) {
    scoree = 700
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (slot1 === slot2 && slot2 === slot3 && slot1 === 7) {
    scoree = 800
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (slot1 === slot2 && slot2 === slot3 && slot1 === 8) {
    scoree = 1000
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  // SAME 2
  if (((slot1 === slot2 && slot3 === 8) && slot1 === 0) || ((slot1 === slot3 && slot2 === 8) && slot1 === 0) || ((slot2 === slot3 && slot1 === 8) && slot2 === 0)) {
    scoree = 10
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (((slot1 === slot2 && slot3 === 8) && slot1 === 1) || ((slot1 === slot3 && slot2 === 8) && slot1 === 1) || ((slot2 === slot3 && slot1 === 8) && slot2 === 1)) {
    scoree = 20
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (((slot1 === slot2 && slot3 === 8) && slot1 === 2) || ((slot1 === slot3 && slot2 === 8) && slot1 === 2) || ((slot2 === slot3 && slot1 === 8) && slot2 === 2)) {
    scoree = 30
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (((slot1 === slot2 && slot3 === 8) && slot1 === 3) || ((slot1 === slot3 && slot2 === 8) && slot1 === 3) || ((slot2 === slot3 && slot1 === 8) && slot2 === 3)) {
    scoree = 40
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (((slot1 === slot2 && slot3 === 8) && slot1 === 4) || ((slot1 === slot3 && slot2 === 8) && slot1 === 4) || ((slot2 === slot3 && slot1 === 8) && slot2 === 4)) {
    scoree = 50
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (((slot1 === slot2 && slot3 === 8) && slot1 === 5) || ((slot1 === slot3 && slot2 === 8) && slot1 === 5) || ((slot2 === slot3 && slot1 === 8) && slot2 === 5)) {
    scoree = 60
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (((slot1 === slot2 && slot3 === 8) && slot1 === 6) || ((slot1 === slot3 && slot2 === 8) && slot1 === 6) || ((slot2 === slot3 && slot1 === 8) && slot2 === 6)) {
    scoree = 70
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  if (((slot1 === slot2 && slot3 === 8) && slot1 === 7) || ((slot1 === slot3 && slot2 === 8) && slot1 === 7) || ((slot2 === slot3 && slot1 === 8) && slot2 === 7)) {
    scoree = 80
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  // SAME 77
  if ((slot1 === slot2 && slot1 === 8) || (slot1 === slot3 && slot1 === 8) || (slot2 === slot3 && slot2 === 8)) {
    scoree = 500
    score.value = score.value + scoree
    total.value++
    winCount.value++
    return `: YOU WIN +${scoree}`
  }
  else {
    total.value++
    score.value = score.value - 20
    return ': YOU LOSE!'
  }
}

// const dorrrr = document.querySelector(".door")
// console.log(dorrrr);

</script>


<template>
  <div class="h-screen bg-purple-900">
  <div>
    <div class="w-full h-2/4 flex">
      <div class="flex mb-6 mr-10 ml-10 mt-6  w-full h-80 rounded-md flex-col lg:flex-row">
        <div class="lg:w-5/6 w-full pb-9 lg:mb-0 mb-5 bg-purple-500 rounded border-solid border-2 border-black">
          <div>
            <b class="pt-0 p-2 text-white text-2xl bg-black">{{ status }}</b>
            <!-- :class = "winCount ? 'text-green-600' : 'text-red-600' "  -->
          </div>

          <div class="flex justify-center mt-2">

            <div    
              class="slott flex w-40 h-60 bg-white rounded mx-6 border-double border-4 border-black shadow-2xl justify-center items-center text-9xl">
              {{ slot1 }}
            </div>


            <div
              class="slott flex w-40 h-60 bg-white rounded mx-6 border-double border-4 border-black shadow-2xl justify-center items-center text-9xl">
              {{ slot2 }}
            </div>

            <div
              class="slott flex w-40 h-60 bg-white rounded mx-6 border-double border-4 border-black shadow-2xl justify-center items-center text-9xl">
              {{ slot3 }}
            </div>

          </div>

        </div>
        <div class="flex lg:flex-col lg:w-2/6 flex-row">
          <!-- <div class="flex mb-10 mt-7"> -->
          <div class="flex font-extrabold bg-black  text-3xl  p-4 mx-auto  mb-5 text-white rounded-md lg:flex-col xl:flex-row">
            <h2 class="font-extrabold bg-black text-3xl p-4 mx-auto my-auto text-white p-auto rounded-md">SCORE: 
            </h2>
            <h2 class="font-extrabold bg-white text-3xl p-4 mx-auto my-auto text-black p-auto rounded-md">{{ score }}
            </h2>
          </div>
          <div class="flex font-extrabold justify-center">
            <button @click="doSlots()"
              class="font-extrabold bg-yellow-400 border-solid text-2xl border-2 p-4 mx-2 my-2 hover:bg-green-500 text-black p-auto px-6 border-b-4 border-purple-700 hover:border-yellow-400 hover:text-white rounded-2xl">SPIN</button>
            <button @click="clearSlots()"
              class="font-extrabold bg-yellow-400 border-solid text-2xl border-2 p-4 mx-2 my-2 hover:bg-red-500 text-black p-auto border-b-4 border-purple-700 hover:border-yellow-400 hover:text-white rounded-2xl">CLEAR</button>
              
          </div>
          <div class="flex font-extrabold justify-center">
            <span class="font-extrabold bg-yellow-400 border-solid text-2xl border-2 p-4 mx-2 my-2 text-black p-auto px-6 border-b-4 border-purple-700 rounded-2xl">
              <input @click="runAutospin()" type="checkbox" class="toggle bg-gray-400 border-opacity-100 checked:bg-green-500 checked:border-green-500" checked v-model="autoStatus" />
               {{ autoStatus }} AUTO SPIN</span>
          </div>

        </div>
        <!-- <div class="flex items-center">
        <div class="flex m-12">
          <button class="border-solid border-black border-2 p-5 px-22 rounded">
            SPIN
          </button>
        </div> -->
        <!-- <div class="mt-6 mr-10 border-solid border-black border-2 w-1/2 h-80"> -->

        <!-- </div> -->
      </div>

    </div> <!-- <div class="flex flex-row w-full h-2/4">
    <div
      class="mb-10 mr-10 ml-10 pt-50 pl-50 border-solid border-black border-2 w-1/2 h-80">
  
    </div>
    <div
      class="mb-10 mr-10 ml-10 pt-50 pl-50 border-solid border-black border-2 w-1/2 h-80">
  
    </div>
  </div> -->
    <div class="w-full h-full flex lg:mt-0 mt-96">
      <div
        class="mt-0.5 mb-10 mr-10 ml-10 pt-50 pl-50 border-solid border-black border-2 w-1/2 h-80 overflow-auto rounded-md bg-white">
        <div class="flow-root w-full sticky top-0 z-50 bg-black">
          <b class="p-2 text-2xl text-white">HISTORY : <span class="float-right pr-3 text-xl">PLAYED: {{ total }} |
              JACKPOTS: {{ winCount }} </span></b>
          <hr style="border: 1px solid black">
        </div>
        <div class="w-full h-5/6 rounded-md overflow-auto font-mono text-black">
          <p v-for="(history, index) in historys" key="index" class="p-2 text-xl">{{ history }}</p>
        </div>
      </div>

      <div class="mt-0.5 mb-10 mr-10 border-solid border-black border-2 w-1/2 h-80 rounded-md shadow-2xl bg-white">
        <div class="w-full sticky top-0 z-50 bg-black">
          <b class="p-2 text-2xl text-white">RULES :</b>
          <hr style="border: 1px solid black">
        </div>
        <div class="w-full h-5/6 rounded-md overflow-auto font-mono text-black">
          <p class="p-2 text-xl">❌ ❌ 7️⃣ = 10 points</p>
          <p class="p-2 text-xl">🍓 🍓 7️⃣ = 20 points</p>
          <p class="p-2 text-xl">🍋 🍋 7️⃣ = 30 points</p>
          <p class="p-2 text-xl">🍉 🍉 7️⃣ = 40 points</p>
          <p class="p-2 text-xl">🍒 🍒 7️⃣ = 50 points</p>
          <p class="p-2 text-xl">💵 💵 7️⃣ = 60 points</p>
          <p class="p-2 text-xl">🍊 🍊 7️⃣ = 70 points</p>
          <p class="p-2 text-xl">🍎 🍎 7️⃣ = 80 points</p>
          <p class="p-2 text-xl">❌ ❌ ❌ = 100 points</p>
          <p class="p-2 text-xl">🍓 🍓 🍓 = 200 points</p>
          <p class="p-2 text-xl">🍋 🍋 🍋 = 300 points</p>
          <p class="p-2 text-xl">🍉 🍉 🍉 = 400 points</p>
          <p class="p-2 text-xl">🍒 🍒 🍒 = 500 points</p>
          <p class="p-2 text-xl">💵 💵 💵 = 600 points</p>
          <p class="p-2 text-xl">🍊 🍊 🍊 = 700 points</p>
          <p class="p-2 text-xl">🍎 🍎 🍎 = 800 points</p>
          <p class="p-2 text-xl">7️⃣ 7️⃣ ❓ = 500 points</p>
          <p class="p-2 text-xl">7️⃣ 7️⃣ 7️⃣ = 1,000 points</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px grey;  */
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
} */
</style>