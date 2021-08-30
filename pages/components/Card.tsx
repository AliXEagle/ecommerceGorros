import Image from 'next/image'
import imgGorro from '../../assets/gorro.jpg'

function Card() {
  return (
    <div className="m-4 mb-14 md:mb-6 border-2 border-gray-900 rounded-xl">
      <Image
        className="rounded-xl"
        alt="logo"
        src={imgGorro}
        layout="responsive"
        width={300}
        height={500}
      />
      <h2 className="p-2">Piña Colada</h2>
      <hr />
      <p className="p-2 text-sm font-serif">
        Gorro de tela versión abierta y cerrada.
        Medida 90cms.
        Tela: Algodón/Poliester
      </p>
    </div>
  )
}

export default Card
