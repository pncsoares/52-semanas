const sections = [
  {
    title: 'O que é o desafio das 52 semanas?',
    content: [
      'É uma estratégia para poupar dinheiro todas as semanas, durante um ano, de forma simples e divertida, como se fosse um jogo.',
    ],
  },
  {
    title: 'Como fazer a poupança das 52 semanas?',
    content: [
      'Um ano tem 52 semanas e o objetivo é ir aumentando em um euro o valor que poupa todas as semanas, ou seja, poupar o equivalente ao número da semana.',
      'Na primeira semana começa por poupar um euro, na seguinte aumenta para dois euros, na terceira passa para três euros e assim consecutivamente, até que na 52.ª e última semana do desafio, poupa 52 euros. Se mantiver o ritmo, quando chegar ao final terá conseguido colocar de lado 1378 euros quase sem se dar conta.',
    ],
  },
  {
    title: 'Porque é que o método 52 semanas funciona?',
    list: [
      {
        bold: 'Começa a poupar com pouco.',
        text: 'Ideal para quem acredita que não consegue poupar. Como começa com apenas um euro e vai aumentando o valor todas as semanas, parece mais simples alcançar a meta com sucesso.',
      },
      {
        bold: 'Cria um hábito.',
        text: 'À medida que vê a poupança crescer e percebe que tem essa capacidade de aforro, aumenta também a sua motivação. Um fator fundamental para conseguir poupar a longo prazo.',
      },
      {
        bold: 'Poupa gradualmente.',
        text: 'Para atingir a meta dos 1 378 euros num ano, teria que poupar, da forma tradicional, 114,83 euros por mês, o que pode ser difícil para algumas famílias. Com o desafio das 52 semanas, a poupança é gradual, dando tempo ao seu cérebro e à sua carteira para se habituar a este novo hábito.',
      },
      {
        bold: 'Diverte-se enquanto poupa.',
        text: 'Um desafio é uma forma de entretenimento, principalmente se envolver toda a família. Se todos contribuírem para o mesmo objetivo - principalmente nos últimos meses em que o montante de poupança é maior - o esforço é menor. E o que é tipicamente uma tarefa chata, que não traz gratificação instantânea, torna-se num jogo de poupança divertido que todos querem ganhar.',
      },
    ],
  },
  {
    title: 'Mas prepare-se para as dificuldades',
    content: [
      'Poupar um euro na primeira semana ou dois na segunda semana é simples e pode estar ao alcance de qualquer pessoa. Porém, à medida que o desafio avança e o valor semanal também, pode sentir dificuldades acrescidas para concluir a missão com sucesso. Por exemplo, se no primeiro mês o total de poupança é 10 euros, no último mês já passa a ser 202 euros.',
    ],
  },
];

export default function HowTo() {
  return (
    <div className="flex flex-col p-5 sm:p-10 justify-center gap-6">
      <div className="flex flex-col gap-3 font-bold">
        Poupar não é fácil. Enquanto seres humanos, temos a tendência para privilegiar os desejos
        imediatos sobre as necessidades do futuro e, por esse motivo, adiamos ou evitamos a
        poupança. Para dar o primeiro passo e começar a aforrar, comecemos pelo desafio de poupança
        das 52 semanas.
      </div>
      {sections.map((section, idx) => (
        <div
          key={section.title}
          className="flex flex-col gap-3"
        >
          <h2 className="text-2xl">{section.title}</h2>
          {section.content && section.content.map((text, i) => <p key={i}>{text}</p>)}
          {section.list && (
            <ul className="list-disc list-inside ml-5 flex flex-col gap-3">
              {section.list.map((item, i) => (
                <li key={i}>
                  <span className="font-bold">{item.bold}</span> {item.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
