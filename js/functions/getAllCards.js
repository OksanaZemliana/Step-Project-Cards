import VisitTherapist from "../classes/VisitTherapist.js";
import getAllCards from "../api/getCards.js";

export default function wrapperGetAllCards() {
  getAllCards()
    .then((arrCards) => {
      arrCards.forEach((visit) => {
        switch (visit.doctor) {
          case "Therapist":
            //*Задолбать девок
            const newVis = new VisitTherapist({
              targetVisit: visit.motive,
              commit: visit.description,
              urgency: visit.necessity,
              fio: visit.fullName,
              id: visit.id,
              age: 123,
            });
            newVis.renderVisitTherapist(
              document.querySelector(".placeholder__text")
            );
            break;
          // case "VisitCardiologist":
          //   const newVis = new VisitDentist({});
          //   newVis.renderVisitDentist(parent);
          //   break;
          // case "VisitCardiologist":
          //   const newVis = new VisitDentist({});
          //   newVis.renderVisitDentist(parent);
          //   break;

          default:
            break;
        }
      });
    })
    .catch((e) => alert(e));
}
