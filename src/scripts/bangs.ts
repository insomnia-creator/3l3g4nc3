import handleTodo from "./triggers/.todo";
import { Bang } from "./utils/interfaces";

export const bangs: Array<Bang> = [
    {
        triggers: ['todo', 'add todo'],
        description: `Do stuff with your todos`,
        arguments: [
            {
                name: 'add',
                description: 'Add a todo to the todo list',
            },
            {
                name: 'list',
                description: 'List all your todos',
            }
        ],
        action: handleTodo,
        clearResultWindow: true
    }, 
    {
        triggers: ['reset-background', 'background', 'change-background'],
        description: `Change the background image`,
        action: () => {
            localStorage.removeItem('lastImage');
            window.location.reload();
        }
    }
]