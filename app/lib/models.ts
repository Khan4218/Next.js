import modelsData from "../data/models.json"
import type { Model } from "../types"
import { GetModelsParams } from "../types"
import { getImages } from "@/app/lib/getImages"  // import the Pexels helper

export async function getModels({ category }: GetModelsParams = {}): Promise<Model[]> {
  // Copy the models
  let filteredModels = [...modelsData]

  // Filter by category if needed
  if (category) {
    filteredModels = modelsData.filter(
      (model: Model) => model.category === category
    )
  }

  // Fetch one image for each model (based on its name or description)
  const modelsWithImages = await Promise.all(
    filteredModels.map(async (model) => {
      // Force 3D-related query to avoid celebrity photos
      const query = `${model.name || model.description} 3d render object`
      const images = await getImages(query, 1)
      return {
        ...model,
        image: images[0] || model.image || "/placeholder.png",
      }
    })
  )

  // ✅ you were missing this return and closing bracket
  return modelsWithImages
}


export async function getModelById(id: string | number): Promise<Model> {
  const foundModel = modelsData.find(
    (model: Model) => model.id.toString() === id.toString()
  )
  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`)
  }

  // Fetch a single image for this model
  const query = foundModel.name || foundModel.description || "3d model"
  const images = await getImages(query, 1)
  return {
    ...foundModel,
    image: images[0] || foundModel.image || "/placeholder.png",
  }
}
