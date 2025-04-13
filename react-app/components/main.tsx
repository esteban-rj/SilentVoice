import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text className="text-black text-4xl font-mono text-center">
        Hola! Soy tu Guía para aprender lenguaje de señas
      </Text>
      <Image
        source={require("../assets/character_main.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTitle}>Traducir a Lengua de Señas</Text>
              <Text style={styles.buttonSubtitle}>
                Escribe o habla y te mostraré como se dice en señas.
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonTitle}>Aprender Lengua de Señas</Text>
              <Text style={styles.buttonSubtitle}>
                Aprende el abecadario, palabras y frases basicas
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  buttonView: {
    width: "100%",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 8,
  },
  button: {
    width: "100%",
  },
  buttonContent: {
    alignItems: "center",
  },
  buttonTextContainer: {
    width: "50%",
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  buttonSubtitle: {
    fontSize: 14,
    color: "#666",
  },
});
