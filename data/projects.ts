import Cereal1 from '@/assets/portfolio/portfolio_cereal_1.png';
import Cereal2 from '@/assets/portfolio/portfolio_cereal_2.png';

import Bumawiki1 from '@/assets/portfolio/portfolio_bumawiki_1.png';
import Bumawiki2 from '@/assets/portfolio/portfolio_bumawiki_2.png';
import Bumawiki3 from '@/assets/portfolio/portfolio_bumawiki_3.png';

import Bsm1 from '@/assets/portfolio/portfolio_bsm_3.png';
import Bsm2 from '@/assets/portfolio/portfolio_bsm_2.png';
import Bsm3 from '@/assets/portfolio/portfolio_bsm_1.png';

import Bsmboo1 from '@/assets/portfolio/portfolio_bsmboo_1.png';
import Bsmboo2 from '@/assets/portfolio/portfolio_bsmboo_2.png';

import NabinMarket1 from '@/assets/portfolio/portfolio_nabin-market_1.png';
import NabinMarket2 from '@/assets/portfolio/portfolio_nabin-market_2.png';

import FTF1 from '@/assets/portfolio/portfolio_ftf_1.png';
import FTF2 from '@/assets/portfolio/portfolio_ftf_2.png';

import Insert1 from '@/assets/portfolio/portfolio_insert_1.png';
import Insert2 from '@/assets/portfolio/portfolio_insert_2.png';

import TypeGit1 from '@/assets/portfolio/portfolio_typegit_1.png';
import TypeGit2 from '@/assets/portfolio/portfolio_typegit_2.png';

import UbinLog1 from '@/assets/portfolio/portfolio_ubin.log_1.png';
import UbinLog2 from '@/assets/portfolio/portfolio_ubin.log_2.png';

const projects = [
  {
    id: 1,
    title: 'BUMAWIKI',
    href: 'https://github.com/Team-INSERT/BUMAWIKI_WEB_V2',
    roles: ['Frontend Developer', 'Frontend Leader', 'UX/UI Designer'],
    summary: '교내 학생이라면 누구나 기여할 수 있는 우리 학교만의 위키',
    experiences: [
      '웹사이트 디자인 및 사이트맵, 프로토타입 설계',
      '리액트 프로젝트에서 Next.JS로 마이그레이션 및 코드 리팩토링',
      'SSG 렌더링 방식을 이용해 문서 페이지 캐싱 및 효율 증대',
      'custom axios와 비슷한 httpClient를 구축해 API 관리',
      'useMutation을 이용한 쿼리값 관리',
      'Node.JS의 revalidate 속성을 이용한 SSG 문서 업데이트',
      '자동완성, 문서엔진 라이브러리 직접 개발 및 npmjs 배포',
      'Next SEO 라이브러리를 통해 오픈그래프 설정 및 SEO 향상',
      '구글 애널리틱스, 구글 서치 콘솔을 통한 웹사이트 데이터 분석',
      '정적 코드 분석 도구 소나 클라우드를 이용한 코드 리팩토링',
      'react-toastify와 sweetalert를 이용해 모달창 커스텀',
      'custom hooks를 통해 seo, like 등을 도메인 단위로 개발',
      '문자열 파싱 및 react-query를 통한 문서 틀 기능 개발'
    ],
    stacks: [
      'https://img.shields.io/badge/Next JS-black?style=for-the-badge&logo=next.js&logoColor=white',
      'https://img.shields.io/badge/TypeScript-4376c1?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/styled components-d88f82?style=for-the-badge&logo=styled-components&logoColor=white',
      'https://img.shields.io/badge/Jest-8e475b?style=for-the-badge&logo=jest&logoColor=white',
      'https://img.shields.io/badge/Recoil-4776de?style=for-the-badge&logo=Recoil&logoColor=white',
      'https://img.shields.io/badge/React Query-e95258?style=for-the-badge&logo=react-query&logoColor=white'
    ],
    isDeployed: true,
    iframe: 'https://buma.wiki',
    images: {
      first: Bumawiki1,
      second: Bumawiki2,
      third: Bumawiki3
    }
  },
  {
    id: 2,
    title: 'BSM',
    href: 'https://github.com/Team-INSERT/BSM_WEB_V3',
    roles: ['Frontend Developer', 'UX/UI Designer'],
    summary: '교내 학생 정보 관리 서비스',
    experiences: [
      '웹사이트 디자인 및 사이트맵, 프로토타입 설계',
      'V3 출시를 통해 코드 리팩토링, 리디자인 및 퍼블리싱',
      '분실물 게시판 서비스 퍼블리싱 및 개발',
      '학생 일정표 서비스 퍼블리싱 및 개발',
      'semantic-release bot을 통한 깃허브 PR 관리',
      '정적 코드 분석 도구 소나 클라우드를 이용한 코드 리팩토링',
      'workflow에서 lint를 설정해 코드 컨벤션 통일',
      'playwright로 E2E test 진행',
      'renovate를 이용해 자동 의존성 업데이트',
      'angular convention을 이용해 커밋 컨벤션 통일'
    ],
    stacks: [
      'https://img.shields.io/badge/Next JS-black?style=for-the-badge&logo=next.js&logoColor=white',
      'https://img.shields.io/badge/TypeScript-4376c1?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/styled components-d88f82?style=for-the-badge&logo=styled-components&logoColor=white',
      'https://img.shields.io/badge/Jest-8e475b?style=for-the-badge&logo=jest&logoColor=white',
      'https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=Playwright&logoColor=white',
      'https://img.shields.io/badge/Recoil-4776de?style=for-the-badge&logo=Recoil&logoColor=white',
      'https://img.shields.io/badge/React Query-e95258?style=for-the-badge&logo=react-query&logoColor=white',
      'https://img.shields.io/badge/semantic release-494949?style=for-the-badge&logo=semantic-release&logoColor=white',
      'https://img.shields.io/badge/renovate-1A1F6C?style=for-the-badge&logo=RenovateBot&logoColor=white'
    ],
    isDeployed: true,
    iframe: 'https://bssm.kro.kr',
    images: {
      first: Bsm1,
      second: Bsm2,
      third: Bsm3
    }
  },
  {
    id: 3,
    title: 'BSMBOO',
    href: 'https://github.com/T-Shaped-Junior/T_Frontend',
    roles: ['Frontend Developer', 'Frontend Leader', 'UX/UI Designer'],
    summary: '부산소프트웨어마이스터고등학교 대나무숲',
    experiences: [
      '리액트와 타입스크립트를 활용한 SPA 구축',
      'Sass를 통한 웹사이트 퍼블리싱',
      'Recoil을 이용한 유저 정보 전역 상태 관리',
      'axios를 사용한 API 통신',
      'Vite를 이용해 테스트 서버 구축 및 dynamic import 활용'
    ],
    stacks: [
      'https://img.shields.io/badge/React JS-73c4f3?style=for-the-badge&logo=react&logoColor=white',
      'https://img.shields.io/badge/TypeScript-4376c1?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/recoil-4776de?style=for-the-badge&logo=recoil&logoColor=white',
      'https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white',
      'https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white',
      'https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white'
    ],
    isDeployed: true,
    iframe: 'https://bsmboo.kro.kr',
    images: {
      first: Bsmboo1,
      second: Bsmboo2
    }
  },
  {
    id: 4,
    title: 'Cereal.',
    href: 'https://github.com/pigeon-head',
    roles: ['Frontend Developer', 'Frontend Leader', 'Backend Developer', 'UX/UI Designer'],
    summary: '마음 편하게 고민을 털어놓는 교내 익명 랜덤 채팅 서비스',
    experiences: [
      'Socket.io-client를 사용해 소켓에 대한 이해도 향상',
      'Express와 socket.io를 이용한 백엔드 서버 구축',
      'to와 emit을 통해 무작위 1:1 매칭 방 생성 서비스 개발'
    ],
    stacks: [
      'https://img.shields.io/badge/NodeJS-green?style=for-the-badge&logo=Node.js&logoColor=white',
      'https://img.shields.io/badge/mysql-275f85?style=for-the-badge&logo=mysql&logoColor=white',
      'https://img.shields.io/badge/React JS-73c4f3?style=for-the-badge&logo=react&logoColor=white',
      'https://img.shields.io/badge/TypeScript-4376c1?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/Socket.io-gray?style=flat-square&logo=socket.io&logoColor=white&'
    ],
    isDeployed: false,
    images: {
      first: Cereal1,
      second: Cereal2
    }
  },
  {
    id: 5,
    title: 'Nabin Market',
    href: 'https://github.com/Ubinquitous/Nabin-Market',
    roles: ['Developer'],
    summary: 'C++을 이용한 마트 물품 관리 서비스',
    experiences: [
      '추가, 삭제 기능 연결리스트를 사용하여 구현',
      '조회 기능 연결리스트와 구조체 배열를 버블 정렬하여  구현',
      '검색 기능 순차 탐색 및 구조체 배열을 사용해 구현',
      '찜하기 기능 스택을 사용해 장바구니 및 정산 기능 구현'
    ],
    stacks: ['https://img.shields.io/badge/C++-hotpink?style=for-the-badge&logo=Cplusplus&logoColor=white'],
    isDeployed: false,
    images: {
      first: NabinMarket1,
      second: NabinMarket2
    }
  },
  {
    id: 6,
    title: 'Find The Followers',
    href: 'https://github.com/Ubinquitous/Find',
    roles: ['Developer', 'Project Manager', 'UX/UI Designer'],
    summary: '깃허브에서 팔로우/팔로워를 관리해주는 서비스',
    experiences: [
      '리액트와 타입스크립트를 활용한 SPA 구축',
      '깃허브 API를 활용해 팔로우/팔로워 데이터 파싱',
      'octokit을 이용한 API 통신'
    ],
    stacks: [
      'https://img.shields.io/badge/React JS-73c4f3?style=for-the-badge&logo=react&logoColor=white',
      'https://img.shields.io/badge/Sass-hotpink?style=for-the-badge&logo=Sass&logoColor=white',
      'https://img.shields.io/badge/TypeScript-4376c1?style=for-the-badge&logo=typescript&logoColor=white'
    ],
    isDeployed: true,
    iframe: 'https://ftf-find-the-followers.vercel.app/',
    images: {
      first: FTF1,
      second: FTF2
    }
  },
  {
    id: 7,
    title: 'INSERT',
    href: 'https://github.com/Team-INSERT/INSERT',
    roles: ['Project Manager', 'UX/UI Designer'],
    summary: 'INSERT 동아리 팀 페이지',
    experiences: ['UX/UI 디자인', '깃허브 board를 사용해 효율적으로 프로젝트 관리'],
    stacks: [
      'https://img.shields.io/badge/React JS-73c4f3?style=for-the-badge&logo=react&logoColor=white',
      'https://img.shields.io/badge/Sass-hotpink?style=for-the-badge&logo=Sass&logoColor=white',
      'https://img.shields.io/badge/TypeScript-4376c1?style=for-the-badge&logo=typescript&logoColor=white'
    ],
    isDeployed: true,
    iframe: 'https://insert.com',
    images: {
      first: Insert1,
      second: Insert2
    }
  },
  {
    id: 8,
    title: 'TypeGit',
    href: 'https://github.com/ubinquitous/TypeGit',
    roles: ['Developer', 'Project Manager'],
    summary: 'TypeScript를 이용한 git 일부 기능 구현',
    experiences: ['Node.JS 파일 시스템 이해', 'process 동작 구조 이해', '유니코드 이해 및 예외처리 시스템 구현'],
    stacks: ['https://img.shields.io/badge/TypeScript-4376c1?style=for-the-badge&logo=typescript&logoColor=white'],
    isDeployed: false,
    images: {
      first: TypeGit1,
      second: TypeGit2
    }
  },
  {
    id: 9,
    title: 'ubin.log',
    href: 'https://github.com/ubinquitous/ubin.log',
    roles: ['Developer', 'Project Manager'],
    summary: '나만의 개인블로그',
    experiences: [
      '파일 시스템과 Next.JS api router로 시스템 개발',
      '벨로그를 크롤링하여 글 목록 파싱',
      '@uiw/react-markdown을 사용한 블로그 마크다운 뷰어 개발',
      'nextjs-remove-import 라이브러리로 css dynamic import'
    ],
    stacks: [
      'https://img.shields.io/badge/Next JS-black?style=for-the-badge&logo=next.js&logoColor=white',
      'https://img.shields.io/badge/TypeScript-4376c1?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/styled components-d88f82?style=for-the-badge&logo=styled-components&logoColor=white'
    ],
    isDeployed: true,
    iframe: 'https://ubin-log.vercel.app',
    images: {
      first: UbinLog1,
      second: UbinLog2
    }
  }
];

export default projects;
