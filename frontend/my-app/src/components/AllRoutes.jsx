import { Route, Routes } from "react-router-dom"
import Signup from "./Signup"
import Login from "./Login"
import CreateOEM from "./CreateOEM"
import CarAdd from "./CarAdd"

function AllRoutes(){
    return(
        <>
           <Routes>
               <Route path="/"element={<Signup/>} />
               <Route path="/login" element={<Login/>}/>
               <Route path="/oem" element={<CreateOEM/>}/>
               <Route path="/addcar" element={<CarAdd/>}/>
           </Routes>
        </>
    )
}

export default AllRoutes