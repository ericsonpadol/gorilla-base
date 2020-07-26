import React, { Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import moment from 'moment';

const ProfileHeader = () => {
  return (
    <Fragment>
      <View style={[styles.container]}>
        <Text style={[styles.text]}>Hey Blademonkey!</Text>
      </View>
      <View style={[styles.container]}>
        <Text style={[styles.text]}>Here are your orders as of {`${moment().format('MMMM DD YYYY, h:mm:ss a')}`}</Text>
      </View>
    </Fragment>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    padding: 5,
    flex: 1,
    justifyContent: 'center'
  }
});

export default ProfileHeader;
