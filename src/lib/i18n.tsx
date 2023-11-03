import rosetta from "rosetta";

export const i18n = rosetta({
  en: {
    restartWarning: "You are going to lose all your progress. Are you sure?",
    introInstruction: "Type a station name, and press Enter",
    backToTheGame: "Back to the game",
    stations: ({ count }: { count: number }) =>
      `${count} station${count > 1 ? "s" : ""}`,
    stationsFound: "stations found",
    inputPlaceholder: "Station",
    alreadyFound: "Already found",
    startOver: "Start over",
    showSolutions: "Show solutions",
    hideSolutions: "Hide solutions",
    supportProject: "Support the project",
    about: "About",
    congrats: ({ foundProportion }: { foundProportion: number }) =>
      `Well done, you reached ${
        10 * Math.floor((foundProportion * 100) / 10)
      }%!`,
    freeGame: "This game is free.",
    supportWithDonation: ({ title }: { title: string }) => (
      <span>
        Support the development of <strong>{title}</strong> by making a
        donation.
      </span>
    ),
    opensANewTab:
      "This link will open a new tab and your progress is saved in your browser.",
  },
  es: {
    restartWarning:
      "Vas a perder todo tu progreso. ¿Estás seguro de que quieres empezar de nuevo?",
    introInstruction: "Escribe el nombre de una estación, y pulsa Enter",
    backToTheGame: "Volver al juego",
    stations: ({ count }: { count: number }) =>
      `${count} estación${count > 1 ? "es" : ""}`,
    stationsFound: "estaciones encontradas",
    inputPlaceholder: "Estación",
    alreadyFound: "Ya encontrada",
    startOver: "Empezar de nuevo",
    showSolutions: "Mostrar soluciones",
    hideSolutions: "Ocultar soluciones",
    supportProject: "Apoya el proyecto",
    about: "Acerca de",
    congrats: ({ foundProportion }: { foundProportion: number }) =>
      `¡Bien hecho, has llegado al ${Math.floor(foundProportion * 100)}%!`,
    freeGame: "Este juego es gratuito.",
    supportWithDonation: ({ title }: { title: string }) => (
      <span>
        Apoya el desarrollo de <strong>{title}</strong> haciendo una donación.
      </span>
    ),
    opensANewTab:
      "Este enlace abrirá una nueva pestaña y tu progreso se guarda en tu navegador.",
  },
});
