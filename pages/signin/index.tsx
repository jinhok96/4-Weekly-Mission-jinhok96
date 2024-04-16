import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { SIGN_IN_API_URL } from '@/apis/api';
import AsyncBoundary from '@/components/common/AsyncBoundary';
import PrimaryButton from '@/components/common/buttons/PrimaryButton';
import { ROUTE_PATHS } from '@/constants/constants';
import usePost from '@/hooks/usePost';
import InputForm from '@/pages/signin/components/InputForm';
import styles from '@/pages/signin/index.module.css';
import LogoSvgUrl from '@/public/images/logo.svg';
import GoogleImg from '@/public/images/social-login-google.svg';
import KakaoImg from '@/public/images/social-login-kakao.svg';

const validate = {
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: '올바른 이메일 주소가 아닙니다.',
    },
    required: '이메일을 입력해 주세요.',
    submit: '이메일을 확인해 주세요.',
  },
  password: {
    required: '비밀번호를 입력해 주세요.',
    submit: '비밀번호을 확인해 주세요.',
  },
};

type postDataType = {
  email: string;
  password: string;
};

type postResponseType = {
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export default function Signin() {
  const router = useRouter();

  // 클라이언트에서만 작동
  // 로컬 스토리지에 액세스 토큰이 있을 경우 페이지 이동
  if (typeof window !== 'undefined') {
    const getLocalStorage = localStorage.getItem('accessToken');
    console.log('getLocalStorage', getLocalStorage);
    if (getLocalStorage) router.push('/folder');
  }

  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const inputFormat = {
    email: {
      name: '이메일',
      type: 'email',
      placeholder: '이메일을 입력해 주세요.',
      validate: validate.email,
    },
    password: {
      name: '비밀번호',
      type: passwordVisible ? 'text' : 'password',
      placeholder: '비밀번호를 입력해 주세요.',
      validate: validate.password,
    },
  };

  const registerList = {
    email: register('email', inputFormat.email.validate),
    password: register('password', inputFormat.password.validate),
  };

  const onSuccess = (data: postResponseType) => {
    setError('email', { type: inputFormat.email.type, message: '' });
    setError('password', {
      type: inputFormat.password.type,
      message: '',
    });
    localStorage.setItem('accessToken', data.data.accessToken);
    router.push('/folder');
  };

  const onError = () => {
    setError('email', { type: inputFormat.email.type, message: inputFormat.email.validate.submit });
    setError('password', { type: inputFormat.password.type, message: inputFormat.password.validate.submit });
  };

  const { mutate } = usePost<postDataType>(SIGN_IN_API_URL, ['Signin', getValues()], onSuccess, onError);

  const onSubmit = () => {
    const postData = getValues();
    mutate(postData);
  };

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  /**
   * 할 것 목록
   * 1. 소셜 로그인 링크 추가
   * 2. 태블릿, 데스크탑 반응형 스타일 추가
   * 3. 회원가입 페이지 추가
   */

  const socialLoginList = {
    google: {
      src: GoogleImg,
      href: 'https://www.google.com',
    },
    kakao: {
      src: KakaoImg,
      href: 'https://www.kakaocorp.com/page',
    },
  };

  return (
    <AsyncBoundary>
      <div className={styles.container}>
        <header className={styles.headerContainer}>
          <Image className={styles.headerLogo} src={LogoSvgUrl} alt="logo" width={840} height={152} />
          <p className={styles.headerDescription}>
            회원이 아니신가요?{' '}
            <Link className={styles.headerDescriptionLink} href={ROUTE_PATHS.signup}>
              회원 가입하기
            </Link>
          </p>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={styles.inputContainer}>
            <InputForm
              register={registerList.email}
              inputFormat={inputFormat.email}
              errorMessage={errors.email?.message}
            />
            <InputForm
              register={registerList.password}
              inputFormat={inputFormat.password}
              errorMessage={errors.password?.message}
              passwordVisible={passwordVisible}
              togglePassword={togglePassword}
            />
          </div>
          <PrimaryButton className={styles.loginButton} type="submit">
            로그인
          </PrimaryButton>
        </form>
        <footer className={styles.footerClasses}>
          소셜 로그인
          <div className={styles.socialLoginContainer}>
            <Link href={socialLoginList.google.href}>
              <Image
                className={styles.socialLoginImg}
                src={socialLoginList.google.src}
                alt="google"
                width={168}
                height={168}
              />
            </Link>
            <Link href={socialLoginList.kakao.href}>
              <Image
                className={styles.socialLoginImg}
                src={socialLoginList.kakao.src}
                alt="kakao"
                width={168}
                height={168}
              />
            </Link>
          </div>
        </footer>
      </div>
    </AsyncBoundary>
  );
}
