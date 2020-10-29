import Link from 'next/link';

import { CategoriesContainer, CategoryImage } from '../styles/components/Categories';

export default function Categories() {
  const categories = [
    { name: "Empoderamento", slug: "empoderamento", img: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603980701/yoni-images/category1_xmaepf.png" },
    { name: "Mulher e sociedade", slug: "mulher-e-sociedade", img: 'https://res.cloudinary.com/dcnqq10ni/image/upload/v1603980700/yoni-images/category2_qmswv1.png' },
    { name: "Autoconhecimento", slug: "autoconhecimento", img: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603980700/yoni-images/category3_mruozy.png" },
    { name: "Sexualidade", slug: "sexualidade", img: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603980700/yoni-images/category4_oiwqzo.png" },
    { name: "Saúde e bem estar", slug: "saude-e-bem-estar", img: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603980700/yoni-images/category5_bit9g8.png" },
    { name: "Relacionamentos", slug: "relacionamentos", img: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603980700/yoni-images/category6_hk6xqo.png" },
    { name: "Autoestima", slug: "autoestima", img: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603980700/yoni-images/category7_fbmnly.png" },
    { name: "Gravidez e Maternidade", slug: "gravidez-e-maternidade", img: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603980701/yoni-images/category8_vemevd.png" },
  ];

  return (
    <CategoriesContainer>
      <h1>Categorias</h1>
      <div className="categoriesList">
        { categories.map(category => (
          <Link key={category.slug} href={`/assuntos/${category.slug}`}>
            <a>
              <CategoryImage imgSrc={category.img}>
                <h2>{category.name}</h2>
              </CategoryImage>
            </a>
          </Link>
        ))}
      </div>
    </CategoriesContainer>
  )
}
