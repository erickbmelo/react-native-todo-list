import { Text, Image, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native"
import checkImg from '../assets/check.png'

export default function CardTodo(props) {
    return (
        <TouchableOpacity onLongPress={() => props.onLongPress(props.todo)} onPress={() => props.onPress(props.todo)} style={s.card}>
            <Text style={[props.todo.title, props.todo.isCompleted && {textDecorationLine: "line-through"}]}>
                {props.todo.title}
            </Text>
            { props.todo.isCompleted && <Image style={s.img} source={checkImg}/> }
        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    card: {
        backgroundColor: "white",
        height: 115,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 13,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 25,
    },
    img: {
        height: 25,
        width: 25
    }
})