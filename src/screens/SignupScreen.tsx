import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const SignupScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.wrapper}>
          {/* top section */}
          <View style={styles.topSection}>
            <LottieView
            source = {require('../assets/lottie/login.json')}
            autoPlay
            loop
            style={styles.lottie}
            />
            <Text style={styles.title}>Join the Movement 👟</Text>
          </View>

        {/* bottom section */}
        <KeyboardAwareScrollView

          style={{ flex: 1 }}
          contentContainerStyle={styles.bottomSection}
          enableOnAndroid
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={true}
        >
      <TextInput
        placeholder="Full Name"
        style={styles.input}
        editable={true}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        editable={true}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        editable={true}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Home')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack('Login')}>
        <Text style={styles.linkText}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
      </KeyboardAwareScrollView>
      </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
  },

  wrapper:{
    flex: 1,
  },

  /* Top section */

  topSection : {
    flex:0.9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:80,
  },

  lottie:{
    width: 300,
    height: 300,
  },

  title: {
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 50,
    textAlign: 'center',
  },
  /* Bottom Section */
  bottomSection: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingBottom: 30,
  },

  input: {
    borderWidth: 1,
    padding: 14,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 15,
  },
  
  button: {
    backgroundColor: '#000',
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
    color: '#1c1b1bff',
    fontSize: 14,
  },
});
