import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CCTV 설치 평균 비용을 알려드려요',
  description: 'CCTV 설치를 알아보고 계신가요? 카메라 구입부터 렌탈까지 필요한 서비스를 상담받고 견적을 확인해보세요!',
  openGraph: {
    title: 'CCTV 설치 평균 비용을 알려드려요',
    description: 'CCTV 설치를 알아보고 계신가요? 카메라 구입부터 렌탈까지 필요한 서비스를 상담받고 견적을 확인해보세요!',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CCTV 설치 비용 안내',
      },
    ],
  },
};

const CCTVInstallationPrice = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 pb-24">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">CCTV 설치 평균 비용을 알려드려요</h1>
          <p className="text-lg text-gray-600">
            CCTV 설치를 알아보고 계신가요? 카메라 구입부터 렌탈까지 필요한 서비스를 상담받고 견적을 확인해보세요!
          </p>
        </header>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">CCTV 설치 비용은 어떻게 되나요?</h2>
        <p className="mb-4">
          CCTV 설치는 건당 비용이 달라져요. 케어온 내에서 거래되는 CCTV 설치 평균 비용은 건당 480,000원이에요. 
          최저 비용은 287,600원이고 최고 비용은 650,000원이 책정되었답니다.
        </p>
        
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg mt-6">
          <div className="text-center mb-4 md:mb-0">
            <p className="text-sm text-gray-500">최저 비용</p>
            <p className="text-2xl font-bold">287,000원</p>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <p className="text-sm text-gray-500">평균 비용</p>
            <p className="text-2xl font-bold text-blue-600">480,000원</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">최고 비용</p>
            <p className="text-2xl font-bold">650,000원</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">CCTV 설치 비용에 영향을 주는 요소</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3"># 설치 장소에 따라</h3>
          <p className="text-gray-700">
            CCTV 설치를 원하는 곳이 어디인가요? 음식점/카페, 사무실, 공장/창고, 어린이집/학교/요양원, 주택 외부, 
            일반 가정집 내부 등 CCTV 설치가 필요한 곳은 다양하답니다. 같은 면적이더라도 공간에 장애물이 있다면 
            설치 비용이 커질 수 있습니다. 사각지대를 없애기 위해 카메라가 추가로 필요할 수 있기 때문이에요. 
            정확한 견적이 궁금하다면 CCTV 설치 업체와 장소와 건물 구조에 대해 미리 상의해보세요!
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3"># 설치 목적에 따라</h3>
          <p className="text-gray-700 mb-3">
            시설 안전 관리, 방범/화재 예방, 도난 방지, 재고 관리 등 목적에 따라 CCTV 설치 비용이 달라집니다. 
            설치 목적에 따라 필요한 CCTV 카메라 수와 화질이 다르기 때문이에요.
          </p>
          <p className="text-gray-700">
            특히, 얼굴이나 인상 착의를 구분해야 하는 경우라면 고화질 카메라, 풀컬러 비디오가 필요합니다. 
            저화질보다 고화질 비디오의 설치 비용이 높은 것은 당연하겠죠. 야간에도 컬러 화면으로 보이는 
            감시 카메라는 특수 기능이 추가되어 더 비싼 편입니다.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3"># 카메라 렌즈에 따라</h3>
          <p className="text-gray-700 mb-3">
            CCTV 설치 비용은 카메라 렌즈에 따라 달라지기도 합니다. 카메라 렌즈의 초점거리에 따라 촬영 범위가 
            다르기 때문이에요. 초점거리는 1.8mm부터 8mm 등 다양하게 있는데요. 숫자가 클수록 좁은 부분을 
            집중적으로 확대해서 볼 수 있답니다.
          </p>
          <p className="text-gray-700">
            최근에는 홈 CCTV를 찾는 분들이 많아지면서 무선 CCTV처럼 설치가 간단하고 관리하기 쉬운 카메라의 
            인기가 높아졌어요. 가정용으로 사용하는 카메라는 상업용보다 부품이 간단해서 가격이 저렴한 편이랍니다.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">고객 후기</h2>
        <div className="bg-gray-50 p-4 rounded-lg italic">
          <p className="text-gray-700">
            &ldquo;단독주택에 맘 놓고 살려고 CCTV 설치를 부탁했어요. 꼼꼼하게 위치 선정해주셔서 사각지대도 없고, 
            기존 인테리어에 방해 안 되게 신경 써주셔서 외관도 만족스러워요. 야간에도 잘 보이는 고화질 CCTV 
            덕분에 밤에도 편히 잘 수 있어요! 감사합니다.&rdquo;
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">CCTV 설치 가이드</h2>
        <p className="text-gray-700 mb-6">
          CCTV 설치 시에는 공간 용도, 렌즈 각도, 카메라 화질까지 다양한 요인을 생각해야 합니다. 
          직접 설치하기 어렵다면 전문가의 도움을 받아보세요. 목적과 장소에 맞는 올바른 CCTV를 
          추천받아 설치할 수 있을 거예요!
        </p>
        
        <div className="flex justify-center">
          <Link href="/form/cctv-installation" className="bg-[#693BF2] hover:bg-[#5930d0] text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            CCTV 설치 견적 받기
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">함께 찾는 서비스</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Link href="#" className="text-center hover:text-blue-600">
            <div className="bg-gray-100 rounded-lg p-2 mb-2 h-24 flex items-center justify-center">
              <span>전자제품 수리</span>
            </div>
          </Link>
          <Link href="#" className="text-center hover:text-blue-600">
            <div className="bg-gray-100 rounded-lg p-2 mb-2 h-24 flex items-center justify-center">
              <span>냉장고 설치 및 수리</span>
            </div>
          </Link>
          <Link href="#" className="text-center hover:text-blue-600">
            <div className="bg-gray-100 rounded-lg p-2 mb-2 h-24 flex items-center justify-center">
              <span>세탁기 설치 및 수리</span>
            </div>
          </Link>
          <Link href="#" className="text-center hover:text-blue-600">
            <div className="bg-gray-100 rounded-lg p-2 mb-2 h-24 flex items-center justify-center">
              <span>음향/영상기기 설치</span>
            </div>
          </Link>
          <Link href="#" className="text-center hover:text-blue-600">
            <div className="bg-gray-100 rounded-lg p-2 mb-2 h-24 flex items-center justify-center">
              <span>IoT 설치</span>
            </div>
          </Link>
        </div>
      </div>
      </div>
      {/* 하단 고정 CTA 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-4 z-50">
        <Link 
          href="/form/cctv-installation" 
          className="block w-full bg-[#693BF2] hover:bg-[#5930d0] text-white text-center font-bold py-4 px-6 rounded-lg transition duration-300 text-lg"
        >
          무료 견적 받기
        </Link>
      </div>
    </>
  );
};

export default CCTVInstallationPrice;
