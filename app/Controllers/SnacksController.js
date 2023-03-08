import { appState } from "../AppState.js"
import { snacksService } from "../Services/SnacksService.js"
import { setHTML } from "../Utils/Writer.js"

export class SnacksController {
  constructor() {
    console.log('Inside SnacksController constructor')

    appState.on('myMoney', _drawSnack)
    _drawSnack()
  }
}



function _drawSnack() {
  console.log('Inside SnacksController _drawSnack')
  let snacks = appState.snacks
  let template = ''
  snacks.forEach(s => template += s.snackTemplate)
  setHTML('snacks', template)
}