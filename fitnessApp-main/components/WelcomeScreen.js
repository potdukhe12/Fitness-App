import React from "react";
import { View, Text } from "react-native";
import Background from "./others/Background";
import Btn from './others/Btn'
import { purple, white } from './others/Constants'

const WelcomeScreen = (props) => {
    return (
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 40 }}>
                <Text style={{ color: purple, fontSize: 60 }}>Let's</Text>
                <Text style={{ color: purple, fontSize: 60 }}>Get Fit</Text>
                <Text style={{ color: purple, fontSize: 60, marginBottom: 25 }}>Together</Text>
                <Btn textColor={white} 
                    btnLabel='Login'
                    Press={() => props.navigation.navigate("Login")} />
                <Btn textColor={purple}
                    btnLabel='Register'
                    Press={() => props.navigation.navigate("SignUp")} />
            </View>
        </Background>
    );
}

export default WelcomeScreen;