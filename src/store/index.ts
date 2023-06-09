import CounterStore from "./counterStore";
import GithubStore from "./github";

export interface IRootStore {
  hydrate: (data: IInitialState) => void;
  counterStore: CounterStore;
  githubStore: GithubStore;
}

export interface IInitialState {
  counterStore: Partial<CounterStore>;
  githubStore: Partial<GithubStore>;
}

export class RootStore {
  counterStore: CounterStore;
  githubStore: GithubStore;

  constructor() {
    this.counterStore = new CounterStore(this);
    this.githubStore = new GithubStore(this);
  }

  hydrate(data: IInitialState) {
    if (!data) return;
    this.counterStore.hydrate(data.counterStore);
  }
}

const rootStore: IRootStore = new RootStore();
export default rootStore;
