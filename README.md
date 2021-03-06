# React Native App
## 초기 세팅
    npm 이용을 위해 nodejs 설치 필요 

### Expo 이용
----
    npm install -g create-react-native-app
    npx create-react-native-app [myApp]
    npm install -g react-native-cli
    cd [myApp]
    expo start
    1. 실행 
        - expo start 시 웹사이트가 뜬다.
        - 폰에서 Expo 앱을 다운받아서 웹사이트의 QR 코드를 스캔하면 동작 

### react-native 이용
----
    Android 혹은 iOS 시험 환경 구성 후 
    npx react-native init [Proj-Name]
    cd [myApp]
    npx react-native run-android
    react-native run-ios

    git clone 시
    - npm install - dependency install
    CTRL+M debug mode 


## Android 시험 환경 구성
---
    1. Android Studuio 설치 필요 (설치 시 아래 사항 확인)
    - Android SDK
    - Android SDK Platform
    - Performance (Intel ® HAXM) (See here for AMD)
    - Android Virtual Device
    2. 우측 하단 Configure > SDK Manager > Appearance & Behavior > System Settings > Android SDK 
    Show package Detail 누른 뒤 아래 내용 설치 
        SDK Platforms 탭
            - Android SDK Platform 28
            - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
        SDK Tool Tab
            - Android SDK Build-Tools 28.0.3
    3. 환경변수 추가 
    - ANDROID_HOME : C:\Users\{username}\AppData\Local\Android\Sdk
    4. 환경변수 Path 수정 
    - C:\Users\{username}\AppData\Local\Android\Sdk\platform-tools
    5. npx react-native run-android 로 실행 
    - npx 를 붙혀야 해당 Project의 React-native 버전을 이용해서 App을 Build 하고 실행 하는 듯 
        
    

## iOS 시험 환경 구성 (MAC)
---
    Mac book 으로 Xcode 설치 후 테스트 
    
    sudo gem install cocoapods
    cd [myApp]/ios
    pod install 
    delete build folder

    cd ..
    react-native run-ios

    expo 로 돌릴 시 .expo 폴더의 사용자가 root로 되어있으면 시뮬레이터를 돌리지 못함 
    이럴 경우 아래 명령어로 변경해줌 
    sudo chown -R yourusername:yourgroupname ~/.expo /path/to/your/project/.expo

    React Native version mismatch 라고 나올 시 
    react-native start --reset-cache

    Xcode 11 과 React Native 0.57 인 상태에서 실행 
    1. /node_modules/react-native/local-cli/runIOS/findMatchingSimulator.js 수정
    if (!version.startsWith('iOS') && !version.startsWith('tvOS')) { continue; }
    ->if ( !version.startsWith('com.apple.CoreSimulator.SimRuntime.iOS') && !version.startsWith('com.apple.CoreSimulator.SimRuntime.tvOS') ) { continue; }
    if ( simulator.availability !== '(available)' && simulator.isAvailable !== 'YES' ) { continue; }
    ->if (simulator.isAvailable !== true ) { continue; }
    
    2. npx react-native run-ios --simulator "iPhone 11"
    3. xcrun simctl list devices --json <- Device list 보는 명령


## Lib
---
    npm install --save react-native-gesture-handler react-native-reanimated
    npm install --save uuid react-navigation react-navigation-stack react-navigation-tabs
## Tip & Trouble Shoot
---
    folder import 시 folder 내부에 index.js 파일이 존재 해야 한다. 
    유무선 동시 사용후 Android Emulator에서 React Server로 연결을 못하는 경우가 발생 할 수 있는 것 같다. 이 경우 Emulator에서 아래와 같이 한다.
    ```
    ctrl + M > Settings > Debug server host & port for device > localhost:8081
    ``` 



## Project Struct 
--- 
    [myApp]
    |---[src]
    |   |---[components]
    |   |---theme.js (테마관련 설정)
    |   |---index.js (네비게이션 설정 정보)
    
## git test
    
