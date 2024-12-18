const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_API_KEY});

export async function generateFinancialAdvice(profile: string):Promise<string> {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "user",
                    "content": "Estou fazendo um app onde o usuario entrará uma lista de palavras que combinam com o seu perfil, e devo responder com conselhos financeiros."
                },
                {
                    "role": "assistant",
                    "content": "Que ideia interessante! Eu vou sugerir algumas ações, tais com: Monitore suas receitas e despesas: Use planilhas ou aplicativos financeiros para saber para onde está indo seu dinheiro. Priorize gastos essenciais: Como moradia, alimentação, saúde e transporte. Use o crédito com responsabilidade: Evite parcelamentos e financiamentos com juros altos."
                },
                {
                    "role": "user",
                    "content": "quero te enviar a lista de palvras e você irá me responder somente com o conselho financeiro."
                },
                {
                    "role": "assistant",
                    "content": "Envie o evento e eu responderei com o conselho financeiro."
                },
                {
                    "role": "user",
                    "content": "Sou casado, tenho pets e ganho dinheiro extra."
                },
                {
                    "role": "assistant",
                    "content": "Priorize um orçamento familiar que contemple as despesas essenciais, incluindo cuidados com os pets, e aloque parte do dinheiro extra para metas específicas.\nMonte um fundo de emergência que cubra pelo menos 6 meses de despesas da família, incluindo imprevistos com os animais.\nUse o dinheiro extra para investimentos diversificados que possam gerar renda no futuro, como fundos, ações ou uma previdência privada.\n Evite aumentar o padrão de vida apenas porque a renda extra entrou, focando em acumular patrimônio e reduzir dívidas.\nReserve um valor fixo para lazer em família e com os pets, equilibrando a segurança financeira com momentos de qualidade."
                },
                {
                    "role": "user",
                    "content": profile
                },
            ],
            "model": "llama-3.1-70b-versatile",
            "temperature": 1,
            "max_tokens": 200,
        });

        return chatCompletion.choices[0]?.message.content;
    } catch (error) {

        const advices = `O planejamento financeiro é fundamental para garantir estabilidade e realizar seus sonhos. O primeiro passo é entender sua situação atual: monitore suas receitas e despesas, anotando tudo. Isso ajudará a identificar onde você pode economizar e como distribuir melhor seus recursos.

Estabeleça metas claras, como quitar dívidas, criar uma reserva de emergência ou investir para o futuro. Priorize as necessidades básicas e defina limites para gastos supérfluos. Criar um orçamento mensal é essencial para manter o controle e evitar surpresas.

A construção de uma reserva de emergência deve ser uma prioridade. Essa quantia, equivalente a pelo menos três meses de despesas essenciais, será sua proteção em momentos de imprevistos, como perda de renda ou emergências médicas.

Evite dívidas desnecessárias. Use o crédito com sabedoria, pagando sempre o valor total das faturas de cartão de crédito. Caso tenha dívidas, renegocie prazos e taxas de juros mais baixos.

Outra etapa importante é pensar no futuro. Reserve uma parte de sua renda para investir. Escolha opções de investimento que estejam alinhadas ao seu perfil de risco e objetivos, sejam elas em renda fixa, fundos ou ações. Começar cedo aumenta significativamente os resultados.

Por fim, eduque-se financeiramente. Entender conceitos básicos, como inflação, juros compostos e diversificação, fará diferença nas suas decisões. Planejar é mais do que economizar; é construir um caminho para realizar seus objetivos com segurança.

Com disciplina e um bom planejamento, você estará mais preparado para enfrentar os desafios e aproveitar as oportunidades. Seu futuro financeiro começa hoje!`

        return advices
    }
}



