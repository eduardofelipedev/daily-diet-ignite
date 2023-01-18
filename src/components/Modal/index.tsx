import { 
    Container, 
    Containerbutton, 
    ModalContainer, 
    ModalInfo, 
    ModalText,
    ContainerButtonCancel,
    ContainerButtonRemover,
    ButtonCancel,
    ButtonDel,
    TitleCancel,
    TitleDel
} from "./styles";
import { Text, Modal, View, StatusBar } from 'react-native';
import { ButtonAdd } from "../ButtonAdd";


interface ModalProps {
    isvisible: boolean;
    onFunctionDel: () => void;
    onFunctionCancel: () => void;
}



export function Modall({isvisible = false, onFunctionDel, onFunctionCancel} : ModalProps){
    return(
        <Container>
            
            <Modal
                animationType="none"
                transparent={true}
                visible={isvisible}                             
            >

            <ModalContainer>
                <ModalInfo>
                    <ModalText>Deseja realmente excluir o registro da refeição?</ModalText>
                    <Containerbutton>
                        <ContainerButtonCancel>
                            <ButtonCancel      
                                
                                onPress={onFunctionCancel}
                                
                            >
                                <TitleCancel>Cancelar</TitleCancel>
                            </ButtonCancel>
                        </ContainerButtonCancel>

                        <ContainerButtonRemover>
                            <ButtonDel 
                                
                                onPress={onFunctionDel}
                                
                            >
                                <TitleDel>Sim, excluir</TitleDel>
                            </ButtonDel>
                        </ContainerButtonRemover>
                    </Containerbutton>
                </ModalInfo>
            </ModalContainer>



               
            </Modal>
            
        </Container>
    );
}