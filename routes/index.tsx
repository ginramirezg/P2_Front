//JORGE FERRERO DE LARA Y GINA ANDREA RAMIREZ


//Redireccion de la pagina cuando se despliega el proyecto en localhost:8000 a /trivia
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET() {
    return new Response(null, {
      status: 307, // Redirección temporal
      headers: { Location: "/trivia" },
    });
  },
};
