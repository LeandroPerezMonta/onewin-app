
import React from 'react'
import { LoginModal } from './Modals/LoginModal'
import { RegisterModal } from './Modals/RegisterModal'
import { DepositModal } from './Modals/DepositModal';

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: "login" | "register" | "deposit";
  setActiveTab: React.Dispatch<React.SetStateAction<"login" | "register" | "deposit">>;
}


export const ModalForm = ({isOpen, onClose, activeTab, setActiveTab}:ModalFormProps) => {

  const renderModal = () => {
    if(activeTab === 'login'){
      return <LoginModal isOpen={isOpen} onClose={onClose} activeTab={activeTab} setActiveTab={setActiveTab}/>
    }
    if(activeTab === 'register'){
      return <RegisterModal isOpen={isOpen} onClose={onClose} activeTab={activeTab} setActiveTab={setActiveTab}/>
    }
    if(activeTab === 'deposit'){
      return <DepositModal isOpen={isOpen} onClose={onClose} activeTab={activeTab} setActiveTab={setActiveTab}/>
    }
  }


  return renderModal()
}
