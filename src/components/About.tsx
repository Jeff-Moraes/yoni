import { AboutContainer } from '../styles/components/About';

export default function About() {
  return (
    <AboutContainer dropSrc="https://res.cloudinary.com/dcnqq10ni/image/upload/v1603918587/yoni-images/daydropbackground_cse1fg.jpg">
      <div className="titleContainer">
        <img src={`${process.env.NEXT_PUBLIC_SITE_URL}/images/yoni.svg`} alt="yoni logo" />
        <h1>Quem somos nós?</h1>
        <p>Nós da yoni somos um portal feito com todo o carinho por mulheres para mulheres, nos ajudando a crescer e se autocohecer de maneira leve e divertida!</p>
        <a href="/sobre">Saiba mais</a>
      </div>
      <div className="dropsContainer">
        <div>
          <h2>Daily drops</h2>
          <p>"Acredito em ser forte quando tudo parece dar errado. Eu acredito que garotas felizes são as garotas mais bonitas. Acredito que amanhã é outro dia e acredito em milagres. ”</p>
          <span>Audrey Hepburn</span>
        </div>
      </div>
      <div className="backgroudColorContainer"></div>
    </AboutContainer>
  )
}
