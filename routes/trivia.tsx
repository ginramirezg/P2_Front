//JORGE FERRERO DE LARA Y GINA ANDREA RAMIREZ

import { Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import TriviaComp from "../components/triviacomp.tsx";

// Definimos el tipo de datos que tenemos en triviacomps
type TriviaProps = {
  question: string;
  answer: string;
}

export const handler: Handlers<TriviaProps> = {
  async GET(_req, ctx) {
    try {
      const response = await axios.get("https://api.api-ninjas.com/v1/trivia", {
        headers: { "X-Api-Key": "V1Ar1UjUfhxwXILAWlCj1A==r8tD9wod5dR77ytC" },
      });

      const question = response.data?.[0]?.question || "No se encontró una pregunta.";
      const answer = response.data?.[0]?.answer?.toLowerCase() || "";

      return ctx.render({ question, answer });
    } catch (_e) {
      return ctx.render({ question: "Ha ocurrido un error al obtener la trivia.", answer: "" });
    }
  },

  async POST(req) {
    const formData = new URLSearchParams(await req.text());

    const correctAnswer = formData.get("correctAnswer")?.toLowerCase().trim() || "";
    console.log("Respuesta correcta:", correctAnswer);
    
    const userAnswer = formData.get("userAnswer")?.toLowerCase().trim() || "";
   
    //Console logs para comprobar que se esta recibiendo correctamente la respuesta 
    console.log("Respuesta del usuario:", userAnswer);
   

    if (userAnswer === correctAnswer) {
      console.log("Respuesta correcta, redirigiendo a /acierto");
      return new Response(null, { status: 303, headers: { Location: "/acierto" } });
    } else {
      console.log("Respuesta incorrecta, redirigiendo a /fallo");
      return new Response(null, { status: 303, headers: { Location: "/fallo" } });
    }
  },
};

// Página que usa el componente TriviaComp 
export default function TriviaPage({ data }: PageProps<TriviaProps>) {
  return <TriviaComp question={data.question} answer={data.answer} />;
}

