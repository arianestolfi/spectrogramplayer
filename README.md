#[spectogram_player](https://spectro.codigo.xyz)

Sample player and spectrogram, 
for analyses on large number of samples.

based on [wavesurfer.js](https://wavesurfer-js.org)
with the spectrogram plugin
http://wavesurfer-js.org/example/spectrogram/
Using angular.j with angular material

## Browser support

works only in [modern browsers supporting Web Audio](http://caniuse.com/audio-api).


## API in examples


samples are in folder /samples_0

you can rename the folder and files in main.js

```javascript
.controller('MainController', ['$scope',
      function ($scope) {

        //to change the name of the samples folder
        $scope.folder = "samples_0/";
        $scope.extension = ".mp3";
        $scope.longList = [];
        
        //to change the number of the files
          for (var i = 33; i < 43; i++) {
          $scope.longList.push({
            title: i,
            url: $scope.folder + i + $scope.extension,
            itemid: i,
          });
```




```javascript
wavesurfer.load('example/media/demo.wav');
```

## Documentation

See the documentation on all available [methods](https://wavesurfer-js.org/docs/methods.html), [options](https://wavesurfer-js.org/docs/options.html) and [events](https://wavesurfer-js.org/docs/events.html) on the [homepage](https://wavesurfer-js.org/docs/).

## Related projects

For a list of  projects using wavesurfer.js, check out
[the projects page](https://wavesurfer-js.org/projects/).

## Development


Install `grunt-cli` using npm:

```
npm install -g grunt-cli
```

Install development dependencies:

```
npm install
```

Build a minified version of the library and plugins. This command also checks
for code-style mistakes and runs the tests:

```
grunt
```

Generated files are placed in the `dist` directory.

Running tests only:

```
grunt test
```

Creating a coverage report:

```
grunt coverage
```

The HTML report can be found in `coverage/html/index.html`.

## Editing documentation
The homepage and documentation files are maintained in the [`gh-pages` branch](https://github.com/katspaugh/wavesurfer.js/tree/gh-pages). Contributions to the documentation are especially welcome.

## Credits
Developed by [Ariane Stolfi] https://github.com/arianestolfi, 
based on angular 

Initial idea by [Alex Khokhulin](https://github.com/xoxulin). Many
thanks to
[the awesome contributors](https://github.com/katspaugh/wavesurfer.js/contributors)!

## License

![cc-by](https://i.creativecommons.org/l/by/3.0/88x31.png)

This work is licensed under a
[Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/deed.en_US).
