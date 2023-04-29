export const fetchMock = async () => {
    const response = await fetch('/api/mock')
    const data = await response.json()
    return data
}