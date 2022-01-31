import type { FC } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Card } from './Card'
import type { City } from '../types'

type Cards = {
  cities: City[]
  toggleVisited: (city: City) => Promise<void>
  toggleFavorites: (city: City) => Promise<void>
}

export const Cards: FC<Cards> = ({ cities, toggleVisited, toggleFavorites }) => (
  <Grid templateColumns="repeat(4, 1fr)" gap={6} data-testid="cards">
    {cities.length !== 0
      ? cities.map((city: City) => (
          <GridItem w="100%" minW="250px" maxW="270px" h="100" key={city.id}>
            <Card
              updateVisited={() => toggleVisited(city)}
              updateFavorites={() => toggleFavorites(city)}
              title={city.name}
              country={city.country}
              visited={city.visited}
              favorite={city.wishlist}
            />
          </GridItem>
        ))
      : 'no items to show'}
  </Grid>
)
