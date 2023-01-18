import { Container, Title, ButtonBack, Icon, Header } from "./styles";


type Props = {
    title: string;
    type?: 'PRIMARY' | 'SECONDARY' | 'DEFAULT';
    onFunction: () => void;
}


export function CardNewMeal({title, type = 'DEFAULT' , onFunction} : Props){
    return(
        <Container type={type}>
            <Header>
                <ButtonBack onPress={onFunction}>
                    <Icon />
                </ButtonBack>
                <Title>{title}</Title>
            </Header>
        </Container>
    );
}