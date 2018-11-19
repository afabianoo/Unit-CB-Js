import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: props.options || [],
      value: ''
    }

    this.onSet = this.onSet.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = event => {
    const value = event.target.value;
    const { name } = this.props;

    this.props.context.execute(name, 'onSet', value);
  }

  componentDidMount() {
    const { name, action } = this.props;

    this.props.context.register(name, action, this);
  }

  onSet(value) {
    this.setState({ value });
  }

  add(values) {
    this.setState({ options: [ ...values, ...this.state.options ] });
  }

  block(values) {
    const options = this.state.options.splice(0);

    values.forEach(value => {
      const option = options.find(op => op.value === value);

      if (!option)
        return;

      option.disabled = true;
    });


    this.setState({ options });
  }

  reduce(values) {
    const options = this.state.options.splice(0);
    this.setState({ options: this.filterOptions(options, values) });
  }

  filterOptions = (options, values) => options.filter(op => values.includes(op.value));

  formatOption = option => <option {... option}>{option.description}</option>;

  formatOptions = options => options.map(this.formatOption);

  render() {
    const { options, value } = this.state;
    const { name, label } = this.props;

    return (
      <div className="App">
        <label name={name}>{label}: </label>
        <select value={value} onChange={this.onChange}>
          {this.formatOptions(options)}
        </select>
      </div>
    );
  }
}

export default Dropdown;
