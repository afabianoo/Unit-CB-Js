class Context {
  constructor() {
    this.value = {}
  }

  register = (name, action, ref) => this.value[name] = ({ action, ref });

  get = name => this.value[name];

  execute = (name, method, values) => {
    const obj = this.get(name);

    if (typeof(obj.action) === 'function')
    {
      const results = obj.action(values);

      if (Array.isArray(results))
        results.forEach(this.executeItem);
    }

    if (obj.ref[method])
      obj.ref[method](values);
  }

  executeItem = res => this.execute(res.name, res.method, res.values) ;
}

export default Context;
