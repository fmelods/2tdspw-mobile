import { Text, View } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const teams = {
  corinthians: {
    name: "Corinthians",
    players: ["1. Cassio", "2. Fagner", "3. Yuri Alberto", "4. Gil"]
  },
  barcelona: {
    name: "Barcelona",
    players: ["1. Ter Stegen", "2. Dest", "3. Piqué", "4. Sergio Busquets"]
  }
}

const FootballTeam = () => {
    const { team } = useLocalSearchParams ();

    const selectedTeam = teams[team];

  return (
    <View>
      <Text> {team} </Text>
      <Text className="text-center text-xl my-8">Barcelona</Text>
      <Text className="my-4 text-lg">Escalação</Text>
      <Text className="my-4 text-lg">{selectedTeam.players[0]}</Text>
      <Text className="my-4 text-lg">{selectedTeam.players[1]}</Text>
      <Text className="my-4 text-lg">{selectedTeam.players[2]}</Text>
      <Text className="my-4 text-lg">{selectedTeam.players[3]}</Text>
      <Link className="text-right nx-8 color-blue-600" href="/">Voltar</Link>
    </View>
  )
}

export default FootballTeam