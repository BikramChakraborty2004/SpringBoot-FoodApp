import './App.css';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import NavClient from './component/NavClient';
import FoodListClient from './component/FoodListClient';
import SearchFoodClient from './component/SearchFoodClient';
import AddOrder from './component/AddOrder';
import Billing from './component/Billing';
import Food from './component/Food';
import AddFood from './component/AddFood';
import DelFood from './component/DelFood';
import UpdFood from './component/UpdFood';
import SearchFood from './component/SearchFood';
import FoodList from './component/FoodList';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <h2>FOOD APP</h2>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        {/* Client Routes */}
        <Route path='/navclient' element={
          <ProtectedRoute allowedRole="client">
            <NavClient />
          </ProtectedRoute>
        } />
        <Route path='/flistclient' element={<FoodListClient />} />
        <Route path='/sfoodclient' element={<SearchFoodClient />} />
        <Route path='/addorder' element={<AddOrder />} />
        <Route path='/billing' element={<Billing />} />

        {/* Admin Routes with nesting */}
        <Route path='/food' element={
          <ProtectedRoute allowedRole="admin">
            <Food />
          </ProtectedRoute>
        }>
          <Route index element={<AddFood />} />
          <Route path='addfood' element={<AddFood />} />
          <Route path='deletefood' element={<DelFood />} />
          <Route path='updfood' element={<UpdFood />} />
          <Route path='sfood' element={<SearchFood />} />
          <Route path='flist' element={<FoodList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
