import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import codeMockup from '/src/assets/banner-background.png';

export default function Subscribe() {
  const navigate = useNavigate();

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();
  
  async function handleSubmit(event: FormEvent):Promise<void> {
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate("/event")
  }

  return (
    <>
      <main className="bg-blur bg-cover bg-no-repeat flex flex-col items-center min-h-screen">
        <div className="bg-react bg-top bg-contain bg-no-repeat w-full max-w-[1100px] flex flex-col md:flex-row items-center justify-between mt-20 mx-auto gap-6 md:px-8">
          <div className="max-w-[648px] flex flex-col md:items-start items-center text-center md:text-left mt-10 px-8 md:px-0">
            <Logo />
            <h1 className="text-3xl md:text-[2.5rem] mt-8 leading-tight">
              Construa uma <strong className="text-blue-500">aplicação completa</strong>, 
              do zero, com <strong className="text-blue-500">React JS</strong>
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-gray-200 mt-4">
              Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
            </p>
          </div>

          <div className="w-full md:w-auto p-8 bg-gray-700 border-gray-500 rounded">
            <strong className="text-bold text-[18px] leading-relaxed md:text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
            <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
              <label htmlFor="name">Nome</label>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-5 h-14 rounded-[5px] px-5 bg-gray-900 hover:border-green-300 invalid:border-red-500"
                name="name"
                id="name"
                type="text"
                placeholder="Seu nome completo"
              />

              <label htmlFor="email">E-mail</label>
              <input 
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mb-5 h-14 rounded-[5px] px-5 bg-gray-900 hover:border-green-300 invalid:border-red-500"
                name="email"
                id="email"
                type="email" 
                placeholder="Digite seu e-mail" 
              />

              <button className="text-gray-100 bg-green-500 hover:bg-green-700 p-4 text-sm font-bold flex items-center justify-center rounded uppercase gap-2 transition-colors disabled:opacity-50"
                type="submit"
                disabled={loading}
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img src={codeMockup} alt="Code Mockup" className="mt-10 px-2 md:px-40" />
      </main>
      <Footer/>
    </>
  )
}
