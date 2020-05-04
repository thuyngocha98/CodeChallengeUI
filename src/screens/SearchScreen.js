import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';

const w = Dimensions.get('window').width;

const images = [
  'https://i.imgur.com/iHW9SJQ.png',
  'https://i.imgur.com/nt11eWV.jpg',
  'https://cdn.csswinner.com/images/winners/2019/jan/1784313569.jpg',
];

const data = [
  {
    id: 1,
    uri: 'https://i.imgur.com/ek34Phx.png',
    title: 'Five new stores opened',
    desc: 'In eastern China',
  },
  {
    id: 2,
    uri: 'https://i.imgur.com/JrGBkyA.png',
    title: 'Global stylist creates',
    desc: 'The quality home furnishing designed for the public',
  },
  {
    id: 3,
    uri: 'https://i.imgur.com/ek34Phx.png',
    title: 'A list of essential items',
    desc: 'In eastern Lao',
  },
];

export default function SearchScreen() {
  const [indexImage, setIndexImage] = React.useState(0);

  const setSelectIndexImage = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width; //width of the view size
    const contentOffset = event.nativeEvent.contentOffset.x; //get current position of the scrollView
    const selectIndex = Math.floor(contentOffset / (viewSize - w / 12.5));
    setIndexImage(selectIndex);
  };

  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        hidden={false}
        translucent={true}
      />
      <ScrollView style={styles.container}>
        {/*view search */}
        <View style={styles.viewSearch}>
          <TextInput
            placeholder={'Search for your favorite'}
            style={styles.textInput}
            placeholderTextColor={'#ACB6B9'}
            underlineColorAndroid={'transparent'}
            autoCorrect={false}
          />
          <View style={styles.iconSearch}>
            <Feather name="search" size={17} color={Colors.darkGray} />
          </View>
        </View>
        {/*view slide image*/}
        <View style={styles.viewSlide}>
          <ScrollView
            horizontal
            pagingEnabled
            onMomentumScrollEnd={setSelectIndexImage}
            showsHorizontalScrollIndicator={false}>
            {images.map(image => (
              <View key={image}>
                <View style={styles.viewImage}>
                  <Image
                    source={{uri: image}}
                    style={styles.image}
                    borderRadius={w / 33.33}
                  />
                </View>
                <View style={styles.shadowImage} />
              </View>
            ))}
          </ScrollView>
          <View style={styles.circleDot}>
            {images.map((image, i) => (
              <View
                key={image}
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      i === indexImage ? Colors.blue : Colors.gray,
                  },
                ]}
              />
            ))}
          </View>
        </View>
        {/*view category*/}
        <View style={styles.viewCategory}>
          <View style={styles.category}>
            <Image
              source={require('../assets/images/shadow_bed.png')}
              style={styles.shadowImageCategory}
              resizeMode="stretch"
            />
            <Image
              source={require('../assets/images/bed.png')}
              style={styles.styleImageCategory}
            />
            <Text style={styles.txtCategory}>Bed</Text>
          </View>
          <View style={styles.category}>
            <Image
              source={require('../assets/images/shadow_sofa.png')}
              style={styles.shadowImageCategory}
              resizeMode="stretch"
            />
            <Image
              source={require('../assets/images/sofa.png')}
              style={styles.styleImageCategory}
            />
            <Text style={styles.txtCategory}>Sofa</Text>
          </View>
          <View style={styles.category}>
            <Image
              source={require('../assets/images/shadow_closet.png')}
              style={styles.shadowImageCategory}
              resizeMode="stretch"
            />
            <Image
              source={require('../assets/images/closet.png')}
              style={styles.styleImageCategory}
            />
            <Text style={styles.txtCategory}>Closet</Text>
          </View>
          <View style={styles.category}>
            <Image
              source={require('../assets/images/shadow_all.png')}
              style={styles.shadowImageCategory}
              resizeMode="stretch"
            />
            <Image
              source={require('../assets/images/all.png')}
              style={styles.styleImageCategory}
            />
            <Text style={styles.txtCategory}>All</Text>
          </View>
        </View>
        {/*view Title and more */}
        <View style={styles.viewTitleAndMore}>
          <Text style={styles.txtTitle}>Choiceness</Text>
          <View style={styles.viewMore}>
            <Text style={styles.txtMore}>More</Text>
            <Feather name="chevron-right" size={20} color={Colors.gray} />
          </View>
        </View>
        {/*view list*/}
        <View style={styles.viewList}>
          {data.map(item => (
            <View style={styles.mainBox} key={item.id}>
              <View style={styles.viewBox}>
                <Image source={{uri: item.uri}} style={styles.imgBox} />
              </View>
              <View style={styles.titleAndDesc}>
                <Text style={styles.txtTitleBox} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={styles.txtDesc} numberOfLines={3}>
                  {item.desc}
                </Text>
              </View>
            </View>
          ))}
          <View style={styles.footer} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white,
  },
  viewSearch: {
    marginTop: StatusBar.currentHeight + w / 25,
    marginHorizontal: w / 25,
    marginBottom: w / 20,
  },
  textInput: {
    paddingVertical: 0,
    fontSize: 15,
    paddingLeft: w / 25,
    height: w / 12.5,
    borderRadius: w / 25,
    borderWidth: 1,
    borderColor: Colors.grey,
    backgroundColor: Colors.lightGray,
  },
  iconSearch: {
    position: 'absolute',
    right: w / 25,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSlide: {
    marginHorizontal: w / 25,
    height: w / 1.852,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: w / 33.333,
  },
  viewImage: {
    width: w - w / 12.5,
    height: w / 2.174,
    backgroundColor: Colors.white,
  },
  image: {
    width: w - w / 12.5,
    height: w / 2.174,
    backgroundColor: Colors.white,
  },
  shadowImage: {
    backgroundColor: Colors.white,
    width: w / 1.25,
    marginLeft: w / 16.667,
    height: 0.1,
    elevation: 17,
  },
  circleDot: {
    position: 'absolute',
    bottom: w / 150,
    flexDirection: 'row',
  },
  dot: {
    width: w / 49.09,
    height: w / 49.09,
    borderRadius: w / 98.18,
    margin: w / 78.544,
  },
  viewCategory: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  category: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: w / 16.6667,
  },
  styleImageCategory: {
    width: w / 11.6,
    height: w / 11.6,
    tintColor: Colors.blue,
  },
  txtCategory: {
    marginTop: w / 50,
    color: Colors.txtGray,
  },
  shadowImageCategory: {
    tintColor: Colors.shadow,
    opacity: 0.5,
    width: w / 13,
    height: w / 11,
    position: 'absolute',
    zIndex: -99,
    top: -w / 131,
    right: w / 13.5421,
  },
  viewTitleAndMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: w / 25,
    marginBottom: w / 16.6667,
  },
  txtTitle: {
    color: Colors.txtDarkAndBold,
    fontSize: 20,
    fontWeight: '700',
  },
  viewMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtMore: {
    color: Colors.txtGray,
    fontSize: 14,
  },
  viewList: {
    marginHorizontal: w / 25,
    backgroundColor: Colors.white,
    borderRadius: w / 33.33,
    elevation: 1,
    marginBottom: w / 50,
  },
  mainBox: {
    flexDirection: 'row',
    marginHorizontal: w / 25,
    marginTop: w / 25,
  },
  viewBox: {
    height: w / 4.54545,
    width: w / 3.125,
    overflow: 'hidden',
  },
  imgBox: {
    height: w / 4.54545,
    width: w / 3.125,
    borderRadius: w / 50,
  },
  titleAndDesc: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: w / 20,
  },
  txtTitleBox: {
    color: Colors.txtDarkAndBold,
    fontSize: 17,
    fontWeight: '700',
  },
  txtDesc: {
    marginTop: w / 100,
    color: Colors.txtGray,
    fontSize: 13,
    lineHeight: 20,
  },
  footer: {
    marginTop: w / 25,
  },
});
