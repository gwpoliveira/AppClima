import { useState, useEffect } from 'react'; 
import { Platform, Text, View, StyleSheet, Alert, Image } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export default function ClimaNow() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weather, setWeather] = useState(null);
    const [emoji, setEmoji] = useState('');
    const apiKey = '5b162971d5e26e14dd66ea2de2f42a9c'; // Sua chave da API do OpenWeather

    // Função para obter a URL da imagem de clima
    function pegarLinkImagem(link) {
        return `https://openweathermap.org/img/wn/${link}@2x.png`;
    }

    // Função para buscar o clima atual com base nas coordenadas
    const ClimaLocal = async (latitude, longitude) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=pt_br`
            );
            const data = await response.json();

            if (data.cod !== 200) {
                Alert.alert('Erro', 'Clima não encontrado.');
            } else {
                setWeather(data);
                setEmoji(data.weather[0].icon);
            }
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível buscar os dados do clima.');
        }
    };

    // Função para obter a localização atual do dispositivo
    useEffect(() => {
        (async () => {
            if (Platform.OS === 'android' && !Device.isDevice) {
                setErrorMsg('Oops, this will not work on an Android emulator. Try it on your device!');
                return;
            }

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão para acessar a localização foi negada.');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            ClimaLocal(location.coords.latitude, location.coords.longitude); // Chama a função para obter o clima com as coordenadas
        })();
    }, []);

    // Mensagem enquanto a localização ou dados do clima são carregados
    let text = 'Carregando...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = `Localização: ${location.coords.latitude}, ${location.coords.longitude}`;
    }

    return (
        <View style={styles.container}>
            {weather ? (
                <View style={styles.weatherContainer}>
                    <Text style={styles.cidade}>{weather.name}</Text>
                    <View style={styles.temperatureContainer}>
                        <Image source={{ uri: pegarLinkImagem(emoji) }} style={{ width: 180, height: 180 }} />
                        <Text style={styles.temperature}>
                            {Math.round(weather.main.temp)}°C
                        </Text>
                        <Text style={styles.weatherDescription}>
                            Clima Atual: {weather.weather[0].description}{"\n"}
                        </Text>
                    </View>
                </View>
            ) : (
                <Text style={styles.loadingText}>{text}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    weatherContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    weatherDescription: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    temperatureContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    temperature: {
        fontSize: 96,
        color: '#ffffff',
    },
    loadingText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    cidade: {
        fontSize: 60,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});
