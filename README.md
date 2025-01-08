# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More
### 모든 정보는 localStorage 에 누적
### action 정보
```
hunger: number; // 포만감
fatigue: number; // 스테미나 (피로도)
affection: number; // 애정도
health: number; // 건강
hygiene: number; // 위생도

- 밥 먹을 때마다 차는 포만감: 30
- 수면시 마다 깍이는 스테미나 : 100 > 모든 행위마다 피로도 -10 
- 모든 행위 시 마다 차는 애정도: 1 > 애정도 100마다 진화
- 치료 시, 건강 회복 : 0 ,  1 > 건강 0 이되면 모든 행위에서 얻는 포인트 + 10, 모든 행위에서 깍이는 포인트 + 10 
- 목욕 시, 위생도 50 회복 


```