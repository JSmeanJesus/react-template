import React from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './LoginModal.module.scss';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}
export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}

        > 

            <LoginForm />
        </Modal>
    );
};