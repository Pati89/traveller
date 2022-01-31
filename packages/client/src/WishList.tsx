import { useState, useEffect } from 'react'
import type { FC } from 'react'
import { VStack, Heading } from '@chakra-ui/react'
import { Cards } from './components/Cards'
import type { City } from './types'
import { fetchWishlistedCities, toggleCity } from './helpers/fetchData'

export const WishList: FC = () => {
  const [wishlistCities, setWishlistCities] = useState([])

  useEffect(() => {
    const getCities = async () => {
      const citiesFromServer = await fetchWishlistedCities()
      setWishlistCities(citiesFromServer)
    }

    getCities()
  }, [])

  const handleFavorites = (city: City) => {
    toggleCity(
      city.id,
      'favorities',
      setWishlistCities,
      wishlistCities.filter((item: City) => item.id !== city.id)
    )
  }

  return (
    <VStack spacing="8">
      <Heading as="h1">Wish list</Heading>
      <Cards
        cities={wishlistCities}
        toggleVisited={(city: City) => toggleCity(city.id, 'visited', setWishlistCities, wishlistCities)}
        toggleFavorites={handleFavorites}
      />
    </VStack>
  )
}
