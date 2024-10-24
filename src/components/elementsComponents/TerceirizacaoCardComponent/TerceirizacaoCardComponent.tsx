import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import LinkComponent from '../LinkComponent/LinkComponent'

function TerceirizacaoCardComponent() {

  const imagesLeft = [
    "https://jardinsecia.com.br/wp-content/uploads/2023/05/paisagismo-jardinagem-jardinsecia13.jpg",
    "https://jardinsecia.com.br/wp-content/uploads/2023/05/paisagismo-jardinagem-jardinsecia12.jpg",
  ]

  const imagesRight = [
    
    "https://jardinsecia.com.br/wp-content/uploads/2023/05/paisagismo-jardinagem-jardinsecia11.jpg",
    "https://jardinsecia.com.br/wp-content/uploads/2023/05/paisagismo-jardinagem-jardinsecia7.jpg"
  ]

  return (
    <div className='flex flex-wrap justify-center my-20 gap-20'>
        <div className="w-[300px]">
            <span className='text-[#3a8637] uppercase mb-10'>conheça nossos serviços de</span>
            <h2 className='text-[48px] uppercase mb-10'>terceirização</h2>
            <p className='text-[16px] text-[#7f7f7f] mb-5'>A terceirização fornece uma solução completa para os serviços de paisagismo e jardinagem. Além de contar com os serviços profissionais de uma empresa espeializada, os benefícios da terceirização incluem:</p>
            <p className='text-[14px] text-[#333333] my-10'>Economia, gestão e tranquilidade sem preocupação com contração, organização de escala, folha de pagamento, treinamento. E ainda com a vantagem de ter controle sobre o orçamento e economia com equipamentos, sem a preocupação com manutenção, depreciação ou necessidade de substituição do equipamento. </p>
            <ButtonComponent style="text-white bg-[#9abd6b] hover:bg-[#b1b968] hover:opacity-[53%] mx-0" text="quero contratar"/><br/>
            <LinkComponent style="" text="envie sua mensagem"/>
        </div>
        <div className="grid grid-cols-2 w-full xl:w-1/2 gap-0 h-9">
          <div className="grid grid-rows-2 w-full">
            {imagesLeft.map((image, index)=>(
              <img key={index} className='w-full' src={image} alt="" />
            ))}
          </div>
          <div className="grid grid-rows-2 w-full">
            {imagesRight.map((image, index)=>(
              <img key={index} className='w-full' src={image} alt="" />
            ))}
          </div>
        </div>
    </div>
  )
}

export default TerceirizacaoCardComponent