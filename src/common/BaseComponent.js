import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  Platform,
  BackHandler,
  TouchableOpacity,
} from 'react-native';

// 返回组件
export class BaseComponent extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
  }

  /**
   * 初始化了状态之后，在第一次绘制 render() 之前
   * （能够使用setState()来改变属性 有且只有一次）
   */
  componentWillMount() {
    //this.addEventListenerAndroid();
  }

  /**
   * 组件要被从界面上移除的时候，就会调用 componentWillUnmount()
   * （不能够使用setState()来改变属性 有且只有一次调用）
   */
  componentWillUnmount() {
    //this.removeEventListenerAndroid();
  }

  /***
   * 监听物理返回键
   * @private
   */
  /*addEventListenerAndroid() {
        if(Platform.OS === 'android'){
            BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
        }
    }*/

  /***
   * 删除监听物理返回键
   * @private
   */
  /*removeEventListenerAndroid() {
        if(Platform.OS === 'android'){
            BackHandler.removeEventListener('hardwareBackPress', this._onBackAndroid);
        }
    }*/

  /**
   * 物理键返回处理
   * @returns {boolean}
   * @private
   */
  /*_onBackAndroid = () => {
        //禁用返回键
        const {nav} = this.props.navigation;
        this._onBack_android(this.props.navigation);
        return true;
    }*/

  /***
   * 返回
   * @private
   */
  static onBack(navigator) {
    navigator.pop();
  }

  /***
   * 返回--android返回专用
   * @private
   */
  _onBack_android(navigator) {
    navigator.pop();
  }
}
