import { Control, Controller } from "react-hook-form";
import { TextInputMaskProps } from "react-native-text-input-mask";
import { ButtontypeStyleProps } from "../CardPorcentage/styles";
import { Container, Title, Error } from "./styles";


type Props = TextInputMaskProps & {
    title: string;
    typeMask: ButtontypeStyleProps;
    control: Control;
    name: string;
    error: any;
    
    
}


export function InputMask({title, typeMask, control, name, error, ...rest} : Props){
    return(
        <>
            <Title>
                {title}
            </Title>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
            
                    <Container 
                        autoCorrect={false}
                        type={'datetime'}
                        options={{
                            format: typeMask === 'PRIMARY' ? 'DD/MM/YYYY' : 'HH:mm'
                        }}
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                
          
                
                )}
                name={name}
            
            />
             {error && <Error>{error}</Error>}
            
                

            
        </>
    );
}