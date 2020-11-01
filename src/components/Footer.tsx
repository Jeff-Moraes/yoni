import Link from 'next/link';

import { FooterContainer } from '../styles/components/Footer';

export default function Footer() {
  const linksMenu = [
    { name: "Sobre nós", slug: "sobre"},
    { name: "Assuntos", slug: "assuntos"},
    { name: "Enquetes", slug: "enquetes"}
  ];

  return (
    <FooterContainer>
      <Link href="/">
        <div className="logo">
          <a>
            <img src="https://res.cloudinary.com/dcnqq10ni/image/upload/v1604139926/yoni-images/yoni-logo_t5zyco.svg" alt="yoni logo" />
          </a>
        </div>
      </Link>
      <div className="footerLinks">
        <ul>
          { linksMenu.map(link => (
            <li key={link.slug}>
              <Link href={link.slug}>
                  <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <a href="https://www.facebook.com/">
            <img src="https://res.cloudinary.com/dcnqq10ni/image/upload/v1604010995/yoni-images/Vector_1_aldc1m.svg" alt="Facebook icon"/>
          </a>
          <a href="https://www.instagram.com/">
            <img src="https://res.cloudinary.com/dcnqq10ni/image/upload/v1604010996/yoni-images/Vector_hdmuvt.svg" alt="Instagram icon"/>
          </a>
        </div>
      </div>
    </FooterContainer>
  )
}
