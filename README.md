KAROL TEST
pull request



## Clone this repository with all submodules
Make sure that your ssh key is added to your github account.
If this is not the case follow these instructions: https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent  
Afterwards execute:
```
$ git clone --recurse-submodules -j8 git@github.com:Luis-Hebendanz/tagify.git
```
Files in .gitignore are being ignored globally (for everyone!) by git. If you want to exclude files locally add them to `.git/info/exclude`  


## Development setup for the backend
Setup docker https://docs.docker.com/get-docker/  
Install docker-compose: https://docs.docker.com/compose/install/#install-compose  

Install rust and cargo with your package manager.
```
$ apt install rustc cargo
$ cargo install systemfd
$ cargo install cargo-watch
```
Make sure that the path `~/.cargo/bin` is discoverable
through the `$PATH` variable!

Then execute:
```
$ npm run serve-backend
```
The website should now be browsable
on http://127.0.0.1:5000

Also very useful is the command:
```
$ npm run clean-backend
```
This clears the build directory and the postgres database

Read more information about [hot reload](https://actix.rs/docs/autoreload/)

To be able to serve a webpage follow the [development setup for the frontend](#development-setup-for-the-frontend)


## Setup rust-language server
Having a working [language server](https://en.wikipedia.org/wiki/Language_Server_Protocol) is extremly recommended for Rust!
Install rustup from here: https://rustup.rs/
Then execute:
```
$ rustup default stable
$ rustup component add rls rust-analysis rust-src
```
Then `cd` to the directory where your `Cargo.toml` is located
and start your editor.

To get the documentation of all your dependencies execute:
```
$ cargo doc
```
To get the documentation of one specific dependencie execute:
```
$ cargo doc --open --package <package-name>
```


## Reading Material for Rust
*Read the rust book at _least_ to chapter 10!*
* [the rust book](https://doc.rust-lang.org/stable/book/ch01-01-installation.html)
* [actix-web tutorial](https://actix.rs/docs/application/)
* [actix-web api](https://docs.rs/actix-web/2.0.0/actix_web/#modules)


## Development setup for the frontend
Install the package manager npm:
```
$ apt install nodejs
```
Install js frontend dependencies with npm from package.json:
```
$ cd PPSky/Abgabe1
$ npm install
```

**IMPORTANT:** The next command is only useful if the feature you are
building does not require transactions with the backend.
Run:
```
$ npm run serve-frontend
```
and you have to specify the file after the base url.
Example: `http://localhost:1234/login.html`

If you need to do transactions with the backend then follow the [development setup for the backend](#development-setup-for-the-backend)  
Afterwards execute:
```
$ npm run watch
$ npm run backend-serve
```

To build for production execute:
```
$ npm run clean-frontend
$ npm run build-frontend
```

You can find the build files under `app/dist`.

## Reading material
Main Concepts:
https://reactjs.org/docs/introducing-jsx.html

Weil Objekte / Klassen ungeil sind das Kapitel zu hooks:
https://reactjs.org/docs/hooks-intro.html

Typescript ist ein Superset von Javascript nur Typed d.h. mit Typen (wie a:string oder a:number) was
wichtig ist damit Fehler schon beim Kompilieren auffallen und nicht erst
wenn das Programm läuft.
Für Typescript braucht man kein wirkliches Tutorial ausser die Do's and Don'ts:  
https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html

Ich empfehle sehr einen Editor zu benutzen der Language Server Support bietet.  
Ein Beispiel wäre [Visual Studio Code](https://code.visualstudio.com/) oder vim mit dem ALE Plugin.  


## Roles

* Scope: Tagging pictures with rectangles
* DevOps: Luis Hebendanz / Qubasa
* Scrum Master: Trilloyd / Jacob Bachmann
* Product Owner: Lorak / Karol Rogoza

### Frontend:
 * trilloyd / Jacob Bachmann
 * Gandalfibialy / Jacek Kmiecik
 * dancingsushii / Tetiana Yakovenko
 * witja46 / Witold Jermakowicz

### Backend:
 * Qubasa / Luis Hebendanz
 * Marii19 / Mariusz Trzeciakiewicz
 * rz / Que Le
 * Lorak / Karol Rogoza

## Dates
* 4.6.2020: Sprint Planing
* 8.6.2020: First Sprint

* Backend Repo:
 https://github.com/Luis-Hebendanz/tagify-backend
* Frontend Repo:
 https://github.com/Luis-Hebendanz/tagify-frontend
