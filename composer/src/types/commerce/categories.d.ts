export interface Category {
  longDescription: string
  categoryImages: CategoryImage[]
  name: string
  description: string
  active: boolean
  childCategories: ChildCategory[]
  parentCategories: ParentCategory[]
  creationDate: string
  route: string
  dimensionId: string
  id: string
}

export interface CategoryImage {
  path: string
  metadata: Metadata
  repositoryId: string
  name: string
  url: string
  tags: Tag[]
}

export interface Metadata { }

export interface Tag {
  repositoryId: string
}

export interface ChildCategory {
  name: string
  active: boolean
  childCategories?: ChildCategory[]
  route: string
  id: string
}
