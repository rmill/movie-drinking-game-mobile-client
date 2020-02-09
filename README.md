# MovieDrinkingGameMobileClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Install Requirements

After you clone thie repo, run `npm install`. This will install all of the requirements

## Install SSL Certificate Authority

This application requires SSL to run ServiceWorkers. To install the SSL keys run the following (from the application root):
- `sudo cp ssl/rootCA.pem /usr/local/share/ca-certificates/rootCA.crt`
- `sudo update-ca-certificates`
- Now open Chrome and go to chrome://settings/certificates
- Click `Authorities -> Import` and select the .crt file from `/usr/local/share/ca-certificates/rootCA.crt`
- Close Chrome (next time Chrome is started the SSL certificates will be accepted)

### Genertating New SSL Certificates`

If the SSL certificates expire run the following (from the application root):
- `openssl req -new -sha256 -nodes -out ssl/server.csr -newkey rsa:2048 -keyout ssl/server.key -config <( cat ssl/server.csr.cnf )`
- `openssl x509 -req -in ssl/server.csr -CA ssl/rootCA.pem -CAkey ssl/rootCA.key -CAcreateserial -out ssl/server.crt -days 500 -sha256 -extfile ssl/v3.ext`

## Development Server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
