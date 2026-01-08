import {Button, Text, View} from "react-native";
import {userDatastore} from "./UserStoreZuStand.tsx";

const DetailsZuStandExample = ({navigation}) => {
    const userDetails = userDatastore((state) => state.user)
    const loggOff = userDatastore((state) => state.loggeOut)
    const handleLoggOff = () => {
        // loggOff()
        navigation.goBack()
    }
    return (
        <View>
            <Text>name{userDetails.name}</Text>
            <Text>name{userDetails.email}</Text>
            <Button title="logout" onPress={handleLoggOff}/>
        </View>
    )
}
export default DetailsZuStandExample;