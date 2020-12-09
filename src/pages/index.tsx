import Header from '../components/Header';
import About from '../components/About';
import Categories from '../components/Categories';
import Highlights from '../components/Highlights';
import Mailing from '../components/Mailing';

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Categories />
      <Highlights />
      <Mailing />
    </div>
  )
}
