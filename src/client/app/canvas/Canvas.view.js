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
    const { startLine, endLine, drawPoint } = this.props;

    handleMouseDown(canvas, startLine, drawPoint);
    handleMouseUp(canvas, endLine, drawPoint);
    handleMouseLeave(canvas, endLine, drawPoint);
    handleMouseMove(canvas, drawPoint);
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
  startLine: PropTypes.func.isRequired,
  endLine: PropTypes.func.isRequired,
  drawPoint: PropTypes.func.isRequired
};

export default Canvas;
