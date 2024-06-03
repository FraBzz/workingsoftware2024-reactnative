import React, { useRef } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { WEB_VIEW_URL } from '../config/constants';
import { styles } from './HomeScreen.styles';

const HomeScreen = () => {
  const webviewRef = useRef(null);

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        style={{ flex: 1 }}
        source={{ uri: WEB_VIEW_URL }}
      />
    </View>
  );
}

export default HomeScreen;