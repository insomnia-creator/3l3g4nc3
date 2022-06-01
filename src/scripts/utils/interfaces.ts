

export interface Bang {
    triggers: string[];
    description: string;
    arguments?: {
        name: string;
        description: string;
    }[];
    action: (args: InputTrigger) => Response | Promise<Response> | void | Promise<void>;
    clearResultWindow?: boolean;
}



export interface InputTrigger {
    trigger: string;
    argumentsAsString: string;
    arguments?: {
        name: string;
        description: string;
    }[];
}

export interface Response {
    output: string;
    //things might be added in the 
    // Future 😀
    
}