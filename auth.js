import AsyncStorage from '@react-native-community/async-storage';

const USERNAME = "uname";

const signIn = async (username, password) => {
  await AsyncStorage.setItem(USERNAME, username);
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}

const signOut = async () => {
  await AsyncStorage.removeItem(USERNAME);
  return new Promise((resolve, reject) => {
    resolve();
  })
}

const isSignedIn = async () => {
  const user = await AsyncStorage.getItem(USERNAME);
  return new Promise((resolve, reject) => {
    resolve(user === null ? false : true);
  })
}

const getDataUser = async () => {
  const user = await AsyncStorage.getItem(USERNAME);
  return new Promise((resolve, reject) => {
    resolve(user);
  })
}

export { signIn, signOut, isSignedIn, getDataUser };