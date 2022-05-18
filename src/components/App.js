import data from '../data/data';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Spec from "./Spec/Spec";
import About from "./About/About";

function App() {
  return ( 
    <div>
      <Header 
          logo={'/images/image/logo.png'}
          links={data.info}
          menuItems={data.menu}
      />
      <Main />
      <Spec specs={data.specs}
        subtitle='Наши услуги'
        title='Мы специализируемся'
        anchor='services'
        />
      <About
        anchor='about'
        subtitle='О нас'
        title='Компания'
        titleBlue='ИвановПром'
        cases={data.cases}
      />
    </div>
  );
}

export default App;
