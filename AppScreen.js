import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getTheme, getGateStatus, updateGateStatus, updateTheme } from './FirebaseServices';

const AppScreen = () => {
  const [theme, setTheme] = useState('default');
  const [gateOpen, setGateOpen] = useState(false);

  // Fetch initial data from Firebase on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedTheme, fetchedGateStatus] = await Promise.all([
          getTheme(),
          getGateStatus(),
        ]);
        setTheme(fetchedTheme);
        setGateOpen(fetchedGateStatus);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle toggling gate state
  const toggleGate = async () => {
    try {
      const newGateStatus = !gateOpen;
      await updateGateStatus(newGateStatus);
      setGateOpen(newGateStatus);
    } catch (error) {
      console.error('Error updating gate status:', error);
    }
  };

  // Handle updating theme
  const updateThemeHandler = async (newTheme) => {
    try {
      await updateTheme(newTheme);
      setTheme(newTheme);
    } catch (error) {
      console.error('Error updating theme:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Theme: {theme}</Text>
      <Text style={styles.text}>Gate is currently: {gateOpen ? 'Open' : 'Closed'}</Text>
      <View style={styles.buttonGroup}>
        <Button title={gateOpen ? 'Close Gate' : 'Open Gate'} onPress={toggleGate} />
        <View style={styles.column}>
          <Button
            title="Set Theme: Christmas"
            onPress={() => updateThemeHandler('christmas')}
          />
          <Button
            title="Set Theme: Warm"
            onPress={() => updateThemeHandler('warm')}
          />
        </View>
        <View style={styles.column}>
          <Button
            title="Set Theme: Cool"
            onPress={() => updateThemeHandler('cool')}
          />
          <Button
            title="Set Theme: Party"
            onPress={() => updateThemeHandler('party')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'green',
  },
  text: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
  },
  buttonGroup: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default AppScreen;
