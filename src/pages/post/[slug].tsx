import Link from 'next/link';
import { useRouter } from 'next/router';

import Highlights from '../../components/Highlights';
import { PostContainer } from '../../styles/pages/Post';

export default function Post() {
  // const router = useRouter();
  // <h1>{router.query.slug}</h1>

  return (
    <PostContainer>
      <header>
        <p>Sexualidade</p>
        <h1>Por que as mulheres precisam de duas vezes mais sexo que os homens</h1>
        <div>
          <img src="https://res.cloudinary.com/dcnqq10ni/image/upload/v1603912363/yoni-images/avatar1.png" alt="Creator avatar"/>
          <p>Stephanie Estima</p>
          <span>♥</span>
          <span>23, julho 2019</span>
        </div>
        <h2>A única diferença entre o cérebro masculino e feminino que a maioria das pessoas não conhece e como isso pode prejudicar seus relacionamentos</h2>
      </header>
      <main>
        <img src="https://res.cloudinary.com/dcnqq10ni/image/upload/v1603911895/yoni-images/firstpostimage.jpg" alt="post image"/>
        <p>
          Você já esteve em um relacionamento fracassado?
          Você costuma sentir que seu parceiro não o entendeu?
          Quando você pesquisa os principais motivos pelos quais os relacionamentos e os casamentos desmoronam, dois dos mais comuns são:
          'falta de comunicação'
          …e…
          'Diferenças na libido'.
          Há também um equívoco comum de que os homens querem mais sexo do que mulheres.
          Isso é totalmente falso e vou explicar a ciência por trás deste artigo (juntamente com como nivelar o campo de jogo quando se trata de desejo sexual).
          E com relação à "falta de comunicação" - NÃO é que não haja comunicação suficiente ...
          ... homens e mulheres não entendem COMO cada um de seus cérebros funciona.
          Vou simplificar a neurociência para que você:
          entender como seu cérebro funciona
          como o cérebro do seu parceiro funciona,
          e como usar esse entendimento para aprimorar seus relacionamentos.</p>
        <img src="https://res.cloudinary.com/dcnqq10ni/image/upload/v1604147129/yoni-images/post-image2_e8gu2i.jpg" alt="post image 2"/>
        <h3>O LADO DIREITO DO CÉREBRO (FEMININO)</h3>
        <p>
          Quando passamos para o cérebro direito, as coisas ficam um pouco mais interessantes.
          O cérebro direito é mais sensual.
          É mais criativo. É emocional. É paixão.
          Isso tende a ser mais do que chamamos de cérebro "feminino" e, novamente, os homens podem ser sensuais e apaixonados, mas esses são traços mais femininos.
          É aqui que a serotonina vive, nosso hormônio feliz.
          A serotonina é um neurotransmissor do cérebro direito, e a diferença aqui e a chave:
          Você NÃO pode aumentar seus próprios níveis de serotonina.
          A serotonina é aumentada EXTERNAMENTE.
          É elevado pelo feedback positivo de nossos entes queridos, nosso trabalho e nosso ambiente.
          É importante entender porque os níveis de serotonina aumentam os níveis de dopamina.
        </p>
      </main>
      <section>
        <Highlights />
        <Link href="/assuntos/sexualidade">
          <a>Veja mais notícias na página de sexualidade</a>
        </Link>
      </section>
    </PostContainer>
  )
}
