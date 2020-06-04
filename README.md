
## Fork this repository and all submodules
Make sure that your ssh key is added to your github account.
If this is not the case follow these instructions: https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent  
You have to fork the main tagify repository and the tagify-frontend or tagify-backend repository if you want to be able to submit pull requests to it.  
If you want to know how to create a pull request / fork a repo watch this video: https://www.youtube.com/watch?v=rgbCcBNZcdQ  

Now clone your forked version of the main tagify repo (replace <username> with your username):
```
$ git clone --recurse-submodules -j8 git@github.com:<username>/tagify.git
```
And replace the repository url in the submodule `app/backend` if you have forked the tagify-backend repo  
or replace the remote url in the `app/frontend` submodule if you have forked the tagify-frontend repository.  
Example for `app/backend`:
```
$ cd tagify
$ git remote set-url origin git@github.com:<username>/tagify-backend.git
$ cd app/backend
$ git checkout master
```
After you have changed something and you want it to be commited to upstream make a pull request!  
How to do that is explained in the linked video above :)

**IMPORTANT:** `git pull` does not work in forked repositories.
If you want to update your fork / submodule follow these instructions that use the `app/backend` submodule as an example:
```
# Go to the backend submodule
$ cd app/backend

# Add the remote, call it "upstream":
$ git remote add upstream git@github.com:Luis-Hebendanz/tagify-backend.git

# Make sure that you're on your master branch:
$ git checkout master

# Download all changes from upstream and apply them to current branch
$ git pull upstream
```

## Who has merge rights?
Files in .gitignore are being ignored globally (for everyone!) by git. If you want to exclude files locally add them to `.git/info/exclude`  
Who can merge pull requests? 
* tagify: Qubasa
* tagify-backend: Qubasa
* tagify-frontend: Jacob

## Wiki
As the Github Wiki does not work with pull requests and everyone would need to have write access to the main repo,  
we instead use https://www.notion.so/cd7c14a65aa048df95d94218271630a2?v=7a2bd31643af49959dcb164c8583931e

## Development setup for the backend
First follow the [development setup for the frontend](#development-setup-for-the-frontend)  
Afterwards come back here.

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
$ cd tagify
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

If you need to do transactions with the backend then execute this:
```
$ npm run watch
```

And then follow the [development setup for the backend](#development-setup-for-the-backend)  

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
