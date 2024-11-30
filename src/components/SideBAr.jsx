// import React, { useState } from 'react';
// // import image from '../assets/beac.png';
// import { Link } from 'react-router-dom';

// export default function SideBar() {
//   const [openSideBar, setOpensideBar] = useState(false);
//   const [showUserInfo, setShowUserInfo] = useState(false);

//   const user = {
//     name: 'sandjon Yves',
//     email: 'Sabndjonyves@gmail.com',
//     photo: '',
//   };

//   const toggleUserInfo = () => {
   
//     setShowUserInfo((prev) => !prev);
//   };

//   return (
//     <div>
//       <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//         <div className="px-3 py-3 lg:px-5 lg:pl-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center justify-start rtl:justify-end">
//               <button
//                 onClick={() => setOpensideBar(!openSideBar)}
//                 aria-controls="logo-sidebar"
//                 type="button"
//                 className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               >
//                 <span className="sr-only">Open sidebar</span>
//                 <svg
//                   className="w-6 h-6"
//                   aria-hidden="true"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     clipRule="evenodd"
//                     fillRule="evenodd"
//                     d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//                   ></path>
//                 </svg>
//               </button>
//               <a href="/" className="flex ms-2 md:me-24">
//                 {/* <img src={image} className="h-8 me-3" alt="FlowBite Logo" /> */}
//                 <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
//                   TP#21
//                 </span>
//               </a>
//             </div>
//             <div className="flex items-center">
//               <div className="flex items-center ms-3">
//                 <div>
//                   <button
//                     type="button"
//                     className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//                     onClick={()=> toggleUserInfo()}
//                   >
//                     <span className="sr-only">Open user menu</span>
//                     <img
//                       className="w-8 h-8 rounded-full"
//                       src={user.photo}
//                       alt="user photo"
//                     />
//                   </button>
//                   {showUserInfo && (
//           <div className="absolute top-12 right-4 z-50 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-lg p-4 rounded-md">
//           <div className="flex justify-end flex-col border-b-2 border-gray-200  dark:border-gray-500 pb-4">
//             <p className="text-sm font-medium text-gray-900 dark:text-gray-200">{user.name}</p>
//             <p className="text-sm text-gray-600 dark:text-gray-200">{user.email}</p>
//           </div>
//           <div className="pt-3 flex items-center justify-center gap-x-2">
//   <svg
//     className="w-6 h-4 text-gray-800 dark:text-white"
//     aria-hidden="true"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 16 16"
//   >
//     <path
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
//     />
//   </svg>
//   <button className="text-gray-800 dark:text-white text-sm">
//     Update
//   </button>
// </div>
//         </div>
//       )}
      
//                 </div>
        
        
//               </div>
//             </div>
//           </div>
//         </div>
        
//       </nav>

     

//       <aside
//         id="logo-sidebar"
//         className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
//           !openSideBar ? '-translate-x-full' : ''
//         } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
//         aria-label="Sidebar"
//       >
//         <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
//           <ul className="space-y-2 font-medium">
//             <li>
//               <Link
//                 to="/"
//                 onClick={() => setOpensideBar(false)}
//                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//               >
//                 <svg
//                   className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 22 21"
//                 >
//                   <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
//                   <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
//                 </svg>
//                 <span className="ms-3">Dashboard</span>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={'/signin'}
//                 onClick={() => localStorage.removeItem('authToken')}
//                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
//               >
//                 <svg
//                   className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
//                   <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
//                   <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
//                 </svg>
//                 <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </aside>
//     </div>
//   );
// }



import React from 'react';

const SideBar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link collapsed" href="index.html">
            <i className="bi bi-grid"></i>
            <span></span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-menu-button-wide"></i>
            <span>Etablissement</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <a href="components-badges.html">
                <i className="bi bi-circle"></i>
                <span>Badges</span>
              </a>
            </li>
            <li>
              <a href="components-breadcrumbs.html">
                <i className="bi bi-circle"></i>
                <span>ID cart</span>
              </a>
            </li>
            <li>
              <a href="components-buttons.html">
                <i className="bi bi-circle"></i>
                <span>School cart</span>
              </a>
            </li>
            <li>
              <a href="components-cards.html">
                <i className="bi bi-circle"></i>
                <span>Card personalize</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-journal-text"></i>
            <span>Users</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="forms-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            {/* Additional links can be added here */}
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-layout-text-window-reverse"></i>
            <span>Project</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="tables-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <a href="tables-general.html">
                <i className="bi bi-circle"></i>
                <span>All project</span>
              </a>
            </li>
            <li>
              <a href="tables-data.html">
                <i className="bi bi-circle"></i>
                <span>Validate project</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-bar-chart"></i>
            <span>Generated Cart</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="charts-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <a href="charts-chartjs.html">
                <i className="bi bi-circle"></i>
                <span>Visualiser all</span>
              </a>
            </li>
            <li>
              <a href="charts-apexcharts.html">
                <i className="bi bi-circle"></i>
                <span>Visualiser specific cart</span>
              </a>
            </li>
            <li>
              <a href="charts-echarts.html">
                <i className="bi bi-circle"></i>
                <span>Personnalize specific cart</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-gem"></i>
            <span>Personnalize cart</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="icons-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <a href="icons-bootstrap.html">
                <i className="bi bi-circle"></i>
                <span>Badges</span>
              </a>
            </li>
            <li>
              <a href="icons-remix.html">
                <i className="bi bi-circle"></i>
                <span>ID cart</span>
              </a>
            </li>
            <li>
              <a href="icons-boxicons.html">
                <i className="bi bi-circle"></i>
                <span>School cart</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="users-profile.html">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-faq.html">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-contact.html">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-register.html">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-login.html">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="pages-error-404.html">
            <i className="bi bi-dash-circle"></i>
            <span>Error 404</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="pages-blank.html">
            <i className="bi bi-file-earmark"></i>
            <span>Blank</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;