import { Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import CardClima from './CardClimaDay';
import React from 'react';

export default function ProximosSeteDias() {

    // Função para obter os próximos 7 dias, a partir de amanhã
    function getProximosSeteDias() {
        const hoje = new Date();
        const diasDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

        const proximosDias = [];

        for (let i = 1; i <= 7; i++) {
            const proximaData = new Date(hoje);
            proximaData.setDate(hoje.getDate() + i); // Incrementa o dia

            const diaSemana = diasDaSemana[proximaData.getDay()]; // Nome do dia
            proximosDias.push(diaSemana);
        }

        return proximosDias;
    }

    // Função para gerar uma temperatura aleatória da lista
    function getTemperaturaAleatoria() {
        const temperaturas = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
        const indiceAleatorio = Math.floor(Math.random() * temperaturas.length); // Sorteia um índice aleatório
        return temperaturas[indiceAleatorio]; // Retorna a temperatura sorteada
    }

    // Função para obter uma imagem aleatória de acordo com o horário
    function getImagemAleatoria() {
        const horaAtual = new Date().getHours();
        let imagens;

        if (horaAtual >= 6 && horaAtual < 18) {
            // Imagens diurnas
            imagens = [
                'https://openweathermap.org/img/wn/01d@2x.png',
                'https://openweathermap.org/img/wn/02d@2x.png',
                'https://openweathermap.org/img/wn/04d@2x.png',
                'https://openweathermap.org/img/wn/09d@2x.png',
                'https://openweathermap.org/img/wn/10d@2x.png',
                'https://openweathermap.org/img/wn/11d@2x.png'
            ];
        } else {
            // Imagens noturnas
            imagens = [
                'https://openweathermap.org/img/wn/01n@2x.png',
                'https://openweathermap.org/img/wn/02n@2x.png',
                'https://openweathermap.org/img/wn/04n@2x.png',
                'https://openweathermap.org/img/wn/09n@2x.png',
                'https://openweathermap.org/img/wn/10n@2x.png',
                'https://openweathermap.org/img/wn/11n@2x.png'
            ];
        }

        const indiceAleatorio = Math.floor(Math.random() * imagens.length); // Sorteia um índice aleatório
        return imagens[indiceAleatorio]; // Retorna a URL da imagem sorteada
    }

    const proximosSeteDias = getProximosSeteDias(); // Chama a função para gerar os dias

    return (
        <View style={styles.slide}>
            <Text style={styles.textSlide}>Previsão para os próximos 7 dias</Text>
            <SafeAreaView style={styles.container}>
                <ScrollView
                    style={styles.scrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}
                >
                    {proximosSeteDias.map((dia, index) => (
                        <CardClima
                            key={index}
                            data={dia}
                            temperatura={getTemperaturaAleatoria().toString()}
                            imagem={getImagemAleatoria()}
                        />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    slide: {
        width: '100%',
        padding: 10,
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
    },
    textSlide: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign:'left',
    },
    container: {
        flex: 1,
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center',     // Centraliza horizontalmente
    },
    scrollView: {
        flexDirection: 'row',
    },
    scrollViewContent: {
        justifyContent: 'center', // Centraliza os itens no ScrollView horizontalmente
    },
});
