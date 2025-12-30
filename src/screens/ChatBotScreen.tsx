import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const ICON_BOT = require('../assets/icons/chat-bot.png');
const ICON_USER = require('../assets/icons/user.png');

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

export default function ChatBotScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi 👋 How can I help you today?',
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulated bot reply
    setTimeout(() => {
      const botMsg: Message = {
        id: Math.random().toString(),
        text: 'I’m here to help! 🚀',
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

    const renderItem = ({ item }: { item: Message }) => {
    const isUser = item.sender === 'user';

    return (
        <View
        style={[
            styles.messageRow,
            isUser ? styles.rowUser : styles.rowBot,
        ]}
        >
        {!isUser && (
            <Image source={ICON_BOT} style={styles.avatar} />
        )}

        <View
            style={[
            styles.messageBubble,
            isUser ? styles.userBubble : styles.botBubble,
            ]}
        >
            <Text
            style={[
                styles.messageText,
                isUser && { color: '#fff' },
            ]}
            >
            {item.text}
            </Text>
        </View>

        {isUser && (
            <Image source={ICON_USER} style={styles.avatar} />
        )}
        </View>
    );
    };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Chat Assistant</Text>

      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 16 }}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.inputRow}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type your message..."
            style={styles.input}
          />
          <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
  },

  header: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
  },

  messageBubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  userBubble: {
    backgroundColor: '#000',
    alignSelf: 'flex-end',
    borderTopRightRadius: 0,
  },

  botBubble: {
    backgroundColor: '#EAEAEA',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 0,
  },

  messageText: {
    fontSize: 15,
    color: '#000',
  },

  inputRow: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFA500',
    borderTopWidth: 1,
    borderColor: '#000000ff',
  },

  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 22,
    paddingHorizontal: 16,
    marginRight: 10,
    backgroundColor: '#fff',
  },

  sendBtn: {
    backgroundColor: '#000',
    paddingHorizontal: 18,
    borderRadius: 22,
    justifyContent: 'center',
  },

    sendText: {
        color: '#fff',
        fontWeight: '600',
    },
    messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
    },

    rowUser: {
    justifyContent: 'flex-end',
    },

    rowBot: {
    justifyContent: 'flex-start',
    },

    avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 6,
    },

});
