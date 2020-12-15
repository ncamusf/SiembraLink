import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, SafeAreaView, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import { Title } from 'react-native-paper';

const lineAnoAnterior = {
  labels: ['E', 'F', 'Mz', 'Ab', 'My', 'Jn', 'Jl', 'Ag', 'S', 'O', 'N', 'D'],
  datasets: [
    {
      data: [500, 400, 500, 600, 900, 1000, 200, 700, 400, 100, 200, 400],
      strokeWidth: 2,
    },
  ],
};



const lineAnoActual = {
  labels: ['E', 'F', 'Mz', 'Ab', 'My', 'Jn', 'Jl', 'Ag', 'S', 'O', 'N', 'D'],
  datasets: [
    {
      data: [500, 700, 1000, 1000, 1200, 1100, 1300, 0, 0, 0, 0, 0],
      strokeWidth: 2,
    },
  ],
};

const pieIngresos = [
  {
    name: 'SiembraLink',
    ingreso: 1500,
    color: '#47AD55',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Compañía 1',
    ingreso: 700,
    color: '#47ADA3',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Compañía 2',
    ingreso: 1000,
    color: '#D5CD37',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Compañía 3',
    ingreso: 300,
    color: '#D56937',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }
]
const FinancialState = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginHorizontal: 20,}}>
        <Title style={{marginLeft: 20}}>
          Últimos pagos
        </Title>
        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox1]}>
            <Text onPress={() => {}}>SiembraLink</Text>
          </View>
          <View style={[styles.infoBox2]}>
            <Text>24/08/2020</Text>
          </View>
          <View style={[styles.infoBox3]}>
            <Text>$60000</Text>
          </View>
        </View>
        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox1]}>
            <Text onPress={() => {}}>Compañía 1</Text>
          </View>
          <View style={[styles.infoBox2]}>
            <Text>23/08/2020</Text>
          </View>
          <View style={[styles.infoBox3,]}>
            <Text>$15000</Text>
          </View>
        </View>
        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox1,]}>
            <Text onPress={() => {}}>Compañía 3</Text>
          </View>
          <View style={[styles.infoBox2,]}>
            <Text>20/08/2020</Text>
          </View>
          <View style={[styles.infoBox3,]}>
            <Text>$40000</Text>
          </View>
        </View>
        
        <Title style={{marginLeft: 20}}>
          Ganancias
        </Title>
        <LineChart
          data={lineAnoActual}
          fromZero='true'
          width={Dimensions.get('window').width-40} // from react-native
          height={220}
          yAxisLabel={'$'}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#60BA54',
            backgroundGradientTo: '#5AAB4F',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
        <Title style={{marginLeft: 20}}>
          Ingresos
        </Title>
        <PieChart
          data={pieIngresos}
          width = {Dimensions.get("window").width-40}
          height={220}
          chartConfig={{backgroundGradientFrom: "#1E2923",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "#08130D",
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.5,
          useShadowColorFromDataset: false}}
          accessor="ingreso"
          backgroundColor="transparent"
          absolute
        />
    </ScrollView>
  </SafeAreaView>
  );
};
export default FinancialState;

const styles = StyleSheet.create({
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 50,
  },
  infoBox1: {
    width: "33%",
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  infoBox2: {
    width: "33%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox3: {
    width: "33%",
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})