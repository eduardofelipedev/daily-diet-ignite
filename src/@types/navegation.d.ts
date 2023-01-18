export declare global {
    namespace ReactNavigation {
        interface RootParamList{
            home: undefined;
            statistic: undefined;
            register: undefined;
            feedback: {
                isDiet: boolean;
            }
            meat: {
                name: string;
                hour: string;
                isDiet: boolean;
                
            }
            edit: {
                name: string;
                description: string;
                date: string;
                hour: string;
                isDiet: boolean;
            }
        }
    }
}