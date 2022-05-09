import React, { Component } from 'react';
import './Tile.css';

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Determine if properties are true, in order to add it to class name
    const {
      row,
      col,
      mood,
      isNotActive,
      num,
      onMouseDown,
    } = this.props;
    const extraClassName = isNotActive ? 'inactive-tile' : '';

    return (
      <div
        id={`tile-${row}-${col}`}
        className={`tile ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}>
          <div className='tile-num'>
            <span>{num}</span>
          </div>
          <div className='tile-mood'>
            <span >{mood}</span>
          </div>
      </div>
    );
  }
}
