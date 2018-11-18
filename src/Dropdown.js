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
    
    this.props.manager.dispach(this.props.name, value);
  };

  componentDidMount() {
    const { name, action } = this.props; 

    this.props.manager.action.register(name, action, this.onSet);
  }

  onSet(value) {
    this.setState({ value });
  }

  formatOption = option => <option value={option.value}>{option.description}</option>;

  formatOptions = options => options.map(this.formatOption);

  render() {
    const { options, value } = this.state;
    const { name, label } = this.props; 
    console.log(value);
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
