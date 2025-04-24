import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: '케어온 - 자영업자를 위한 모든 것',
  description: '자영업자를 위한 모든 서비스, 케어온에서 찾아보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body className={`${notoSansKr.variable} font-sans min-h-screen flex flex-col`} suppressHydrationWarning>
        <header className='sticky top-0 z-50 bg-white shadow-sm'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              <div className='flex items-center'>
                <Link href='/' className='flex-shrink-0 flex items-center'>
                  <span className='text-blue-600 font-bold text-2xl'>케어온</span>
                </Link>
                <nav className='hidden md:ml-10 md:flex md:space-x-8'>
                  <Link href='/' className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
                    홈
                  </Link>
                  <Link href='/prices/cctv-installation' className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
                    CCTV 설치 비용
                  </Link>
                  <Link href='/form/cctv-installation' className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
                    견적 요청
                  </Link>
                  <Link href='#' className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
                    서비스 찾기
                  </Link>
                  <Link href='#' className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
                    전문가 찾기
                  </Link>
                </nav>
              </div>
              <div className='hidden md:flex items-center'>
                <Link href='#' className='text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
                  로그인
                </Link>
                <Link href='#' className='ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700'>
                  회원가입
                </Link>
              </div>
              <div className='flex md:hidden'>
                <button className='text-gray-700 hover:text-blue-600' title='메뉴 열기' aria-label='메뉴 열기'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className='flex-grow'>
          {children}
        </main>

        <footer className='bg-gray-100'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              <div>
                <h3 className='text-lg font-semibold mb-4'>케어온</h3>
                <p className='text-sm text-gray-600'>자영업자를 위한 모든 것</p>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>서비스</h3>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li><Link href='/prices/CCTV-설치-비용' className='hover:text-blue-600'>CCTV 설치</Link></li>
                  <li><Link href='#' className='hover:text-blue-600'>보안 시스템</Link></li>
                  <li><Link href='#' className='hover:text-blue-600'>매장 관리</Link></li>
                  <li><Link href='#' className='hover:text-blue-600'>인테리어</Link></li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>회사 정보</h3>
                <ul className='space-y-2 text-sm text-gray-600'>
                  <li><Link href='#' className='hover:text-blue-600'>소개</Link></li>
                  <li><Link href='#' className='hover:text-blue-600'>이용약관</Link></li>
                  <li><Link href='#' className='hover:text-blue-600'>개인정보처리방침</Link></li>
                  <li><Link href='#' className='hover:text-blue-600'>고객센터</Link></li>
                </ul>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-4'>고객센터</h3>
                <p className='text-sm text-gray-600 mb-2'>평일 10:00 - 18:00</p>
                <p className='text-sm text-gray-600 mb-2'>점심시간 12:30 - 13:30</p>
                <p className='text-sm text-gray-600'>주말 및 공휴일 휴무</p>
                <div className='mt-4 flex space-x-4'>
                  <Link href='#' className='text-gray-600 hover:text-blue-600'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 16 16'>
                      <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'/>
                    </svg>
                  </Link>
                  <Link href='#' className='text-gray-600 hover:text-blue-600'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 16 16'>
                      <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'/>
                    </svg>
                  </Link>
                  <Link href='#' className='text-gray-600 hover:text-blue-600'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 16 16'>
                      <path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z'/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className='mt-8 pt-8 border-t border-gray-200'>
              <p className='text-sm text-gray-500 text-center'>© 2025 케어온. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
