import { makeAutoObservable } from "mobx";
import { IRootStore } from "..";
import { Patrimony, Result } from "./types";
import { getPatrimony } from "./services";

export default class GithubStore {
  rootStore: IRootStore;

  // projects: GithubProject[] = [];
  patrimony: Patrimony = {
    results: [] as Result[],
  } as Patrimony;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  // getRepos = async (username: string) => {
  //   var response = await getRepos();
  //   this.projects = await response.json();
  // };

  getPatrimony = async (id: number) => {
    var response = await getPatrimony(id);
    this.patrimony = await response.json();
  };

  hydrate(data: any) {
    if (!data) return;
  }
}
