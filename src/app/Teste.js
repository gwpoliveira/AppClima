import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const TesteConcluido = () => {
    const navigation = useNavigation();
    const destinations = ['Teresina', 'Timon', 'Parnaiba', 'Campo Maior', 'Sete Cidades', 'Oeiras', 'Floriano', 'Picos'];

    const getGradientColors = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 6 && currentHour < 12) {
            // Manhã - tons escuros e suaves
            return ['#2B2D42', '#3C4F76', '#222831'];
        } else if (currentHour >= 12 && currentHour < 18) {
            // Tarde - tons de roxo escuro e cinza suave
            return ['#1F1D36', '#3F3C71', '#2D2E4D'];
        } else {
            // Noite - estilo dark com azul bem escuro e preto
            return ['#0D0D0D', '#1C1C1C', '#232526'];
        }
    };

    return (
        <LinearGradient
            colors={getGradientColors()}
            style={styles.gradient}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <View style={styles.main}>
                        <View style={styles.column}>
                            {destinations.slice(0, Math.ceil(destinations.length / 2)).map(places => (
                                <TouchableOpacity
                                    style={styles.touchableOpacity}
                                    key={places}
                                    onPress={() => {
                                        navigation.navigate('Cidade', { cidade: places });
                                    }}
                                >
                                    <Text style={styles.buttonText}>{places}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.column}>
                            {destinations.slice(Math.ceil(destinations.length / 2)).map(places => (
                                <TouchableOpacity
                                    style={styles.touchableOpacity}
                                    key={places}
                                    onPress={() => {
                                        navigation.navigate('Cidade', { cidade: places });
                                    }}
                                >
                                    <Text style={styles.buttonText}>{places}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default TesteConcluido;

export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    container: {
        width: '100%',
        alignItems: "center",
    },
    main: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    touchableOpacity: {
        backgroundColor: "#444444", // Cor escura para o botão
        padding: 20,
        alignItems: "center",
        borderRadius: 20,
        marginVertical: 10,
        width: "90%",
        borderWidth: 2,
        borderColor: "#888888", // Borda sutil
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8,
    },
    buttonText: {
        color: "#EAEAEA", // Texto claro
        fontSize: 16,
        fontWeight: "bold",
    },
});
