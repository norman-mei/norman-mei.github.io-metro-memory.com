import rosetta from 'rosetta'

export const i18n = rosetta({
  en: {
    restartWarning: 'You are going to lose all your progress. Are you sure?',
    introInstruction: 'Type a station name, and press Enter',
    backToTheGame: 'Back to the game',
    stations: ({ count }: { count: number }) =>
      `${count} station${count > 1 ? 's' : ''}`,
    stationsFound: 'stations found',
    inputPlaceholder: 'Station',
    alreadyFound: 'Already found',
    startOver: 'Start over',
    showSolutions: 'Show solutions',
    hideSolutions: 'Hide solutions',
    supportProject: 'Support the project',
    about: 'About',
    congrats: ({ foundProportion }: { foundProportion: number }) =>
      `Well done, you reached ${
        10 * Math.floor((foundProportion * 100) / 10)
      }%!`,
    freeGame: 'This game is free.',
    supportWithDonation: ({ title }: { title: string }) => (
      <span>
        Support the development of <strong>{title}</strong> by making a
        donation.
      </span>
    ),
    opensANewTab:
      'This link will open a new tab and your progress is saved in your browser.',
    keepGoingForFree: 'Keep going for free',
    sort: {
      order: 'Date added',
      line: 'Line',
      name: 'Name',
    },
  },
  es: {
    restartWarning:
      'Vas a perder todo tu progreso. ¿Estás seguro de que quieres empezar de nuevo?',
    introInstruction: 'Escribe el nombre de una estación, y pulsa Enter',
    backToTheGame: 'Volver al juego',
    stations: ({ count }: { count: number }) =>
      `${count} estación${count > 1 ? 'es' : ''}`,
    stationsFound: 'estaciones encontradas',
    inputPlaceholder: 'Estación',
    alreadyFound: 'Ya encontrada',
    startOver: 'Empezar de nuevo',
    showSolutions: 'Mostrar soluciones',
    hideSolutions: 'Ocultar soluciones',
    supportProject: 'Apoya el proyecto',
    about: 'Acerca de',
    congrats: ({ foundProportion }: { foundProportion: number }) =>
      `¡Bien hecho, has llegado al ${Math.floor(foundProportion * 100)}%!`,
    freeGame: 'Este juego es gratuito.',
    supportWithDonation: ({ title }: { title: string }) => (
      <span>
        Apoya el desarrollo de <strong>{title}</strong> haciendo una donación.
      </span>
    ),
    opensANewTab:
      'Este enlace abrirá una nueva pestaña y tu progreso se guarda en tu navegador.',
    keepGoingForFree: 'Continuar gratis',
    sort: {
      order: 'Fecha añadida',
      line: 'Línea',
      name: 'Nombre',
    },
  },
  ca: {
    restartWarning:
      'Perdràs tot el teu progrés. Estàs segur que vols començar de nou?',
    introInstruction: "Escriu el nom d'una estació, i prem Enter",
    backToTheGame: 'Torna al joc',
    stations: ({ count }: { count: number }) =>
      `${count} estació${count > 1 ? 's' : ''}`,
    stationsFound: 'estacions trobades',
    inputPlaceholder: 'Estació',
    alreadyFound: 'Ja trobada',
    startOver: 'Començar de nou',
    showSolutions: 'Mostra solucions',
    hideSolutions: 'Amaga solucions',
    supportProject: 'Ajuda el projecte',
    about: 'Sobre',
    congrats: ({ foundProportion }: { foundProportion: number }) =>
      `Molt bé, has arribat al ${Math.floor(foundProportion * 100)}%!`,
    freeGame: 'Aquest joc és gratuït.',
    supportWithDonation: ({ title }: { title: string }) => (
      <span>
        Ajuda el desenvolupament de <strong>{title}</strong> fent una donació.
      </span>
    ),
    opensANewTab:
      'Aquest enllaç obrirà una nova pestanya i el teu progrés es guarda al teu navegador.',
    keepGoingForFree: 'Continua gratis',
    sort: {
      order: 'Data afegida',
      line: 'Línia',
      name: 'Nom',
    },
  },
  de: {
    restartWarning:
      'Du wirst deinen Fortschritt verlieren. Bist du sicher, dass du von vorne anfangen willst?',
    introInstruction: 'Gib den Namen einer Station ein, und drücke Enter',
    backToTheGame: 'Zurück zum Spiel',
    stations: ({ count }: { count: number }) =>
      `${count} Station${count > 1 ? 'en' : ''}`,
    stationsFound: 'Stationen gefunden',
    inputPlaceholder: 'Station',
    alreadyFound: 'Bereits gefunden',
    startOver: 'Von vorne anfangen',
    showSolutions: 'Lösungen anzeigen',
    hideSolutions: 'Lösungen ausblenden',
    supportProject: 'Projekt unterstützen',
    about: 'Über',
    congrats: ({ foundProportion }: { foundProportion: number }) =>
      `Gut gemacht, du hast ${Math.floor(foundProportion * 100)}% erreicht!`,
    freeGame: 'Dieses Spiel ist kostenlos.',
    supportWithDonation: ({ title }: { title: string }) => (
      <span>
        Unterstütze die Entwicklung von <strong>{title}</strong> mit einer
        Spende.
      </span>
    ),
    opensANewTab:
      'Dieser Link öffnet einen neuen Tab und dein Fortschritt wird in deinem Browser gespeichert.',
    keepGoingForFree: 'Kostenlos weitermachen',
    sort: {
      order: 'Hinzugefügt am',
      line: 'Linie',
      name: 'Name',
    },
  },
  ko: {
    restartWarning: '진행한 모든 내용이 사라집니다. 계속하시겠습니까?',
    introInstruction: '역 이름을 입력하고 엔터 키를 누르세요',
    backToTheGame: '게임으로 돌아가기',
    stations: ({ count }: { count: number }) => `${count}개의 역`,
    stationsFound: '역 발견됨',
    inputPlaceholder: '역 이름',
    alreadyFound: '이미 찾음',
    startOver: '처음부터 다시 시작하기',
    showSolutions: '해답 보기',
    hideSolutions: '해답 숨기기',
    supportProject: '프로젝트 후원하기',
    about: '정보',
    congrats: ({ foundProportion }: { foundProportion: number }) =>
      `축하합니다! ${Math.floor(foundProportion * 100)}% 달성했어요!`,
    freeGame: '이 게임은 무료로 제공됩니다.',
    supportWithDonation: ({ title }: { title: string }) =>
      `<span><strong>${title}</strong> 개발을 후원하기 위해 기부해 주세요.</span>`,
    opensANewTab:
      '이 링크를 클릭하면 새 탭에서 열리며, 진행 상황은 브라우저에 저장됩니다.',
    keepGoingForFree: '무료로 계속 진행하기',
    sort: {
      order: '추가된 날짜',
      line: '노선',
      name: '이름',
    },
  },
  tr: {
    restartWarning:
      'Tüm ilerlemeniz kaybolacak. Yeniden başlamak istediğinize emin misiniz?',
    introInstruction: 'Bir istasyon adı girin ve Enter tuşuna basın',
    backToTheGame: 'Oyuna geri dön',
    stations: ({ count }: { count: number }) =>
      `${count} istasyon${count > 1 ? '' : ''}`,
    stationsFound: 'istasyon bulundu',
    inputPlaceholder: 'İstasyon',
    alreadyFound: 'Zaten bulundu',
    startOver: 'Yeniden başla',
    showSolutions: 'Çözümleri göster',
    hideSolutions: 'Çözümleri gizle',
    supportProject: 'Projeyi destekle',
    about: 'Hakkında',
    congrats: ({ foundProportion }: { foundProportion: number }) =>
      `Tebrikler, ${Math.floor(foundProportion * 100)}%'ye ulaştınız!`,
    freeGame: 'Bu oyun ücretsizdir.',
    supportWithDonation: ({ title }: { title: string }) => (
      <span>
        <strong>{title}</strong> gelişimini bağış yaparak destekleyin.
      </span>
    ),
    opensANewTab:
      'Bu bağlantı yeni bir sekmede açılır ve ilerlemeniz tarayıcınızda kaydedilir.',
    keepGoingForFree: 'Ücretsiz devam et',
    sort: {
      order: 'Eklenme tarihi',
      line: 'Hat',
      name: 'İsim',
    },
  },
  sv: {
    restartWarning:
      'Du kommer att förlora all din progress. Är du säker på att du vill börja om?',
    introInstruction: 'Skriv in en station och tryck på Enter',
    backToTheGame: 'Tillbaka till spelet',
    stations: ({ count }: { count: number }) =>
      `${count} station${count > 1 ? 'er' : ''}`,
    stationsFound: 'stationer hittade',
    inputPlaceholder: 'Station',
    alreadyFound: 'Redan hittad',
    startOver: 'Börja om',
    showSolutions: 'Visa lösningar',
    hideSolutions: 'Dölj lösningar',
    supportProject: 'Stöd projektet',
    about: 'Om',
    congrats: ({ foundProportion }: { foundProportion: number }) =>
      `Bra jobbat, du nådde ${Math.floor(foundProportion * 100)}%!`,
    freeGame: 'Detta spel är gratis.',
    supportWithDonation: ({ title }: { title: string }) => (
      <span>
        Stöd utvecklingen av <strong>{title}</strong> genom att donera.
      </span>
    ),
    opensANewTab:
      'Denna länk öppnar en ny flik och din progress sparas i din webbläsare.',
    keepGoingForFree: 'Fortsätt gratis',
    sort: {
      order: 'Datum tillagt',
      line: 'Linje',
      name: 'Namn',
    },
  },
})
