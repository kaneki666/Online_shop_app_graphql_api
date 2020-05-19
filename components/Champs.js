import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import {useQuery} from '@apollo/react-hooks';
import Svg, {Path, Circle} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Entypo';

import {get_Champs} from '../queries/Query';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Champs = ({navigation}) => {
  const {loading, error, data} = useQuery(get_Champs, {
    variables: {lane: 'mid'},
  });

  return (
    <View style={styles.container}>
      {data && (
        <FlatList
          horizontal={true}
          data={data.champs}
          renderItem={({item}) => (
            <View style={styles.containerchamp}>
              <View style={{top: 50}}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={`${width - 40}`}
                  height="600"
                  version="1.1">
                  <Circle
                    cx={`${(width - 40) / 2}`}
                    cy="-35"
                    r="240"
                    fill="#000000"
                  />
                  <Image
                    style={styles.image}
                    source={{
                      uri: `${item.champimage}`,
                    }}
                  />
                </Svg>
              </View>

              <View>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View>
                  <Text style={styles.pricetext}>
                    <Icon
                      style={styles.icon}
                      name="price-tag"
                      size={20}
                      color="#000000"
                    />
                    Price
                  </Text>
                  <Text style={styles.price}>100$</Text>
                </View>
                <View>
                  <Text style={styles.size}>Size</Text>
                  <View style={styles.sizes}>
                    <Button
                      title="7"
                      type="outline"
                      buttonStyle={{
                        color: 'black',
                        width: 60,
                        borderColor: 'black',
                        borderWidth: 3,
                      }}
                      titleStyle={{
                        color: 'black',
                      }}
                    />
                    <Button
                      title="8"
                      type="outline"
                      buttonStyle={{
                        color: 'black',
                        width: 60,
                        borderColor: 'black',
                        borderWidth: 3,
                      }}
                      titleStyle={{
                        color: 'black',
                      }}
                    />
                    <Button
                      title="9"
                      type="outline"
                      buttonStyle={{
                        color: 'black',
                        width: 60,
                        borderColor: 'black',
                        borderWidth: 3,
                      }}
                      titleStyle={{
                        color: 'black',
                      }}
                    />
                    <Button
                      title="10"
                      type="outline"
                      buttonStyle={{
                        color: 'black',
                        width: 60,
                        borderColor: 'black',
                        borderWidth: 3,
                      }}
                      titleStyle={{
                        color: 'black',
                      }}
                    />
                  </View>
                </View>
                <View style={styles.buy}>
                  <Button
                    title="Buy Now"
                    buttonStyle={{
                      backgroundColor: 'black',
                    }}
                    onPress={() => navigation.navigate('Checkout')}
                    title="Buy Now"
                  />
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    minHeight: height,
    backgroundColor: '#ffffff',
  },
  containerchamp: {
    width: width - 40,
    height: 490,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  image: {
    width: 350,
    height: 250,
    position: 'absolute',
    top: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  name: {
    fontSize: 30,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    top: -300,
    textShadowColor: 'black',
    textShadowRadius: 4,
  },

  pricetext: {
    position: 'absolute',
    top: -280,
    left: 20,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    position: 'absolute',
    top: -280,
    left: 100,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  size: {
    top: -260,
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: -220,
    fontFamily: 'serif',
  },
  sizetext: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    width: 50,
    backgroundColor: 'red',
    borderColor: 'yellow',
    borderRadius: 2,
  },
  buy: {
    top: -170,
    width: 200,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Champs;
