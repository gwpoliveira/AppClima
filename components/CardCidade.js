import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'




export default function DetailCity() {
    return (
        <ScrollView>
            <View style={styles.contentBox}>
                <Image source={require('../assets/teresina.png')} style={styles.image} />
                <Text style={styles.description}>Uma breve descrição da cidade</Text>
                <Text style={styles.subtitle}>Top Attractions:</Text>
                {/* {details.attractions.map((attraction, index) => (
                    <Text key={index} style={styles.attraction}>{attraction}</Text>
                ))} */}
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    contentBox: {
        padding: 20,
        backgroundColor: "#ECF0F1",
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: 'black'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        color: 'black'
    },
    attraction: {
        fontSize: 16,
        marginLeft: 10,
        color: 'black'
    },
});