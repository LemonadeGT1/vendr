import { ValuesController } from "./Controllers/ValuesController.js";
import { SnacksController } from "./Controllers/SnacksController.js";
import { MoneysController } from "./Controllers/MoneysController.js";

class App {
  //valuesController = new ValuesController();
  snacksController = new SnacksController();

  moneysController = new MoneysController();
}

window["app"] = new App();
