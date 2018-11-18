import Actions from "./Actions";
import Options from "./Options";

export default [
  {
    name: 'fruit',
    label: 'Fruits',
    options: Options.fruit,
    action: Actions.fruit, 
  },
  {
    name: 'drink',
    label: 'Drinks',
    options: Options.drink,
    action: Actions.drink,
  },
  {
    name: 'food',
    label: 'Foods',
    options: Options.food,
  }
]