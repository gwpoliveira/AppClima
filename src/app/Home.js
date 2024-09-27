import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import ClimaNow from '../components/ClimaAgora';
import ProximosSeteDias from '../components/ProximosDias';
import BotaoZao from '../components/Botao';

export default function HomeScreen() {
    const navigation = useNavigation();

    const getGradientColors = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 6 && currentHour < 12) {
            // Manhã - Estilo dark com um leve tom de azul
            return ['#2B2D42', '#3C4F76', '#222831'];
        } else if (currentHour >= 12 && currentHour < 18) {
            // Tarde - Tons de roxo escuro e cinza suave
            return ['#1F1D36', '#3F3C71', '#2D2E4D'];
        } else {
            // Noite - Estilo dark com azul bem escuro e preto
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
                    <Text style={styles.title}>Bem-vindo ao Clima App</Text>
                    <ClimaNow />
                    <ProximosSeteDias />
                    <BotaoZao
                        texto={"Destinos"}
                        onPress={() => navigation.navigate('Segunda Tela')}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

export const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#EAEAEA',
        marginBottom: 20,
        textAlign: 'center',
    },

});
