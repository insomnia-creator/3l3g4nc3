import { bangs } from "../bangs";
import { InputTrigger } from "./interfaces";

const parseInput = (input: string): InputTrigger => {
    const [command, ...args] = input.split(" ");
    return {
        trigger: command,
        argumentsAsString: args.join(" "),
        arguments: args.map(arg => {
            return {
                name: arg,
                description: ''
            }
        })
    };
}

const registerTriggerHandler = () => {
    const search:HTMLInputElement = document.querySelector('.search')!;
    search.addEventListener('keydown', event => {
        //prevent default to prevent the tab key.
        if(event.key.toLowerCase() === 'tab') event.preventDefault();
    });
    search.addEventListener('keyup', async event => {
        if(event.key.toLowerCase() === 'enter'){
            const command = parseInput(search.value);
            const bang = bangs.find(bang => bang.triggers.includes(command.trigger));
            if(bang) {
                search.value = '';
                const resultEl = document.querySelector('.result')!;
                if(bang.clearResultWindow) resultEl.innerHTML = '';
                const response:any = await bang.action(command);
                try {
                    resultEl.innerHTML = response.output;
                } catch{

                }
            }
        }
    });
};



export default registerTriggerHandler;