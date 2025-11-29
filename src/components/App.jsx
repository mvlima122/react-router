
import './App.css';
import AppRoutes from '../routes.jsx';

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
        <a href="/">Logo</a>
        <nav>
          <ul>
             <li>
              <a href="/products">Products</a>
             </li>
             <li>
              <a href="/about">About</a>
             </li>
          </ul>
        </nav>
      </header>
      <AppRoutes/>
    </>
  );
}

export default App;
