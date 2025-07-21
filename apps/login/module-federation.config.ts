import { ModuleFederationConfig } from '@nx/module-federation'; // Nx의 모듈 페더레이션 타입을 import

const config: ModuleFederationConfig = {
  name: 'login', // 이 앱의 이름을 지정 (페더레이션에서 고유 식별자)
  exposes: {
    // 외부에서 이 앱의 특정 모듈을 사용할 수 있도록 노출
    './Routes': 'apps/login/src/app/remote-entry/entry.routes.ts', // './Routes'라는 이름으로 entry.routes.ts 파일을 노출
  },
};

/**
 * Nx가 모듈 페더레이션 그래프를 올바르게 해석하려면 config의 default export가 필요합니다.
 */
export default config; // config 객체를 기본으로 export
