//JORGE FERRERO DE LARA Y GINA ANDREA RAMIREZ

type TriviaProps = {
    question: string;
    answer: string;  
  }
  
  export default function TriviaComp({ question, answer }: TriviaProps) {
    return (
      <div class="container">
        <h1>Trivia</h1>
        <h2>{question}</h2>
  
        <form action="/trivia" method="POST">
          <input
            type="text"
            name="userAnswer"
            placeholder="Escribe tu respuesta"
            required
          />
          <input type="hidden" name="correctAnswer" value={answer} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
  
  