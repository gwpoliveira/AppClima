import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function BotaoZao(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={props.onPress}
            >
                <Text style={styles.buttonText}>{props.texto}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    touchableOpacity: {
        backgroundColor: "white",
        padding: 20,
        alignItems: "center",
        borderRadius: 20,
        marginTop: 10,
        width: "90%", // Mantém o botão com 90% da largura
        borderWidth: 2,
        borderColor: "black",
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
});
