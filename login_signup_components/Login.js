import React from 'react';
import { StyleSheet, Text, View, TextInput, useState, ScrollView } from 'react-native';


export const Login = (props) => {


// -------------- STATE ---------------------------
    cosnt [userEntry, setUserEntry] = useState('');
    const [passEntry, setPassEntry] = useState('');
    const [hiddenPass, toggleHidden] = useState(true);



// -------------- STATE FUNCTIONS -----------------------
    function toggleHidden(hiddenPass){
        toggleHidden(!hiddenPass)
    }

    const handleUserText = (text) => {
        setUserEntry(text)
    }

    const handlePassText = (text) => {
        setPassEntry(text)
    }



// ------------- RENDERING FUNCTIONS --------------------
    function renderErrorMessages(props){
        if (props.errors.length > 0){
            return(
                <View style={styles.error}>
                    {mapErrors(props.errors)}
                </View>
            )
        }
    }

    function mapErrors(errorList){
        return 
    }

// ------------------- COMPONENT -------------------------
    return(
        <View style={styles.loginWindow}>
            <Text>Enter Your Information</Text>
            <View style={styles.usernameSpace}>
                <Text>Username: </Text>  
                <TextInput placeholder="Username"
                value={userEntry} 
                onChangeText={handleUserText}
                />
            </View>
            <View style={styles.passwordSpace}>
                <Text>Password: </Text>  
                <TextInput secureTextEntry={hiddenPass} 
                placeholder="Username" 
                value={passEntry} 
                onChangeText={handlePassText}
                />
                <Button onPress={toggleHidden}></Button> 
            </View>
            <View style={styles.submit}>

            </View>
        </View>
    )
}





//------------------STYLES----------------//
const styles = StyleSheet.create({
    loginWindow: {
    },

    usernameSpace: {

    },

    passwordSpace: {

    },

    submit: {

    },

    error:{

    }
})
