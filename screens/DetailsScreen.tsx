import {Text, View} from "react-native";

const DetailsScreen = ({route,navigation}) => {
    const {id,name} = route.params;
    return (
        <View>
            <Text>Detail Screen{id},{name}</Text>
        </View>
    )
}
export default DetailsScreen;