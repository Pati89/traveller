import type { City } from '../types'

// Fetch Cities
export const fetchCities = async () => {
  try {
    const res = await fetch('http://localhost:4000/rest/cities')
    const data = await res.json()

    return data.cities
  } catch (e) {
    console.log(e)
  }
}

// Fetch Visited Cities
export const fetchVisitedCities = async () => {
  try {
    const res = await fetch('http://localhost:4000/rest/cities?visited=true')
    const data = await res.json()

    return data.cities
  } catch (e) {
    console.log(e)
  }
}

// Fetch Wishlisted Cities
export const fetchWishlistedCities = async () => {
  try {
    const res = await fetch('http://localhost:4000/rest/cities?wishlist=true')
    const data = await res.json()

    return data.cities
  } catch (e) {
    console.log(e)
  }
}

// Fetch City
export const fetchCity = async (cityId: string) => {
  try {
    const res = await fetch(`http://localhost:4000/rest/cities/${cityId}`)
    const data = await res.json()

    return data
  } catch (e) {
    console.log(e)
  }
}

// Update City
export const toggleCity = async (cityId: string, task: string, setCities: (value: string) => void, cities: City[]) => {
  const taskToToggle = await fetchCity(cityId)
  const updTask =
    task === 'visited'
      ? { ...taskToToggle, visited: !taskToToggle.visited }
      : { ...taskToToggle, wishlist: !taskToToggle.wishlist }

  const res = await fetch(`http://localhost:4000/rest/cities/${cityId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updTask),
  })

  const data = await res.json()

  setCities(
    cities.map((city: City) =>
      city.id === cityId ? { ...city, visited: data.visited, wishlist: data.wishlist } : city
    )
  )
}
