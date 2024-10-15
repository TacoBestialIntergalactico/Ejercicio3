import { StyleSheet, View, Text } from "react-native";
import Details from "./Details";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.halfScreen}>
                <Text style={styles.textB}>HomeScreen</Text>
            </View>
            <View style={styles.halfScreen}>
                <Details />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    halfScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    textB: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    }
});

export default HomeScreen;