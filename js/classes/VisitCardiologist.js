import Visit from "./Visit.js";

export default class VisitCardiologist extends Visit {
  constructor({
    targetVisit,
    commit,
    urgency,
    fio,
    id,
    pressure,
    weight,
    cardioVascularSystem,
    age,
  }) {
    super({ targetVisit, commit, urgency, fio, id });
    this.pressure = pressure;
    this.weight = weight;
    this.cardioVascularSystem = cardioVascularSystem;
    this.age = age;
  }
  renderVisitDentist(parent) {
    this.render(parent);
    this.card.innerHTML += `
        <p>${this.pressure}</p>
        <p>${this.weight}</p>
        <p>${this.cardioVascularSystem}</p>
        <p>${this.age}</p>
        `;
  }
}
