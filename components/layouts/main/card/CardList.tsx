import classNames from 'classnames';
import { useContext } from 'react';

import { LOADING_MESSAGE } from 'constants/constants';
import useFetch from 'hooks/useFetch';

import { LINKS_API_URL, LINKS_FOLDER_ID_API_URL, LinksApiResponse } from '@/apis/api';
import ErrorMessage from '@/components/common/ErrorMessage';
import Card from '@/components/layouts/main/card/Card';
import styles from '@/components/layouts/main/card/CardList.module.css';
import { InputStateContext } from '@/contexts/InputStateProvider';

const cardListClasses = classNames(styles['card-list'], styles.grid, 'grid', 'width-full');
const noCardListTextBoxClasses = classNames(
  styles['no-card-list-text-box'],
  'flex-row',
  'align-center',
  'justify-center'
);

interface CardListProps {
  folderId?: number;
}

function CardList({ folderId = 0 }: CardListProps) {
  const url = folderId === 0 ? LINKS_API_URL : LINKS_FOLDER_ID_API_URL(folderId);
  const { data, loading, error } = useFetch<LinksApiResponse>(url);

  const { inputState } = useContext(InputStateContext);

  // {created_at, description, folder_id, id, image_source, title, updated_at, url}
  const linkList = data?.data ?? [];
  const linkCount = linkList?.length ?? 0;

  // 입력 상태를 소문자로 변환
  const inputStateLower = inputState.toLowerCase();

  // 필터링할 때 소문자로 변환하여 대소문자 구분 없이 비교
  const filteredLinkList = linkList.filter(
    (link) =>
      link.title?.toLowerCase().includes(inputStateLower) ||
      link.description?.toLowerCase().includes(inputStateLower) ||
      link.url.toLowerCase().includes(inputStateLower)
  );

  return (
    <div>
      {linkCount > 0 && (
        <div className={cardListClasses}>
          {filteredLinkList.map((link) => (
            <Card key={link.id} linkData={link} />
          ))}
          {loading && <ErrorMessage message={LOADING_MESSAGE} />}
          {error !== null && <ErrorMessage message={String(error)} />}
        </div>
      )}
      {linkCount <= 0 && <p className={noCardListTextBoxClasses}>저장된 링크가 없습니다</p>}
    </div>
  );
}

export default CardList;
