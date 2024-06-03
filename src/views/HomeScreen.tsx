import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Platform, View } from 'react-native';
import { WebView } from 'react-native-webview';
import NavigationBar from '../components/NavigationBar';
import { WEB_VIEW_URL } from '../config/constants';
import { styles } from './HomeScreen.styles';

const HomeScreen = () => {
  const webviewRef = useRef(null);

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="dark-content" /> */}
      {Platform.OS === 'ios' ? (
        <StatusBar style="light" translucent={false} />
      ) : (
        <StatusBar style="light" backgroundColor='#000000'/>
      )}
      <WebView
        ref={webviewRef}
        style={{ flex: 1 }}
        source={{ uri: WEB_VIEW_URL }}
      />
      <NavigationBar
        onBack={() => webviewRef.current?.goBack()}
        onForward={() => webviewRef.current?.goForward()}
      />
    </View>
  );
}

export default HomeScreen;