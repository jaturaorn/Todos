import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  completed?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  User_I?: SortOrder;
  updatedAt?: SortOrder;
};
