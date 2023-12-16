interface CourseNode {
    id: number,
    children?: CourseNode[]
  
    outline: string
    outlineRefresh: string,
    outlineReplace: string[],
  
    content: String
    contentRefresh: String,
    contentReplace: string[],

    isEditing: boolean
  
  }

  export default CourseNode;