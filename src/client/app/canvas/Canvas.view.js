import React, { PropTypes, Component } from 'react';
import styles from './Canvas.css';

import {
  handleMouseDown,
  handleMouseUp,
  handleMouseLeave,
  handleMouseMove
} from './canvasEventHandlers';
import { sizeCanvas } from './../../canvasHelpers';

class Canvas extends Component {
  componentDidMount() {
    const canvas = document.getElementById('canvas');
    const { startLine, endLine, addPoint } = this.props;

    // size canvas, handle global resize event
    sizeCanvas(canvas);
    window.onresize = sizeCanvas.bind(null, canvas);

    // hook canvas event handlers to redux actions
    handleMouseDown(canvas, startLine, addPoint);
    handleMouseUp(canvas, endLine, addPoint);
    handleMouseLeave(canvas, endLine, addPoint);
    handleMouseMove(canvas, addPoint);
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
  addPoint: PropTypes.func.isRequired
};

export default Canvas;
