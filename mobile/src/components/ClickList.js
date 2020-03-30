import React, { Component } from "react";
import { View, Text } from "react-native";

class ClickList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.children.map((item, index) => {
            return <item.type index={index}>{item.props.children}</item.type>;
          })}
        </ul>
      </div>
    );
  }
}
