import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    padding: ${Constants.statusBarHeight}px 30px 20px 30px;

    align-items: center;
    background: #F9F9FA;
    flex: 1;
`;

export const TextTitle = styled.Text`
    color: #F25C05;
    font-size: 14px;
`;

export const TextValueTotal = styled.Text`
    color: #1F1E26;
    font-size: 35px;
    font-weight: bold;
`;

export const Card = styled.View`
    padding: 10px;
    background: #fff;
    width: 100%;
    border-radius: 4px;
    margin-bottom: 10px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const CardTitle = styled.Text`
    flex:1;
    font-size: 20px;
    color: #1F1E26;
`;

export const CardText = styled.Text`
    font-size: 12px;
    color: #858585;
    margin-right: 20px;
`;

export const CardDescription = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;

    background: #F25C05;
    border-radius: 4px;
`;

export const ButtonAddText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;

export const ModalContainer = styled(Container)`
    justify-content: center;
`;

export const ModalTitle = styled(TextValueTotal)`
    font-size: 30px;
    width: 200px;
    text-align:center;
    margin-bottom: 50px;
`;

export const Form = styled.View`
    width: 100%;
    margin-bottom: 40px;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    background: #fff;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const ButtonCancel = styled(ButtonAdd)`
    margin-top: 10px;
    background: #D0D0D0;
`;

export const ButtonCancelText = styled(ButtonAddText)`
    color: #1F1E26;
`;


