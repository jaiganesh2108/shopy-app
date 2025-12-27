import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LottieView from 'lottie-react-native';

const LoginScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>

          {/* 🔼 Top Section */}
          <View style={styles.topSection}>
            <LottieView
              source={require('../assets/lottie/login.json')}
              autoPlay
              loop
              style={styles.lottie}
            />
            <Text style={styles.title}>Welcome 👟</Text>
          </View>

          {/* 🔽 Bottom Section */}
          <KeyboardAwareScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.bottomSection}
            enableOnAndroid
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <TextInput
              placeholder="Email"
              placeholderTextColor="#888"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry
              style={styles.input}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.replace('Home')}
              activeOpacity={0.85}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              activeOpacity={0.7}
            >
              <Text style={styles.linkText}>
                Don’t have an account? Sign up
              </Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>

        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;

/* ======================= STYLES ======================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2fd037ff',
  },

  wrapper: {
    flex: 1,
  },

  /* 🔼 Top Section */
  topSection: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },

  lottie: {
    width: 300,
    height: 300,
  },

  title: {
    fontSize: 28,
    fontWeight: '900',
    marginTop: 8,
    color: 'rgba(35, 35, 35, 1)',
  },

  /* 🔽 Bottom Section */
  bottomSection: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 30,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 16,
  },

  button: {
    backgroundColor: 'rgba(253, 36, 116, 1)',
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 6,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },

  linkText: {
    marginTop: 22,
    textAlign: 'center',
    color: '#555',
    fontSize: 14,
  },
});
