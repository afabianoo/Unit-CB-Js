import Configuration from './Configuration';

class Action {
  constructor() {
    this.value = {}
  }

  register = (name, action, owner) => this.value[name] = ({ action, owner });

  get = name => this.value[name];
}

class Manager {
  constructor() {
    this.action = new Action();
  }

  dispach = (name, value) => {
    const obj = this.action.get(name);

    if (typeof(obj.action) == 'function')
    {
      const result = obj.action(value);

      if (Array.isArray(result))
        result.forEach(res => this.dispach(res.name, res.value));
    }

    obj.owner(value);
  }
}

export default Manager;