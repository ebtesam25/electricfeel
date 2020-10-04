import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import House from './house';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const HouseList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <House
                    name={item.name}
                    house={item.house}
                    address={item.address} 
                    
                    
                />}
            />

    </View>
);

export default HouseList;