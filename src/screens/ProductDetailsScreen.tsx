import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type ProductDetailsNavigationProp = NativeStackNavigationProp<any>;
type ProductDetailsRouteProp = RouteProp<any, any>;

interface ProductDetailsScreenProps {
  route: ProductDetailsRouteProp;
  navigation: ProductDetailsNavigationProp;
}

export default function ProductDetailsScreen({ route, navigation }: ProductDetailsScreenProps) {
  const { product } = route.params || {};
  const [quantity, setQuantity] = useState(1);
  const ORDER_STAGE = 'Shipped';
  const REVIEWS = [
    {
        id: 1,
        name: 'Alex Johnson',
        text: 'Super comfortable and stylish. Loved the quality!',
        avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
        id: 2,
        name: 'Rahul Kumar',
        text: 'Worth the price. Delivery was quick.',
        avatar: 'https://i.pravatar.cc/150?img=32',
    },
    {
        id: 3,
        name: 'Sophia Lee',
        text: 'Perfect fit and looks amazing.',
        avatar: 'https://i.pravatar.cc/150?img=47',
    },
    ];


  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(40);

  const COLORS = ['#000', '#2F4F4F', '#8B4513'];
  const SIZES = [35, 36, 37, 38, 39, 40, 41, 42, 43];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                source={require('../assets/icons/angle-left.png')}
                style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Men’s Shoes</Text>
          <TouchableOpacity>
            <Image
                source={require('../assets/icons/heart.png')}
                style={styles.heartIcon}
            />
            </TouchableOpacity>

        </View>

        {/* IMAGE */}
        <View style={styles.imageWrapper}>
          <Image source={product.image} style={styles.image} resizeMode="contain" />
        </View>

        {/* DETAILS */}
        <View style={styles.card}>
          <Text style={styles.name}>{product.name}</Text>
            <View style={styles.ratingRow}>
                <Text style={styles.ratingText}>⭐ 4.6</Text>
                <Text style={styles.reviewCount}>(1,248 reviews)</Text>
            </View>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            Just when you thought you'd seen it all, this shoe delivers comfort,
            durability and style for everyday performance.
            <Text style={styles.seeMore}> See More</Text>
          </Text>

          {/* COLOR */}
          <Text style={styles.sectionTitle}>Color</Text>
          <View style={styles.row}>
            {COLORS.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorDot,
                  {
                    backgroundColor: color,
                    borderWidth: selectedColor === index ? 2 : 0,
                  },
                ]}
                onPress={() => setSelectedColor(index)}
              />
            ))}
          </View>

          {/* SIZE */}
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.row}>
            {SIZES.map(size => (
              <TouchableOpacity
                key={size}
                style={[
                  styles.sizeBox,
                  selectedSize === size && styles.sizeActive,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text
                  style={[
                    styles.sizeText,
                    selectedSize === size && styles.sizeTextActive,
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.sectionTitle}>Quantity</Text>

        <View style={styles.qtyRow}>
            <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => quantity > 1 && setQuantity(quantity - 1)}
            >
                <Text style={styles.qtyText}>−</Text>
            </TouchableOpacity>

            <Text style={styles.qtyNumber}>{quantity}</Text>

            <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => setQuantity(quantity + 1)}
            >
                <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
        </View>

          {/* PRICE & BUTTON */}
          <View style={styles.footer}>
            <Text style={styles.price}>{product.price}</Text>
            <TouchableOpacity style={styles.buyBtn}>
              <Text style={styles.buyText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Order Status</Text>

        <View style={styles.statusRow}>
        {['Ordered', 'Packed', 'Shipped', 'Delivered'].map(stage => (
            <View key={stage} style={styles.statusItem}>
            <View
                style={[
                styles.statusDot,
                stage === ORDER_STAGE && styles.statusActive,
                ]}
            />
            <Text
                style={[
                styles.statusText,
                stage === ORDER_STAGE && styles.statusTextActive,
                ]}
            >
                {stage}
            </Text>
            </View>
        ))}
        </View>
        <Text style={styles.sectionTitle}>Customer Reviews</Text>

        {REVIEWS.map(review => (
        <View key={review.id} style={styles.reviewCard}>
            <Image
            source={{ uri: review.avatar }}
            style={styles.reviewAvatar}
            />

            <View style={styles.reviewContent}>
      <Text style={styles.reviewName}>{review.name}</Text>
      <Text style={styles.reviewText}>{review.text}</Text>
    </View>
  </View>
))}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

    backIcon: {
        width: 22,
        height: 22,
        tintColor: '#000', // optional
        },

    heartIcon: {
        width: 22,
        height: 22,
        tintColor: '#FF7A00', // optional
    },

  headerTitle: { fontSize: 18, fontWeight: '600', color: '#fffefdff' },

  imageWrapper: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '80%',
    height: 200,
  },

  card: {
    backgroundColor: '#f6ebebff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 14,
  },

  description: {
    fontSize: 14,
    color: '#777',
    marginTop: 6,
  },
  seeMore: {
    color: '#FF7A00',
    fontWeight: '600',
  },

  row: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },

  colorDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 12,
    borderColor: '#FF7A00',
  },

  sizeBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 8,
  },
  sizeActive: {
    backgroundColor: '#FF7A00',
  },
  sizeText: {
    fontSize: 14,
    color: '#555',
  },
  sizeTextActive: {
    color: '#fff',
    fontWeight: '600',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  price: {
    fontSize: 26,
    fontWeight: '700',
  },
  buyBtn: {
    backgroundColor: '#FF7A00',
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 14,
  },
  buyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    },
    ratingText: {
        fontSize: 16,
        fontWeight: '600',
    },
    reviewCount: {
        marginLeft: 8,
        color: '#777',
    },
    qtyRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    qtyBtn: {
        width: 36,
        height: 36,
        borderRadius: 8,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    qtyText: {
        fontSize: 18,
        fontWeight: '700',
    },
    qtyNumber: {
        marginHorizontal: 16,
        fontSize: 16,
        fontWeight: '600',
    },
    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,    
    },
    statusItem: {
        alignItems: 'center',
        flex: 1,
    },
    statusDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginBottom: 6,
    },
    statusActive: {
        backgroundColor: '#FF7A00',
    },
    statusText: {
        fontSize: 12,
        color: '#aaa',
    },
    statusTextActive: {
        color: '#FF7A00',
        fontWeight: '600',
    },
    reviewCard: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  padding: 12,
  borderRadius: 12,
  marginTop: 12,
  alignItems: 'center',
},

reviewAvatar: {
  width: 42,
  height: 42,
  borderRadius: 21,
  marginRight: 12,
},

reviewContent: {
  flex: 1,
},

reviewName: {
  fontWeight: '600',
  fontSize: 14,
  marginBottom: 4,
},

reviewText: {
  color: '#555',
  fontSize: 13,
}
});
