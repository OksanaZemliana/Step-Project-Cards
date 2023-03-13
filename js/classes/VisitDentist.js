import Visit from "./Visit.js";

export default class VisitDentist extends Visit {
  constructor({ targetVisit, commit, urgency, fio, id, lastVisit }) {
    super({ targetVisit, commit, urgency, fio, id });
    this.lastVisit = lastVisit;
  }
  renderVisitDentist(parent) {
    this.render(parent);
    this.card.innerHTML += `
    <p>${this.lastVisit}</p>
    `;
  }
}

// const parent = document.querySelector("ul");

// arr.forEach((visit) => {
//   switch (visit.doctor) {
//     case "Dentist":
//       const newVis = new VisitDentist({});
//       newVis.renderVisitDentist(parent);
//       break;
//     // case "VisitCardiologist":
//     //   const newVis = new VisitDentist({});
//     //   newVis.renderVisitDentist(parent);
//     //   break;

//     default:
//       break;
//   }
// });
