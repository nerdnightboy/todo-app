import React from "react";
import { View, Text, StyleSheet } from "react-native";

const task = (props) =>{
    return (
        <View style={styles.item}>
            <Text style={styles.itemtext}>{props.text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    item:{
        padding:15,

    },
    itemtext:{
        fontSize:18,
        color:'#545454',
    },
})
export default task;