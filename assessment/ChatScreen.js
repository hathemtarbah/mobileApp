import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const ChatScreen = ({ conversations, onViewConversation, sessionToken }) => {
  const renderConversationItem = ({ item }) => {
    return (
      <View style={styles.conversationItem}>
        <Text style={styles.conversationTitle}>{item.title}</Text>
        <Text style={styles.conversationLastMessage}>{item.lastMessage}</Text>
        <Button
          title="View Conversation"
          onPress={() => onViewConversation(item.id)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chats:</Text>
      <FlatList
        data={conversations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderConversationItem}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  conversationItem: {
    marginBottom: 20,
  },
  conversationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  conversationLastMessage: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
});

