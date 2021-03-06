import React from 'react';
import { storiesOf } from '@storybook/react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment'
import { Card } from '../Card';
storiesOf('Universal Components', module).add('Note', () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buttons</Text>
      <View style={styles.example}>
        <Text style={styles.exampleTitle}>Wide</Text>
        <View style={styles.componentRow}>
          <View style={styles.exampleWrapper}>
            <Card note = {{ date: moment(), text: "sdfo sfdko sdf", index: 0 }} />
          </View>
        </View>
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  example: {
    borderColor: '#dddddd',
    borderWidth: 1,
    display: 'inline-flex',
    flex: 0,
    padding: 16,
  },
  exampleTitle: {
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  exampleWrapper: {
    width: 220,
    margin: 20,
    padding: 20,
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  componentRow: {
    flexDirection: 'row'
  }
});