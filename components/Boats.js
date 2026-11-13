import {Image, Text, View,StyleSheet} from "react-native";
import {FontAwesome6} from "@expo/vector-icons";
import React from "react";

const styles = StyleSheet.create({
    boatBox: {
        padding: 28,
        borderWidth: 2,
        borderColor: 'black',
    },

    boatImage: {
        borderRadius: 16,
        width: 350,
        height: 250,
    },

    boatName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },

    boatDescription: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },

    icon: {
        textAlign: 'center',
    },
});

const Boats = ({name, description, icon_name, icon_color ,picture,bgColor}) => {
    return (
        <View style={[styles.boatBox,{backgroundColor: bgColor}]}>
            <Text></Text>
            <Image  source={picture}
                    style={styles.boatImage}/>
            <Text style={styles.boatName}>
                Boat: {name}
            </Text>
            <Text style={styles.icon}>
                <FontAwesome6 name={icon_name} size={40} color={icon_color}/>
            </Text>

            <Text style={styles.boatDescription}>
                {description}
            </Text>
        </View>
    );
};

export default Boats;