import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import OrderScreen from '../screens/OrderScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BlankScreen from '../screens/BlankScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

// CUSTOM TAB BAR
function MyTabBar({state, descriptors, navigation}) {
  // icon tab bar
  const Icon = (name, focused) => {
    if (name === 'Home') {
      return (
        <Feather
          name="home"
          size={23}
          color={focused ? Colors.blue : Colors.gray}
        />
      );
    } else if (name === 'Search') {
      return (
        <SimpleLineIcons
          name="bag"
          size={21}
          color={focused ? Colors.blue : Colors.gray}
        />
      );
    } else if (name === 'Add') {
      return (
        <View style={styles.viewBtnAdd}>
          <LinearGradient
            colors={['#8BA6FE', '#7A99FD', '#585FEE']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.bgBtnAdd}>
            <Text style={styles.plus}>+</Text>
          </LinearGradient>
        </View>
      );
    } else if (name === 'Order') {
      return (
        <AntDesign
          name="minussquareo"
          size={22}
          color={focused ? Colors.blue : Colors.gray}
        />
      );
    } else if (name === 'Profile') {
      return (
        <FontAwesome
          name="user-o"
          size={22}
          color={focused ? Colors.blue : Colors.gray}
        />
      );
    }
  };
  return (
    <View style={styles.mainTabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.mTabBar}>
            <View style={styles.tabBar}>
              <View>{Icon(label, isFocused)}</View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      tabBar={props => <MyTabBar {...props} />}
      tabBarOptions={{
        showLabel: false,
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Home" component={BlankScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Add" component={BlankScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  viewBtnAdd: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgBtnAdd: {
    backgroundColor: Colors.blue,
    height: w / 7.8544,
    width: w / 7.8544,
    borderRadius: w / (7.8544 * 2),
    elevation: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    position: 'absolute',
    color: Colors.white,
    fontSize: 28,
  },
  mainTabBar: {
    flexDirection: 'row',
    height: h / 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    elevation: 8,
  },
  mTabBar: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyTabs;
