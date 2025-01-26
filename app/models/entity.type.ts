

export type EntityType = {
  id: string
  parent_id?: string
  children?: EntityType[]
  name: string
  description: string
  images: string[]
  created_at: string
  updated_at: string
}