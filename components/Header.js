import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <TouchableOpacity>
                <Ionicons
                    name='menu'
                    size={37}>
                </Ionicons>
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons
                    name='cart-outline'
                    size={37}>
                </Ionicons>
            </TouchableOpacity>
        </View>
    )
}

export default Header;