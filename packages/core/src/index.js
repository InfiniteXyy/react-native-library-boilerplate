import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Button(props) {
  const { onPress, content } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 50,
    backgroundColor: "white",
    borderColor: "#4a4a4a",
    borderWidth: 1.25,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "500",
    fontSize: 15,
    color: "#4a4a4a"
  }
})