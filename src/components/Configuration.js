import { StyleSheet, View, Text } from "react-native";
import Beacon from "./Beacon";

const Configuration = () => {
    return (
        <View style={styles.container}>
            <View style={styles.halfScreen}>
                <Text style={styles.textB}>
                    Configuration Screen
                </Text>
            </View>
            <View style={styles.halfScreen}>
                <Beacon />
            </View>
        </View>
    );
};

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

export default Configuration;