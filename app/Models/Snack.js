import { appState } from "../AppState.js"

export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
    console.log('Inside Snack constructor')
  }

  get snackTemplate() {
    return `
    <div class="col-3 pt-2">
      <div class="myCard">
        <div class="wrapper">
          <div class="rounded"
            style="height: 80px; background-image: url('${this.imgUrl}'); background-position: center; background-size: cover;">
          </div>
          <h5 class="mt-1">${this.name}</h5>
          <p>
            <span class="mdi mdi-currency-usd"></span>
            <span class="itemPrice">${this.price.toFixed(2)}</span>
          </p>
        </div>
        <div class="m-0">
          <button class="btn ${appState.myMoney >= this.price ? 'btn-success' : 'btn-danger'}" onClick="app.moneysController.takeMoney(${this.price.toFixed(2)})">BUY NOW</button>
        </div>
      </div>
    </div>
    `
  }

}



