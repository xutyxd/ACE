# ACE

ACE is a boilerplate to develop multiplatform Angular 10+ based apps.

### Web
It uses Angular nothing is required.

### Desktop
To export the app as a desktop app it uses [Electron](https://www.electronjs.org/docs)

### Mobile
To export the app as a mobile app it uses [Cordova](https://cordova.apache.org/docs/en/latest/)

## Installation

First install all dependencies

```bash
npm install
```
Then if mobile platform is required(https://cordova.apache.org/docs/en/latest/)

```bash
cd cordova
```
```bash
npm install
```
```bash
cordova platform add android
```
## Development server

### Desktop

```bash
npm run desktop:start
```
### Mobile - Android

At this moment 2 options and only support for Android:

#### Option 1
It will run mobile project as an Angular project with ng serve
```bash
npm run mobile:start
```

#### Option 2
It will build mobile project as an .apk
```bash
npm run cordova:build
```

## Code scaffolding
Like [Angular](https://angular.io/cli/generate) style

### Add new project
```bash
ng generate application <name>
```

### Add a directive|pipe|service|class|guard|interface|enum|module

```bash
ng generate <some> [--project=ProjectName]
```

## Production

### Desktop

```bash
npm run electron:build
```

### Mobile

```bash
npm run cordova:build:prod
```


# References

## Electron boilerplate

The part of electron is based on this [template](https://github.com/maximegris/angular-electron)

## Angular with a workspace and projects

The part of simultaneous apps on same workspace is based on this [article](https://octoperf.com/blog/2019/08/22/kraken-angular-workspace-multi-application-project/)

## License
[MIT](https://choosealicense.com/licenses/mit/)