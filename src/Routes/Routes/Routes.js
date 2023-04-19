import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Home from '../../Pages/Home/Home/Home';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import UnKnownRoutes from '../UnKnownRoutes/UnKnownRoutes';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Blog from '../../Pages/Blog/Blog';

const Routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <UnKnownRoutes></UnKnownRoutes>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/contact',
            element: <ContactUs></ContactUs>
         },
         {
            path: '/about',
            element: <ContactUs></ContactUs>
         },
         {
            path: '/about',
            element: <AboutUs></AboutUs>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/blog',
            element: <Blog></Blog>
         },

      ]
   }
])

export default Routes;