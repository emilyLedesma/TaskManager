import Home from "./HomePage/Home";
import Task from "./TaskPage/Task";
import { Navigate, Routes, Route, Link } from 'react-router-dom'

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/Home" replace/>}/>
            <Route path="/Tasks" element={<Task/>}/>
            <Route path="/Home" element={<Home/>}/>
        </Routes>
    )
}

export default Router