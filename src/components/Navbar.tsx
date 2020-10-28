import Link from "next/link";
import { useState } from "react";

import useWindowWidth from '../hooks/useWindowWidth';
import { Nav, MobileMenu, HamburgerMenu } from '../styles/components/Navbar';

export default function Navbar() {
  const windowChecker = useWindowWidth();
  const [ showMobileMenu, setShowMobileMenu ] = useState(false);
  const [ showCategories, setShowCategories ] = useState(false);

  const categories = [
    { name: "Empoderamento", slug: "empoderamento" },
    { name: "Mulher e sociedade", slug: "mulher-e-sociedade" },
    { name: "Autoconhecimento", slug: "autoconhecimento" },
    { name: "Sexualidade", slug: "sexualidade" },
    { name: "Saúde e bem estar", slug: "saude-e-bem-estar" },
    { name: "Relacionamentos", slug: "relacionamentos" },
    { name: "Autoestima", slug: "autoestima" },
    { name: "Gravidez e Maternidade", slug: "gravidez-e-maternidade" },
  ];

  const MenuLinks = [
    { name: "Sobre nós", slug: "sobre"},
    { name: "Assuntos", slug: "assuntos", subLinks: categories},
    { name: "Enquetes", slug: "enquetes"}
  ];

  return (
    <>
      <MobileMenu style={{ opacity: showMobileMenu ? 1 : 0 }}>
        { MenuLinks.map((el) => (
          el.subLinks ? (
            <>
              <p key={el.name}>
                {el.name}
              </p>
              {
                el.subLinks.map(subCateg => ( 
                  <Link key={subCateg.slug} href={`/category/${subCateg.slug}`}>
                    <a className="subCateg">{subCateg.name}</a>
                  </Link>
                ))
              }
            </>
          ) : (
            <Link key={el.name} href={`/${el.slug}`}>
              <a>{el.name}</a>
            </Link>
          ))
        )}
      </MobileMenu>
      <Nav>
        <Link href="/">
          <div className={showMobileMenu ? "logo active" : "logo"}>
            <a>
              <img src={`${process.env.NEXT_PUBLIC_SITE_URL}/images/yoni.svg`} alt="yoni logo" />
            </a>
          </div>
        </Link>
        { windowChecker ? (
          <HamburgerMenu onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <span className={showMobileMenu ? "close active" : "close"} />
          </HamburgerMenu>
        ) :  (
          <div className="menuLinks">
            {MenuLinks.map((el) => (
                <Link key={el.name} href={`/${el.slug}`}>
                  <a>{el.name}</a>
                </Link>
              )
            )}
          </div>
        )}
      </Nav>
    </>
  );
};


