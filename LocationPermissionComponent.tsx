import useLocationPermission from "./LocationPermission.tsx";
import {useEffect, useState} from "react";
import {RESULTS} from "react-native-permissions";
import Geolocation, {GeolocationResponse} from "@react-native-community/geolocation";
import {ActivityIndicator, StyleSheet, Text, View} from "react-native";

const LocationScreen = () => {
    const permissionStatus = useLocationPermission()
    const [locationValue, setLocationValue] = useState<GeolocationResponse|null>(null)
    useEffect(() => {
        console.log("peremission statusn->"+permissionStatus)
        if (permissionStatus === RESULTS.GRANTED) {
            Geolocation.getCurrentPosition((locationResponse) => {
                console.log(locationResponse.coords)
                setLocationValue(locationResponse)
            }, (geoError) => {
                console.log("error "+geoError.message)
            }, {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000})
        }
    }, [permissionStatus]);
    if (permissionStatus === 'loading') {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large"/>
                <Text> CHeking Location permission</Text>
            </View>
        )
    }
    if (permissionStatus === RESULTS.BLOCKED) {
        return (
            <View style={styles.center}>
                <Text>Blocked Geo location </Text>
                <Text>Please enable it from settings</Text>
            </View>
        )
    }
    if (permissionStatus === RESULTS.DENIED) {
        return (
            <View>
                <Text>Location Permission is denied</Text>
            </View>
        )
    }
    return (
        <View style={styles.center}>
            <Text style={styles.title}>your location</Text>
            {locationValue ? (
                <View>
                    <Text>Latitude: {locationValue.coords.latitude}</Text>
                    <Text>Longitude: {locationValue.coords.longitude}</Text>
                </View>
            ) : (<Text>Fetchin Location</Text>)}
        </View>
    )
}
export default LocationScreen;
const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 12,
        fontWeight: 'bold',
    },
});