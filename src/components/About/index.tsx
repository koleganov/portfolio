import React from 'react'
import logo from '../../assets/images/logo.svg'

const aboutItems = [
    {
      label: 'Project done',
      number: 10
    },
    {
      label: 'Years of experience',
      number: 3
    }
  ];

const About: React.FC = () => {
  return (
    <section id='about' className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] reveal-up">
                Привет! Меня зовут Константин, я веб-разработчик, создающий современные, удобные и адаптивные сайты. Я не гонюсь за громкими словами — просто качественно выполняю свою работу: от идеи до готового результата. Использую актуальные технологии и практики, уделяю внимание внешнему виду и удобству для пользователя. Мои сайты отлично выглядят и работают на всех устройствах. Всегда открыт к диалогу, на связи и довожу дело до конца. Я не просто пишу код — я создаю решения, которые работают на ваш результат.</p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label,number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }
                    <img src={logo} alt="" className="ml-auto md:w-[40px] md:h-[40px]" width={30} height={30}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About