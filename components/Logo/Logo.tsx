import { useRouter } from 'next/router';
import React from 'react';
import { LogoContainer } from './style';

interface Props {
  mobile?: boolean;
}

const Logo: React.FC<Props> = ({ mobile }) => {
  const router = useRouter();

  return (
    <LogoContainer mobile={mobile} onClick={() => router.push('/')}>
      Madison and Sanjar
    </LogoContainer>
  );
};

export default Logo;
