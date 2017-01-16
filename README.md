#[spectogram_player](https://spectro.codigo.xyz)

Sample player and spectrogram, 
for analyses on large number of samples.

based on [wavesurfer.js](https://wavesurfer-js.org)
with the spectrogram plugin
http://wavesurfer-js.org/example/spectrogram/
Using angular.j with angular material

![Screenshot](/pic.png?raw=true "screenshot")


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


## Related projects
This is been specially developed for audio analyses of the samples from the project [Banda Aberta](https://banda.codigo.xyz), 

## Credits
Developed by [Ariane Stolfi] https://github.com/arianestolfi), 
based on angular.js and angular material examples on [wavesurfer.js](https://wavesurfer-js.org)

## License

![cc-by](https://i.creativecommons.org/l/by/3.0/88x31.png)

This work is licensed under a
[Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/deed.en_US).
