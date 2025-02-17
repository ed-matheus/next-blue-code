import Image from 'next/image'
import styles from './sobre.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// imagens
import aboutIllustration from '@/../public/development.png'
import techSolution from '@/../public/tech-solution.jpg'
import support from '@/../public/support.jpg'
import innovation from '@/../public/innovation.jpg'

// ícones
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

const Sobre = () => {
    return (
        <div className='w-full'>
            {/* Introdução da Página */}
            <div className={styles.about_intro}>
                <h1 className='-mt-1'>Transformando Ideias em Soluções Tecnológicas</h1>
                <h2 className='text-xl -mt-3'>Conheça a BlueCode e como estamos moldando o futuro da tecnologia</h2>
            </div>

            {/* Seção Sobre a Empresa */}
            <section className={styles.about_container}>

                <div className={styles.about_us}>
                    <div className={styles.about_content}>
                        <h1 className='font-medium'>
                            Quem Somos
                            <FontAwesomeIcon
                                className='ms-3'
                                icon={faLaptop}
                                />
                        </h1>
                        <p className='w-full'>
                            A BlueCode é uma startup inovadora que transforma tecnologia em soluções reais.
                            Nosso propósito é oferecer ferramentas e serviços tecnológicos de ponta para
                            impulsionar empresas no mundo digital. <br/><br/>
                            Combinamos expertise técnica, design funcional e atendimento personalizado
                            para garantir que nossos clientes alcancem novos patamares de eficiência
                            e resultados.
                        </p>
                    </div>

                    <Image className={styles.image} src={aboutIllustration} alt='desenvolvimento web (vetor)' />
                </div>

                <div className={styles.company_mission}>
                    <div className={styles.missions}>
                        <h1 className='text-center font-medium mb-12'>Nossa Missão</h1>
                        
                        <div className={styles.topics}>

                            <div className='flex flex-col items-center me-3'>
                                <Image className={styles.topic_image} src={techSolution} alt='solução tech' />
                                <h2 className='text-center'>
                                    Fornecer soluções tecnológicas inovadoras e acessíveis para
                                    impulsionar o crescimento das empresas.
                                </h2>
                            </div>
    
                            <div className='flex flex-col items-center me-3'>
                                <Image className={styles.topic_image} src={innovation} alt='' />
                                <h2 className='text-center'>
                                    Ser referência em inovação e qualidade no setor tecnológico,
                                    ajudando negócios a prosperarem na era digital.
                                </h2>
                            </div>
                                
                            <div className='flex flex-col items-center'>
                                <Image className={styles.topic_image} src={support} />
                                <h2 className='text-center'>
                                    Inovação, compromisso, excelência e suporte contínuo para entregar
                                    tecnologia com qualidade e eficiência.
                                </h2>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sobre