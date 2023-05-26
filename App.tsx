/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // useColorScheme,
  View,
} from 'react-native';
import TopWaveContainer from './app/components/sections/TopWaveContainer';
import AppLayout from './app/components/layout/AppLayout';
import BrandListContainer from './app/components/sections/BrandListContainer';
import OffersListContainer from './app/components/sections/OffersListContainer';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <>
      <AppLayout>
        <View style={{height: 90, minHeight: '30%'}}>
          <TopWaveContainer />
        </View>
        <View style={{height: 'auto', width: '100%'}}>
          <BrandListContainer />
        </View>
        <View
          style={{
            height: 'auto',
            minHeight: 500,
            width: '100%',
            paddingHorizontal: 22,
            paddingTop: 19,
          }}>
          <OffersListContainer />
        </View>
      </AppLayout>
    </>
  );
}

export default App;
