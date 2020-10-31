import Link from 'next/link';
import { useRouter } from 'next/router';

import Header from '../../components/Header';
import Highlights from '../../components/Highlights';
import PostHighlightBox from '../../components/PostHighlightBox';
import { CategoryContainer } from '../../styles/pages/Category';

export default function Post() {
  const router = useRouter();

  const highlightsPosts = [
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "10 Fatos surpreendentes sobre orgasmo que você realmente quer saber Fatos surpreendentes sobre",
      slug: "10-fatos-surpreendentes-sobre-orgasmo-que-voce-realmente-quer-saber-1",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "Ser feminista e se relacionar com homens — O dilema.",
      slug: "ser-feminista-e-se-relacionar-com-homens-o-dilema",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "10 Fatos surpreendentes sobre orgasmo que você realmente quer saber",
      slug: "10-fatos-surpreendentes-sobre-orgasmo-que-voce-realmente-quer-saber-3",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "10 Fatos surpreendentes sobre orgasmo que você realmente quer saber",
      slug: "10-fatos-surpreendentes-sobre-orgasmo-que-voce-realmente-quer-saber-4",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "Ser feminista e se relacionar com homens — O dilema.",
      slug: "ser-feminista-e-se-relacionar-com-homens-o-dilema-2",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "10 Fatos surpreendentes sobre orgasmo que você realmente quer saber",
      slug: "10-fatos-surpreendentes-sobre-orgasmo-que-voce-realmente-quer-saber-5",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "10 Fatos surpreendentes sobre orgasmo que você realmente quer saber",
      slug: "10-fatos-surpreendentes-sobre-orgasmo-que-voce-realmente-quer-saber-6",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "Ser feminista e se relacionar com homens — O dilema.",
      slug: "ser-feminista-e-se-relacionar-com-homens-o-dilema4",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "10 Fatos surpreendentes sobre orgasmo que você realmente quer saber",
      slug: "10-fatos-surpreendentes-sobre-orgasmo-que-voce-realmente-quer-saber-7",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "10 Fatos surpreendentes sobre orgasmo que você realmente quer saber",
      slug: "10-fatos-surpreendentes-sobre-orgasmo-que-voce-realmente-quer-saber-8",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "Ser feminista e se relacionar com homens — O dilema.",
      slug: "ser-feminista-e-se-relacionar-com-homens-o-dilema-7",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "10 Fatos surpreendentes sobre orgasmo que você realmente quer saber",
      slug: "10-fatos-surpreendentes-sobre-orgasmo-que-voce-realmente-quer-saber-9",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    }
  ];

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
    <CategoryContainer>
      <div>
        <h1>Assuntos</h1>
      </div>
      <div className="categoriesIcons">
        { categories.map(category => (
          <Link href={category.slug} key={category.slug}>
            <div className={category.slug === router.query.slug ? "selectedCategory" : ""}>
              <img src={category.img} alt={category.name} />
              <p>{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <Header />
      <Highlights />
      <main>
        {
          highlightsPosts.slice(0, 5).map(post => (
            <PostHighlightBox post={post} key={post.slug}/>
          ))
        }
      </main>
    </CategoryContainer>
  )
}
