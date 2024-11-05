import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Courses } from '../pages/Courses'


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Courses />} />
        </Routes>
    )
}