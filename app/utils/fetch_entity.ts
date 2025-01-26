import {EntityType} from "~/models/entity.type";
import axios from "axios";



function processEntities(entities: EntityType[]): EntityType[] {
  return entities.map(entity => ({
    ...entity,
    images: entity.images.map(img => `${process.env.PUBLIC_BACKEND}${img}`),
    children: entity.children ? processEntities(entity.children) : undefined
  }));
}

export async function FetchEntity(id?:string): Promise<EntityType[]> {

  try{
    const res = await axios.get<EntityType[]>(`${process.env.PUBLIC_BACKEND}/api/v1/query`, {
      params: id?{id:id}:{}
    })
    return processEntities(res.data)
  } catch (e) {
    console.error(e)
    throw e
  }

}