import React, {Component} from 'react';
import './Tile.css'

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
         isSelected,
         num,
         onMouseDown,
         onMouseUp,
         onMouseEnter,
      } = this.props;
      const extraClassName = isSelected
         ? 'selected-tile'
         : '';

      return (
        <div
          id={`tile-${row}-${col}`}
          className={`tile ${extraClassName}`}
          /*onMouseDown={() => onMouseDown(row, col)}
          onMouseUp={() => onMouseUp()}
          onMouseEnter={() => onMouseEnter(row, col)}*/>{num}
        </div>
      );
   }
}
