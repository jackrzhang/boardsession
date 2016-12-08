import React, { PropTypes, Component } from 'react';
import styles from './Color.css';

import {
  BLACK,
  PINK,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  PURPLE,
  BROWN
} from './../../../../state/markerConstants';

class Color extends Component {
  constructor(props) {
    super(props);

    // conduct function binding in the constructor as opposed to render; render
    // would recreate bound functions with every invocation
    this.changeColorToBlack = props.changeColor.bind(null, BLACK);
    this.changeColorToPink = props.changeColor.bind(null, PINK);
    this.changeColorToRed = props.changeColor.bind(null, RED);
    this.changeColorToOrange = props.changeColor.bind(null, ORANGE);
    this.changeColorToYellow = props.changeColor.bind(null, YELLOW);
    this.changeColorToGreen = props.changeColor.bind(null, GREEN);
    this.changeColorToBlue = props.changeColor.bind(null, BLUE);
    this.changeColorToPurple = props.changeColor.bind(null, PURPLE);
    this.changeColorToBrown = props.changeColor.bind(null, BROWN);
  }

  render() {
    return (
      <div className={styles.dropdown}>
        <button
          style={{ backgroundColor: this.props.color }}
          className={styles.dropdownButton}
        >
          Color
        </button>
        <div className={styles.dropdownContent}>
          <span
            onClick={this.changeColorToBlack}
            style={{ backgroundColor: BLACK }}
            className={`${styles.dropdownOption} ${styles.firstOption}`}
          >
            Black
          </span>
          <span
            onClick={this.changeColorToPink}
            style={{ backgroundColor: PINK }}
            className={styles.dropdownOption}
          >
            Pink
          </span>
          <span
            onClick={this.changeColorToRed}
            style={{ backgroundColor: RED }}
            className={styles.dropdownOption}
          >
            Red
          </span>
          <span
            onClick={this.changeColorToOrange}
            style={{ backgroundColor: ORANGE }}
            className={styles.dropdownOption}
          >
            Orange
          </span>
          <span
            onClick={this.changeColorToYellow}
            style={{ backgroundColor: YELLOW }}
            className={styles.dropdownOption}
          >
            Yellow
          </span>
          <span
            onClick={this.changeColorToGreen}
            style={{ backgroundColor: GREEN }}
            className={styles.dropdownOption}
          >
            Green
          </span>
          <span
            onClick={this.changeColorToBlue}
            style={{ backgroundColor: BLUE }}
            className={styles.dropdownOption}
          >
            Blue
          </span>
          <span
            onClick={this.changeColorToPurple}
            style={{ backgroundColor: PURPLE }}
            className={styles.dropdownOption}
          >
            Purple
          </span>
          <span
            onClick={this.changeColorToBrown}
            style={{ backgroundColor: BROWN }}
            className={`${styles.dropdownOption} ${styles.lastOption}`}
          >
            Brown
          </span>
        </div>
      </div>
    );
  }
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired
};

export default Color;
