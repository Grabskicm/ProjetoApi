import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import {FlatList, SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import Header from '../components/Header';
import PokemonList from '../components/PokemonList';
import CardInfo from '../components/CardInfo';

type ListItemProps = {
  dataCountry: {
    name:{
      common: string;
    }
    capital:string[];

    flags:{
      png:string;
    }
    languages:any;

    region:string;
  }
};

const ListItem = ({dataCountry}: ListItemProps) => {
  return (
    <View>
      <CardInfo image={dataCountry.flags.png} name={dataCountry.name.common} language={dataCountry.languages[Object.keys(dataCountry.languages)[0]]} region={dataCountry.region} capital={dataCountry.capital} />
    </View>
  )
}

const Home = ({route}: any) => {
  const [country, setCounty] = useState();
  const getCounty = useCallback(async () => {
      try{
          const {data} = await axios.get('https://restcountries.com/v3.1/all')
          setCounty(data)
      }catch(error){

      }
  },[])
  useEffect(()=>{
      getCounty();
  },[])
  return (
      <SafeAreaView>
          <FlatList data={country} renderItem={({item}) => <ListItem dataCountry={item}/>}></FlatList>
      </SafeAreaView>
      
  );
}

export default Home;
