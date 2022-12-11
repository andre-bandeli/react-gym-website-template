
## React Web Page | Template para Academia | Integração api Django

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)


Desenvolvimento de uma landing page utilizando react js, scss, html5, google maps api, react router dom e integração com django.

[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)

## Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.
Os comandos a seguir são realizados em ambiente linux ubuntu 20 (consulte os comandos referentes ao seu sistema operacional).

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Nodejs
```
```
Python (aqui estou utilizando versão >3)
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

#### Client (frontend)
Clone o repositório para sua máquina local:
```
 git clone https://github.com/andre-bandeli/react-gym-website-template.git
```
Caminhe até a pasta :
```
 cd gym/gym-website
```
Execute o comando a seguir para instalar as dependências necessárias da aplicação:
```
 npm install
```
Execute o server da aplicação (porta default: 3000)
```
 npm start
```

#### Server (backend)

Caso não tenha uma venv, siga os passos a seguir:
```
python3 -m venv env
```
```
    cd env
```
    source bin/activate
```
    cd .. 
```
Entre no dirtório raiz do projeto (backend) e instale as dependências
```
    cd gym 
```
```
    pip install -r requirements.txt
```
Crie um novo usuário:
```
    python3 manage.py createsuperuser
```
Rode os comandos de migração:
```
    python3 manage.py migrate
```
```
    python3 manage.py makemigrations
```
Rode o servidor:
```
    python3 manage.py runserver
```

### Google Maps API:

Pacote google maps api react (npm): 

                npm i @react-google-maps/api
                
Pacote google maps api react (yarn):
                
                yarn add @react-google-maps/api
               
Console Google developers
                
                https://console.cloud.google.com/apis?_ga=2.238099392.1795437150.1659617001-977223609.1659617001&_gac=1.258016120.1659617001.CjwKCAjw3K2XBhAzEiwAmmgrAkwmn5cjp86Jxh80l4b5PeaUHmaz4HTTbw9C_cljPR6grD1Zkodx0BoC2a0QAvD_BwE

Crie as credenciais:
        
                > Credenciais
                > + create credentials
                > chave de api


## 🛠️ Construído com

* [Python3](https://www.python.org/) - Linguagem backend
* [Django](https://www.djangoproject.com/) - Framework Web Python
* [React JS](https://pt-br.reactjs.org/) - Biblioteca JavaScript
* [SCSS](https://sass-lang.com/) - Folha de estilo

---


