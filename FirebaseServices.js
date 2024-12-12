import { rtdb } from './firebaseConfig'; // Import your Firebase database instance
import { ref, get, set } from 'firebase/database';

// Firebase database references
const themeRef = ref(rtdb, 'village/theme');
const gateRef = ref(rtdb, 'village/gateOpen');

// Fetch the current theme
export const getTheme = async () => {
  try {
    const snapshot = await get(themeRef);
    return snapshot.exists() ? snapshot.val() : 'default';
  } catch (error) {
    console.error('Error fetching theme:', error);
    throw error;
  }
};

// Fetch the gate status
export const getGateStatus = async () => {
  try {
    const snapshot = await get(gateRef);
    return snapshot.exists() ? snapshot.val() : false;
  } catch (error) {
    console.error('Error fetching gate status:', error);
    throw error;
  }
};

// Update the gate status
export const updateGateStatus = async (status) => {
  try {
    await set(gateRef, status);
  } catch (error) {
    console.error('Error updating gate status:', error);
    throw error;
  }
};

// Fetch the current theme (same as getTheme)
export const updateTheme = async (newTheme) => {
  try {
    await set(themeRef, newTheme);
  } catch (error) {
    console.error('Error updating theme:', error);
    throw error;
  }
};
