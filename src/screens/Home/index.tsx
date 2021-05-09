import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Header,
  TextField,
  Content,
  Button,
  Card,
  Title,
  Description,
} from './styles';

interface Data {
  id: number;
  title: string;
  body: string;
}

function Home() {
  const [data, setData] = useState<Data[]>([]);
  const [originalData, setOriginalData] = useState<Data[]>([]);

  useEffect(() => {
    api.get('/posts').then(res => {
      setData(res.data);
      setOriginalData(res.data);
    });
  }, []);

  const renderItem = ({ item }: { item: Data }) => {
    return (
      <Button onPress={() => console.log('Pressed')}>
        <Card style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
        }}>
          <Title numberOfLines={1}>{item.title}</Title>
          <Description numberOfLines={4}>{item.body}</Description>
        </Card>
      </Button >
    );
  };

  function search(s: string) {
    setData(originalData.filter((data) => {
      return (
        data.title.includes(s.toLowerCase())
        || data.body.includes(s.toLowerCase())
      );
    }));
  }

  return (
    <Container>
      <Header>
        {/* eslint-disable-next-line prettier/prettier */}
        <TextField
          placeholder="Pesquise aqui..."
          placeholderTextColor="#aaa"
          onChangeText={s => search(s)}
        />
      </Header>

      <Content>
        <FlatList
          data={data}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
        />
      </Content>
    </Container>
  );
}

export default Home;
