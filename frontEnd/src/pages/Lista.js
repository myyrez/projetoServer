import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import style from "../style/lista";
import { MaterialIcons } from "@expo/vector-icons"
import Card from "../components/Card";

export default function Lista(props ) {
  const [desc, setDesc] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const handleDescChange = desc => {
    setDesc(desc)
  };
  const postTask = async () => {
    if (desc != "") {
      try {
        const requestOptions = {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            descricao: desc 
          })
        }
        await fetch('http://localhost:5000/tarefas', requestOptions)
        props.addTask
      } catch (error) {
        console.error(error);
        setDesc('')
      }
    }
  };
  const addTask = () => {
    getTasks();
    Keyboard.dismiss();
  };
  const deleteTask = async deleteId => {
    const requestOptions = {
      method: 'DELETE',
      headers:{'Content-type': application/json},
    };
    try {
      await fetch('http://localhost:5000/tarefas/' + deleteId, requestOptions);
      setTarefas(tarefas.filter(task => task.idTodo != deleteId));
    } catch (error) {
      console.error(error);
      setTarefas([]);
    };
  };
  const getTasks = async () => {
    try {
      const res = await fetch ('http://localhost:5000/tarefas');
      const data = res.json();
      data.then(
        val => setTarefas(val)
      );
    } catch (error) {
      console.error(error);
      setTarefas([]);
    };
  };

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <View style={style.header}>
      </View>

      <View style={style.mainView}>
        <ScrollView>
            {
              tarefas.map((data) => {
                return (
                  <Card
                  index={data.idTodo}
                  task={data.desc}
                  deleteTask={() => deleteTask(data.idTodo)}/>
                )
              })
            };
        </ScrollView>
      </View>
      
      <View style={style.footer}>
        <TextInput 
        placeholder="Digite uma tarefa..."
        placeholderTextColor={"#989898"} 
        onChangeText={handleDescChange}
        style={style.input}/>

        <TouchableOpacity 
        style={style.button}
        onPress={postTask}>
          <MaterialIcons name="add" size={24}/>
        </TouchableOpacity>
      </View>
    </>
  );
}
