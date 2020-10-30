import { SobreContainer } from '../styles/pages/Sobre';

export default function Sobre() {
  return (
    <SobreContainer>
      <div>
        <h1>Sobre nós</h1>
      </div>
      <main>
        <img src={`${process.env.NEXT_PUBLIC_SITE_URL}/images/yoni.svg`} alt="yoni logo" />
        <div className="topContainer">
          <p>é uma palavra do sânscrito que significa:</p>
          <ul>
            <li><span> ♥ </span> passagem divina</li>
            <li><span> ♥ </span> lugar de nascimento</li>
            <li><span> ♥ </span> fonte de vida</li>
            <li><span> ♥ </span> templo sagrado</li>
          </ul>
          <p>também é o termo usado </p>
          <p>para designar a vulva.</p>
          <img src="https://res.cloudinary.com/dcnqq10ni/image/upload/c_scale,w_701/v1604088727/yoni-images/vulva_xbfqyu.png" alt="vulva" className="vulva" />
        </div>
        <div className="gridContainer">
          <div>
            <p>Queremos que você encontre aqui todo conhecimento para se apropriar do seu corpo, que é o seu templo sagrado.</p>
            <br />
            <br />
            <p>Além disto queremos ajudar a quebrar tabus e estigmas.</p>
            <br />
            <br />
            <p>Contamos com espaços de diálogo para que todas possam se expressar e encontrar um lugar de acolhimento sem julgamentos.
    Juntas somos ainda mais fortes. </p>
          </div>
          <img src="https://res.cloudinary.com/dcnqq10ni/image/upload/c_scale,w_755/v1604089759/yoni-images/dance_xjlsee.png" alt="dancing" className="dance" />
        </div>
      </main>
    </SobreContainer>
  )
}
