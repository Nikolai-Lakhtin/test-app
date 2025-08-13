import { Route, Routes } from "react-router-dom"
import Homepage from "../../pages/homepage/ui/Homepage"
import Aboutepage from "../../pages/aboutpage/ui/Aboutpage"
import Blogpage from "../../pages/blogpage/ui/Blogpage"
import Notfound from "../../pages/notfoundpage/ui/Notfoundpage"


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/aboute' element={<Aboutepage />}/>
      <Route path='/blog' element={<Blogpage />}/>
      <Route path='*' element={<Notfound />}/>
    </Routes>
  )
}

export default AppRoutes