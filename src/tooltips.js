import React from "react";
import { Tooltip } from "@material-ui/core";

const tooltips = {
  Move: "Informative tip about movement.",
  Will: "Will saving throw."
};

export const tip = key => {
  if (!tippable(key)) {
    return key;
  }

  return tooltips[key];
};

export const tippable = key => Object.keys(tooltips).includes(key);

const makeToolTip = (key, word, tipTitle) => (
  <span key={key}>
    <Tooltip variant="outlined" title={tipTitle}>
      <b>{word}</b>
    </Tooltip>
    &nbsp;
  </span>
);

export const tipFilter = (text, extraTips = {}) => {
  return text.split(" ").map((word, index) => {
    if (Object.keys(extraTips).includes(word)) {
      return makeToolTip(index, word, extraTips[word]);
    }

    if (!tippable(word)) {
      return word + " ";
    }

    return makeToolTip(index, word, tip(word));
  });
};
