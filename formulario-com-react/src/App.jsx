import { useForm } from 'react-hook-form'
import './css/reset.css'
import './css/responsive.css'

function App() {

  //Dentro do useForm tem várias informações dentro dele. Aqui estamos extraindo o register, handleSubmit e formState para os erros do useForm().
  //O hook-form tem um método chamado watch. Esse método fica observando a mudança dos inputs.
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
  }

  return (
    <main>
      <div className='duvidas'>
        <h1>Ficou com dúvida? Nos mande uma mensagem!</h1>

        <p>Caso tenha ficado com qualquer dúvida basta nos mandar uma mensagem que entraremos em contato em menos de 24h.</p>
      </div>

      <form className='form' onSubmit={handleSubmit(handleSubmitForm)}>
        <label htmlFor="nome" />
        <input
          type='text'
          id='nome'
          placeholder='Nome Completo *'
          className={`campo ${errors.nome ? 'campo-obrigatorio' : 'campo-preenchido'}`}
          {...register('nome', {
            required: "Campo Obrigatório"
          })
          }
        />
        {errors.nome && <p>{errors.nome.message}</p>}

        <label htmlFor="email" />
        <input
          type="email"
          id='email'
          placeholder='Email *'
          className={`campo ${errors.email ? 'campo-obrigatorio' : 'campo-preenchido'}`}
          {...register('email', {
            required: "Campo Obrigatório"
          })
          }
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="telefone" />
        <input
          type="text"
          id='telefone'
          placeholder='Telefone *'
          className={`campo ${errors.telefone ? 'campo-obrigatorio' : 'campo-preenchido'}`}
          {...register('telefone', {
            required: "Campo Obrigatório"
          })
          }
        />
        {errors.telefone && <p>{errors.telefone.message}</p>}

        <label htmlFor="mensagem" />
        <textarea
          id='mensagem'
          cols='30'
          rows='5'
          placeholder='Mensagem *'
          className={`campo ${errors.mensagem ? 'campo-obrigatorio' : 'campo-preenchido'}`}
          {...register('mensagem', {
            required: "Campo Obrigatório"
          })
          }
        />
        {errors.mensagem && <p>{errors.mensagem.message}</p>}

        <p className='instrucao'>* Campos Obrigatórios</p>

        <button type='submit' className='btn-submit'>Enviar</button>

      </form>
    </main>
  )
}

export default App