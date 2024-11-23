import { 
    ContactSection, 
    // FirstDarkSection, 
    Footer, 
    FormSection, 
    HeroeSection, 
    Navbar, 
    FirstWhiteSection, 
    // SecondWhiteSection, 
    // ThirdWhiteSection,
  } from './ui';
  
  export const CoincityApp = () => {
    return (
      <main className="main">
        <Navbar />
        <HeroeSection />
        <FirstWhiteSection />
        {/* <SecondWhiteSection /> */}
        {/* <FirstDarkSection /> */}
        {/* <ThirdWhiteSection /> */}
        <FormSection />
        <ContactSection />
        <Footer />
      </main>
    );
  };