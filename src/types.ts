
interface UserTypes {
    id: number
    username: string
    email: string
    fullName: string
    password: string
    level: number
    avatarUrl: string
  
    createdAt: Date
    updatedAt: Date
}
  
interface BlogTypes {
    id?: number
    slug: string
    title: string
    thumbnail: string
  
    authors?: string
    status?: string
    other_names?: string
    description: string
  
    content: string
  
    createdAt?: Date 
    updatedAt?: Date
  
    userId?: number
    blogHashtag: string[]
}

interface HashtagTypes {
    id: number
    name: string
  
    createdAt: Date
    updatedAt: Date
}  

interface BlogHashtagTypes {
    blogId: number
    hashTagId: number
}