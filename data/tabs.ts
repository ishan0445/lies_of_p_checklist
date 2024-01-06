import {
  AchievementTodoList,
  AchievementList,
  BossesList,
  GracesList,
  MiscellaneousList,
  QuestsList,
  GoldenSeedsList,
  ListType,
} from "../data/";

export enum TabNames {
  Quests,
  Achievements,
  AchievementTodo,
  Graces,
  Bosses,
  GoldenSeeds,
  Miscellaneous,
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
  // {
  //   id: 3,
  //   name: "Graces",
  //   enum: TabNames.Graces,
  //   listData: GracesList,
  // },
  // {
  //   id: 4,
  //   name: "Bosses",
  //   enum: TabNames.Bosses,
  //   listData: BossesList,
  // },
  // {
  //   id: 5,
  //   name: "Golden Seeds",
  //   enum: TabNames.GoldenSeeds,
  //   listData: GoldenSeedsList,
  // },
  // {
  //   id: 6,
  //   name: "Misc",
  //   enum: TabNames.Miscellaneous,
  //   listData: MiscellaneousList,
  // },
];
