import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import categories from '../data/categories';
import popular from '../data/popular';
import Header from '../components/Header';
import bestdeals from '../data/bestdeals';
export default function Home({ navigation }) {



    const [user, setUser] = useState(undefined);
    const [activeCategory, setActiveCategory] = useState(1);

    const getUser = async () => {
        const auth = await AsyncStorage.getItem('currentUser');

        if (auth) {
            setUser(JSON.parse(auth))
        }
    }

    const handleLogout = async () => {

    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={{ paddingHorizontal: 10, paddingVertical: 40 }}>
                        <Header />
                        <View style={{ marginBottom: 30 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                                <Text style={{ fontSize: 17, marginBottom: 15 }}>Popular Categories</Text>
                            </TouchableOpacity>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: 10 }}>
                                {categories.slice(0, 4).map((e, i) => (
                                    <TouchableOpacity
                                        style={{ marginRight: 10 }}
                                        key={i}
                                        onPress={() => setActiveCategory(i)}
                                    >
                                        <View>
                                            <Image
                                                style={{
                                                    width: 73,
                                                    height: 91,
                                                    resizeMode: 'contain',
                                                    marginRight: 20
                                                }}
                                                source={e.image}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                        <View style={styles.section}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 17, marginBottom: 15 }}>Best Deals</Text>
                            </TouchableOpacity>


                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 17, marginBottom: 15 }}>Most Popular</Text>
                            </TouchableOpacity>
                            <View>
                                {popular.map((e, i) => (
                                    <TouchableOpacity key={i}>
                                        <Image
                                            style={{
                                                width: '100%',
                                                height: 180,
                                                resizeMode: 'contain',
                                                marginBottom: 30
                                            }}
                                            source={e.image}
                                        />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 10
    }
});