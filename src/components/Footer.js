import React from "react";
import { FormControl } from "@material-ui/core";
import SchoolSelectFilter from "../containers/SchoolSelectFilter";
import RangeSelectFilter from "../containers/RangeSelectFilter";
import StarFilterSwitch from "../containers/filterLinks/StarFilterSwitch";

export const filterElementList = [
  <StarFilterSwitch label="filterStarred" />,
  <FormControl>
    <RangeSelectFilter name="filterRange" />
  </FormControl>,
  <FormControl>
    <SchoolSelectFilter name="filterSchool" />
  </FormControl>
];
