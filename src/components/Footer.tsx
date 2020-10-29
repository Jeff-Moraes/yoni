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
            <img src={`${process.env.NEXT_PUBLIC_SITE_URL}/images/yoni.svg`} alt="yoni logo" />
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
          <img src="https://res.cloudinary.com/dcnqq10ni/image/upload/v1604010995/yoni-images/Vector_1_aldc1m.svg" alt="Facebook icon"/>
          <img src="https://res.cloudinary.com/dcnqq10ni/image/upload/v1604010996/yoni-images/Vector_hdmuvt.svg" alt="Instagram icon"/>
        </div>
      </div>
    </FooterContainer>
  )
}
