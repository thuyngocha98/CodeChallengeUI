import * as React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import Colors from '../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

const w = Dimensions.get('window').width;

const RenderCardItem = (uri, name, price, amount) => {
  return (
    <View style={styles.cardItem}>
      <View style={styles.viewImageItem}>
        <Image source={{uri: uri}} style={styles.imgItem} />
      </View>
      <View style={styles.content}>
        <View style={styles.nameAndAmount}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.txtAmount}>x {amount}</Text>
        </View>
        <LinearGradient
          colors={
            price === '0'
              ? ['#90ABFC', '#7696F8', '#585FEE']
              : ['#ffffff', '#ffffff']
          }
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.viewGift}>
          <Text style={styles.txtGift}>Gift</Text>
        </LinearGradient>
        <Text
          style={[
            styles.price,
            {color: price === '0' ? Colors.white : Colors.txtBlack},
          ]}>
          $ {price}
        </Text>
      </View>
    </View>
  );
};

export default function CardView(data) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerDateTime}>{data.data.dateAndTime}</Text>
        <Text style={styles.txtObligation}>
          {data.data.status === 'Done' ? 'Done' : 'Obligation'}
        </Text>
      </View>
      <View style={styles.viewCardView}>
        {data.data.product.map(item => (
          <View key={item.id}>
            {RenderCardItem(item.uri, item.name, item.price, item.amount)}
          </View>
        ))}
      </View>
      <Text style={styles.txtTotal}>
        {'Total:   '}
        <Text style={styles.txtNumberTotal}>$ {data.data.total}</Text>
      </Text>
      {data.data.status === 'Obligation' ? (
        <View style={styles.viewBtn}>
          <View style={styles.btnCancel}>
            <Text style={styles.txtBtn}>Cancel</Text>
          </View>
          <LinearGradient
            colors={['#90ABFC', '#7696F8', '#585FEE']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btn}>
            <Text style={[styles.txtBtn, {color: Colors.white}]}>Pay</Text>
          </LinearGradient>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    borderRadius: w / 33.333,
    elevation: 5,
    marginBottom: w / 25,
  },
  header: {
    height: w / 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  headerDateTime: {
    marginLeft: w / 25,
    color: Colors.txtGray,
    fontSize: 15,
  },
  txtObligation: {
    marginRight: w / 25,
    color: Colors.blue,
    fontSize: 15,
  },
  viewCardView: {},
  cardItem: {
    flexDirection: 'row',
    marginHorizontal: w / 25,
    marginTop: w / 50,
  },
  viewImageItem: {
    flex: 1,
    marginLeft: w / 100,
  },
  imgItem: {
    width: w / 5.55556,
    height: w / 4.545455,
  },
  content: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: w / 16.667,
  },
  nameAndAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 17,
    color: Colors.txtDarkAndBold,
    fontWeight: '700',
  },
  viewGift: {
    width: w / 8,
    borderRadius: w / 33.333,
  },
  txtGift: {
    textAlign: 'center',
    color: Colors.white,
  },
  price: {
    fontSize: 17,
    color: Colors.txtBlack,
    fontWeight: '700',
  },
  txtAmount: {
    fontSize: 15,
    color: Colors.txtGray,
  },
  txtTotal: {
    marginBottom: w / 25,
    fontSize: 14,
    color: Colors.txtGray,
    textAlign: 'right',
    marginRight: w / 25,
  },
  txtNumberTotal: {
    color: Colors.txtBlack,
    fontSize: 17,
    fontWeight: '700',
  },
  viewBtn: {
    marginBottom: w / 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: w / 25,
  },
  btnCancel: {
    width: w / 4.134,
    borderRadius: w / 10,
    marginLeft: w / 25,
    borderWidth: 0.5,
    borderColor: Colors.gray,
    backgroundColor: Colors.white,
  },
  btn: {
    width: w / 4.134,
    backgroundColor: Colors.blue,
    borderRadius: w / 10,
    marginLeft: w / 25,
  },
  txtBtn: {
    textAlign: 'center',
    paddingVertical: w / 75,
    fontSize: 17,
    color: Colors.txtGray,
  },
});
