import { appState } from "../AppState.js"
import { saveState } from "../Utils/Store.js"

class MoneysService{

  addMoney(){
    appState.myMoney += .25
    console.log('Inside MoneysService myMoney:', appState.myMoney)
  }

  takeMoney(price){
    console.log('takeMoney: ', price)
    if(appState.myMoney >= price){
      appState.myMoney -= price
    } else window.alert("Add Money!!!")
  }

}

console.log('Inside MoneysService')

export const moneysService = new MoneysService()