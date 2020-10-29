import Link from "next/link";

import { HighlightsContainer } from '../styles/components/Highlights';

export default function Highlights() {
  const highlightsPosts = [
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "10 Fatos surpreendentes sobre orgasmo que você realmente quer saber",
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

  const highlightPost = "";

  return (
    <HighlightsContainer>
      <h1>Artigos em Destaque</h1>
      <div className="flexRowContainer">
        {
          highlightsPosts.map(post => (
            <Link href={`/post/${post.slug}`} key={post.slug}>
              <a>
                <div className="postImageContainer">
                  <img src={post.heroImage} alt={post.title}/>
                </div>
                <div className="postInfoContainer">
                  <p>{post.category}</p>
                  <div>
                    <h2>{post.title}</h2>
                    <div className="postAuthorContainer">
                      <img src={post.authorImg} alt={post.author}/>
                      <div>
                        <p>{post.author} <span>♥</span></p>
                        <span>{post.publishDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))
        }
      </div>
    </HighlightsContainer>
  )
}
