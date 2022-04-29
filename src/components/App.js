import Header from "./Header/Header";

const info = [
  {
    logo: '/images/svg/phone.svg',
    link: true,
    text: '8 (111) 222-33-44'
  },
  {
    logo: '/images/svg/clock.svg',
    link: false,
    text: 'Пн-Пт 10:00-18:00'
  },
  {
    logo: '/images/svg/mail.svg',
    link: true,
    text: 'order@buhone.ru'
  },
  {
    logo: '/images/svg/pin.svg',
    link: false,
    text: 'Невский пр. 130'
  }
]

const menu = [
  {
    name: 'Главная',
    link: '/'
  },
  {
    name: 'Услуги',
    link: '/'
  },
  {
    name: 'Кейсы',
    link: '/'
  },
  {
    name: 'О компании',
    link: '/'
  },
  {
    name: 'Контакты',
    link: '/'
  }
]

function App() {
  return ( 
    <div>
      <Header 
          logo={'/images/image/logo.png'}
          links={info}
          menuItems={menu}
      />
    </div>
  );
}

export default App;
