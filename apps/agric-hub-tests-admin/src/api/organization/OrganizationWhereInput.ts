import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrganizationWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringFilter;
};
