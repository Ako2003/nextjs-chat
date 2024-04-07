import Navbar from '../components/Navbar';
import './global.css'
export default async function Page() {
  return(
    <section className='w-full h-screen grid grid-cols-[min-content_auto] grid-rows-[5fr_1fr] bg-gray-900 '>
        <Navbar />
    </section>
  );
}