import Link from 'next/link';

import { HeaderContainer } from '../styles/components/Header';

export default function Header() {
  return (
    <HeaderContainer src={'https://res.cloudinary.com/dcnqq10ni/image/upload/v1603911895/yoni-images/firstpostimage.jpg'} >
      <Link href="/post/por-que-as-mulheres-precisam-de-duas-vezes-mais-sexo">
        <a>
          <div className="bgContainer">
            <h2>Sexualidade</h2>
          </div>
          <div className="titleContainer">
            <h1>Por que as mulheres precisam de duas vezes mais sexo</h1>
            <div>
              <img src="https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png" alt="Creator avatar"/>
              <p>Stephanie Estima</p>
              <span>♥</span>
              <span>23, julho 2019</span>
            </div>
          </div>
        </a>
      </Link>
    </HeaderContainer>
  )
}
