import { FC, ReactNode } from 'react';
import scss from './Modal.module.scss';

const Modal: FC<{
  children: ReactNode;
}> = ({children}) => {
  return (
    <div className={scss.containerModal}>
      <div className={scss.contentModal}>
        {children}
      </div>
    </div>
  )
}

export default Modal