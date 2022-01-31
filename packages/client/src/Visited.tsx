import { useState, useEffect } from 'react'
import type { FC } from 'react'
import { VStack, Heading } from '@chakra-ui/react'
import { Cards } from './components/Cards'
import type { City } from './types'
import { fetchVisitedCities, toggleCity } from './helpers/fetchData'

export const Visited: FC = () => {
  const [visitedCities, setVisitedCities] = useState([])

  useEffect(() => {
    const getCities = async () => {
      const citiesFromServer = await fetchVisitedCities()
      setVisitedCities(citiesFromServer)
    }

    getCities()
  }, [])

  const handleVisited = (city: City) => {
    toggleCity(
      city.id,
      'visited',
      setVisitedCities,
      visitedCities.filter((item: City) => item.id !== city.id)
    )
  }

  return (
    <VStack spacing="8">
      <Heading as="h1">Visited</Heading>

      <Cards
        cities={visitedCities}
        toggleVisited={handleVisited}
        toggleFavorites={(city: City) => toggleCity(city.id, 'favorities', setVisitedCities, visitedCities)}
      />
    </VStack>
  )
}
