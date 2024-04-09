import ErrorMessage from '@/components/common/ErrorMessage';
import { LOADING_MESSAGE } from '@/constants/constants';

export default function LoadingMessage() {
  return <ErrorMessage message={LOADING_MESSAGE} />;
}
