import './App.css'
// import { Button } from '../../src';
// import { Button } from '../../../.' -> DIST
// import { useState } from 'react';
import { SidebarNav } from '@components/sidebar-nav';
import { Button, Separator, buttonVariants } from '../../../.';

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/examples/forms",
  },
  {
    title: "Account",
    href: "/examples/forms/account",
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    href: "/examples/forms/display",
  },
]

// interface AppLayoutProps {
//   children: React.ReactNode
// }

export default function App() {
  // const [mode, setMode] = useState('light');

  // const toggleDarkMode = () => {
  //   setMode(mode === 'light' ? 'dark' : 'light');
  // };

  return (
    // <div className={`h-full w-full ${mode}`}>
    //   <div className='w-full h-10 bg-background flex justify-between items-center border-0 border-solid border-b-0'>

    //   </div>
    //   <div className={`h-full w-full flex justify-center items-center bg-background`}>
    //     <div className={`flex flex-col align-center justify-center items-center`}>
    //       <div className="text-3xl font-bold underline">
    //         Built using shadcn-ui-library-starter
    //       </div>
    //       <div className='py-4'>
    //         <Button onClick={toggleDarkMode} className='animate-pulse'>
    //           <span>Toggle Dark Mode</span>
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="space-y-6 p-10 pb-16 h-full w-full">
      <div className="space-y-0.5">
        <h2 className="text-5xl font-bold">Free Stock</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1">
          <div className="flex gap-4">
            <a
              href={"https://shadcn-ui-library-starter.vercel.app/"}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "default" })}
            >
              Documentation
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://google.com"}
              className={buttonVariants({ variant: "outline" })}
            >
              GitHub
            </a>
            <Button variant='secondary' className="animate-pulse">
              <span>Secondary</span>
            </Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='link'>Link</Button>
            <Button variant='link' className="text-secondary-foreground">Link Secondary</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

