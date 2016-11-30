import React, { PropTypes, Component } from 'react';
import styles from './Canvas.css';

import {
  handleMouseDown,
  handleMouseUp,
  handleMouseLeave,
  handleMouseMove
} from './canvasOperations';

class Canvas extends Component {
  // hook canvas event handlers to redux actions
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const { startDrawing, stopDrawing, draw } = this.props;

    handleMouseDown(canvas, startDrawing, draw);
    handleMouseUp(canvas, stopDrawing);
    handleMouseLeave(canvas, stopDrawing);
    handleMouseMove(canvas, draw);
  }

  // prevent React from attempting to re-render the canvas with state changes
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <canvas
        id="canvas"
        width={600}
        height={600}
        className={styles.canvasClass}
      />
    );
  }
}

Canvas.propTypes = {
  startDrawing: PropTypes.func.isRequired,
  stopDrawing: PropTypes.func.isRequired,
  draw: PropTypes.func.isRequired
};

export default Canvas;
