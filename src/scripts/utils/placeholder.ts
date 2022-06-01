
//dont duplicate them!!!!
const greetings = [
    'elegantly',
    'beautifully',
    'delightfully',
    'pleasantly',
    'gracefully',
    'merrily',
    'blissfully',
    'joyfully',
    'happily',
    'blissfully',
    'bravely',
    'boldly',
    'kindly',
    'mercifully',
    'politely',
    'respectfully',
    'warmly',
    'blushingly',
    'cheerfully',
    'comfortably',
    'eagerly',
    'enthusiastically',
    'fervently',
    'romantically',
    'sincerely',
];
const timeOfDay = [
    'begin your day ',
    'continue your day ',
    'end your day '
];

export let percievedPlaceholder = '';
const setInputPlaceholder = () => {
    const search:HTMLInputElement = document.querySelector('.search')!;
    //get time of day
    const time = new Date().getHours();
    //if time is between 6am and 12pm
    if (time >= 6 && time < 12) {
        search.placeholder = timeOfDay[0]
    } else if(time >= 12 && time < 18) {
        search.placeholder = timeOfDay[1]
    } else {
        search.placeholder = timeOfDay[2]
    }
    const changeTo = greetings[Math.floor(Math.random() * greetings.length)];
    percievedPlaceholder += changeTo;
    let i = 0;
    let interval = setInterval(() => {
        search.placeholder += changeTo[i];
        i++;
        if(i === changeTo.length){
            clearInterval(interval);
        }
    }, 100);
}

export default setInputPlaceholder;