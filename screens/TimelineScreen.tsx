import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TimelineScreen() {
  return (
    <View style={styles.container}>
      {/* <TextInput
        label="Email"
        style={styles.emailInput}
        value={"ayush"}
        autoComplete
        mode="outlined"
        onChangeText={(text) => {}}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
