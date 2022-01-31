import type { FC } from 'react'
import { Box, Button, IconButton, Flex, Spacer } from '@chakra-ui/react'
import { BsHeartFill, BsHeart } from 'react-icons/bs'

type Card = {
  title: string
  country: string
  visited: boolean
  favorite: boolean
  updateVisited: () => void
  updateFavorites: () => void
}

export const Card: FC<Card> = ({ title, country, visited, favorite, updateVisited, updateFavorites }) => (
  <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" data-testid="card">
    <Box mt="1" fontWeight="semibold" as="h2" lineHeight="tight">
      {title}, {country}
    </Box>

    <Flex align="center">
      <Box p="4" display="flex" alignItems="baseline">
        <Button
          onClick={updateVisited}
          colorScheme="teal"
          size="sm"
          variant={visited ? 'solid' : 'outline'}
          data-testid="visited-button"
        >
          {visited ? 'Visited' : 'Not visited'}
        </Button>
      </Box>
      <Spacer />
      <Box p="4" display="flex" alignItems="baseline">
        <IconButton
          onClick={updateFavorites}
          colorScheme="teal"
          aria-label="Send email"
          icon={favorite ? <BsHeartFill /> : <BsHeart />}
          variant="ghost"
          data-testid="favorite-button"
        />
      </Box>
    </Flex>
  </Box>
)
