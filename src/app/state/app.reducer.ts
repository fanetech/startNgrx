import { Detail } from "../models/detail";
import { CounterActions, counterActionTypes } from "./app.action";
import { State } from "./app.state";

const initialState: State = {
    count: 0,
    title: "Mon super compteur",
    details: []
}

export function reducer(state:State=initialState, action: any){
    switch (action.type) {
        case counterActionTypes.Increment:
           const newState =  {
                ...state,
                count: state.count + action.payload,
                details: [...state.details, <Detail>{date: new Date, buttonClicked: "ajout"}]
            }
            return newState
        case counterActionTypes.decrement:
            
                const newState1 = {
                    ...state,
                    count: state.count - action.payload,
                    details: [...state.details, <Detail>{date: new Date, buttonClicked: "retrait"}]
                }
            return newState1
            
            
        default:
            return state;
    }
}