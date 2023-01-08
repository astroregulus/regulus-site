export default function Rodape() {
  return (
    <footer className="bg-blue-regulus text-blue-100 max-w-full px-4 py-10">
      <div className="s:mx-36 sm:pb-24">
        <div className="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 justify-items-center">
          <div>
            <p>Rua Estela, 515 - Bl.E - Cj.71</p>
            <p>São Paulo - SP -Brazil</p>
            <p><a href="tel:+551155492655">+55 (11) 5549-2655</a> após as 14h</p>
            <p><a href="mailto:astrologia@regulus.com.br">astrologia@regulus.com.br</a></p>
          </div>
          <div>
            <ul>
              <li><a href="https://www.instagram.com/regulus.astrologia/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com/astroregulus/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.youtube.com/user/astrologiaregulus" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://www.facebook.com/regulus.cursos" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <ul>
                <li>Cursos</li>
                <li>Formação</li>
                <li>Sobre</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Software</li>
                <li>Professores</li>
                <li>Serviços</li>
                <li>Acesso aluno</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}