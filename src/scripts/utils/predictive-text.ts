import { bangs } from "../bangs";
import { percievedPlaceholder } from "./placeholder";

const registerPredictiveTextHelper = () => {    
    const searchEl:HTMLInputElement = document.querySelector('.search')!;
    const suggestionsEl = document.querySelector('.suggestion')!;
    suggestionsEl.innerHTML = '';
    let currentlySuggested = '';
    let placeholder = `${searchEl.placeholder}${percievedPlaceholder}`;
    searchEl.addEventListener('keydown', event => {
        if(event.key.toLowerCase() === 'tab') {
            event.preventDefault()
            if(currentlySuggested.startsWith(searchEl.value)){
                searchEl.value = currentlySuggested;
            }
        }
    });

    searchEl.addEventListener('keyup', () => {
        searchEl.placeholder = '';
        suggestionsEl.innerHTML = '';
        if(searchEl.value === '') {
            searchEl.placeholder = placeholder; 
            return;
        }
        bangs.forEach(bang => {
            bang.triggers.forEach(trigger => {
                bang.arguments?.forEach(argument => {
                    if(trigger.startsWith(searchEl.value.trim())){
                        currentlySuggested = trigger;
                        suggestionsEl.innerHTML = `${trigger} - ${bang.description}`;
                    } else  if(`${trigger} ${argument.name}`.startsWith(searchEl.value)){
                        if(trigger === `${trigger} ${argument.name}`){
                            suggestionsEl.innerHTML = `${trigger} ${argument.name}`;
                            currentlySuggested = `${trigger} ${argument.name}`;
                        } else {
                            suggestionsEl.innerHTML = `${trigger} ${argument.name} - ${argument.description}`;
                            currentlySuggested = `${trigger} ${argument.name}`;
                        }
                    }
                    
                })
            });

        });
    })
}

export default registerPredictiveTextHelper;