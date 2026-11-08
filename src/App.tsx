import { Route, Routes } from 'react-router';
import './App.css'
import MainLayout from './components/layout/MainLayout';
import HomePage from './features/home/pages/HomePage'
import AboutPage from './features/about/pages/AboutPage';
import ServiceDetails from './features/services/pages/ServiceDetails';
import ShoppingList from './features/shopping/pages/ShoppingList';
import HomeCarePage from './features/home-care/pages/HomeCarePage';

function App() {
  return (
    <MainLayout title="شبرابابل">
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} /> 
       <Route path="/services/:serviceId" element={<ServiceDetails />} /> 
       <Route path="*" element={(
         <div className="not-found-card">
           <span className="page-eyebrow">404</span>
           <h1>الصفحة غير موجودة</h1>
           <p>تحقق من الرابط أو ارجع إلى الصفحة الرئيسية.</p>
         </div>
       )} />
       <Route path="/shopping-list" element={<ShoppingList />} />
       <Route path="/nursing-care" element={<HomeCarePage />} />
     </Routes>
    </MainLayout>
  );
}

export default App
