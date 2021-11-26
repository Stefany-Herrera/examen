import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native';
import FormInputs from '../Components/FormInputs'

const login = () => {

    const [usuario, setUsuario] = useState('')
    const [contrasenia, setContrasenia] = useState('')


    const Datos = () => {
      
        if (usuario==="hacker@gmail.com" && contrasenia==="1234") {
            
            
        }
    }

    return (
        <View style={styles.container}>


            <FormInputs
                title="Usuario"
                defaultValue={usuario}
                onChangeText={setUsuario}
            />
            <FormInputs
                title="Contraseña"
                defaultValue={contrasenia}
                onChangeText={setContrasenia}
            />

            <View style={styles.button} >
                <Button
                    title="Ingresar"
                    onPress={Datos}

                />
            </View>


        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "#6ca0ab",
        flex: 1,
        width: "100%",
        paddingTop: 150,
        paddingLeft: 24,
        paddingRight: 24,
    },
    button:{
        paddingTop: 50,
        
    }

})