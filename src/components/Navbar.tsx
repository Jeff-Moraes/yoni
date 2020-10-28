import Link from "next/link";
import { useState } from "react";

import { Nav, MobileMenu, DesktopMenu, HamburgerMenu } from '../styles/components/Navbar';

export default function Navbar() {
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

  const linksMenu = [
    { name: "Sobre nós", slug: "sobre"},
    { name: "Assuntos", slug: "assuntos", subLinks: categories},
    { name: "Enquetes", slug: "enquetes"}
  ];

  const mobileMenu = (
    <MobileMenu>
      { linksMenu.map((el) => (
        el.subLinks ? (
          <div key={el.name}>
            <Link href={`/${el.slug}`}>
              <a>{el.name}</a>
            </Link>
            {
              el.subLinks.map(subCateg => ( 
                <Link key={subCateg.slug} href={`/${el.slug}/${subCateg.slug}`}>
                  <a className="subCateg">{subCateg.name}</a>
                </Link>
              ))
            }
          </div>
        ) : (
          <Link key={el.name} href={`/${el.slug}`}>
            <a>{el.name}</a>
          </Link>
        ))
      )}
    </MobileMenu>
  )

  const desktopMenu = (
    <DesktopMenu>
      { linksMenu.map((el) => (
        el.subLinks ? (
          <div key={el.name}>
            <button key={el.name} onClick={() => setShowCategories(!showCategories)} >
              {el.name}
            </button>
            { showCategories && (
              <div className="categories">
                { categories.map(category => ( 
                  <Link key={category.slug} href={`/${el.slug}/${category.slug}`}>
                    <a className="category">{category.name}</a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link key={el.name} href={`/${el.slug}`}>
            <a>{el.name}</a>
          </Link>
        ))
      )}
    </DesktopMenu>
  )

  return (
    <>
      { showMobileMenu && mobileMenu}
      <Nav>
        <Link href="/">
          <div className={showMobileMenu ? "logo active" : "logo"}>
            <a>
              <img src={`${process.env.NEXT_PUBLIC_SITE_URL}/images/yoni.svg`} alt="yoni logo" />
            </a>
          </div>
        </Link>
        <HamburgerMenu onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <span className={showMobileMenu ? "close active" : "close"} />
        </HamburgerMenu>
        {desktopMenu}
      </Nav>
    </>
  );
};


