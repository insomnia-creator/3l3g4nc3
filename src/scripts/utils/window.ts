const formatDate = () => {
  const date = new Date();
  //Format: {Day}, {Date}th of {Month} {Year}
  /*
    Monday, 1st of January 2020
    Tuesday 2nd of January 2020
    Wednesday, 3rd of January 2020
    4th of January 2020
    5th of January 2020
    6th of January 2020
    7th of January 2020
    8th of January 2020
    9th of January 2020
    10th of January 2020
    */

  let day: number | string = date.getDay();

  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Holiday";
      break;
  }

    const dateNum = date.getDate();
    let dateEnding = 'th';
    const month = date.getMonth();
    const year = date.getFullYear();
    //if else chain alert 🚨
    if(dateNum === 1 || dateNum === 21 || dateNum === 31){
      dateEnding = 'st';
    } else if(dateNum === 2 || dateNum === 22){
      dateEnding = 'nd';
    } else if(dateNum === 3 || dateNum === 23){
      dateEnding = 'rd';
    } else if(dateNum === 4 || dateNum === 24){
      dateEnding = 'th';
    } else if(dateNum === 5 || dateNum === 25){
      dateEnding = 'th';
    } else if(dateNum === 6 || dateNum === 26){
      dateEnding = 'th';
    } else if(dateNum === 7 || dateNum === 27){
      dateEnding = 'th';
    } else if(dateNum === 8 || dateNum === 28){
      dateEnding = 'th';
    } else if(dateNum === 9 || dateNum === 29){
      dateEnding = 'th';
    } else if(dateNum === 10 || dateNum === 30){
      dateEnding = 'th';
    } else if(dateNum === 11){
      dateEnding = 'th';
    } else if(dateNum === 12){
      dateEnding = 'fth';
    } else if(dateNum === 13){
      dateEnding = 'th';
    } else if(dateNum === 14){
      dateEnding = 'th';
    } else if(dateNum === 15){
      dateEnding = 'th';
    } else if(dateNum === 16){
      dateEnding = 'th';
    } else if(dateNum === 17){
      dateEnding = 'th';
    } else if(dateNum === 18){
      dateEnding = 'th';
    } else if(dateNum === 19){
      dateEnding = 'th';
    } else if(dateNum === 20){
      dateEnding = 'th';
    } else if(dateNum === 21){
      dateEnding = 'st';
    } else {
        dateEnding = '-what apocolyptic year are we living in?!?!?!?!?!??!?!?!?!?';
    }

    // sometimes in life you have to deal with low level code like this
    // and it's not that bad
    //can someone do it with a switch statement????
    let monthName: string;
    switch (month) {
        case 0:
            monthName = 'January';
            break;
        case 1:
            monthName = 'February';
            break;
        case 2:
            monthName = 'March';
            break;
        case 3:
            monthName = 'April';
            break;
        case 4:
            monthName = 'May';
            break;
        case 5:
            monthName = 'June';
            break;
        case 6:
            monthName = 'July';
            break;
        case 7:
            monthName = 'August';
            break;
        case 8:
            monthName = 'September';
            break;
        case 9:
            monthName = 'October';
            break;
        case 10:
            monthName = 'November';
            break;
        case 11:
            monthName = 'December';
            break;
        default:
            monthName = '-what apocolyptic month are we living in?!?!?!?!?!??!?!?!?!?';
            break;
    }
    return `${day}, ${dateNum}${dateEnding} of ${monthName} ${year}`;
};

const setWindowOnLoad = () => {
    const result = document.querySelector('.result')!;
    const dateEl = document.createElement('h2');
    dateEl.innerHTML = formatDate();
    result.appendChild(dateEl);

};

export default setWindowOnLoad;
