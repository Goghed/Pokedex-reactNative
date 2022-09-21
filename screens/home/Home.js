import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, TextInput, StatusBar } from "react-native";

export default function Home (){
    return (
        
        <View style={styles.container}> 
            <StatusBar />
            <ImageBackground style={styles.backgroundImage} source={require('../../assets/background-home.png')} resizeMode={'contain'}>
                <View style={styles.containerCabecalho}>
                    <View style={styles.generationIcon}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/Generation.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sortIcon}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/Sort.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.filterIcon}>
                        <TouchableOpacity>
                            <Image source={require('../../assets/Filter.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerTitulo}>
                    <View style={styles.viewTitulo}>
                        <Text style={styles.titulo}>
                            Pokédex
                        </Text>
                    </View>
                    <View style={styles.viewTexto}>
                        <Text style={styles.texto}>
                            Procure o Pokémon pelo nome ou usando o número da Pokédex.
                        </Text>
                    </View>
                    <View style={styles.containerInput}>
                        <View style={styles.viewImage}>
                            <Image source={require('../../assets/Search.png')}/>
                        </View>
                        <View>
                            <TextInput style={styles.textInput} onChangeText={null}
                            placeholder="Qual Pokémon você está procurando?"></TextInput>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.container2}>
                <Text>Teste</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff'        
    },

    backgroundImage: {
        flex: 1,
        width: '100%',
        height: 300,       
    },

    containerCabecalho: {
        flexDirection: 'row',         
        justifyContent: 'flex-end',
        marginTop: 40,
        marginRight: 20,
    },

    generationIcon: {
        marginRight: 20
    },

    sortIcon: {
        marginRight: 20
    },

    containerTitulo: {        
        marginTop: 25
    },

    viewTitulo: {
        marginLeft: 40
    },

    titulo: {
        fontSize: 34,
        fontFamily: 'System',
        fontWeight: 'bold'        
    },

    viewTexto: {
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40        
    },

    texto: {
        color: '#676666'
    },

    containerInput: {
        backgroundColor: '#F2F2F2',        
        marginTop: 25,
        marginLeft: 40,
        marginRight: 40,
        width: 310,
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    viewImage: {
        marginRight: 12,
        marginRight: 5
    },

    textInput: {
        fontSize: 16
    },

    container2: {
        width: '100%',
        height: 480,
        marginTop: 20,        
        backgroundColor: '#ffffff'
    }
})

    