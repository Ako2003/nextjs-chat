import Header from '../components/Header';
import Menu from '@/components/Sidebar/Menu';
import Chat from '@/components/Chat';

import './global.css'
export default async function Page() {
  return(
    <section>
      <div className='flex'>
        <Menu />
        <div className='w-full h-screen overflow-y-auto'>
          <Header />
          <Chat />
        </div>
      </div>
    </section>
  );
}