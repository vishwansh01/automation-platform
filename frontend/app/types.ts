export interface Zap {
  id: string;
  triggerId: string;
  userId: number;
  actions: {
    id: string;
    zapId: string;
    actionID: string;
    sortingOrder: number;
    type: {
      id: string;
      name: string;
    };
  }[];
  trigger: {
    id: string;
    zapId: string;
    triggerId: string;
    type: { id: string; name: string };
  };
}
