# Veterinaria
Site Veterinária

README - VitaPet Clínica Veterinária
📋 Visão Geral
Este projeto é um website completo para a VitaPet Clínica Veterinária, desenvolvido como uma aplicação de página única (SPA) com funcionalidades interativas para agendamento online e navegação fluida entre seções.

🚀 Características Principais
1. Design Moderno e Responsivo
Layout limpo e profissional com paleta de cores veterinária (verde, laranja, branco)

Totalmente responsivo para desktop, tablet e mobile

Animações suaves e transições CSS

Imagens de alta qualidade do Unsplash

2. Arquitetura SPA (Single Page Application)
Navegação entre seções sem recarregar a página

6 seções principais: Home, Serviços, Sobre, Depoimentos, Agendamento e Contato

Menu de navegação persistente com indicador visual ativo

3. Funcionalidades Interativas
Sistema de Agendamento
Calendário interativo para seleção de datas

Horários disponíveis dinâmicos

Formulário completo de agendamento

Confirmação com resumo dos dados

Componentes Dinâmicos
Cards de serviços com preços

Galeria de casos de sucesso

Testemunhos de clientes

Equipe veterinária com perfis

4. Seções do Website
Home (Página Inicial)
Hero Section - Apresentação principal

Serviços em Destaque - 3 principais serviços

Diferenciais - Por que escolher a VitaPet

Tecnologias - Equipamentos avançados

Casos de Sucesso - Histórias de recuperação

CTA Final - Chamada para agendamento

Serviços Detalhados
Serviços clínicos (consultas, vacinação)

Serviços cirúrgicos (castração, ortopedia)

Preços e descrições detalhadas

Sobre a VitaPet
História da clínica

Missão e valores

Equipe veterinária com fotos e especialidades

Depoimentos
Avaliações de clientes reais

Sistema de estrelas (★★★★★)

Fotos dos tutores

Agendamento Online
Calendário interativo

Seleção de horários

Formulário completo com:

Dados do tutor

Informações do pet

Veterinário preferido

Motivo da consulta

Contato
Informações de endereço, telefone e horários

Formulário de contato

Mapa de localização

🛠️ Tecnologias Utilizadas
Frontend
HTML5 - Estrutura semântica

CSS3 - Estilos com variáveis CSS, Flexbox e Grid

JavaScript Vanilla - Interatividade e lógica SPA

Font Awesome - Ícones

Google Fonts - Tipografia (Cormorant Garamond, Montserrat)

Design
CSS Variables - Sistema de cores consistente

Media Queries - Responsividade completa

Animations & Transitions - Experiência fluída

Box Shadows & Gradients - Profundidade visual

📁 Estrutura do Código
Arquivo Principal
index.html - Todo o código em um único arquivo (HTML + CSS + JS)

Seções CSS Organizadas
Variáveis e Reset - Configurações globais

Header e Navegação - Menu responsivo

Componentes Gerais - Botões, cards, títulos

Home Section - 6 subseções

Demais Páginas - Estilos específicos por página

Footer - Rodapé com múltiplas colunas

Responsividade - Breakpoints para mobile

Lógica JavaScript
showPage() - Controle da navegação SPA

toggleMobileMenu() - Menu hamburguer

Sistema de agendamento completo:

updateCalendar() - Renderiza calendário

selectDay() - Seleção de data

selectTime() - Seleção de horário

confirmBooking() - Confirmação de agendamento

📱 Responsividade
Breakpoints
Desktop: > 992px

Tablet: 768px - 992px

Mobile: < 768px

Recursos Mobile
Menu hamburguer

Layouts adaptativos (colunas → linhas)

Tipografia redimensionada

Touch-friendly buttons

🎨 Sistema de Cores
css
:root {
  --primary: #4a8c5e;       /* Verde principal */
  --primary-dark: #3a6f4a;  /* Verde escuro */
  --primary-light: #6aaa7c; /* Verde claro */
  --secondary: #ffb347;     /* Laranja */
  --secondary-dark: #e69c3c;/* Laranja escuro */
  --light: #f9f9f9;         /* Fundo claro */
  --dark: #3a3a3a;          /* Texto escuro */
}
🚀 Como Usar
1. Visualização Local
bash
# Basta abrir o arquivo index.html em qualquer navegador
open index.html
2. Funcionalidades para Testar
Navegação: Clique nos links do menu

Agendamento:

Vá para "Agendar"

Selecione uma data no calendário

Escolha um horário

Preencha o formulário

Clique em "Confirmar Agendamento"

Menu Mobile: Reduza a janela abaixo de 768px

3. Personalização
Para modificar o conteúdo:

Textos: Edite diretamente no HTML

Imagens: Substitua URLs do Unsplash

Cores: Modifique as variáveis CSS na linha 18

Horários: Atualize array workingHours na linha 1036

Serviços: Edite seções na linha 580+

🔧 Funcionalidades JavaScript Detalhadas
Sistema SPA
javascript
// Alterna entre páginas sem recarregar
showPage('home'); // Mostra página inicial
showPage('booking'); // Mostra agendamento
Calendário
Navegação entre meses

Destaque do dia atual

Seleção de datas clicáveis

Validação de datas futuras

Formulário de Agendamento
Validação de campos obrigatórios

Resumo de confirmação

Reset automático após envio

📝 Notas de Implementação
Boas Práticas
SEO Friendly: Meta tags, títulos semânticos

Acessibilidade: Alt text em imagens, navegação por teclado

Performance: Imagens otimizadas, código minimalista

Manutenibilidade: CSS organizado, funções comentadas

Limitações Conhecidas
Armazenamento local apenas (sem backend)

Calendário não bloqueia fins de semana/feriados

Formulários não enviam dados para servidor

🎯 Próximos Passos (Melhorias Potenciais)
Integração Backend

Sistema real de agendamento

Banco de dados de clientes

Envio de e-mails de confirmação

Funcionalidades Avançadas

Upload de fotos dos pets

Histórico de consultas

Lembretes de vacinação

Otimizações

Lazy loading de imagens

PWA (Progressive Web App)

Cache de recursos
