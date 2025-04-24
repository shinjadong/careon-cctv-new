'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, Check } from 'lucide-react';

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

const CCTVInstallationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // 채팅 단계 정의
  const steps = [
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
  
  // 스크롤을 항상 최신 메시지로 이동
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // 컴포넌트 마운트 시 초기화
  useEffect(() => {
    // 메시지와 폼 데이터 초기화
    setMessages([]);
    setFormData({});
    setCurrentStep(0);
    
    // 첫 번째 메시지만 추가 (인트로)
    const introMessage = {
      id: generateUniqueId(),
      type: 'system' as MessageType,
      content: steps[0].question,
      options: [],
      field: steps[0].field
    };
    
    // 두 번째 메시지 (첫 번째 질문)
    const firstQuestion = {
      id: generateUniqueId(),
      type: 'system' as MessageType,
      content: steps[1].question,
      options: steps[1].options,
      field: steps[1].field
    };
    
    // 두 메시지를 한 번에 설정
    setMessages([introMessage, firstQuestion]);
    setCurrentStep(1);
    setProgress(Math.min(100, Math.round((1 / steps.length) * 100)));
  }, [steps]); // steps 의존성 추가
  
  // 고유 ID 생성 함수
  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 9) + '-' + Date.now().toString(36);
  };

  // 메시지 추가 함수
  const addMessage = (type: MessageType, content: string, options?: string[], field?: string) => {
    const newMessage = {
      id: generateUniqueId(),
      type,
      content,
      options,
      field
    };
    
    setMessages(prev => [...prev, newMessage]);
  };
  
  // 다음 단계로 이동
  const goToNextStep = () => {
    const nextStep = currentStep + 1;
    if (nextStep < steps.length) {
      const step = steps[nextStep];
      addMessage('system', step.question, step.options, step.field);
      setCurrentStep(nextStep);
      setProgress(Math.min(100, Math.round((nextStep / steps.length) * 100)));
    } else {
      // 모든 단계 완료
      handleSubmit();
    }
  };
  
  // 옵션 선택 처리
  const handleOptionSelect = (option: string, field?: string) => {
    if (field) {
      setFormData(prev => ({ ...prev, [field]: option }));
      addMessage('user', option);
      goToNextStep();
    }
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
      
      {/* 채팅 영역 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                      type={steps.find(s => s.field === message.field)?.inputType || 'text'}
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
      
      {/* 하단 고정 버튼 (마지막 단계가 아닐 때만 표시) */}
      {isSubmitting && (
        <div className="bg-white p-4 border-t">
          <div className="bg-gray-200 text-gray-500 p-3 rounded-lg text-center">
            신청서 제출 중...
          </div>
        </div>
      )}
    </div>
  );
};

export default CCTVInstallationForm;
