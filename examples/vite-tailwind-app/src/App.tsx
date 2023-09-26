import './App.css'
import '../../../dist/style.css';
import { Button } from '../../../src/index';
import { useState } from 'react';

export default function App() {
  const [mode, setMode] = useState('light');

  const toggleDarkMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`h-full w-full ${mode}`}>
      <div className={`h-full w-full flex justify-center items-center bg-background`}>
        <div className={`flex flex-col align-center justify-center items-center`}>
          <div className="text-3xl font-bold underline">
            Built using shadcn-ui-library-starter
          </div>
          <div className='py-4'>
            <Button onClick={toggleDarkMode} className='animate-pulse'>
              <span>Toggle Dark Mode</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

