import { makeAutoObservable } from "mobx"
import { IRootStore } from '..';

export default class CounterStore{
    rootStore: IRootStore;

    count: number = 0

    constructor(rootStore: IRootStore){
        this.rootStore = rootStore;
        makeAutoObservable(this)
    }

    increment(){
        this.count++
    }

    decrement(){
        this.count--
    }

    hydrate(data: any) {
        if (!data) return;
        //* if initialState will not be set from the server, then the state will be undefined
        // this.count = data.count;
    }
}