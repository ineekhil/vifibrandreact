import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from './theme';
import Svg, { Path } from 'react-native-svg';

type Props = {
  width?: number;
  title?: string;
  time?: string;
  date?: string;
  location?: string;
  isNew?: boolean;
  brand?: string;
  isSmallCard?: boolean;
};

const TrendingTaskCard = ({ 
  width, 
  title = "Spotify Refresher",
  time = "07:30 PM",
  date = "Saturday, June 7 - 2 days from now",
  location = "Independence Brewing Co. - Powai",
  isNew = true,
  brand = "Spotify",
  isSmallCard = false
}: Props) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <View style={[styles.card, width ? { width } : null]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/vfturf.png')}
            style={styles.video}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.muteButton} onPress={toggleMute}>
            <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <Path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" fill="white"/>
            </Svg>
          </TouchableOpacity>
        </View>
        
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          
          <View style={styles.eventDetails}>
            <View style={styles.eventTimeRow}>
              <Svg width="18" height="18" viewBox="0 0 21 20" fill="none">
                <Path d="M10.6372 1.875C9.03024 1.875 7.45935 2.35152 6.1232 3.24431C4.78705 4.1371 3.74565 5.40605 3.13069 6.8907C2.51573 8.37535 2.35483 10.009 2.66833 11.5851C2.98184 13.1612 3.75567 14.6089 4.89197 15.7452C6.02827 16.8815 7.47601 17.6554 9.0521 17.9689C10.6282 18.2824 12.2619 18.1215 13.7465 17.5065C15.2312 16.8916 16.5001 15.8502 17.3929 14.514C18.2857 13.1779 18.7622 11.607 18.7622 10C18.7599 7.84581 17.9032 5.78051 16.3799 4.25727C14.8567 2.73403 12.7914 1.87727 10.6372 1.875ZM10.6372 16.875C9.27746 16.875 7.94825 16.4718 6.81767 15.7164C5.68708 14.9609 4.80589 13.8872 4.28554 12.6309C3.76519 11.3747 3.62904 9.99237 3.89431 8.65875C4.15959 7.32513 4.81437 6.10013 5.77585 5.13864C6.73734 4.17715 7.96235 3.52237 9.29596 3.2571C10.6296 2.99183 12.0119 3.12798 13.2682 3.64833C14.5244 4.16868 15.5981 5.04987 16.3536 6.18045C17.109 7.31104 17.5122 8.64025 17.5122 10C17.5101 11.8227 16.7852 13.5702 15.4963 14.8591C14.2074 16.1479 12.4599 16.8729 10.6372 16.875ZM15.6372 10C15.6372 10.1658 15.5714 10.3247 15.4542 10.4419C15.3369 10.5592 15.178 10.625 15.0122 10.625H12.1458L14.2044 12.6828C14.2625 12.7409 14.3085 12.8098 14.34 12.8857C14.3714 12.9616 14.3876 13.0429 14.3876 13.125C14.3876 13.2071 14.3714 13.2884 14.34 13.3643C14.3085 13.4402 14.2625 13.5091 14.2044 13.5672C14.1463 13.6253 14.0774 13.6713 14.0015 13.7027C13.9257 13.7342 13.8443 13.7503 13.7622 13.7503C13.6801 13.7503 13.5988 13.7342 13.5229 13.7027C13.447 13.6713 13.3781 13.6253 13.32 13.5672L10.195 10.4422C10.1075 10.3548 10.0479 10.2434 10.0238 10.1221C9.9996 10.0008 10.012 9.87502 10.0593 9.76076C10.1067 9.64649 10.1869 9.54884 10.2897 9.48017C10.3926 9.41151 10.5135 9.3749 10.6372 9.375H15.0122C15.178 9.375 15.3369 9.44085 15.4542 9.55806C15.5714 9.67527 15.6372 9.83424 15.6372 10Z" fill="#808080"/>
              </Svg>
              <Text style={styles.eventTimeText}>{time}</Text>
            </View>

            <View style={styles.eventDateRow}>
              <Svg width="18" height="18" viewBox="0 0 21 20" fill="none">
                <Path d="M16.8872 2.5H15.0122V1.875C15.0122 1.70924 14.9464 1.55027 14.8291 1.43306C14.7119 1.31585 14.553 1.25 14.3872 1.25C14.2214 1.25 14.0625 1.31585 13.9453 1.43306C13.8281 1.55027 13.7622 1.70924 13.7622 1.875V2.5H7.51221V1.875C7.51221 1.70924 7.44636 1.55027 7.32915 1.43306C7.21194 1.31585 7.05297 1.25 6.88721 1.25C6.72145 1.25 6.56248 1.31585 6.44527 1.43306C6.32806 1.55027 6.26221 1.70924 6.26221 1.875V2.5H4.38721C4.05569 2.5 3.73774 2.6317 3.50332 2.86612C3.2689 3.10054 3.13721 3.41848 3.13721 3.75V16.25C3.13721 16.5815 3.2689 16.8995 3.50332 17.1339C3.73774 17.3683 4.05569 17.5 4.38721 17.5H16.8872C17.2187 17.5 17.5367 17.3683 17.7711 17.1339C18.0055 16.8995 18.1372 16.5815 18.1372 16.25V3.75C18.1372 3.41848 18.0055 3.10054 17.7711 2.86612C17.5367 2.6317 17.2187 2.5 16.8872 2.5ZM6.26221 3.75V4.375C6.26221 4.54076 6.32806 4.69973 6.44527 4.81694C6.56248 4.93415 6.72145 5 6.88721 5C7.05297 5 7.21194 4.93415 7.32915 4.81694C7.44636 4.69973 7.51221 4.54076 7.51221 4.375V3.75H13.7622V4.375C13.7622 4.54076 13.8281 4.69973 13.9453 4.81694C14.0625 4.93415 14.2214 5 14.3872 5C14.553 5 14.7119 4.93415 14.8291 4.81694C14.9464 4.69973 15.0122 4.54076 15.0122 4.375V3.75H16.8872V6.25H4.38721V3.75H6.26221ZM16.8872 16.25H4.38721V7.5H16.8872V16.25Z" fill="#808080"/>
              </Svg>
              <Text style={styles.eventTimeText}>{date}</Text>
            </View>

            <View style={styles.eventLocationRow}>
              <Svg width="18" height="18" viewBox="0 0 21 20" fill="none">
                <Path d="M9.38721 6.25C9.38721 6.00277 9.46052 5.7611 9.59787 5.55554C9.73522 5.34998 9.93045 5.18976 10.1589 5.09515C10.3873 5.00054 10.6386 4.97579 10.8811 5.02402C11.1235 5.07225 11.3463 5.1913 11.5211 5.36612C11.6959 5.54093 11.815 5.76366 11.8632 6.00614C11.9114 6.24861 11.8867 6.49995 11.7921 6.72835C11.6974 6.95676 11.5372 7.15199 11.3317 7.28934C11.1261 7.42669 10.8844 7.5 10.6372 7.5C10.3057 7.5 9.98774 7.3683 9.75332 7.13388C9.5189 6.89946 9.38721 6.58152 9.38721 6.25ZM5.63721 6.25C5.63721 4.92392 6.16399 3.65215 7.10167 2.71447C8.03935 1.77678 9.31112 1.25 10.6372 1.25C11.9633 1.25 13.2351 1.77678 14.1727 2.71447C15.1104 3.65215 15.6372 4.92392 15.6372 6.25C15.6372 10.9336 11.1388 13.5578 10.9497 13.668C10.8553 13.722 10.7483 13.7504 10.6396 13.7504C10.5308 13.7504 10.4238 13.722 10.3294 13.668C10.1356 13.5578 5.63721 10.9375 5.63721 6.25ZM6.88721 6.25C6.88721 9.54688 9.68721 11.7352 10.6372 12.3828C11.5864 11.7359 14.3872 9.54688 14.3872 6.25C14.3872 5.25544 13.9921 4.30161 13.2889 3.59835C12.5856 2.89509 11.6318 2.5 10.6372 2.5C9.64265 2.5 8.68882 2.89509 7.98556 3.59835C7.2823 4.30161 6.88721 5.25544 6.88721 6.25ZM16.4786 11.5336C16.3248 11.4828 16.1572 11.4937 16.0113 11.564C15.8653 11.6343 15.7524 11.7585 15.6963 11.9105C15.6401 12.0625 15.6452 12.2303 15.7104 12.3786C15.7756 12.5269 15.8959 12.6441 16.0458 12.7055C17.3356 13.1828 18.1372 13.8219 18.1372 14.375C18.1372 15.4187 15.2841 16.875 10.6372 16.875C5.99033 16.875 3.13721 15.4187 3.13721 14.375C3.13721 13.8219 3.93877 13.1828 5.22861 12.7063C5.37854 12.6449 5.49879 12.5277 5.56399 12.3794C5.6292 12.2311 5.63428 12.0633 5.57815 11.9113C5.52202 11.7593 5.40908 11.6351 5.26313 11.5648C5.11718 11.4945 4.94963 11.4836 4.7958 11.5344C2.92002 12.2258 1.88721 13.2352 1.88721 14.375C1.88721 16.8109 6.3958 18.125 10.6372 18.125C14.8786 18.125 19.3872 16.8109 19.3872 14.375C19.3872 13.2352 18.3544 12.2258 16.4786 11.5336Z" fill="#999999"/>
              </Svg>
              <Text style={styles.locationText}>{location}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    boxSizing: "border-box" as any, // RN doesn't support this, safe to omit
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 0,
    gap: 8, // only works in RN 0.71+, otherwise use margin
    width: 320,
    height: 419,
    backgroundColor: "#FBFBFB",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
  },

  content: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
    width: 320,
    height: 419,
    flexGrow: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    gap: 8,
    width: 320,
    height: 277,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: "hidden", // ensures border radius clips background
    backgroundColor: "#000000", // Black background for video frame
    position: "relative",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  muteButton: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },

  titleWrapper: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 8,
    paddingHorizontal: 12,
    paddingBottom: 16,
    gap: 8,
    width: 320,
    height: 138,
  },

  title: {
    fontFamily: "DM Serif Text",
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.408,
    color: "#000000",
    fontWeight: "600",
  },

  eventDetails: {
    width: 296,
    height: 84,
    flexDirection: "column",
  },

  eventTimeRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    gap: 8,
    width: 296,
    height: 28,
  },

  eventTimeText: {
    fontFamily: "Nunito",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.408,
    color: "#808080",
  },

  eventDateRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    gap: 8,
    width: 296,
    height: 28,
  },

  eventLocationRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    gap: 8,
    width: 296,
    height: 28,
  },

  locationText: {
    fontFamily: "Nunito",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: -0.408,
    color: "#808080",
  },
});

export default TrendingTaskCard;


