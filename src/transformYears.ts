import { Keywords } from "./data";
import { v4 as uuidv4 } from "uuid";

export type Year = {
  year: number;
  list: Keywords[];
  id?: string;
};

export const transformYears = (list: Keywords[]) => {
  const result = list.reduce((ret: Year[], val: Keywords) => {
    // 該当の年オブジェクトがなければ新たに追加
    if (!ret.some((r) => r.year === val.year)) {
      ret.push({
        year: val.year,
        list: [{ ...val, id: uuidv4() }],
        id: uuidv4(),
      });
    } else {
      // 年オブジェクトを探して追加
      const idx = ret.findIndex((v) => v.year === val.year);
      ret[idx].list.push({ ...val, id: uuidv4() });
    }

    return ret;
  }, []);

  return result;
};
