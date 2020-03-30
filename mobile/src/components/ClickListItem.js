import React, { Component } from "react";
import { View, Text } from "react-native";

class ClickListItem extends Component {
  static defaultProps = {
    index: 0
  };
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState(state => {
      return {
        counter: state.counter + 1
      };
    });
  }
  render() {
    const { props, state } = this;
    return (
      <View>
        <li onClick={this.increment}>
          Item {props.index} - {state.counter}
        </li>
      </View>
    );
  }
}

export default ClickListItem;
