import { Container, Title, Subtitle, ContainerIcon, Icon, IcontypeStylesProps } from "./styles";
import { ButtontypeStyleProps } from "./styles";


type Props = {
    title: string;
    subtitle: string;
    type?: ButtontypeStyleProps;
    typeIcon?: IcontypeStylesProps;
    onFunction: () => void;    
}


export function CardPorcentage({title, subtitle, type = 'PRIMARY', typeIcon = 'RIGHT', onFunction,  ...rest} : Props){
    return(
        <Container type={type}  {...rest}>
            <ContainerIcon typeIcon={typeIcon}>
                <Icon                     
                    type={type} 
                    typeIcon={typeIcon}
                    onPress={onFunction}
                />
                
            </ContainerIcon>
            <Title>{title}%</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    );
}