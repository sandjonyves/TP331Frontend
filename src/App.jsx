import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import { DashbordLayout } from './pages'
import { ClassContainer, Dashboard, SchoolContainer, StudentContainer } from './container'
import Signin from './pages/Signin'
import Header from './components/Header'
import { SideBar } from './components'


import '../assets/vendor/apexcharts/apexcharts.min';
import '../assets/vendor/chart.js/chart.js';
import '../assets/vendor/echarts/echarts.min.js';
// import '../assets/vendor/quill';
// import '../assets/vendor/simple-datatables';
// import '../assets/vendor/tinymce/tinymce';
// import '../assets/vendor/tinymce/themes/silver'; // Importer un thème si nécessaire
// import '../assets/vendor/tinymce/icons/default'; // Importer des icônes si nécessaire
// import '../assets/vendor/tinymce/models'; // Importer les modèles si nécessaire
// import '../assets/vendor/tinymce/plugins'; // Importer les plugins si nécessaire
// import './assets/js/main.js'; // Assurez-vous que le chemin est correct
// import '../assets/vendor/php-email-form/validate.js'; 



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <Routes>
        <Route path='/' element={<SideBar/>}>
        <Route path='/' element ={<SideBar/>}/>
          <Route path='school/' element={<SchoolContainer/>}/>
          <Route path='school/:school_id/' element={<ClassContainer/>}/>
          <Route path='school/:school_id/:class_id/' element ={<StudentContainer/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App