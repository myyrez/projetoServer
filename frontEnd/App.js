import React, { useEffect } from "react";
import Lista from "./src/pages/Lista";

export default function App() {
  // const [tarefas, setTarefas] = useState([]);

  // const addTask = () => {
  //   getTasks();
  //   Keyboard.dismiss();
  // };
  // const deleteTask = async deleteId => {
  //   const requestOptions = {
  //     method: 'DELETE',
  //     headers:{'Content-type': application/json},
  //   };
  //   try {
  //     await fetch('http://localhost:5000/tarefas/' + deleteId, requestOptions);
  //     setTarefas(tarefas.filter(task => task.idTodo != deleteId));
  //   } catch (error) {
  //     console.error(error);
  //     setTarefas([]);
  //   };
  // };
  // const getTasks = async () => {
  //   try {
  //     const res = await fetch ('http://localhost:5000/tarefas');
  //     const data = res.json();
  //     data.then(
  //       val => setTarefas(val)
  //     );
  //   } catch (error) {
  //     console.error(error);
  //     setTarefas([]);
  //   };
  // };

  // useEffect(() => {
  //   getTasks()
  // }, [])

  return (
    <Lista/>
  );
}