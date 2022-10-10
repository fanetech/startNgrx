import { Action } from "@ngrx/store";

export enum counterActionTypes {
    Increment = '[counter] Increment',
    decrement = '[counter] decrement',
}

export class IncrementCounter implements Action {
    type: string = counterActionTypes.Increment ;

    constructor(public payload: number){}
}

export class DecrementCounter implements Action {
    type: string = counterActionTypes.decrement ;

    constructor(public payload: number){}
}

export type CounterActions = IncrementCounter | DecrementCounter