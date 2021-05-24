import "./App.css";
import HomeContainer from './containers/HomeConatiner';
import HeaderContainer from './containers/HeaderContainer';
const App = () => {
  return (
    <>
      {/**<h1>App Component</h1>*/}
      {/*<User data={{name:"sushil" ,age :26}} />*/}
      {/*<Home />*/}
      <HeaderContainer />
      <HomeContainer />
    </>
  );
};

export default App;
