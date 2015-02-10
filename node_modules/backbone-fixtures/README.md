# backbone-fixtures
Plugin to Backbone.js to allow for model fixtures.

Model fixtures are a handy way to load local copies of data for your models. This is useful when creating models for services that are still in development or to do localized testing that is not dependent on a network connection.

## Usage
Set the fixtures parameters when defining a Model or Collection. 

```javascript
var SomeModel = Backbone.Model.extend({
	// set flag to use fixtures for this model
	useFixtures: true,

	// set the fixtures path
	fixture: 'fixtures/path',

	// optional type for fixtures (defaut: json)
	fixtureType: 'json'

	// optional fixtures root to prepend to all fixtures calls (default: empty)
	fixtureRoot: 'some/root/path/'
});
```

Model calls will now load the fixtures path

```javascript
var model = new SomeModel();

model.fetch(); // loads some/root/path/fixtures/path/read.json

// new model
model.save(); // loads some/root/path/fixtures/path/create.json

// updated model
model.save(); // loads some/root/path/fixtures/path/update.json

model.destroy(); // loads some/root/path/fixtures/path/delete.json
```

## Use fixtures for all models
Fixtures can be turned on for all supported models by setting the global fixtures flag. This will override any locally set flag on the model definition. This is useful when loading an entire app locally.

```javascript
Backbone.fixtures = true
```

## API

**Backbone.fixtures** _Boolean_ Set to true to load the fixture for all models that has a defined fixture path. Default `false`

**Backbone.fixturesRoot** _String_ Root path to load fixtures from. All fixture paths will be prepended with this root path. This can be overrided on a per model basis. Default empty string

**Model.prototype.fixture** _String_ Path to model fixture. This must be defined for fixtures to load. Default `undefined`

**Model.prototype.useFixtures** _Boolean_ Set to true to load the fixture for the model. Setting this to `true` overrides the global `Backbone.fixtures` setting of `false`. Default `false`

**Model.prototype.fixturesRoot** _String_ Root path to load model fixture from. Fixture path will be prepended with this path. Setting this overrides the global `Backbone.fixturesRoot` value. Default empty string.

## Support

To suggest a feature, report a bug, or general discussion: https://github.com/huffingtonpost/backbone-fixtures/issues/

