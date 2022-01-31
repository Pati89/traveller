import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Container, Heading, VStack } from '@chakra-ui/react'
import { Cards } from './components/Cards'
import { Form } from './components/Form'
import type { City } from './types'
import { fetchCities, fetchCity, toggleCity } from './helpers/fetchData'

export const Home: FC = () => {
  const [cities, setCities] = useState([])
  const [input, setInput] = useState('')

  //We can add a loader here when fetching the data
  useEffect(() => {
    const getCities = async () => {
      const citiesFromServer = await fetchCities()
      setCities(citiesFromServer)
    }

    getCities()
  }, [])

  const capitalizeInputValue = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

  const handleInputChange = e => setInput(capitalizeInputValue(e.target.value))

  const handleSubmit = async e => {
    e.preventDefault()
    const city = cities.find((item: { name: string }) => item.name === input)

    const cityId = city?.id.toString()

    const getCity = async () => {
      const cityFromServer = await fetchCity(cityId)
      setCities([cityFromServer])
    }

    getCity()
  }

  return (
    <VStack spacing="8">
      <Heading as="h1">Smart traveller</Heading>
      <Container maxW="container.md">
        <Form onSubmit={handleSubmit} input={input} onChange={handleInputChange} />
      </Container>
      <Cards
        cities={cities}
        toggleVisited={(city: City) => toggleCity(city.id, 'visited', setCities, cities)}
        toggleFavorites={(city: City) => toggleCity(city.id, 'favorities', setCities, cities)}
      />
    </VStack>
  )
}
