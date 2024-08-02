import React from "react"
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"
import moment from "moment"
import 'moment/locale/pt-br'

export default props => {
    const date = props.done_at != null ? props.done_at : props.estimate_at
    const formated_date = moment (date).format('ddd, D [de] MMMM')
    // if(props.done_at !=null){
        //date = props.done_at
    // }else{
        //date.props.estimate_at
    //}

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => alert("Olá")}>
                <View style={styles.checkContainer}>
                    <View style={styles.done}>
                        <Icon name="check" size={20}></Icon>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={styles.desc}>{props.description}</Text>
                <Text style={styles.date}>{formated_date}</Text>
            </View>
        </View>
    )
}

function get_check_view(done_at){
    if(done_at != null){
        return(
            <view styles={styles.done}>
                <icon name="check" size={20} color="#FFF"></icon>
            </view>
        )
    }else {
        return (
            <view style={styles.pending}>

            </view>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    desc: {
        fontFamily: 'Arial',
        fontSize: 20
    },
    date: {
        fontFamily: 'Arial'
    },
    checkContainer:{
        width: "20%",
        alignItems: "center",
        justifyContent: "center"
    },
    done:{
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth:1,
        backgroundColor: "#4D7031",
        alignItems: "center",
        justifyContent: "center"
    },
    pending:{
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth:1,
        borderColor: "#555555"
    }
})