import listaDeUsuarios from './mocks/index.js'

const $listaBox = document.querySelector('.lista-box')

const $form = document.querySelector('.form')
const $imageValue = document.querySelector('.image-value')
const $nomeValue = document.querySelector('.nome-value')
const $sobrenomeValue = document.querySelector('.sobrenome-value')
const $whatsappValue = document.querySelector('.whatsapp-value')
const $emailValue = document.querySelector('.email-value')
const $buttonadd = document.querySelector('.button-add')



const criarLi = (user) => {
    const $li = document.createElement('li')
    $li.classList.add('lista')
    $listaBox.appendChild($li)

    const $image = document.createElement('img')
    $image.src = user.image
    $image.classList.add('imagem')
    $li.appendChild($image)

    const $informacoesEmbrulho = document.createElement('div')
    $informacoesEmbrulho.classList.add('informacoes-embrulho')
    $li.appendChild($informacoesEmbrulho)

    const $boxNome = document.createElement('p')
    $boxNome.classList.add('box-nome')
    $informacoesEmbrulho.appendChild($boxNome)

    const $nome = document.createElement('span')
    $nome.classList.add('primeiro-nome')
    $nome.textContent = user.nome
    $boxNome.appendChild($nome)

    const $segundoNome = document.createElement('span')
    $segundoNome.classList.add('segundo-nome')
    $segundoNome.textContent = user.segundoNome
    $boxNome.appendChild($segundoNome)

    const $boxInformacoes = document.createElement('div')
    $boxInformacoes.classList.add('box-informacoes')
    $informacoesEmbrulho.appendChild($boxInformacoes)

    const $whatsapp = document.createElement('a')
    $whatsapp.classList.add('whatsapp')
    $boxInformacoes.appendChild($whatsapp)
    $whatsapp.textContent = user.whatsapp
    $whatsapp.href = 'https://api.whatsapp.com/send?phone=55' + user.whatsapp + '&text=eaw'

    const $email = document.createElement('span')
    $email.classList.add('email')
    $boxInformacoes.appendChild($email)
    $email.textContent = user.email
}
const imprimirUsuarios = (usuarios) => {

    for (const user of listaDeUsuarios) {
        criarLi(user)

    }
}
imprimirUsuarios(listaDeUsuarios)

$form.addEventListener('submit', (event) => {
    event.preventDefault()

    const novoUsuario = {
        image: $imageValue.value,
        nome: $nomeValue.value,
        segundoNome: $sobrenomeValue.value,
        whatsapp: $whatsappValue.value,
        email: $emailValue.value,
    }
    listaDeUsuarios.push(novoUsuario)
    $buttonadd.classList.toggle('button-add-click')
    setTimeout(() => {
        $buttonadd.classList.toggle('button-add-click')
    }, 250);
    $listaBox.innerHTML = ''
    imprimirUsuarios(listaDeUsuarios)


})