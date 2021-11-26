import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

interface Tweet{
    tweet_text: string
}
const Home = () => {

    const [tarea, setTarea] = useState('')


    const CreandoTarea =  async ()=>{
    
    }
    return (
        <View  style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Text style={{fontSize:30, marginTop: 10}}>Listar Tareas</ Text> 
            <View style={styles.constainer}>
            <TextInput
                style={styles.inputs}
                placeholder="Escriba la tarea"
                onChangeText={setTarea}
            />
            <Button 
                title="Agregar"
                onPress={() => CreandoTarea()}
            />
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 15,
        fontSize: 22,
        
    },
    constainer:{
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C4C4C4',
        marginBottom: 10,
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop:20
    },
    text:{

    }
})
