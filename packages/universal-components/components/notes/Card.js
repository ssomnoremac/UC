// @flow
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import glamorous from 'glamorous-native'
import PropTypes from 'prop-types';
// import css from 'roboto-font.css'
export type CardProps = {
    note: object,
};

const NoteContainer = glamorous.view({
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingVertical: 10,
    marginHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
})
const DateContainer = glamorous.view({
    flex: 0.12,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
})
const MonthText = glamorous.text({
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily: 'Roboto-Black',
    color: '#979797',
})
const DayText = glamorous.text({
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
    color: '#4C4C4C',
})
const NoteBodyContainer = glamorous.view({
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginLeft: 12,
    paddingBottom: 20,
})
const NoteText = glamorous.text({
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: 'Roboto-Regular',
    color: '#3A3A3A',
    textAlign: 'center',
})

export default class Card extends Component<CardProps, *> {
  render() {
    const month = moment(note.item.updatedAt).format('MMM').toUpperCase()
    const day = moment(note.item.updatedAt).format('D').toUpperCase()
    return (
        <TouchableHighlight
            onPress={() => {
                onPressAction(note.item, false);
            }}
            underlayColor="#ffffff"
        >
            <NoteContainer>
                <DateContainer>
                    <MonthText> {month} </MonthText>
                    <DayText> {day} </DayText>
                </DateContainer>
                <NoteBodyContainer>
                    <NoteText>
                        {note.text}
                    </NoteText>
                </NoteBodyContainer>
            </NoteContainer>
        </TouchableHighlight>
    );
  };
}