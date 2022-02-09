import React, { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext'
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import Spacer from '../components/Spacer'


const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext)

    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <Spacer>
                            <TouchableOpacity onPress={() =>
                                navigation.navigate('TrackDetail', { _id: item._id })}
                            >
                                <ListItem>
                                    <ListItem.Content>
                                        <ListItem.Title>{item.name}</ListItem.Title>
                                    </ListItem.Content>
                                    <ListItem.Chevron />
                                </ListItem>
                            </TouchableOpacity>
                        </Spacer>
                    );
                }}
            />
        </>
    )
}

TrackListScreen.navigationOptions = {
    title: 'Saved Tracks'
}

const styles = StyleSheet.create({})

export default TrackListScreen;

