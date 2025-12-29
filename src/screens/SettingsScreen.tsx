import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type SettingsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function SettingsScreen({ navigation }: SettingsScreenProps) {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
                          source={require('../assets/icons/angle-left.png')}
                          style={styles.backIcon}
                      />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      {/* SETTINGS OPTIONS */}
      <View style={styles.card}>
        <SettingItem label="Profile" onPress={() => {}} />
        <SettingItem label="Privacy & Security" onPress={() => {}} />

        <SettingSwitch
          label="Notifications"
          value={notifications}
          onValueChange={setNotifications}
        />

        <SettingSwitch
          label="Dark Mode"
          value={darkMode}
          onValueChange={setDarkMode}
        />

        <SettingItem label="About App" onPress={() => {}} />

        <TouchableOpacity
        style={styles.logout}
        onPress={() =>
            navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
            })
        }
        >
        <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

/* ---------- Reusable Components ---------- */

const SettingItem = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Text style={styles.rowText}>{label}</Text>
    <Text style={styles.arrow}>›</Text>
  </TouchableOpacity>
);

const SettingSwitch = ({ label, value, onValueChange }: { label: string; value: boolean; onValueChange: (value: boolean) => void }) => (
  <View style={styles.row}>
    <Text style={styles.rowText}>{label}</Text>
    <Switch value={value} onValueChange={onValueChange} />
  </View>
);

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
   backIcon: {
        width: 22,
        height: 22,
        tintColor: '#000', // optional
    },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#f6ebebff',
    margin: 16,
    borderRadius: 16,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  rowText: {
    fontSize: 16,
    fontWeight: '500',
  },
  arrow: {
    fontSize: 18,
    color: '#999',
  },
  logout: {
    marginTop: 20,
    alignItems: 'center',
  },
  logoutText: {
    color: '#E63946',
    fontWeight: '700',
    fontSize: 16,
  },
});
