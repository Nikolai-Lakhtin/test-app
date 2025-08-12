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

const Blogpage: React.FC = () => {
  const [list, setList] = useState<BlogListType[]| []>([])

  useEffect(() => {
    let time: ReturnType<typeof setTimeout>
    (async() => {
      time = setTimeout(() => {
        setList(blogList)
      }, 1000)
    })()

    return () => {clearTimeout(time)}
  },[])

  const removeHandler = (id: number) : void => {
    setList((prev) => prev.filter(item => item.id !== id))
  }
  
  return (
    <>
      <div>
        This is Blogpage
      </div>
      <ul>
        {list.map(({id, title, text}) => (
          <li key={id} onDoubleClick={() => removeHandler(id)}>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </>

  )
}

export default Blogpage