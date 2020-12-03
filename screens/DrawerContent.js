import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'
import{
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'



export function DrawerContent(props) {
    
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
         setIsDarkTheme(!isDarkTheme);
    }
    
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View>
                    <View style={StyleSheet.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 5,marginLeft:20}}>
                            <Avatar.Image
                                source ={{
                                    uri: 'https://cdn-pro.elsalvador.com/wp-content/uploads/2018/04/agricultura.jpg'
                                }}
                                size={80}
                            />
                            <View style={{marginLeft:15,flexDirection:'column'}}>
                                <Title style={styles.title}>Antonio Ramirez</Title>
                                <Caption style={styles.caption}>@Aramirez</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>4.6</Paragraph>
                                <Caption style={styles.caption}>Valoracion</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>2</Paragraph>
                                <Caption style={styles.caption}>Trabajos</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                        icon = {({color, size}) => (
                            <Icon
                            name="account-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label = "Perfil"
                        onPress={() => {}}
                        />
                        <DrawerItem
                        icon = {({color, size}) => (
                            <Icon
                            name="settings-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label = "Configuracion"
                        onPress={() => {}}
                        />
                        <DrawerItem
                        icon = {({color, size}) => (
                            <Icon
                            name="account-check-outline"
                            color={color}
                            size={size}
                            />
                        )}
                        label = "Soporte"
                        onPress={() => {}}
                    />
                </Drawer.Section>
            <Drawer.Section title="Preferencias">
                <TouchableRipple onPress={()=>{toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>Modo Noche</Text>
                        <View pointerEvents="none">
                            <Switch value={isDarkTheme}/>
                        </View>
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </View>
    </DrawerContentScrollView>
    <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
            icon = {({color, size}) => (
                <Icon
                name="exit-to-app"
                color={color}
                size={size}
                />
            )}
            label = "Sign Out"
            onPress={() => {}}
            />
    </Drawer.Section>
</View>

);
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 25,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });