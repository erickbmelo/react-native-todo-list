import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function TabBottomMenu(props){
    const countByStatus = props.todoList.reduce((acc, todo) => {
        todo.isCompleted ? acc.done++ : acc.inProgress++;
        return acc;
    }, {
        all: props.todoList.length,
        inProgress: 0,
        done: 0,
    });
    function getTextStyle(tabName){
        return {
            fontWeight: "bold",
            color: props.selectedTabName === tabName ? "#2F76E5" : "black"
        }
    }
    return (
        <View style={s.root}>
            <TouchableOpacity onPress={() => props.onPress("all")}>
                <Text style={getTextStyle("all")}>All ({countByStatus.all})</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.onPress("inProgress")}>
                <Text style={getTextStyle("inProgress")}>In progress ({countByStatus.inProgress})</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.onPress("done")}>
                <Text style={getTextStyle("done")}>Done ({countByStatus.done})</Text>
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