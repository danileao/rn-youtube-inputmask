import React from "react";
import { Text, TextInput, StyleSheet, TextInputProps } from "react-native";

import { maskCep, maskPhone, maskCurrency } from "../../utils/masks";

interface InputProps extends TextInputProps {
  mask: "cep" | "phone" | "currency";
  inputMaskChange: any;
}

const Input: React.FC<InputProps> = ({ mask, inputMaskChange, ...rest }) => {
  function handleChange(text: string) {
    if (mask === "cep") {
      const value = maskCep(text);
      inputMaskChange(value);
    }
    if (mask === "phone") {
      const value = maskPhone(text);
      inputMaskChange(value);
    }
    if (mask === "currency") {
      const value = maskCurrency(text);
      inputMaskChange(value);
    }
  }

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleChange(text)}
        {...rest}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 54,
    width: 200,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginTop: 4,
    fontSize: 14,
  },
});
