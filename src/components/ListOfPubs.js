import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
// import { Actions } from 'react-native-router-flux'
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
    console.log('onRowPress')
    // Actions.showPub()
    // Actions.showPub(brewery: this.props.brewery.brewery)
  }

  render() {
    console.log(this.props.brewery.brewery)
    const { name } = this.props.brewery.brewery;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;