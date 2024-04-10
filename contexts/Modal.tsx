/* eslint-disable react/jsx-props-no-spreading */
import loadable from '@loadable/component';
import { useContext } from 'react';

import { ModalDispatchContext, ModalStateContext } from 'contexts/ModalContext';

import AsyncBoundary from '@/components/common/AsyncBoundary';

// 전체 모달 리스트
const modalList = {
  AddForderModal: loadable(() => import('@/components/modals/addModals/AddFolderModal')),
  AddToForderModal: loadable(() => import('@/components/modals/addModals/AddToFolderModal')),
  DeleteFolderModal: loadable(() => import('@/components/modals/deleteModals/DeleteFolderModal')),
  DeleteLinkModal: loadable(() => import('@/components/modals/deleteModals/DeleteLinkModal')),
  EditFolderNameModal: loadable(() => import('@/components/modals/editModals/EditFolderNameModal')),
  ShareModal: loadable(() => import('@/components/modals/shareModals/ShareModal')),
};

// 다른 곳에서 불러올 모달 컴포넌트
function Modal() {
  const openedModal = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);

  if (!openedModal) {
    return null;
  }

  const { ModalComponent, propList } = openedModal;
  const { onSubmit, ...restPropList } = propList;

  const onClose = () => {
    close();
  };

  // onSubmit -> 동기/비동기 여부를 모르기 때문에 비동기로 처리
  const handleSubmit = async () => {
    // propList와 onSubmit이 없는 경우 예외 처리
    if (propList) {
      await onSubmit();
    }

    onClose();
  };

  return (
    <AsyncBoundary>
      <ModalComponent {...restPropList} onSubmit={handleSubmit} onClose={onClose} />
    </AsyncBoundary>
  );
}

export { modalList, Modal };
