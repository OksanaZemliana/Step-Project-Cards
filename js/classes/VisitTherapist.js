import Visit from "./Visit.js";

export default class VisitTherapist extends Visit {
  constructor({ targetVisit, commit, urgency, fio, id, age }) {
    super({ targetVisit, commit, urgency, fio, id });
    this.age = age;
  }
  renderVisitTherapist(parent) {
    this.render(parent);
    this.card.innerHTML += `
        <p>${this.age}</p>
        `;
  }
}
