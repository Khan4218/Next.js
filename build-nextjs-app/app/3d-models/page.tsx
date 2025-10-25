import { getAllModels } from "../lib/models";

export default async function modelsList() {

    const models = await getAllModels()
    return (
        <div>
            {models.map(model => (
               <p key={model.id}>{model.name}</p>
            ))}
        </div>
    )
}