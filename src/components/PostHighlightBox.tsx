import Link from 'next/link';

import { PostBoxContainer } from '../styles/components/PostBoxContainer';

export default function Header({ post }) {
  return (
    <Link href={`/post/${post.slug}`}>
      <PostBoxContainer>
        <div className="postImageContainer">
          <img src={post.heroImage} alt={post.title}/>
        </div>
        <div className="postInfoContainer">
          <h2>{post.title}</h2>
          <div className="postAuthorContainer">
            <img src={post.authorImg} alt={post.author}/>
            <div>
              <p>{post.author}</p>
              <span>♥</span>
              <span>{post.publishDate}</span>
            </div>
          </div>
        </div>
      </PostBoxContainer>
    </Link>
  )
}
