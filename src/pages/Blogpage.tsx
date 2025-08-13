import { useEffect, useState } from "react"

type BlogListType = {
  title: string,
  id: number,
  text: string,
}

const blogList: BlogListType[] = [
  {title: 'state one', id: 1, text:'Lorem title'},
  {title: 'state two', id: 2, text:'Lorem title, Lorem title'},
  {title: 'state three', id: 3, text:'Lorem title, Lorem title, Lorem title'},
]

const setBlogList = (): Promise<BlogListType[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(blogList)
      // reject(0)
    }, 1000)
  })
}

const Blogpage: React.FC = () => {
  const [list, setList] = useState<BlogListType[]| []>([])
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    (async() => {
      setIsError(false)
      try{
        const result = await setBlogList()
        setList(result)
      } catch {
        setIsError(true)
      }

    })()
  },[])

  const removeHandler = (id: number) : void => {
    setList((prev) => prev.filter(item => item.id !== id))
  }
  
  return (
    <>
      <div>
        This is Blogpage
      </div>
      {!isError ? (
      <ul>
        {list.map(({id, title, text}) => (
          <li key={id} onDoubleClick={() => removeHandler(id)}>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>) : (
        <p>This is Error</p>
      )}

    </>

  )
}

export default Blogpage