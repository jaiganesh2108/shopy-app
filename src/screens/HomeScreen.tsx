import React, { useState, useRef } from 'react';
import {  View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal, Pressable, Animated, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const ICON_HEART = require('../assets/icons/heart.png');
const ICON_SEARCH = require('../assets/icons/search.png');
const ICON_CART = require('../assets/icons/shopping-cart.png');
const ICON_MENU = require('../assets/icons/menu-burger.png');

const SHOES = [
  { id: '1', 
    name: 'Nike Air Max', 
    price: '₹ 9,999', 
    image: require('../assets/lottie/download.jpeg') 
  },
  { id: '2', 
    name: 'Adidas Ultraboost', 
    price: '₹ 11,499', 
    image: require('../assets/lottie/images.jpeg') 
  },
  { id: '3', 
    name: 'Puma RS-X', 
    price: '₹ 8,499', 
    image: require('../assets/lottie/download (1).jpeg') 
  },
  { id: '4', 
    name: 'New Balance 574', 
    price: '₹ 8,999', 
    image: require('../assets/lottie/images (1).jpeg') 
  },
  { id: '5', 
    name: 'Bata', 
    price: '₹ 11,499', 
    image: require('../assets/lottie/images (2).jpeg') 
  },
  { id: '6', 
    name: 'Woodland', 
    price: '₹ 8,499', 
    image: require('../assets/lottie/images (3).jpeg') 
  },
  { id: '7', 
    name: 'Skechers', 
    price: '₹ 12,999', 
    image: require('../assets/lottie/download (3).jpeg') 
  },
  { id: '8', 
    name: 'Red Chief', 
    price: '₹ 10,999', 
    image: require('../assets/lottie/download (2).jpeg') 
  },
];

const BRANDS = ['All', 'Nike', 'Adidas', 'Puma', 'New Balance', 'Reebok', 'Asics'];

function ShoeCard({ item }) {
  const [liked, setLiked] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const toggleLike = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.3, duration: 120, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 120, useNativeDriver: true }),
    ]).start();
    setLiked(prev => !prev);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.likeBtn} onPress={toggleLike}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Image source={ICON_HEART} style={[styles.icon, { tintColor: liked ? '#e63946' : '#999' }]} />
        </Animated.View>
      </TouchableOpacity>

      <Image source={item.image} style={styles.shoeimg} resizeMode="contain" />
      <Text style={styles.shoeName} numberOfLines={1}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function HomeScreen() {
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const searchAnim = useRef(new Animated.Value(0)).current;

  const toggleSearch = () => {
    if (showSearch) {
      Animated.timing(searchAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => setShowSearch(false));
    } else {
      setShowSearch(true);
      Animated.timing(searchAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setShowProfile(true)}>
            <Image source={{ uri: 'https://i.pravatar.cc/161' }} style={styles.profileImage} />
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <View style={styles.searchWrapper}>
              {showSearch && (
                <Animated.View
                  style={[
                    styles.searchBox,
                    {
                      width: searchAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 180],
                      }),
                      opacity: searchAnim,
                    },
                  ]}
                >
                  <TextInput
                    placeholder="Search shoes..."
                    style={styles.searchInput}
                    autoFocus
                    onSubmitEditing={toggleSearch}
                  />
                </Animated.View>
              )}

              <TouchableOpacity onPress={toggleSearch} style={styles.iconBtn}>
                <Image source={ICON_SEARCH} style={styles.icon} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.iconBtn}>
              <Image source={ICON_CART} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowMenu(true)}>
              <Image source={ICON_MENU} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.heading}>Find Your Perfect Pair</Text>
        <Text style={styles.subHeading}>Top Shoe Brands</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.brandContainer}>
          {BRANDS.map(brand => (
            <TouchableOpacity key={brand} style={styles.brandChip}>
              <Text style={styles.brandText}>{brand}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.grid}>
          {SHOES.map(item => (
            <View key={item.id} style={styles.gridItem}>
              <ShoeCard item={item} />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* PROFILE MODAL */}
      <Modal transparent visible={showProfile} animationType="fade">
        <Pressable style={styles.overlay} onPress={() => setShowProfile(false)}>
          <View style={styles.profileCard}>
            <Image source={{ uri: 'https://i.pravatar.cc/161' }} style={styles.profileLarge} />
            <Text style={styles.profileName}>Bruce Wayne</Text>
            <Text style={styles.profileEmail}>bruce@wayneenterprises.com</Text>
          </View>
        </Pressable>
      </Modal>

      {/* MENU MODAL */}
      <Modal transparent visible={showMenu} animationType="fade">
        <Pressable style={styles.overlay} onPress={() => setShowMenu(false)}>
          <View style={styles.menuCard}>
            {['Settings', 'Saved', 'About', 'Logout'].map(item => (
              <TouchableOpacity key={item} style={styles.menuItem}>
                <Text style={styles.menuText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFA500', 
    padding: 16 
  },

  header: { 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  profileImage: { 
    width: 40, 
    height: 40, 
    borderRadius: 20 
  },
  headerRight: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },

  iconBtn: { 
    marginRight: 16 
  },

  icon: { 
    width: 22, 
    height: 22, 
    tintColor: '#000' 
  },

  heading: { 
    fontSize: 28, 
    fontWeight: '700', 
    marginBottom: 10 
  },

  subHeading: { 
    fontSize: 18, 
    fontWeight: '600', 
    marginBottom: 16, 
    color: '#555' 
  },

  card: {
    backgroundColor: '#f6ebebff',
    padding: 12,
    borderRadius: 12,
    height: 260,
    justifyContent: 'space-between',
  },

  likeBtn: { 
    position: 'absolute', 
    top: 12, 
    right: 12, 
    zIndex: 1 
  },

  shoeimg: { 
    height: 100, 
    width: '100%', 
    marginBottom: 12 
  },

  shoeName: { 
    fontSize: 16, 
    fontWeight: '600' 
  },

  price: { 
    fontSize: 16, 
    color: '#333' 
  },

  button: { 
    backgroundColor: '#000', 
    paddingVertical: 10, 
    borderRadius: 8 
  },

  buttonText: { 
    color: '#fff', 
    textAlign: 'center', 
    fontWeight: '600' 
  },

  brandContainer: { 
    paddingVertical: 8,
     marginBottom: 16 
    },

  brandChip: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  brandText: { fontSize: 14, 
    fontWeight: '600' 
  },

  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
  },

  gridItem: {
     width: '48%',
     marginBottom: 16 
    },

  searchWrapper: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginRight: 16 
  },

  searchBox: { 
    height: 36, 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    marginRight: 8, 
    justifyContent: 'center' 
  },

  searchInput: { 
    paddingHorizontal: 10, 
    fontSize: 14 
  },

  overlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.3)', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  profileCard: { 
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 16, 
    alignItems: 'center', 
    width: 260 
  },
  profileLarge: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    marginBottom: 12 
  },
  profileName: { 
    fontSize: 18, 
    fontWeight: '700' 
  },
  profileEmail: { 
    fontSize: 14, 
    color: '#555' 
  },

  menuCard: { 
    position: 'absolute', 
    top: 80, 
    right: 20, 
    backgroundColor: '#fff', 
    borderRadius: 12, 
    width: 160 
  },
  menuItem: { 
    padding: 12 
  },
  menuText: { 
    fontSize: 16 
  },
});
