import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import {Dht11,Ssd1306,Gpio} from '../../taroiot'
import './index.scss'

export default function Index() {
    return (
      <View className='index'>
        <Text>Hello!</Text>
        <Dht11 />
        <Ssd1306 />
        <Gpio pin={3} type={'out'} value={1} />
      </View>
    )
}
