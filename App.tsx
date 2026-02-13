import { useState, useEffect } from 'react';
import { SplashScreen } from './sections/SplashScreen';
import { LanguageSelection } from './sections/LanguageSelection';
import { PhoneInput } from './sections/PhoneInput';
import { NameInput } from './sections/NameInput';
import { GenderSelection } from './sections/GenderSelection';
import { DateOfBirth } from './sections/DateOfBirth';
import { BirthTime } from './sections/BirthTime';
import { PlaceOfBirth } from './sections/PlaceOfBirth';
import { ProfessionStatus } from './sections/ProfessionStatus';
import { WelcomeScreen } from './sections/WelcomeScreen';
import { HomePage } from './sections/HomePage';
import { Page2026 } from './sections/Page2026';
import { AstroShop } from './sections/AstroShop';
import { Reports } from './sections/Reports';
import { Panchang } from './sections/Panchang';
import { Horoscope } from './sections/Horoscope';
import { Consult } from './sections/Consult';
import { Video } from './sections/Video';
import { Notifications } from './sections/Notifications';
import { Wallet } from './sections/Wallet';
import { Search } from './sections/Search';
import { SideMenu } from './sections/SideMenu';
import { KundliAI } from './sections/KundliAI';
import { Matching } from './sections/Matching';
import { Predictions } from './sections/Predictions';
import { AskQuestion } from './sections/AskQuestion';
import { LiveTV } from './sections/LiveTV';
import { Services } from './sections/Services';
import { History } from './sections/History';

export type Page = 
  | 'splash' 
  | 'language' 
  | 'phone' 
  | 'name' 
  | 'gender' 
  | 'dob' 
  | 'birthtime' 
  | 'place' 
  | 'profession' 
  | 'welcome'
  | 'home'
  | '2026'
  | 'astroshop'
  | 'reports'
  | 'panchang'
  | 'horoscope'
  | 'consult'
  | 'video'
  | 'notifications'
  | 'wallet'
  | 'search'
  | 'sidemenu'
  | 'kundli'
  | 'matching'
  | 'predictions'
  | 'ask'
  | 'livetv'
  | 'services'
  | 'history';

export interface UserData {
  name: string;
  phone: string;
  gender: 'male' | 'female' | '';
  dob: { month: string; day: string; year: string };
  birthTime: { hour: string; minute: string; period: string };
  placeOfBirth: string;
  profession: string;
  maritalStatus: string;
  language: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('splash');
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    phone: '',
    gender: '',
    dob: { month: 'Jan', day: '1', year: '2000' },
    birthTime: { hour: '12', minute: '00', period: 'AM' },
    placeOfBirth: '',
    profession: 'Not Specified',
    maritalStatus: 'Not Specified',
    language: 'English'
  });

  useEffect(() => {
    // Auto-redirect from splash after 2 seconds
    if (currentPage === 'splash') {
      const timer = setTimeout(() => {
        setCurrentPage('language');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'splash':
        return <SplashScreen />;
      case 'language':
        return <LanguageSelection onContinue={() => navigateTo('phone')} onSelect={(lang) => updateUserData({ language: lang })} selectedLanguage={userData.language} />;
      case 'phone':
        return <PhoneInput onConfirm={() => navigateTo('name')} onUpdate={(phone) => updateUserData({ phone })} phone={userData.phone} />;
      case 'name':
        return <NameInput onNext={() => navigateTo('gender')} onUpdate={(name) => updateUserData({ name })} name={userData.name} />;
      case 'gender':
        return <GenderSelection onNext={() => navigateTo('dob')} onSelect={(gender) => updateUserData({ gender })} selectedGender={userData.gender} />;
      case 'dob':
        return <DateOfBirth onNext={() => navigateTo('birthtime')} onUpdate={(dob) => updateUserData({ dob })} dob={userData.dob} />;
      case 'birthtime':
        return <BirthTime onNext={() => navigateTo('place')} onUpdate={(birthTime) => updateUserData({ birthTime })} birthTime={userData.birthTime} />;
      case 'place':
        return <PlaceOfBirth onNext={() => navigateTo('profession')} onSelect={(place) => updateUserData({ placeOfBirth: place })} selectedPlace={userData.placeOfBirth} />;
      case 'profession':
        return <ProfessionStatus onStart={() => navigateTo('welcome')} onUpdate={(data) => updateUserData(data)} profession={userData.profession} maritalStatus={userData.maritalStatus} />;
      case 'welcome':
        return <WelcomeScreen name={userData.name} onStart={() => navigateTo('home')} />;
      case 'home':
        return <HomePage 
          userData={userData}
          onNavigate={navigateTo}
          onOpenMenu={() => setShowSideMenu(true)}
        />;
      case '2026':
        return <Page2026 onNavigate={navigateTo} onOpenMenu={() => setShowSideMenu(true)} />;
      case 'astroshop':
        return <AstroShop onNavigate={navigateTo} onOpenMenu={() => setShowSideMenu(true)} />;
      case 'reports':
        return <Reports onNavigate={navigateTo} onOpenMenu={() => setShowSideMenu(true)} />;
      case 'panchang':
        return <Panchang onNavigate={navigateTo} onOpenMenu={() => setShowSideMenu(true)} />;
      case 'horoscope':
        return <Horoscope onNavigate={navigateTo} />;
      case 'consult':
        return <Consult onNavigate={navigateTo} onOpenMenu={() => setShowSideMenu(true)} />;
      case 'video':
        return <Video onNavigate={navigateTo} onOpenMenu={() => setShowSideMenu(true)} />;
      case 'notifications':
        return <Notifications onBack={() => navigateTo('home')} />;
      case 'wallet':
        return <Wallet onBack={() => navigateTo('home')} />;
      case 'search':
        return <Search onBack={() => navigateTo('home')} />;
      case 'kundli':
        return <KundliAI onNavigate={navigateTo} onOpenMenu={() => setShowSideMenu(true)} />;
      case 'matching':
        return <Matching onNavigate={navigateTo} onOpenMenu={() => setShowSideMenu(true)} />;
      case 'predictions':
        return <Predictions onNavigate={navigateTo} onOpenMenu={() => setShowSideMenu(true)} />;
      case 'ask':
        return <AskQuestion onNavigate={navigateTo} onOpenMenu={() => setShowSideMenu(true)} />;
      case 'livetv':
        return <LiveTV onNavigate={navigateTo} />;
      case 'services':
        return <Services onNavigate={navigateTo} />;
      case 'history':
        return <History onNavigate={navigateTo} />;
      default:
        return <SplashScreen />;
    }
  };

  return (
    <div className="phone-frame">
      {renderPage()}
      <SideMenu 
        isOpen={showSideMenu} 
        onClose={() => setShowSideMenu(false)} 
        userData={userData}
        onNavigate={navigateTo}
      />
    </div>
  );
}

export default App;
