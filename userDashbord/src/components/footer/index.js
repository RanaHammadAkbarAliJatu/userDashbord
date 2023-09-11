import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FooterIcon, FooterWapper } from './../../styles/common.styled';
const Notification = require('./../../assets/Notification.png');
export default function FooterApp() {
  const [isFooter, setFooter] = useState(0);
  return (
    <FooterWapper>
      <TouchableOpacity
        onPress={() => {
          setFooter(1);
        }}>
        <FooterIcon top={isFooter === 1} source={Notification} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFooter(2);
        }}>
        <FooterIcon top={isFooter === 2} source={Notification} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setFooter(3);
        }}>
        <FooterIcon top={isFooter === 3} source={Notification} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setFooter(4);
        }}>
        <FooterIcon top={isFooter === 4} source={Notification} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setFooter(5);
        }}>
        <FooterIcon top={isFooter === 5} source={Notification} />
      </TouchableOpacity>
    </FooterWapper>
  );
}
