import { getImages } from "@/app/lib/getImages"

export default async function TestPage() {
  const images = await getImages("3d printed object", 6)

  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      {images.map((url, i) => (
        <img
          key={i}
          src={url}
          alt={`image-${i}`}
          className="rounded-lg object-cover"
        />
      ))}
    </div>
  )
}
