import React from 'react';
import { ScrollView } from 'react-native';
import SingleMessage from './SingleMessage';

const Conversation = ({ messages }) => {
  return (
    <ScrollView>
      {messages.map((message, index) => (
        <SingleMessage key={index} message={message} />
      ))}
    </ScrollView>
  );
};

export default Conversation;
