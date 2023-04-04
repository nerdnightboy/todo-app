import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Keyboard, ScrollView } from 'react-native';
import Task from './components/task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () =>{
    Keyboard.dismiss();
    if(task){
      setTaskItems([...taskItems,task]);
      setTask(null);
    }
  }

  const completeTask = (index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  const deleteAll = () =>{
    let itemsCopy = [];
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={{flexGrow:1}} >
      <Text style={{
        backgroundColor:"blue",
        borderRadius:30,
        marginTop:25,
        color:'black',
        textAlign:'center',
        fontSize:20,
        padding:10,
        fontWeight:'600',
      }} >
          My TODO App
      </Text>

      <TouchableOpacity style={styles.removeall} onPress={()=> deleteAll()} >
        <Text style={styles.removealltext}>Remove all</Text>
      </TouchableOpacity>

      <View>
        <View style={styles.items}>
          {taskItems.map((item, index)=>{
            return(
              <TouchableOpacity key={index} style={styles.todocard}>
                <TouchableOpacity key={index} onPress={()=>completeTask(index)} >
                  <Image source={require('./images/pngwing.com (1).png')} style={{width:25, height:25,}}/>
                </TouchableOpacity>
                <Task text={item}/>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    </ScrollView>
      {/* my todo app */}
      {/* remove all */}
      {/* wake up at 7 etc */}
      {/* todo input container */}

      <KeyboardAvoidingView style={styles.writetask}>
        <TextInput placeholder='Enter your task' style={styles.inputbox} value={task} onChangeText={(text) => {setTask(text)}}  />


        <TouchableOpacity onPress={()=>handleAddTask()}>
          <Image source={require('./images/pngwing.com (2).png')} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  removeall:{
    flex:0,
    justifyContent:'flex-end',
    width:'100%',
    flexDirection:'row',
    margin:10,

  },
  removealltext:{
    color:'black',
    fontSize:17,
    fontWeight:'700',
    backgroundColor:'#FF5757',
    width:110,
    textAlign:'center',
    padding:5,
    borderRadius:10,
    marginRight:15,

  },
});
