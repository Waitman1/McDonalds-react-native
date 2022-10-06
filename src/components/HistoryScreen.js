import React from 'react';
import { ScrollView, Text } from 'react-native';
import HistoryScreenCard from './HistoryScreenCard';

const HistoryScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 20,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <HistoryScreenCard
        imageUrl="https://macdonaldsi.ru/img/menu/mini/Big-Teysti.png"
        name="МакКомбо"
      />
      <HistoryScreenCard
        imageUrl="https://cs8.pikabu.ru/post_img/2017/11/30/10/151205920014157113.png"
        name="Бургеры и ..."
      />
      <HistoryScreenCard
        imageUrl="https://mcdonalds-ru.ru/wp-content/uploads/CHiken-MakNaggets-6-sht.-MakKombo-Bolshoj.png"
        name="Хэппи Милл"
      />
      <HistoryScreenCard
        imageUrl="https://macdonaldsi.ru/img/menu/mini/Big-Teysti.png"
        name="Десерты"
      />
      <HistoryScreenCard
        imageUrl="https://igrushkimak.ru/wp-content/uploads/2020/11/1-koka-kola-04l.-65-rub.png"
        name="Напитки"
      />
    </ScrollView>
  );
};

export default HistoryScreen;
