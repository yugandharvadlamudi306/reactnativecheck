import {StyleSheet, Text, View} from "react-native";

function StyleSheetsExample() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Hellow
            </Text>
            <Text>Inline StyleSheet example</Text>
            <Text style={{fontSize: 16, color: "green", marginTop: 10}}>
                This is the text for stylesheets example.
            </Text>
        </View>
    )
}

// This is how you create styles in React Native using StyleSheet.create
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10,
        height: "100%",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue"
    }

})
export default StyleSheetsExample