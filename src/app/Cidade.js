import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import DetailCity from '../components/CardCidade';
import BotaoZao from '../components/Botao';

const CidadeShow = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { cidade } = route.params;

    useEffect(() => {
        navigation.setOptions({ title: cidade });
    }, [cidade, navigation]);

    const getGradientColors = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 6 && currentHour < 12) {
            // Manhã - Estilo dark com tons de azul suaves
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
                    <DetailCity />
                    <Text style={styles.title}>Informações sobre {cidade}</Text>
                    <Text style={styles.infoText}>Aqui você pode incluir detalhes sobre a cidade, como:</Text>
                    <Text style={styles.infoText}>- Atrações turísticas</Text>
                    <Text style={styles.infoText}>- Clima</Text>
                    <Text style={styles.infoText}>- Cultura</Text>
                    <Text style={styles.infoText}>- Gastronomia</Text>
                    <BotaoZao
                        texto={"Escolher outro Destino"}
                        onPress={() => navigation.navigate('Segunda Tela')}
                        style={styles.button}
                    />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default CidadeShow;

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#EAEAEA',
        marginBottom: 20,
        textAlign: 'center',
    },
    infoText: {
        fontSize: 18,
        color: '#CCCCCC',
        marginVertical: 5,
        textAlign: 'center',
    },
    button: {
        marginTop: 30,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        backgroundColor: '#444444',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 8,
    },
});
