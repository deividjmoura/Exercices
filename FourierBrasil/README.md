# O Brasil desenhado por círculos que giram (Série de Fourier)

Reprodução fiel do que é demonstrado no short:

**https://youtube.com/shorts/CPDtGtcx6PM**

## O que é

Qualquer curva fechada pode ser decomposta em uma **série de Fourier complexa**.  
Cada termo da série é um vetor que gira com frequência constante (um **epiciclo**).  
A ponta do último vetor traça o desenho original.

Neste projeto usamos o contorno simplificado do Brasil e aplicamos a **Transformada Discreta de Fourier (DFT)** para obter os coeficientes.

## Como rodar

Basta abrir o `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).

Não precisa de build, servidor ou dependências.

```bash
# ou sirva localmente se preferir
npx serve .
```

## Controles

- **Círculos**: quantos termos da série usar (mais = mais detalhe)
- **Velocidade**: velocidade da animação
- **Pausar / Continuar**
- **Reiniciar**: limpa o traço e recomeça
- **Mostrar círculos**: liga/desliga a visualização dos epiciclos

## Arquivos

| Arquivo       | Descrição                                      |
|---------------|------------------------------------------------|
| `index.html`  | Página principal                               |
| `style.css`   | Estilos                                        |
| `fourier.js`  | Implementação completa (JS vanilla)            |
| `fourier.ts`  | Versão TypeScript da matemática (referência)   |

## Matemática (resumo)

Dado um conjunto de pontos \( (x_n, y_n) \) amostrados na curva, tratamos cada ponto como número complexo \( z_n = x_n + i y_n \).

A DFT é:

\[
X_k = \frac{1}{N} \sum_{n=0}^{N-1} z_n \, e^{-2\pi i k n / N}
\]

Cada \( X_k \) define um círculo de:

- **raio** = \( |X_k| \)
- **fase inicial** = \( \arg(X_k) \)
- **frequência** = \( k \)

Ordenamos por amplitude (maior primeiro) para a animação ficar visualmente limpa.

## Créditos

Inspirado diretamente no vídeo do canal **@canalraizdosaber**.

Criado para o repositório de exercícios de Deivid De Jesus De Moura.
