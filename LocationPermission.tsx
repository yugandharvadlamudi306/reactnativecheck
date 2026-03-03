import {useEffect, useState} from "react";
import {Platform} from "react-native";
import {PERMISSIONS} from "react-native-permissions/src/permissions.android.ts";
import {check, request, RESULTS} from "react-native-permissions";

const useLocationPermission = () => {
    const [status, setStatus] = useState('loading')
    useEffect(() => {
        const checkPermission = async () => {
            const permission = Platform.OS === 'android' ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            let result = await check(permission)
            if(result!== RESULTS.GRANTED){
                result = await request(permission)
            }
            switch (result) {
                case RESULTS.GRANTED:
                    setStatus(RESULTS.GRANTED);
                    break;
                case RESULTS.BLOCKED:
                    setStatus(RESULTS.BLOCKED);
                    break;
                default:
                    setStatus(RESULTS.DENIED);
            }
        }
        checkPermission()
    }, []);
    return status
}
export default useLocationPermission;