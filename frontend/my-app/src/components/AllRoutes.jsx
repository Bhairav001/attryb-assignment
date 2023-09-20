import { Route, Routes } from "react-router-dom"
import Signup from "./Signup"
import Login from "./Login"

function AllRoutes(){
    return(
        <>
           <Routes>
               <Route path="/"element={<Signup/>} />
               <Route path="/login" element={<Login/>}/>
           </Routes>
        </>
    )
}

export default AllRoutes