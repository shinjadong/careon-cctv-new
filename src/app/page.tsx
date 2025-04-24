import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-blue-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                자영업자를 위한<br />
                <span className="text-blue-600">모든 것</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                CCTV 설치부터 매장 관리까지, 자영업자를 위한 모든 서비스를 케어온에서 만나보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/prices/cctv-installation" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-center">
                  CCTV 설치 비용 알아보기
                </Link>
                <Link href="/form/cctv-installation" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-lg border border-blue-600 transition duration-300 text-center">
                  견적 요청하기
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white p-4 rounded-lg shadow-xl">
                  <Image 
                    src="/images/cctv-hero.jpg" 
                    alt="CCTV 설치 서비스" 
                    width={500} 
                    height={350} 
                    className="rounded-md w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 카테고리 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">더 나은 생활을 위한 변화</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/prices/cctv-installation" className="group">
              <div className="bg-gray-100 rounded-lg p-6 transition duration-300 group-hover:shadow-md group-hover:bg-blue-50">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">CCTV 설치</h3>
                <p className="text-sm text-gray-600">매장과 가정의 안전을 지키는 CCTV 설치 서비스</p>
              </div>
            </Link>
            
            <Link href="#" className="group">
              <div className="bg-gray-100 rounded-lg p-6 transition duration-300 group-hover:shadow-md group-hover:bg-blue-50">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">보안 시스템</h3>
                <p className="text-sm text-gray-600">종합 보안 솔루션으로 안전한 환경 구축</p>
              </div>
            </Link>
            
            <Link href="#" className="group">
              <div className="bg-gray-100 rounded-lg p-6 transition duration-300 group-hover:shadow-md group-hover:bg-blue-50">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">매장 관리</h3>
                <p className="text-sm text-gray-600">효율적인 매장 운영을 위한 관리 서비스</p>
              </div>
            </Link>
            
            <Link href="#" className="group">
              <div className="bg-gray-100 rounded-lg p-6 transition duration-300 group-hover:shadow-md group-hover:bg-blue-50">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">인테리어</h3>
                <p className="text-sm text-gray-600">매장 분위기를 바꾸는 인테리어 서비스</p>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
            <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              모든 서비스 보기
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 추천 서비스 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">인기 서비스</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/cctv-service.jpg" 
                  alt="CCTV 설치 서비스" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">CCTV 설치</h3>
                <p className="text-gray-600 mb-4">최신 기술의 CCTV로 안전한 환경을 구축하세요.</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">평균 480,000원</span>
                  <Link href="/prices/CCTV-설치-비용" className="text-blue-600 hover:text-blue-800 font-medium">
                    자세히 보기
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/security-service.jpg" 
                  alt="보안 시스템 서비스" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">보안 시스템</h3>
                <p className="text-gray-600 mb-4">종합 보안 솔루션으로 안전한 환경을 구축하세요.</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">평균 650,000원</span>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                    자세히 보기
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/store-management.jpg" 
                  alt="매장 관리 서비스" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">매장 관리</h3>
                <p className="text-gray-600 mb-4">효율적인 매장 운영을 위한 관리 서비스를 이용하세요.</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">평균 350,000원</span>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                    자세히 보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">지금 바로 CCTV 설치 견적을 받아보세요</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">전문가의 도움으로 최적의 CCTV 설치 방법과 비용을 확인할 수 있습니다.</p>
          <Link href="/form/cctv-설치" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
            무료 견적 받기
          </Link>
        </div>
      </section>

      {/* 고객 후기 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">고객 후기</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">김지영</h4>
                  <p className="text-sm text-gray-600">서울시 강남구</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;단독주택에 맘 놓고 살려고 CCTV 설치를 부탁했어요. 꼼꼼하게 위치 선정해주셔서 사각지대도 없고, 기존 인테리어에 방해 안 되게 신경 써주셔서 외관도 만족스러워요.&rdquo;
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">이상현</h4>
                  <p className="text-sm text-gray-600">부산시 해운대구</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;카페 운영 중인데 CCTV 설치 후 매장 관리가 훨씬 수월해졌어요. 고화질 영상으로 매장 상황을 실시간으로 확인할 수 있어 안심이 됩니다.&rdquo;
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">박민수</h4>
                  <p className="text-sm text-gray-600">인천시 송도동</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;사무실 보안을 위해 설치했는데, 전문가의 조언으로 최적의 위치에 설치할 수 있었습니다. 가격도 합리적이고 서비스도 만족스러웠습니다.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
