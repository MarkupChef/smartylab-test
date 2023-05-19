import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Brackets from './pages/Brackets';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Palindrome from './pages/Palindrome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/brackets'} element={<Brackets />} />
          <Route path={'/palindrome'} element={<Palindrome />} />
          <Route path={'/calculator'} element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
