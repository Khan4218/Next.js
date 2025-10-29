import axios from "axios"

const PIXABAY_API_URL = "https://pixabay.com/api/"
const API_KEY = process.env.NEXT_PUBLIC_PIXABAY_API_KEY // stored in .env.local

export async function getImages(query: string, perPage = 3): Promise<string[]> {
  try {
    const res = await axios.get(PIXABAY_API_URL, {
      params: {
        key: API_KEY,
        q: `${query} 3d render`,
        image_type: "photo",
        category: "3d",
        per_page: perPage,
        safesearch: true,
        orientation: "horizontal",
      },
    })

    return res.data.hits.map((img: any) => img.webformatURL)
  } catch (error) {
    console.error("Error fetching images from Pixabay:", error)
    return []
  }
}
