import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import WhatWeDo from '@/pages/WhatWeDo';
import NosActivites from '@/pages/NosActivites';
import Donate from '@/pages/Donate';
import { EditProvider } from '@/contexts/EditContext';

// Initialize the i18n multilingual system
import '@/i18n/config';

function App() {
  return (
    <Router>
      <EditProvider>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/nos-activites" element={<NosActivites />} />
              <Route path="/donate" element={<Donate />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </EditProvider>
    </Router>
  );
}

export default App;