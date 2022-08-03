import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "../style/card";
import { MaterialIcons } from '@expo/vector-icons'

const Card = props => {
    return (
        <View style={style.card}>
            <View style={style.descricao}>
                <Text style={style.text}>{props.tarefas}</Text>
            </View>
            <View style={style.buttonView}>
                <TouchableOpacity 
                style={style.buttonDelete}
                onPress={() => props.deleteTask()}>
                    <MaterialIcons name="delete"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Card