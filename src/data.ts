type Data = {
  user: User;
  list: Keywords[];
};

export type Keywords = {
  year: number;
  keywords: string;
  weight: number;
  note: string;
  id?: string;
};

type User = {
  fitstName: string;
  lastName: string;
  birthday: string;
};

export const data: Data = require("./keywords.json");
