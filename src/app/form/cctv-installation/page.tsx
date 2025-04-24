'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, Check } from 'lucide-react';
import { useId } from 'react';

type FormData = {
  installationType?: string;
  cameraCount?: string;
  installationArea?: string;
  installationPurpose?: string;
  additionalRequirements?: string;
  name?: string;
  phone?: string;
  email?: string;
  agreeTerms?: boolean;
};

// 메시지 타입 정의
type MessageType = 'system' | 'user' | 'option';

type Message = {
  id: string;
  type: MessageType;
  content: string;
  options?: string[];
  field?: string;
};

// 채팅 단계 정의 - 컴포넌트 외부로 이동
// 매 렌더링마다 새로 생성되지 않도록 컴포넌트 외부에 정의
const FORM_STEPS = [
  {
    question: '몇 가지 질문만 알려주시면 편리한 견적을 받을 수 있어요.',
    field: 'intro',
    options: [],
  },
  {
    question: '어떤 서비스를 원하시나요?',
    field: 'installationType',
    options: ['가정용', '상업용', '사무실', '공장/창고', '기타'],
  },
  {
    question: 'CCTV 수량을 알려주세요.',
    field: 'cameraCount',
    options: ['1~2대', '3~4대', '5~8대', '9대 이상', '미정'],
  },
  {
    question: 'CCTV 관련 희망사항을 알려주세요.',
    field: 'installationArea',
    options: ['실내', '실외', '실내외 모두'],
  },
  {
    question: '설치 목적을 알려주세요.',
    field: 'installationPurpose',
    options: ['방범용', '매장 관리', '시설 안전 관리', '직원 관리', '기타'],
  },
  {
    question: '서비스를 원하는 지역을 알려주세요.',
    field: 'location',
    options: ['서울', '경기', '인천', '부산', '대구', '광주', '대전', '울산', '세종', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
  },
  {
    question: '이름을 알려주세요.',
    field: 'name',
    options: [],
    inputType: 'text',
  },
  {
    question: '연락처를 알려주세요.',
    field: 'phone',
    options: [],
    inputType: 'tel',
  },
  {
    question: '플랫폼 이용약관과 개인정보 처리방침에 동의합니다.',
    field: 'agreeTerms',
    options: ['확인했습니다.'],
  },
];

const CCTVInstallationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // 자동 스크롤 관련 상태
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true); // 자동 스크롤 활성화 여부
  const [userScrolledUp, setUserScrolledUp] = useState(false); // 사용자가 위로 스크롤했는지 여부
  
  // 참조 객체
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const prevScrollTopRef = useRef(0);
  const prevMessagesLengthRef = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null); // 스크롤 디바운스를 위한 타이머
  
  // 스크롤 이벤트 처리 - 디바운스 적용
  useEffect(() => {
    const handleScroll = () => {
      if (!chatContainerRef.current) return;
      
      // 스크롤 타이머 있으면 취소 (디바운스)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // 50ms 디바운스 후 스크롤 상태 처리
      scrollTimeoutRef.current = setTimeout(() => {
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current!;
        
        // 이전 스크롤 위치와 현재 위치 비교
        const scrollDelta = scrollTop - prevScrollTopRef.current;
        
        // 사용자가 위로 스크롤했는지 확인 (음수 = 위로 스크롤)
        if (scrollDelta < -10) {
          setUserScrolledUp(true);
          setAutoScrollEnabled(false);
          console.log('사용자가 위로 스크롤함: 자동 스크롤 비활성화');
        }
        
        // 스크롤이 거의 하단에 있는지 확인 (50px 여유)
        const isAtBottom = scrollHeight - scrollTop - clientHeight < 50;
        
        // 사용자가 하단으로 스크롤하면 자동 스크롤 다시 활성화
        if (isAtBottom && userScrolledUp) {
          setAutoScrollEnabled(true);
          setUserScrolledUp(false);
          console.log('사용자가 하단으로 스크롤함: 자동 스크롤 다시 활성화');
        }
        
        // 현재 스크롤 위치 저장
        prevScrollTopRef.current = scrollTop;
        scrollTimeoutRef.current = null;
      }, 50);
    };

    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (chatContainer) {
        chatContainer.removeEventListener('scroll', handleScroll);
      }
      
      // 정리 시 타이머 취소
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [userScrolledUp]);
  
  // 새 메시지 추가 시 스크롤 처리
  useEffect(() => {
    // 메시지가 추가된 경우에만 스크롤 처리
    if (messages.length > prevMessagesLengthRef.current) {
      console.log(`메시지 추가됨: ${messages.length}, 자동스크롤=${autoScrollEnabled}, 위로스크롤=${userScrolledUp}`);
      
      // 사용자가 위로 스크롤하지 않았거나 자동 스크롤이 활성화된 경우에만 스크롤
      if (autoScrollEnabled && !userScrolledUp) {
        // 스크롤 업데이트를 다음 티크에 실행하여 렌더링 완료 후 스크롤되도록 함
        setTimeout(() => {
          if (messagesEndRef.current && autoScrollEnabled) {
            console.log('자동 스크롤 실행');
            // behavior: 'smooth'를 제거하고 block: 'nearest'로 설정하여 필요한 만큼만 스크롤
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 100);
      }
    }
    
    // 현재 메시지 길이 저장
    prevMessagesLengthRef.current = messages.length;
  }, [messages, autoScrollEnabled, userScrolledUp]);
  
  // 컴포넌트 마운트 시 초기화 - 클라이언트 사이드에서만 실행
  useEffect(() => {
    // 메시지와 폼 데이터 초기화
    setMessages([]);
    setFormData({});
    setCurrentStep(0);
    
    // 첫 번째 메시지만 추가 (인트로)
    const introId = `${baseId}-intro`;
    const questionId = `${baseId}-question1`;
    
    const introMessage = {
      id: introId,
      type: 'system' as MessageType,
      content: FORM_STEPS[0].question,
      options: [],
      field: FORM_STEPS[0].field
    };
    
    // 두 번째 메시지 (첫 번째 질문)
    const firstQuestion = {
      id: questionId,
      type: 'system' as MessageType,
      content: FORM_STEPS[1].question,
      options: FORM_STEPS[1].options,
      field: FORM_STEPS[1].field
    };
    
    // 두 메시지를 한 번에 설정
    setMessages([introMessage, firstQuestion]);
    setCurrentStep(1);
    setProgress(Math.min(100, Math.round((1 / FORM_STEPS.length) * 100)));
    
    // idCounter 초기화
    setIdCounter(2); // 이미 2개의 ID를 사용했으므로 2로 설정
  }, []); // 빈 의존성 배열로 변경 - 컴포넌트 마운트 시에만 실행
  
  // 고유 ID 생성 함수 - 클라이언트 사이드에서만 실행
  const baseId = useId(); // React의 useId를 사용하여 안정적인 ID 생성
  const [idCounter, setIdCounter] = useState(0);
  
  const generateUniqueId = () => {
    setIdCounter(prev => prev + 1);
    return `${baseId}-${idCounter}`;
  };

  // 메시지 추가 함수
  const addMessage = (type: MessageType, content: string, options: string[] = [], field?: string) => {
    const newMessage: Message = {
      id: generateUniqueId(),
      type,
      content,
      options,
      field,
    };
    setMessages(prev => [...prev, newMessage]);
    
    // 사용자가 스크롤을 아래로 내리지 않은 경우, 스크롤이 추가되었음을 알리는 표시 추가 가능
  };
  
  // 다음 단계로 이동
  const goToNextStep = () => {
    const nextStep = currentStep + 1;
    if (nextStep < FORM_STEPS.length) {
      const step = FORM_STEPS[nextStep];
      addMessage('system', step.question, step.options, step.field);
      setCurrentStep(nextStep);
      setProgress(Math.min(100, Math.round((nextStep / FORM_STEPS.length) * 100)));
    } else {
      // 모든 단계 완료
      handleSubmit();
    }
  };
  
  // 옵션 선택 함수
  const handleOptionSelect = (option: string, field?: string) => {
    if (!field) return;
    
    // 사용자 응답 추가
    addMessage('user', option);
    
    // 폼 데이터 업데이트
    if (field === 'agreeTerms') {
      setFormData(prev => ({ ...prev, [field]: true }));
    } else {
      setFormData(prev => ({ ...prev, [field]: option }));
    }
    
    // 사용자가 옵션을 선택했으니 자동 스크롤 활성화
    setAutoScrollEnabled(true);
    setUserScrolledUp(false);
    console.log('옵션 선택됨: 자동 스크롤 활성화');
    
    // 다음 단계로 이동
    setTimeout(() => {
      goToNextStep();
    }, 500);
  };
  
  // 텍스트 입력 처리
  const handleTextInput = (e: React.FormEvent<HTMLFormElement>, field?: string) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const inputElement = formElement.elements[0] as HTMLInputElement;
    const value = inputElement.value.trim();
    
    if (value && field) {
      setFormData(prev => ({ ...prev, [field]: value }));
      addMessage('user', value);
      inputElement.value = '';
      goToNextStep();
    }
  };
  
  // 폼 제출 처리
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // 실제 구현에서는 API 호출로 데이터 전송
    console.log('폼 데이터:', formData);
    
    // 제출 성공 처리
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };
  
  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto px-4 py-12 text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="w-16 h-16 bg-[#693BF2] rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="text-white w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold mb-6 text-[#693BF2]">신청이 완료되었습니다!</h1>
          <p className="text-lg mb-8">
            CCTV 설치 전문가가 곧 연락드릴 예정입니다. 감사합니다.
          </p>
          <Link href="/" className="inline-block bg-[#693BF2] hover:bg-[#5930d0] text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto h-screen flex flex-col bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white p-4 flex items-center border-b">
        <Link href="/prices/cctv-installation" className="mr-2">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-lg font-semibold flex-1 text-center">CCTV 설치</h1>
        <div className="w-6"></div> {/* 균형을 위한 빈 공간 */}
      </header>
      
      {/* 진행 상태 표시 */}
      <div className="bg-white px-4 py-2 border-b">
        <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
          <div 
            className="bg-[#693BF2] h-full rounded-full transition-all duration-500 ease-in-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-right text-xs text-[#693BF2] mt-1">{progress}%</p>
      </div>
      
      {/* 채팅 영역 - 스크롤 컨테이너 */}
      <div 
        ref={chatContainerRef} 
        className="flex-1 overflow-y-auto p-4 space-y-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {messages.map(message => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            {message.type === 'system' && (
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%] break-words">
                <p>{message.content}</p>
                
                {message.options && message.options.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {message.options.map((option, index) => (
                      <button
                        key={`${message.id}-option-${index}`}
                        onClick={() => handleOptionSelect(option, message.field)}
                        className="block w-full text-left p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
                
                {message.field && !message.options?.length && (
                  <form onSubmit={(e) => handleTextInput(e, message.field)} className="mt-3">
                    <input 
                      type={FORM_STEPS.find(s => s.field === message.field)?.inputType || 'text'}
                      className="w-full p-2 border rounded-lg"
                      placeholder={`${message.field === 'name' ? '이름을' : '연락처를'} 입력해주세요`}
                      required
                    />
                    <button 
                      type="submit" 
                      className="mt-2 w-full bg-[#693BF2] text-white p-2 rounded-lg"
                    >
                      다음
                    </button>
                  </form>
                )}
              </div>
            )}
            
            {message.type === 'user' && (
              <div className="bg-[#693BF2] text-white rounded-lg p-3 shadow-sm max-w-[80%] break-words">
                <p>{message.content}</p>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* 하단 고정 버튼 영역 (미제출 상태) - z-index 추가하여 스크롤과 분리 */}
      {!isSubmitting && !isSubmitted && (
        <div className="bg-white p-4 border-t sticky bottom-0 z-10">
          <button
            onClick={handleSubmit}
            className="w-full bg-[#693BF2] text-white p-3 rounded-lg font-medium"
            disabled={!formData.name || !formData.phone}
          >
            무료 견적 받기
          </button>
        </div>
      )}
    </div>
  );
};

export default CCTVInstallationForm;
