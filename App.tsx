import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Input from "./src/components/Input";

export default function App() {
  const [cep, setCep] = useState("");
  const [phone, setPhone] = useState("");
  const [currency, setCurrency] = useState("");

  function handleSubmit() {
    console.log({
      cep,
      phone,
      currency,
    });
  }

  return (
    <View style={styles.container}>
      <Input
        value={cep}
        mask="cep"
        maxLength={9}
        placeholder="Digite o CEP"
        placeholderTextColor="#000"
        inputMaskChange={(text: string) => setCep(text)}
      />

      <Input
        value={phone}
        mask="phone"
        maxLength={14}
        placeholder="Digite o Telefone"
        placeholderTextColor="#000"
        inputMaskChange={(text: string) => setPhone(text)}
      />

      <Input
        value={currency}
        mask="currency"
        placeholder="Digite o Valor"
        placeholderTextColor="#000"
        inputMaskChange={(text: string) => setCurrency(text)}
      />

      <Button title="Cadastrar" onPress={handleSubmit} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#719",
    alignItems: "center",
    justifyContent: "center",
  },
});
