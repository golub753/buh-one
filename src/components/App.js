import data from '../data/data';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Spec from "./Spec/Spec";
import About from "./About/About";
import Clients from './Clients/Clients';
import Reviews from './Reviews/Reviews';

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
      <Clients
        anchor='clients'
        title='С нами работают'
        subtitle='Наши клиенты'
        clients={data.clients}
      />
      <Reviews
        anchor='reviews'
        title='Ваши благодарности'
        subtitle='Отзывы'
        reviews={data.reviews}
      />
    </div>
  );
}

export default App;
