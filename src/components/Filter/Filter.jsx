import React, { Component } from 'react';
import { Label } from 'components/Common/Common.styled';
import PropTypes from "prop-types";

class Filter extends Component {
  state = {
    filter: '',
  };

  handleFilter = data => {
    const filter = { filter: data.currentTarget.value };
    this.setState(filter);
    this.props.callback(filter);
  };

  render() {
    return (
      <Label>
        Find contacts by name
        <input
          type="text"
          value={this.state.filter}
          onChange={this.handleFilter}
        />
      </Label>
    );
  }
}

Filter.propTypes = {
  callback:PropTypes.func.isRequired,
}

export default Filter;
