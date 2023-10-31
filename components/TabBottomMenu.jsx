import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function TabBottomMenu(props){
    function getTextStyle(tabName){
        return {
            fontWeight: "bold",
            color: props.selectedTabName === tabName ? "#2F76E5" : "black"
        }
    }
    return (
        <View style={s.root}>
            <TouchableOpacity onPress={() => props.onPress("all")}>
                <Text style={getTextStyle("all")}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.onPress("inProgress")}>
                <Text style={getTextStyle("inProgress")}>In progress</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.onPress("done")}>
                <Text style={getTextStyle("done")}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}


const s = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})