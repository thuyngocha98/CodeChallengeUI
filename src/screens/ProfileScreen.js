import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import Colors from '../constants/Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const w = Dimensions.get('window').width;

// Setup List Icon
const thumbnails = {
  client: require('../assets/images/client.png'),
  reception: require('../assets/images/reception.png'),
  notification: require('../assets/images/notification.png'),
  question: require('../assets/images/question.png'),
  knowledge: require('../assets/images/knowledge.png'),
  message: require('../assets/images/message.png'),
  qAndF: require('../assets/images/qAndF.png'),
};

export default function SearchScreen() {
  const RenderItem = (nameImage, name, detail) => {
    return (
      <View style={styles.feature}>
        <View style={styles.imgAndName}>
          <Image source={thumbnails[nameImage]} style={styles.iconFeature} />
          <Text style={styles.txtNameFeature}>{name}</Text>
        </View>
        <View style={styles.viewMore}>
          <Text style={styles.detail}>{detail}</Text>
          <Feather name="chevron-right" size={25} color={Colors.gray} />
        </View>
      </View>
    );
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
        {/**view header */}
        <View style={styles.header}>
          <View style={styles.viewNotification}>
            <Fontisto name="bell" size={24} color={Colors.black} />
            <View style={styles.dotRed} />
          </View>
          <AntDesign name="setting" size={25} color={Colors.black} />
        </View>
        {/*view name and avatar */}
        <View style={styles.viewNamAndAvatar}>
          <View style={styles.viewNameAndManager}>
            <Text style={styles.txtName}>Rainie</Text>
            <View style={styles.viewManager}>
              <LinearGradient
                colors={['#90ABFC', '#7696F8', '#585FEE']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.iconManager}>
                <FontAwesome5 name="crown" size={12} color={Colors.white} />
              </LinearGradient>
              <LinearGradient
                colors={['#90ABFC', '#7696F8', '#585FEE']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.viewTextManager}>
                <Text style={styles.txtManager}>Manager</Text>
                <Feather name="chevron-right" size={13} color={Colors.white} />
              </LinearGradient>
            </View>
          </View>
          <View style={styles.viewAvatar}>
            <Image
              source={{uri: 'https://i.imgur.com/atpzvdJ.png'}}
              style={styles.avatar}
            />
          </View>
        </View>
        {/*view category */}
        <View style={styles.viewCategory}>
          <View style={styles.category}>
            <Image
              source={require('../assets/images/record.png')}
              style={styles.imgCategory}
            />
            <Text style={styles.txtCategory}>Record</Text>
          </View>
          <View style={styles.category}>
            <Image
              source={require('../assets/images/forum.png')}
              style={styles.imgCategory}
            />
            <Text style={styles.txtCategory}>Forum</Text>
          </View>
          <View style={styles.category}>
            <Image
              source={require('../assets/images/task.png')}
              style={styles.imgCategory}
            />
            <Text style={styles.txtCategory}>Task</Text>
          </View>
          <View style={styles.category}>
            <Image
              source={require('../assets/images/report.png')}
              style={styles.imgCategory}
            />
            <Text style={styles.txtCategory}>Report</Text>
          </View>
        </View>
        {/*view feature */}
        <View style={styles.viewFeature}>
          {RenderItem('client', 'Client', '')}
          {RenderItem('reception', 'Reception', "Today's")}
          <View style={styles.line} />
          {RenderItem('notification', 'Notification', 'Unread 2')}
          {RenderItem('question', 'Question', '')}
          {RenderItem('knowledge', 'Knowledge base', '')}
          <View style={styles.line} />
          {RenderItem('message', 'Message', '')}
          {RenderItem('qAndF', 'Q&F', 'V4.0.2')}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white,
  },
  header: {
    marginTop: StatusBar.currentHeight + w / 25,
    flexDirection: 'row',
    marginHorizontal: w / 16.6667,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: w / 16.6667,
  },
  dotRed: {
    position: 'absolute',
    right: -w / 78.544,
    top: -w / 196.36,
    width: w / 49.09,
    height: w / 49.09,
    borderRadius: w / 98.18,
    backgroundColor: Colors.red,
  },
  viewNamAndAvatar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: w / 16.6667,
  },
  viewNameAndManager: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  txtName: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.txtBlack,
    letterSpacing: 2,
  },
  viewManager: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconManager: {
    width: w / 14.286,
    height: w / 14.286,
    borderRadius: w / (14.268 * 2),
    backgroundColor: Colors.blue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTextManager: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -w / 78.544,
    zIndex: -10,
    borderTopRightRadius: w / 26.18,
    borderBottomRightRadius: w / 26.18,
    paddingRight: w / 196.36,
  },
  txtManager: {
    marginLeft: w / 33.333,
    marginRight: w / 98.18,
    color: Colors.white,
    fontSize: 11,
    marginVertical: w / 392.72,
    marginBottom: w / 131,
  },
  viewAvatar: {
    width: w / 5.2632,
    height: w / 5.2632,
    overflow: 'hidden',
    borderRadius: w / (5.2632 * 2),
  },
  avatar: {
    width: w / 5.2632,
    height: w / 5.2632,
  },
  viewCategory: {
    marginVertical: w / 16.6667,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  category: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgCategory: {
    height: w / 12.5,
    width: w / 11.111,
  },
  txtCategory: {
    marginTop: w / 50,
    color: Colors.txtGray,
  },
  viewFeature: {
    flexDirection: 'column',
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
  },
  feature: {
    marginHorizontal: w / 16.667,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: w / 16.667,
  },
  imgAndName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFeature: {
    width: w / 16.667,
    height: w / 16.667,
  },
  txtNameFeature: {
    marginLeft: w / 16.667,
    fontSize: 17,
    fontWeight: '700',
    color: Colors.txtBlack,
    letterSpacing: 1.5,
  },
  viewMore: {
    flexDirection: 'row',
  },
  detail: {
    fontSize: 16,
    color: Colors.txtGray,
    marginRight: w / 25,
  },
  line: {
    height: 1,
    backgroundColor: Colors.grey,
    marginLeft: w / 5.5556,
    marginTop: w / 16.667,
  },
});
