# CMS - Zepelim e o Sopro do Cão (ZSC)

Este projeto é um sistema de gerenciamento de conteúdo (CMS) desenvolvido para a banda **Zepelim e o Sopro do Cão (ZSC)**. Ele permite a exibição de novidades, história da banda, agenda de shows, lançamentos, informações sobre a banda, contato e uma loja interna com integração a uma API de pagamento.

---

## **Funcionalidades**

### **Páginas Principais**
1. **Home**:
   - Destaques e novidades da banda.
2. **História**:
   - Linha do tempo interativa com os marcos importantes da banda.
3. **Agenda de Shows**:
   - Lista dos próximos eventos e shows.
4. **Lançamentos**:
   - Álbuns, músicas e clipes mais recentes.
5. **Banda**:
   - Informações sobre os integrantes.
6. **Contato**:
   - Formulário para contato direto.
7. **Loja**:
   - E-commerce integrado com uma API de pagamento para vendas de produtos oficiais da banda.

### **Integração com Redes Sociais**
- Exibição automática de postagens antigas e novas do Instagram da banda.

### **Design e Estilo**
- Cores principais: Rosa, roxo, verde e branco.
- Layout responsivo para uma experiência otimizada em dispositivos móveis e desktops.

---

## **Tecnologias Utilizadas**

### **Front-end**
- **Angular**:
  - Uso do padrão standalone para organização de componentes e módulos.
  - Rotas configuradas dinamicamente para carregamento sob demanda (lazy loading).

### **Back-end**
- Serviço para integração com APIs (Instagram e pagamento).

### **Estilo**
- CSS e/ou SCSS para estilização personalizada.

---

## **Como Executar o Projeto**

### **1. Requisitos**
- Node.js v18+
- Angular CLI v15+

### **2. Instalação**
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_PROJETO>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

### **3. Executando o Projeto**
1. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
2. Acesse no navegador:
   ```
   http://localhost:4200
   ```

---

## **Estrutura de Pastas**
```plaintext
src/
├── app/
│   ├── components/
│   │   ├── home/          // Componente Home
│   │   ├── historia/      // Componente História
│   │   ├── agenda/        // Componente Agenda
│   │   ├── lancamentos/   // Componente Lançamentos
│   │   ├── banda/         // Componente Banda
│   │   ├── contato/       // Componente Contato
│   │   ├── loja/          // Componente Loja
│   │   └── shared/        // Componentes compartilhados
│   ├── app.routes.ts      // Configuração de rotas
│   ├── app.component.ts   // Componente principal
│   └── main.ts            // Bootstrap da aplicação
```

---

## **Rotas Configuradas**
- `/` - Home
- `/historia` - História
- `/agenda` - Agenda de Shows
- `/lancamentos` - Lançamentos
- `/banda` - Banda
- `/contato` - Contato
- `/loja` - Loja
- `**` - Redireciona para Home

---

## **API de Integrações**

### **Instagram Graph API**
- Endpoint utilizado:
  ```http
  GET https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token={ACCESS_TOKEN}
  ```

### **API de Pagamento**
- Integração com uma API de pagamento para gerenciamento de vendas.
- A ser definido com base na preferência do cliente (ex.: Stripe, Mercado Pago, etc.).

---

## **Contribuição**
1. Fork o repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "Adiciona minha feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## **Licença**
Este projeto é licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

---

## **Contato**
Para dúvidas ou informações, entre em contato:
- **Banda ZSC**: https://www.instagram.com/soprodocao/
- **Desenvolvimento**: Charmandev


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
