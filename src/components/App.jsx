
import './App.css';
import AppRoutes from '../routes.jsx';
import {Link} from 'react-router-dom';

const App = () => {


  // let component;

  // switch(window.location.pathname){
  //   case '/':
  //     component = <Home/>;
  //     break;
  //   case '/products':
  //     component = <Products />;
  //     break;
  //   case '/about':
  //   component = <About />;
  //     break;

  
  

  return (
    <>
      <header>
        <Link to='/'>Logo</Link>
        <nav>
          <ul>
             <li>
              <Link to='/products'>Products</Link>
             </li>
             <li>
              <Link to='/about'>About</Link>
             </li>
          </ul>
        </nav>
      </header>
      <AppRoutes/>
    </>
  );
}

export default App;
