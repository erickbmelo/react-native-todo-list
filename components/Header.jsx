import { StyleSheet, Text, Image } from "react-native";
import logo from '../assets/logo.png';

export default function Header(){
    return (
        <>
            <Image style={s.img} source={logo} resizeMode="contain"/>
            <Text style={s.subtitle}>You probably have something to do</Text>
        </>
    )
}

const s = StyleSheet.create({
    img: {
        width: 170,
    },
    subtitle: {
        marginTop: -20,
        fontSize: 20,
        color: "#ABABAB"
    }
})