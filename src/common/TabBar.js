import React, {Component} from 'react';
import {StyleSheet, View, Image, Platform} from 'react-native';


import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';
import Picker from 'react-native-picker'


import User from '../component/pages/user/User';
import Home from '../component/pages/home/Home';

const yw = require('../res/home_icon.png');
const yw_select = require('../res/home_icon_selected.png');

const user = require('../res/my_icon.png');
const user_select = require('../res/my_icon_selected.png');

class TabBar extends Component {
    constructor(props){
        super(props);
        this.state={
            isLogin:true
        }
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const  {navigate} =this.props.navigation;
        return (
            <View></View>
        );
    }

}
 const MainScreenNavigator = TabNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused}) => (

                    <Image
                        source={focused ? yw_select : yw}
                        style={styles.icon}
                    />
                ),
            },
        },
        User: {
            screen: User,
            navigationOptions: {
                tabBarLabel: '我的',
                style:{paddingLeft:100},
                tabBarIcon: ({focused}) => (
                    <Image
                        source={focused ? user_select : user}
                        style={styles.icon}
                    />
                ),
            },
        },
    }, {
        animationEnabled: false, // 切换页面时不显示动画
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: false, // 禁止左右滑动
        backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
        initialRouteName:'Home',
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#c10230', // 文字和图片选中颜色
            inactiveTintColor: '#A9A9B0', // 文字和图片默认颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
            style: {
                backgroundColor: '#fff', // TabBar 背景色
                justifyContent: 'center',
                ...Platform.select({
                    ios: {
                        /* 注意 TODO: 因为 React-Navigation版本过低 ,ipXR 和 ipXMAX 需要适配
                        如果升级到React-Navigation 3.x 则不需要做此适配 */
                        height: 49
                    },
                    android: {
                        height:63
                    },
                }),
            },
            labelStyle: {
                ...Platform.select({
                    ios: {
                        fontSize:12,
                        ...iphoneTabbarAdapts
                    },
                    android: {
                        fontSize:14
                    },
                }),
            },
        },
    });



var styles = StyleSheet.create({
    icon: {
        ...Platform.select({
            ios: {
                width: 20,
                height: 20
            },
            android: {
                width: 25,
                height: 25,
            },
        }),
        resizeMode: 'contain'
    }
});
