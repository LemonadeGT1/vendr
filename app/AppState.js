import { Snack } from "./Models/Snack.js"
import { Money } from "./Models/Money.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Snack').Snack[]} */
  snacks = loadState('values', [Snack])

  snacks = [
    new Snack({ name: 'Box O Sweet Treats', price: 3.5, imgUrl: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }),
    new Snack({ name: 'A Bit O Toast', price: 2.25, imgUrl: 'https://images.unsplash.com/photo-1521986329282-0436c1f1e212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80' }),
    new Snack({ name: 'Yippies for Chippies', price: 4.75, imgUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }),
    new Snack({ name: 'Free (not) for All', price: 4.00, imgUrl: 'https://images.unsplash.com/photo-1604307078172-9b46710cc5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80' }),
    new Snack({ name: 'Oh, Oh oh', price: 1.75, imgUrl: 'https://images.unsplash.com/photo-1599629954294-14df9ec8bc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' }),
    new Snack({ name: 'Step into it', price: 2.75, imgUrl: 'https://images.unsplash.com/photo-1632687380457-05a1271e873b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' })
  ]

  myMoney = 0




}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
