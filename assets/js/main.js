const nettoZuBruttoRadioBtn = document.querySelector("#nettoZuBrutto");
const bruttoZuNettoRadioBtn = document.querySelector("#bruttoZuNetto");

const changeText = () => {
  const textUeberInputNumer = document.querySelector("#textUeberInputNumer");
  const textBruttoOderNettoBetrag = document.querySelector(
    "#textBruttoOderNettoBetrag"
  );

  if (bruttoZuNettoRadioBtn.checked) {
    textUeberInputNumer.innerHTML = "Bruttobetrag (Preis inkl. Mehrwertsteuer)";
    textBruttoOderNettoBetrag.innerHTML = "Nettobetrag";
  } else {
    textUeberInputNumer.innerHTML =
      "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
    textBruttoOderNettoBetrag.innerHTML = "Bruttobetrag (Endpreis)";
  }
};

const showResults = () => {
  const inputNumber = document.querySelector(
    'form div input[type="number"]'
  ).value;
  const nineteenPercent = document.querySelector("#nineteenPercent");
  const mwstBetragOutput = document.querySelector("#mwstBetrag");
  const endResult = document.querySelector("#endResult");
  let mwstBetrag;
  let betragOhneMwst;
  let betragMitMwst;

  if (bruttoZuNettoRadioBtn.checked) {
    if (nineteenPercent.checked) {
      betragOhneMwst = inputNumber / 1.19;
      mwstBetrag = inputNumber - betragOhneMwst;
      mwstBetragOutput.innerHTML = mwstBetrag.toFixed(2).concat("€");
      endResult.innerHTML = betragOhneMwst.toFixed(2).concat("€");
    } else {
      betragOhneMwst = inputNumber / 1.07;
      mwstBetrag = inputNumber - inputNumber / 1.07;
      mwstBetragOutput.innerHTML = mwstBetrag.toFixed(2).concat("€");
      endResult.innerHTML = betragOhneMwst.toFixed(2).concat("€");
    }
  } else {
    if (nineteenPercent.checked) {
      mwstBetrag = inputNumber * 1.19 - inputNumber;
      betragMitMwst = inputNumber * 1.19;
      mwstBetragOutput.innerHTML = mwstBetrag.toFixed(2).concat("€");
      endResult.innerHTML = betragMitMwst.toFixed(2).concat("€");
    } else {
      mwstBetrag = inputNumber * 1.07 - inputNumber;
      betragMitMwst = inputNumber * 1.07;
      mwstBetragOutput.innerHTML = mwstBetrag.toFixed(2).concat("€");
      endResult.innerHTML = betragMitMwst.toFixed(2).concat("€");
    }
  }
};
