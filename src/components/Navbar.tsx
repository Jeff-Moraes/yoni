import Link from "next/link";
import { useState } from "react";

import useWindowWidth from '../hooks/useWindowWidth';
import { Nav, MobileMenu, HamburgerMenu } from '../styles/components/Navbar';

export default function Navbar() {
  const windowChecker = useWindowWidth();
  const [ showMenu, setShowMenu ] = useState(false);

  const categories = [
  "Empoderamento",
  "Mulher e sociedade",
  "Autoconhecimento",
  "Sexualidade",
  "Saúde e bem estar",
  "Relacionamentos",
  "Autoestima",
  "Gravidez e Maternidade",
  ];

  const MenuLinks = [
    { name: "Sobre nós", slug: "sobre"},
    { name: "Assuntos", slug: "assuntos", subLinks: categories},
    { name: "Enquetes", slug: "enquetes"}
  ];

  return (
    <>
      {
        showMenu && (
          <MobileMenu style={{ opacity: showMenu ? 1 : 0 }}>
            {MenuLinks.map((el) => (
              <Link key={el.name} href={`/${el.slug}`}>
                <a>{el.name}</a>
              </Link>
              )
            )}
          </MobileMenu>
        )
      }
      <Nav>
        <Link href="/">
          <div className={showMenu ? "logo active" : "logo"}>
            <a>
              <img src={`${process.env.NEXT_PUBLIC_SITE_URL}/images/yoni.svg`} alt="yoni logo" />
            </a>
          </div>
        </Link>
        <div>
          {
            windowChecker ? (
              <HamburgerMenu onClick={() => setShowMenu(!showMenu)}>
                <span className={showMenu ? "close active" : "close"} />
              </HamburgerMenu>
            ) : (
              <div className="menuLinks">
                {MenuLinks.map((el) => (
                    <Link key={el.name} href={`/${el.slug}`}>
                      <a>{el.name}</a>
                    </Link>
                  )
                )}
              </div>
            )
          }
        </div>
      </Nav>
    </>
  );
};


