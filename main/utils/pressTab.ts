export const pressTab = (e: any, inp: any) => {
  var input = e.keyCode ? e.keyCode : e.charCode;
  if ((input >= 48 && input <= 57) || input == 45) {
    if (input == 45) {
      //focus the next input if there is one
      while (inp.nextSibling) {
        var inp = inp.nextSibling;
        if (inp.nodeType === 1 && inp.tagName.toLowerCase() == "input") {
          inp.focus();
          break;
        }
      }
      return false;
    } else return true;
  } else return false;
};
