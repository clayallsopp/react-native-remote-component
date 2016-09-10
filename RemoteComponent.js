import React from 'react';
import ReactNative, { View, Text } from 'react-native';

export default class RemoteComponent extends React.Component {
  state = {};

  componentDidMount() {
    fetch(this.props.url).then((response) => {
      return response.text();
    }).then((js) => {
      let factory = eval(js);
      let Component = factory(React,ReactNative);
      this.setState({ Component });
    });
  }

  render() {
    let { Component } = this.state;
    if (Component) {
      return (<Component { ...this.props } />);
    }
    return (
      <View>
        <Text>...</Text>
      </View>
    );
  }
}
