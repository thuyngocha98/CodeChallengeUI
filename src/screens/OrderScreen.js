import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import CardView from '../components/CardView';

const w = Dimensions.get('window').width;

const TopBar = [
  {
    id: 0,
    title: 'All',
  },
  {
    id: 1,
    title: 'Obligation',
  },
  {
    id: 2,
    title: 'Submitted',
  },
  {
    id: 3,
    title: 'Done',
  },
];

const dataCardView = [
  {
    id: 0,
    status: 'Obligation',
    dateAndTime: '02/05/2019 07:00',
    product: [
      {
        id: 'p1',
        uri: 'https://i.imgur.com/tEKXDfx.png',
        name: 'Pure white soft chair',
        price: '2400.00',
        amount: '2',
      },
      {
        id: 'p2',
        uri: 'https://i.imgur.com/yd9PBBA.png',
        name: 'Green soft chair',
        price: '0',
        amount: '1',
      },
    ],
    total: '4800.00',
  },
  {
    id: 1,
    status: 'Done',
    dateAndTime: '02/03/2019 09:30',
    product: [
      {
        id: 'c1',
        uri: 'https://i.imgur.com/8VV3GDN.png',
        name: 'A pair of deck chair',
        price: '1200.00',
        amount: '1',
      },
    ],
    total: '1200.00',
  },
];

export default function ProfileScreen() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [data, setData] = React.useState(dataCardView);

  async function getArr(name) {
    if (name === 'All') {
      return dataCardView;
    }
    var newArr = await dataCardView.filter(item => {
      return item.status === name;
    });
    return newArr;
  }

  const selectTabBar = async index => {
    setTabIndex(index);
    let name = 'All';
    switch (index) {
      case 0:
        name = 'All';
        break;
      case 1:
        name = 'Obligation';
        break;
      case 3:
        name = 'Done';
        break;
      default:
        name = '';
    }
    if (name === '') {
      setData([]);
    }
    let newData = await getArr(name);
    setData(newData);
  };

  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        hidden={false}
        translucent={true}
      />
      <View style={styles.container}>
        {/*view header */}
        <View style={styles.header}>
          <Text style={styles.txtOrder}>Order</Text>
          <Feather name="search" size={20} color={Colors.black} />
        </View>
        {/*view top bar */}
        <View style={styles.viewTopBar}>
          {TopBar.map((item, i) => (
            <TouchableOpacity
              key={item.id}
              style={styles.topBar}
              onPress={() => selectTabBar(i)}
              activeOpacity={0.6}>
              <Text
                style={[
                  styles.txtTitleTopBar,
                  {color: i === tabIndex ? Colors.blue : Colors.txtBlack},
                ]}>
                {item.title}
              </Text>
              <View
                style={[
                  styles.viewUnderTitle,
                  {
                    backgroundColor:
                      i === tabIndex ? Colors.blue : Colors.white,
                  },
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
        {/*view list card */}
        <ScrollView style={styles.viewListCard}>
          <View style={styles.cardView}>
            {data.map(item => (
              <CardView data={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  header: {
    marginTop: StatusBar.currentHeight + w / 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: w / 20,
    marginBottom: w / 16.667,
  },
  txtOrder: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.black,
  },
  viewTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: w / 25,
  },
  topBar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitleTopBar: {
    marginHorizontal: w / 100,
    fontSize: 16,
    marginBottom: w / 33.333,
  },
  viewUnderTitle: {
    width: '100%',
    height: 3,
    backgroundColor: '#333',
  },
  viewListCard: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  cardView: {
    marginHorizontal: w / 25,
    marginTop: w / 25,
  },
});
