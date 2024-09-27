import { View, Text, StyleSheet, Image } from 'react-native';

export default function CardClima(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.data}>{props.data}</Text>
            <Text style={styles.clima}>{props.temperatura} °C</Text>
            <Image style={styles.emoji} source={{ uri: props.imagem }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginRight: 10,
        alignItems: 'center'
    },
    data: {
        fontSize: 18,
        color: "#ffffff"
    },
    clima: {
        fontSize: 24,
        color: "#ffffff"
    },
    emoji: {
        width: 100,
        height: 100,
    }
});
