import {Routes, Route} from 'react-router-dom'
import Layout from "./Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import Catalog from "./components/Catalog";
import RequireAuth from "./components/RequireAuth";


function App() {
  return (
<Routes>
    <Route path="/" element={< Layout />}>
      <Route path="/login" element={< Login />} />
      <Route path="/register" element={< Register />} />
      <Route element = {<RequireAuth />}>
      <Route path="/catalog" element={< Catalog />} />
      </Route>
    </Route>
</Routes>
  );
}

export default App;
