import React from 'react';
import {FlatList, Text, View, StyleSheet, Image} from 'react-native';

export default function App() {
  const data = [
    {
      id: 1,
      name: 'Gambar1',
      image:
        'https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/378a51587988460f9b45bfa3188e4fe3~tplv-tej9nj120t-origin.webp',
    },
    {
      id: 2,
      name: 'Gambar2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtB899-03AIMvMERtEZjkMJZ6QCs-eBhcJgulANsBoVQ&s',
    },
    {
      id: 3,
      name: 'Gambar3',
      image:
        'https://asset.kompas.com/crops/lEsvZBdbT7YtPgkqOYd1LxirPts=/0x0:780x520/750x500/data/photo/2019/07/12/2361846511.jpg ',
    },
    {
      id: 4,
      name: 'Gambar4',
      image:
        'https://e7.pngegg.com/pngimages/447/92/png-clipart-drawing-skull-art-easy-skull-drawings-pencil-face.png',
    },
    {
      id: 5,
      name: 'Gambar5',
      image:
        'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/106/MTA-159216586/no-brand_no-brand_full01.jpg',
    },
    {
      id: 6,
      name: 'Gambar6',
      image:
        'https://e1.pxfuel.com/desktop-wallpaper/773/256/desktop-wallpaper-backgrounds-keren-background-keren.jpg ',
    },
    {
      id: 7,
      name: 'Gambar7',
      image:
        'https://www.akseleran.co.id/blog/wp-content/uploads/2022/10/download-1.png',
    },
    {
      id: 8,
      name: 'Gambar8',
      image:
        'https://i.pinimg.com/736x/22/4b/73/224b7368ae6a1eab4828aa20ce57600a.jpg',
    },
    {
      id: 9,
      name: 'Gambar9',
      image:
        'https://e7.pngegg.com/pngimages/804/655/png-clipart-blue-lion-illustration-drawing-art-cool-designs-symmetry-illustrator-thumbnail.png',
    },
    {
      id: 10,
      name: 'Gambar10',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-i7rJJ4WKe9RQ_aRbKCD_tkfxyPUynVkA7Cf4Qspckg&s',
    },
    {
      id: 11,
      name: 'Gambar11',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGzKmqmPmULRsYXAStlNfh4V8pwPZE9TN0yug_RUZ1Q&s',
    },
    {
      id: 12,
      name: 'Gambar12',
      image:
        'https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oIEBABbBLOlQfCIAkDDKAIJeQYUtEgFgAHC9op~tplv-tej9nj120t-origin.webp',
    },
    {
      id: 13,
      name: 'Gambar13',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4NQt5kW8AUI8HEI__4Ct1OeJIh6nnyItGKGuClwDYA&s',
    },
    {
      id: 14,
      name: 'Gambar14',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGaG3I3fHP4qh4HEbR6zHEINX3ccj5nLCSamBzYVg0-Q&s',
    },
    {
      id: 15,
      name: 'Gambar15',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTD_e8xCfBMksIdFcgV0oRbbqppLHrJOkpqISt5Rapw&s',
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: {id: number; name: string; image: string};
  }) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.cardText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%', // Adjust card width to fit 2 columns
    // Adding shadow for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // Adding elevation for Android
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 20,
    marginTop: 10,
  },
});
