import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Linking,
  Alert,
} from 'react-native';
import { useTheme } from '../shared/theme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

// Import SVG icons
import PirateIcon from '../assets/icons/avatar.svg';
import VifiIcon from '../assets/icons/vifi-icon.svg';
import VifiIconDark from '../assets/icons/vifidark-icon.svg';
import LinkedInIcon from '../assets/icons/linkedin-icon.svg';
import LinkedInIconDark from '../assets/icons/linkedin-icon-dark.svg';
import GithubIcon from '../assets/icons/github-icon.svg';
import GithubIconDark from '../assets/icons/github-icon-dark.svg';
import PhoneIcon from '../assets/icons/phone-icon.svg';
import PhoneIconDark from '../assets/icons/phone-icon-dark.svg';
import InstagramIcon from '../assets/icons/instagram-icon.svg';
import InstagramIconDark from '../assets/icons/instagram-icon-dark.svg';
import WhatsappIcon from '../assets/icons/whatsapp-icon.svg';
import WhatsappIconDark from '../assets/icons/whatsapp-icon-dark.svg';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const isDark = theme.background === '#000000';

  const handleVifiIconPress = () => {
    navigation.navigate('Brands');
  };

  const handleSocialMediaPress = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Cannot open this link');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to open link');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar 
        barStyle={theme.background === '#000000' ? 'light-content' : 'dark-content'} 
        backgroundColor={theme.background}
        translucent={false}
      />
      <View style={styles.content}>
        {/* Welcome Text */}
        <Text style={[styles.welcomeText, { color: theme.textPrimary }]}>
          Welcome!
        </Text>
        
        {/* Subtitle Text */}
        <Text style={[styles.subtitleText, { color: theme.textSecondary }]}>
          Select either to check out the concepts.
        </Text>
        
        {/* Icons Container */}
        <View style={styles.iconsContainer}>
          {/* Left Icon - VifiIcon for light theme, VifiIconDark for dark theme - Clickable */}
          <TouchableOpacity 
            style={styles.iconWrapper}
            onPress={handleVifiIconPress}
            activeOpacity={0.7}
          >
            {isDark ? (
              <VifiIconDark width={80} height={80} />
            ) : (
              <VifiIcon width={80} height={80} />
            )}
          </TouchableOpacity>
          
          {/* Right Icon - PirateIcon for both themes */}
          <View style={styles.iconWrapper}>
            <PirateIcon width={80} height={80} />
          </View>
        </View>

        {/* Dashed Separator with "or" */}
        <View style={styles.separatorContainer}>
          <View style={[styles.dashedLine, { borderColor: theme.textSecondary }]} />
          <Text style={[styles.orText, { color: theme.textSecondary }]}>or</Text>
          <View style={[styles.dashedLine, { borderColor: theme.textSecondary }]} />
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <Text style={[styles.contactTitle, { color: theme.textSecondary }]}>
            Reach out to me on
          </Text>
          
          <View style={styles.socialIconsContainer}>
            <TouchableOpacity 
              style={styles.socialIconItem}
              onPress={() => handleSocialMediaPress('https://www.linkedin.com/in/ineekhil/')}
              activeOpacity={0.7}
            >
              {isDark ? (
                <LinkedInIconDark width={64} height={48} />
              ) : (
                <LinkedInIcon width={64} height={48} />
              )}
              <Text style={[styles.socialLabel, { color: theme.textSecondary }]}>LinkedIn</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.socialIconItem}
              onPress={() => handleSocialMediaPress('https://github.com/ineekhil')}
              activeOpacity={0.7}
            >
              {isDark ? (
                <GithubIconDark width={65} height={48} />
              ) : (
                <GithubIcon width={65} height={48} />
              )}
              <Text style={[styles.socialLabel, { color: theme.textSecondary }]}>Github</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.socialIconItem}
              onPress={() => handleSocialMediaPress('tel:7666420421')}
              activeOpacity={0.7}
            >
              {isDark ? (
                <PhoneIconDark width={65} height={48} />
              ) : (
                <PhoneIcon width={65} height={48} />
              )}
              <Text style={[styles.socialLabel, { color: theme.textSecondary }]}>Phone</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.socialIconItem}
              onPress={() => handleSocialMediaPress('https://www.instagram.com/i.neekhil')}
              activeOpacity={0.7}
            >
              {isDark ? (
                <InstagramIconDark width={65} height={48} />
              ) : (
                <InstagramIcon width={65} height={48} />
              )}
              <Text style={[styles.socialLabel, { color: theme.textSecondary }]}>Instagram</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.socialIconItem}
              onPress={() => handleSocialMediaPress('https://wa.me/917666420421')}
              activeOpacity={0.7}
            >
              {isDark ? (
                <WhatsappIconDark width={65} height={48} />
              ) : (
                <WhatsappIcon width={65} height={48} />
              )}
              <Text style={[styles.socialLabel, { color: theme.textSecondary }]}>Whatsapp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'DMSerifDisplay-Regular',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 16,
    fontFamily: 'Nunito-VariableFont_wght',
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: '400',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 200,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
    width: '100%',
    maxWidth: 300,
  },
  dashedLine: {
    flex: 1,
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
  },
  orText: {
    fontSize: 14,
    fontFamily: 'Nunito-VariableFont_wght',
    marginHorizontal: 16,
    fontWeight: '400',
  },
  contactSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  contactTitle: {
    fontSize: 14,
    fontFamily: 'Nunito-VariableFont_wght',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '400',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 350,
  },
  socialIconItem: {
    alignItems: 'center',
    flex: 1,
  },
  socialLabel: {
    fontSize: 12,
    fontFamily: 'Nunito-VariableFont_wght',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '400',
  },
});

export default WelcomeScreen;
