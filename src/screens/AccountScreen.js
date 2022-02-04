import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { EvilIcons } from '@expo/vector-icons'


const AccountScreen = () => {
    const { state, signout } = useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <EvilIcons name="user" size={300} />
            </View>
            <Text style={{ textAlign: 'center'}}>User email: {state.email}</Text>
            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    )
}
AccountScreen.navigationOptions = {
    title: "Account"
}

const styles = StyleSheet.create({})

export default AccountScreen;

