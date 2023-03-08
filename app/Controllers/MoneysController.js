import { appState } from "../AppState.js"
import { setHTML, setText } from "../Utils/Writer.js"
import { moneysService } from "../Services/MoneysService.js"

export class MoneysController {
  constructor() {
    console.log('Inside MoneysController constructor')

    appState.on('myMoney', _drawMoney)


  }

  addMoney() {
    moneysService.addMoney()
  }

  takeMoney(price) {
    moneysService.takeMoney(price)
  }


}


function _drawMoney() {
  console.log('Inside MoneysController _drawMoney')

  let money = appState.myMoney
  setText('userMoney', `${appState.myMoney.toFixed(2)}`)


}