import React, { PropTypes, Component } from 'react';
import styles from './Canvas.css';

import {
  handleStartDrawing,
  handleStopDrawing,
  handleDraw
} from './canvasEventHandlers';

class Canvas extends Component {
  // hook canvas event handlers to redux actions
  componentDidMount() {
    const {
      isDrawing,
      startDrawing,
      stopDrawing,
      draw
    } = this.props;

    handleStartDrawing(startDrawing);
    handleStopDrawing(stopDrawing);
    handleDraw(isDrawing, draw);
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
  isDrawing: PropTypes.bool.isRequired,
  startDrawing: PropTypes.func.isRequired,
  stopDrawing: PropTypes.func.isRequired,
  draw: PropTypes.func.isRequired
};

export default Canvas;
