import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import {
  Button, Container, Content, Card,
  Thumbnail, Title,
} from 'native-base'

class ShowPub extends Component {
  render() {
    console.log(this.props.location)
    const {
      brewery, breweryId, lattitude, longitude, locationTypeDisplay, yearOpened,
      phone, streetAddress, locality, region, postalCode
    } = this.props.location
    const {
      id, established, name, description, website, images
    } = brewery
    return (
      <Container>
        <Content>
          <Title>
            {name}
          </Title>
          <Card style={styles.cardStyle}>
            <Text style={styles.sectionTitleStyle}>Address:</Text>
            <Text style={styles.centerStyle}>{streetAddress}</Text>
            <Text style={styles.centerStyle}>{locality}, {region} {postalCode}</Text>
            <Button bordered round small info style={styles.buttonStyle}>Map It</Button>
          </Card>
          <Card style={styles.cardStyle}>
            <Text style={styles.sectionTitleStyle}>Phone Number:</Text>
            <Text style={styles.centerStyle}>{phone || '<none provided>'}</Text>
            <Button bordered round small info style={styles.buttonStyle}>Call</Button>
          </Card>
          <Card style={styles.cardStyle}>
            <Text style={styles.sectionTitleStyle}>Description:</Text>
            <Text >{description || '<none provided>'}</Text>
          </Card>
        </Content>
      </Container>
    )
  }
}

styles = {
  cardStyle: {
    paddingLeft: 20,
    paddingRight: 20
  },

  sectionTitleStyle: {
    fontWeight: 'bold'
  },

  buttonStyle: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 200
  },

  centerStyle: {
    alignSelf: 'center'
  },

  textStyle: {
    paddingLeft: 20,
    paddingRight: 20
  }
};

export default ShowPub
