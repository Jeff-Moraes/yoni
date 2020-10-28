import Link from "next/link";

import { HighlightsContainer } from '../styles/components/Highlights';

export default function Highlights() {
  const highlightsPosts = [
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "10 Fatos surpreendentes sobre orgasmo que você realmente quer saber",
      slug: "10-fatos-surpreendentes-sobre-orgasmo-que-voce-realmente-quer-saber",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "10 Fatos surpreendentes sobre orgasmo que você realmente quer saber",
      slug: "10-fatos-surpreendentes-sobre-orgasmo-que-voce-realmente-quer-saber",
      category: "Sexualidade",
      authorImg: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png",
      author: "Sarah Jio",
      publishDate: "01, outubro 2019",
    },
    {
      heroImage: "https://res.cloudinary.com/dcnqq10ni/image/upload/v1603923446/yoni-images/postimage1_exlyui.jpg",
      title: "10 Fatos surpreendentes sobre orgasmo que você realmente quer saber",
      slug: "10-fatos-surpreendentes-sobre-orgasmo-que-voce-realmente-quer-saber",
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
            <Link href={`/post/${post.slug}`}>
              <a className="postContainer">
                <div>
                  <img src={post.heroImage} alt={post.title}/>
                </div>
                <p>{post.category}</p>
                <h1>{post.title}</h1>
                <div>
                  <img src={post.authorImg} alt={post.author}/>
                  <p>{post.author}</p>
                  <span>♥</span>
                  <span>{post.publishDate}</span>
                </div>
              </a>
            </Link>
          ))
        }
      </div>
    </HighlightsContainer>
  )
}
