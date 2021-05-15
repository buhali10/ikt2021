var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

button.addEventListener('click', function() {
    // Erzeugen Sie sich hier ein Promise-Objekt und fuegen die 
    // setTimeout-Funktion in die Funktion, die dem Konstruktor uebergeben wird
    // let p1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve('https://httpbin.org/ip');
    //     }, 1000);
    // });
    //
    // p1
    //     .then(
    //         value => {
    //             console.log(value);
    //         }
    //     );
    //
    //
    // setTimeout(function () { // <- das hier soll in das Promise-Objekt
    //     // "Resolve" diese Url: https://httpbin.org/ip
    // }, 1000);

    // Teil 1:

    // Behandeln Sie die "response" der Promise und geben Sie ein fetch() zurueck
    // darin wird der Wert uebergeben, der "resolved" wurde (die Url)
    // das fetch() ist hier ein GET, Sie muessen deshalb nichts weiter angeben

    // Behandeln Sie nun auch diese "response" des fetch()-Aufrufes indem Sie
    // die response als JSON-Daten zurueckgeben (json())

    // die JSON-Daten haben die Form: { "origin": "Ihre IP-Adresse" }

    // Behandeln Sie diese JSON-Daten, indem Sie den Wert von "origin" in das 
    // "output"-Element schreiben (output.textContent =  data.origin;)

    // fetch('https://httpbin.org/ip')
    //     .then(
    //         response => response.json()
    //     )
    //     .then(
    //         data => {
    //             console.log(data);
    //             //output.textContent = data.origin;
    //         }
    //     )
    //     .catch(
    //         err => {
    //             console.log(err);
    //         }
    //     );

    // Teil 2:

    // Wiederholen Sie diese Uebung mit einem PUT request an 
    // diese url: https://httpbin.org/put

    // dazu müssen Sie nun die Methode dem fetch()-Aufruf angeben
    // ausserdem muss fuer headers jetzt auch der Content-Type und Accept
    // angegeben werden (jeweils 'application/json')

    // Sie koennen ein beliebiges JSON senden (body), es wird einfach gespiegelt
    // wichtig ist nur, dass Sie die Eigenschaften kennen, damit Sie auf die 
    // Werte zugreifen koennen --> uebergeben Sie einen oder mehrere Werte
    // an das output-Element

    fetch('https://httpbin.org/post', {
        method: 'PUT',
        header: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            message: 'This is a PUT message!'
        })
    })
        .then(
            response => {
                console.log(response);
                return response;
            }
        )
        .then(
            response => {
                console.log(response.body);     // show the body, ReadableStream
                return response.body;
            }
        )
        .then(
            body => {
                const reader = body.getReader();
                return new ReadableStream({
                    start(controller) {
                        return pump();
                        function pump() {
                            return reader.read().then(({ done, value }) => {
                                // When no more data needs to be consumed, close the stream
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                // Enqueue the next data chunk into our target stream
                                controller.enqueue(value);  // Uint8Array
                                return pump();
                            });
                        }
                    }
                })
            })
        .then(stream => new Response(stream))
        .then(response => response.json())  // also possible: text(), blob(), ...

        .then(data => {
            console.log(data.json)
            output.textContent = data.json.message
        })
        .catch(
            err => {
                console.log("ERROR CODE: " + err.code, "\nERROR MESSAGE: " + err.message);
            }
        );


    // Teil 3:

    // fuegen Sie irgendwo einen Fehler ein, so dass die Anfrage nicht 
    // erfolgreich ist (z.B. einfach die Url aendern)
    // Behandeln Sie diesen Fehler (einmal als zweites Argument von then()
    // und einmal mit catch() --> einfach Ausgabe auf Konsole)
});
