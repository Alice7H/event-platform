import Button from '../Button'

export default function HomeForm() {
  return (
    <form className="w-full md:w-auto p-8 border border-gray-600 bg-gray-700">
      <fieldset className="flex flex-col border-none gap-2">
        <legend className="text-bold text-2xl">Inscreva-se gratuitamente</legend>
        <label htmlFor="name">Nome</label>
        <input 
          className="text-base mt-6 h-14 rounded-[5px] p-5 bg-gray-900
          hover:border-green-300 invalid:border-red-500"
          type="text" 
          id="name" 
          name="name" 
          placeholder="Seu nome completo"
        />

        <label htmlFor="email">E-mail</label>
        <input 
          className="text-base mb-5 h-14 rounded-[5px] p-5 bg-gray-900
          hover:border-green-300 invalid:border-red-500"
          type="email" 
          id="email" 
          name="email" 
          placeholder="Digite seu e-mail" 
        />

        <Button variant="primary">
          Garantir minha vaga
        </Button>
      </fieldset>
    </form>
  )
}
