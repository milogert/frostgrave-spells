import { createStore, applyMiddleware } from "redux";
import spellBook from "./reducers";
import { TOGGLE_STAR } from "./actions";

const logging = store => next => action => {
  console.log("dispatching", action);
  return next(action);
};

const persistStars = store => next => action => {
  const result = next(action);
  if (action.type !== TOGGLE_STAR) {
    return result;
  }
  const savedStars = JSON.parse(localStorage.getItem("stars") || "{}");
  if (!Object.keys(savedStars).includes(action.school)) {
    console.info("Need to create a new array", action.school);
    savedStars[action.school] = [];
  }

  if (savedStars[action.school].includes(action.name)) {
    console.info("Toggling star off");
    savedStars[action.school].pop(action.name);
  } else {
    console.info("Toggling star on");
    savedStars[action.school].push(action.name);
  }
  localStorage.setItem("stars", JSON.stringify(savedStars));
  return result;
};

const reApplyStars = () => {
  const initialState = spellBook({}, {});
  const savedStars = JSON.parse(localStorage.getItem("stars") || "{}");
  const spells = [];
  initialState.spells.forEach(spell => {
    if (!Object.keys(savedStars).includes(spell.school)) {
      spells.push({ ...spell });
      return;
    }

    if (!savedStars[spell.school].includes(spell.name)) {
      spells.push({ ...spell });
      return;
    }

    spells.push({ ...spell, starred: true });
  });
  return { ...initialState, spells: spells };
};

const store = createStore(
  spellBook,
  reApplyStars(),
  applyMiddleware(logging, persistStars)
);

export default store;
