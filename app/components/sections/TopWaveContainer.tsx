/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import TopOffer from '../modules/TopOffer';

const TopWaveContainer = () => {
  return (
    <>
      <View style={styles.canvasContainer}>{/* <Text>dd</Text> */}</View>
      <View style={styles.bottomWave}>
        <Svg style={{bottom: 30}} viewBox="0 0 1440 320">
          <Path
            fill="#072040"
            fill-opacity="1"
            d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          />
        </Svg>
        <TopOffer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  canvasContainer: {
    width: '100%',
    height: '36%',
    backgroundColor: '#072040',
  },
  bottomWave: {
    width: '100%',
    height: '70%',
    position: 'relative',
  },
});

export default TopWaveContainer;
