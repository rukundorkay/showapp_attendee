import { Modal } from 'react-native'
import React from 'react'
import { globalStyles } from '../../constants'
import ModalStyles from './Modal.styles'
import { BlurView } from "@react-native-community/blur";

interface Props {
  showModal: boolean,
  setModal: () => void
}

const ModedModal: React.FC<Props> = ({ children,showModal,setModal }) => {
  return (
    <Modal 
        onRequestClose={setModal} 
        animationType="fade" 
        visible={showModal} 
        transparent={true}
        
      >
        <BlurView blurAmount={10} blurType="dark" style={[globalStyles.centerd,ModalStyles.container]}>
          {children}
        </BlurView>
      </Modal>
  )
}

export default ModedModal
