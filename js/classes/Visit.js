import { removeCard } from "./Api.js";

export default class Visit {
  constructor({ targetVisit, commit, urgency, fio, id }) {
    this.targetVisit = targetVisit;
    this.commit = commit;
    this.urgency = urgency;
    this.fio = fio;
    this.removeBtn = document.createElement("button");
    this.editBtn = document.createElement("button");
    this.card = document.createElement("li");
    this.id = id;
  }

  render(parent) {
    this.card.innerHTML = `
    <p>${this.fio}</p>
    <p>${this.commit}</p>
    <p>${this.urgency}</p>
    <p>${this.targetVisit}</p>
    
    `;

    this.card.append(this.editBtn, this.removeBtn);
    this.removeBtn.addEventListener("click", () => this.delete);
  }

  delete() {
    removeCard(this.id).then((data) => {
      if (data.status === 200) {
        this.card.remove();
      }
    });
  }

  edit() {}
}
