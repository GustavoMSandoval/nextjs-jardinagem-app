import React from 'react'


export default function LandingPageFooter() {
 const logo = '/logo.jpg'; 
 
 return (

<footer className="bg-[#063345]" id='contact'>
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <img src={logo} className="h-14 me-3 mr-5 " alt="FlowBite Logo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Links</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:underline">Sobre</a>
                      </li>
                      <li className="mb-4">
                          <a href="" className="hover:underline">Serviços</a>
                      </li>
                      <li className="mb-4">
                          <a href="" className="hover:underline">Clientes</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contatos</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:underline "> (11) 5686-9059</a>
                      </li>
                      <li>
                          <a href="" className="hover:underline">R. Adão Norberto de Andrade, 193 <br/> - Jurubatuba, São Paulo - SP,<br/> 04675-150</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Promofix™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16 0C7.164 0 0 7.164 0 16c0 2.822.738 5.505 2.134 7.872L.016 32l8.29-2.148A15.928 15.928 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.002 23.872c-.34.956-1.684 1.796-2.744 2.01-.736.156-1.676.284-4.842-1.03-4.08-1.698-6.7-5.826-6.91-6.098-.21-.272-1.648-2.19-1.648-4.178 0-1.988.984-2.968 1.332-3.356.348-.388.756-.486 1.008-.486h.726c.236 0 .552-.088.86.66.34.784 1.156 2.708 1.26 2.904.104.196.174.43.034.702-.138.272-.208.43-.412.668-.204.236-.43.53-.616.712-.208.206-.426.43-.184.842.242.412 1.084 1.784 2.33 2.892 1.598 1.406 2.94 1.848 3.344 2.048.408.2.648.172.894-.104.246-.276 1.024-1.188 1.296-1.596.272-.408.544-.34.918-.204.374.136 2.376 1.12 2.788 1.324.412.208.684.308.784.484.104.172.104 1.008-.236 1.964z"/>
                </svg>
                  <span className="sr-only">Whatsapp</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.796.24 2.214.403.555.214.952.472 1.372.892.42.42.678.817.892 1.372.163.418.35 1.044.403 2.214.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.796-.403 2.214a3.545 3.545 0 0 1-.892 1.372 3.545 3.545 0 0 1-1.372.892c-.418.163-1.044.35-2.214.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.796-.24-2.214-.403a3.545 3.545 0 0 1-1.372-.892 3.545 3.545 0 0 1-.892-1.372c-.163-.418-.35-1.044-.403-2.214-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.796.403-2.214a3.545 3.545 0 0 1 .892-1.372 3.545 3.545 0 0 1 1.372-.892c.418-.163 1.044-.35 2.214-.403 1.266-.058 1.646-.07 4.85-.07M12 0C8.736 0 8.332.014 7.052.072 5.772.13 4.722.325 3.845.675c-.878.35-1.602.82-2.326 1.545C.819 3.944.35 4.668 0 5.546.325 4.722.72 3.672.675 2.948.325 4.722.13 5.772.072 7.052.014 8.332 0 8.736 0 12s.014 3.668.072 4.948c.058 1.28.253 2.33.603 3.207.35.878.82 1.602 1.545 2.326.724.724 1.448 1.195 2.326 1.545.878.35 1.927.545 3.207.603C8.332 23.986 8.736 24 12 24s3.668-.014 4.948-.072c1.28-.058 2.33-.253 3.207-.603.878-.35 1.602-.82 2.326-1.545.724-.724 1.195-1.448 1.545-2.326.35-.878.545-1.927.603-3.207C23.986 15.668 24 15.264 24 12s-.014-3.668-.072-4.948c-.058-1.28-.253-2.33-.603-3.207-.35-.878-.82-1.602-1.545-2.326-.724-.724-1.448-1.195-2.326-1.545C18.33.325 17.28.13 16 .072 14.668.014 14.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.349-10.848a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                </svg>

                  <span className="sr-only">Instagram</span>
              </a>
          </div>
      </div>
    </div>
</footer>

  )
}

