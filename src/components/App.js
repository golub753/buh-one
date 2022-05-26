import data from '../data/data';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Spec from "./Spec/Spec";
import About from "./About/About";
import Clients from './Clients/Clients';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';

function App() {
  return ( 
    <div>
      <Header 
          logo={'./images/image/logo.png'}
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
      <Footer
        bg={'./images/image/main-screen.jpg'}
        title={'Связь с нами'}
        description={'У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!'}
        number={'+7 (111) 222-33-44'}
        mail={'order@bu-one.ru'}
      />
    </div>
  );
}

export default App;
