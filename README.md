Badmin
=
Admin panel using Backbone.js, Marionette.js, gulp, and Bootstrap.

Setup
=
* Install node.js (http://nodejs.org/download/)
* `$ git clone https://github.com/mmukhin/badmin`
* `$ cd badmin`
* `$ npm install`
* `$ gulp` (defaults as `gulp watch`)
* Your browser should navigate to `localhost:5000` and point to the `badmin/build` directory

Features
=
* Build process uses Gulp
* App components: Router, User, Address Page (example)
* Custom components: Notifier, Service (ajax)
* Model/Collection fixtures (in lieu of API). To remove, set `useFixtures: false`

Auth
=
* Not included. Best practice would be to execute a script to verify user auth with your API before index.html loads. If auth fails, redirect the user to a `separate` login page.

Questions? Comments? Issues? Pull Requests?
=
* Michael Mukhin; hello@psitsmike.com; http://psitsmike.com