import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import './index.module.scss';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    );
  }
}
