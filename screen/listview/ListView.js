import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, Image} from 'react-native';
import axios from 'axios';
import {COLORS, SHADOW, SIZES} from '../../constants';

const skip = 10;

const ListView = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);

  const onRefresh = async () => {
    setRefresh(true);
    setPage(1);
    await onFetchThumbnail();
    setRefresh(false);
  };

  const onLoadMore = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_limit=${skip}&_start=${
          page * skip
        }`,
      );

      setData([...data, ...res.data]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const onFetchThumbnail = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_limit=${skip}&_start=0`,
      );

      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await onFetchThumbnail();
    });

    return unsubscribe;
  }, []);

  return (
    <View style={{backgroundColor: COLORS.backgroundColor, flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                {
                  flexDirection: 'row',
                  backgroundColor: COLORS.backgroundColor,
                  alignItems: 'center',
                  borderRadius: 10,
                },
                SHADOW.default,
              ]}>
              <Image
                source={{uri: item.thumbnailUrl}}
                style={{
                  width: 100,
                  height: 100,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  marginRight: 10,
                }}
              />
              <View>
                <Text style={{width: SIZES.width - 160}}>id: {item.id}</Text>
                <Text style={{width: SIZES.width - 160}}>
                  title: {item.title}
                </Text>
              </View>
            </View>
          );
        }}
        contentContainerStyle={{padding: 20}}
        ItemSeparatorComponent={() => <View style={{margin: 10}} />}
        ListFooterComponent={() => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
            }}>
            {loading && (
              <View style={{marginVertical: 20}}>
                <ActivityIndicator color={COLORS.primary} size={30} />
              </View>
            )}
          </View>
        )}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.5}
        onRefresh={onRefresh}
        refreshing={refresh}
      />
    </View>
  );
};

export default ListView;
