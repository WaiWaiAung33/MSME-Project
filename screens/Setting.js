import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default class Setting extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Setting</Text>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
 
});
