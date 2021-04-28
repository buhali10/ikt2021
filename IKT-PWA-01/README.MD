# Progressive Web Apps - Aktuelle Trends der IKT 2021

Dieses Projekt enthält das Grundgerüst einer Webanwendung. Auf diesem Grundgerüst bauen wir auf und fügen sukzessive *progressive* Funktionalitäten hinzu, so dass am Ende eine *Progressive Web Application* entsteht. 

## Installation

- Zum Ausführen des Projektes wird [Node.js](https://nodejs.org) verendet. Sie müssen es auf Ihren Rechner installieren. 

- In der Wahl Ihrer IDE sind Sie völlig frei. Empfehlungen finden Sie unter [https://freiheit.f4.htw-berlin.de/ikt/tools/#integrated-development-environment-ide](https://freiheit.f4.htw-berlin.de/ikt/tools/#integrated-development-environment-ide)

- Zum Starten des Projektes wechseln Sie im Terminal (Terminal Ihres Rechners oder das Terminal in der IDE) in den Projektordner (`cd IKT-PWA-01`) und führen dort 

	`npm install` 

	aus. Damit werden alle erforderlichen Abhängigkeiten installiert.

- Nach erfolgreicher Installation der Abhängigkeiten, geben Sie  

	`npm start` 

	ein, um Ihr Projekt auszuführen. Klicken Sie danach auf [localhost:8080](http://localhost:8080) oder geben Sie die URL direkt in Ihren Browser ein.

- Sollten Sie Änderungen an der IMplementierung vornehmen und diese ausprobieren wollen, müssen Sie den Server zunächst wieder stoppen:

	`Ctrl-C`

	und geben dann erneut 

	`npm start` 

	ein. 

## Anpassungen

Wir verwenden [Material Design Lite](https://getmdl.io/) für das Design unserer Anwendung. Sie können natürlich auch andere CSS-Frameworks verwenden. Sollte Ihnen die aktuelle Farbkombination aus `blue-grey` und `red` nicht zusagen, können Sie in den `index.html`-Datein (im `public`- und im `public/help`-Ordner auch eine andere Kombination auswählen (siehe

`href="https://code.getmdl.io/1.3.0/material.blue_grey-red.min.css"`

Andere Farbkombinationen finden Sie [hier](https://getmdl.io/customize/#cdn-code). Es genügt auch, die entsprechenden Farben in den Dateinamen einzutragen 

`material.{primary}-{accent}.min.css` 

(z.B. `material.indigo-pink.min.css`).

--

Sie können natürlich auch ein anderes Bild als das HTW-Bild einbinden. Beachten Sie dabei nur, dass wir mithilfe responsiven Verhaltens drei verschiedene Bilder davon benötigen, idealerweise mit den Pixel-Maßen `1200 x 457` (`*-lg.jpg`), `900 x 343` (`*.jpg`) und `480 x 183` (`*-sm.jpg`). Siehe dann die `public/index.html`.

--

Binden Sie ruhig Ihr eigenes `favicon.ico` in den Projektordner ein. Erstellen können Sie sich ein solches `favicon` z.B. [hier](https://favicon.io/) oder [hier](https://www.ionos.de/tools/favicon-generator). Macht Spaß und gibt allen Ihren Webanwendungen eine persönliche Note ;-).

 