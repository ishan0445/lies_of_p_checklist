import {
  AchievementTodoList,
  AchievementList,
  BossesList,
  MiniBossesList,
  ListType,
  Quartz,
} from "../data/";

export enum TabNames {
  Achievements,
  AchievementTodo,
  MiniBosses,
  Bosses,
  Quartz
}

export interface TabData {
  id: number;
  name: string;
  enum: TabNames;
  listData: ListType[];
}

export const TabDataArray: TabData[] = [
  {
    id: 1,
    name: "Achievements",
    enum: TabNames.Achievements,
    listData: AchievementList,
  },
  {
    id: 2,
    name: "Achievement To Do's",
    enum: TabNames.AchievementTodo,
    listData: AchievementTodoList,
  },
  {
    id: 3,
    name: "Bosses",
    enum: TabNames.Bosses,
    listData: BossesList,
  },
  {
    id: 4,
    name: "Mini bosses",
    enum: TabNames.MiniBosses,
    listData: MiniBossesList,
  },
  {
    id: 5,
    name: "Quartz",
    enum: TabNames.Quartz,
    listData: Quartz,
  },
];
