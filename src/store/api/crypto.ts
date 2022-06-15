export const getPricing = async () => {
  try {
    const response = await fetch ('https://api.coinlore.net/api/tickers/')

  const result = await response.json()
  return result.data
  } catch (error) {
    console.log(error)
  }
  
}
