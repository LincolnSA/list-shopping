import React, { useState, useEffect } from 'react';
import { Alert, Modal, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import convertStringToNumber from '../utils/convertStringToNumber';
import convertNumberToString from '../utils/convertNumberToString';
import generateHash from '../utils/generateHash';

import {
    Container,
    TextTitle,
    TextValueTotal,
    Card, CardHeader, CardTitle, CardText, CardDescription,
    ButtonAdd, ButtonAddText,
    ModalContainer, ModalTitle, Input, Form, ButtonCancel, ButtonCancelText
} from './styles';

const Main = () => {
    const [openModal, setOpenModal] = useState(false);

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [unitaryValue, setUnitaryValue] = useState('');

    const [items, setItems] = useState([]);
    const [valueTotal, setValueTotal] = useState(0);


    useEffect(() => {

        if (items.length == 0) {
            setValueTotal(0);
            return;
        };

        let total = items.map(item => item.amount * item.unitaryValue).reduce((soma, value) => soma += value);
        setValueTotal(total);

    }, [items]);


    const handleClosedModal = () => {
        setName('');
        setAmount('');
        setUnitaryValue('');

        setOpenModal(!openModal);
    };

    const handleItemAdded = () => {

        if (name === "" || amount === "" || unitaryValue === "") {
            Alert.alert("Atenção", "Para adicionar produto, precisa preencher os campos.");
            return;
        };

        const newItem = {
            id: generateHash(name),
            name,
            amount: parseInt(amount),
            unitaryValue: convertStringToNumber(unitaryValue),
        };

        setItems([...items, newItem]);

        handleClosedModal();
    };

    const renderModal = () => {
        return (

            <Modal
                animationType="slide"
                transparent={true}
                visible={openModal}
                onRequestClose={handleClosedModal}>
                <ModalContainer>
                    <ModalTitle>Informações do produto</ModalTitle>
                    <Form>
                        <Input
                            placeholder="Nome"
                            placeholderTextColor="#858585"
                            autoCapitalize="words"

                            value={name}
                            onChangeText={setName}
                        />

                        <Input
                            placeholder="Quantidade"
                            placeholderTextColor="#858585"
                            keyboardType="numeric"

                            value={amount}
                            onChangeText={setAmount}
                        />

                        <Input
                            placeholder="Valor unitário"
                            placeholderTextColor="#858585"
                            keyboardType="numeric"

                            value={unitaryValue}
                            onChangeText={setUnitaryValue}
                        />

                    </Form>

                    <ButtonAdd
                        onPress={handleItemAdded}
                    >
                        <ButtonAddText>Adicionar</ButtonAddText>
                    </ButtonAdd>

                    <ButtonCancel
                        onPress={handleClosedModal}>
                        <ButtonCancelText>Cancelar</ButtonCancelText>
                    </ButtonCancel>
                </ModalContainer>
            </Modal>
        );
    };

    const handleItemRemoved = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    };

    return (
        <>
            <Container>
                <TextTitle>Total a pagar</TextTitle>
                <TextValueTotal>R$ {convertNumberToString(valueTotal)}</TextValueTotal>

                <FlatList
                    style={{ width: "100%", marginTop: 20, marginBottom: 5 }}
                    showsVerticalScrollIndicator={false}
                    data={items}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Card style={{ elevation: 0.5 }}>
                            <CardHeader>
                                <CardTitle>{item.name}</CardTitle>

                                <TouchableOpacity
                                    onPress={() => handleItemRemoved(item.id)}
                                >
                                    <MaterialIcons name="close" size={30} color="#ccc" />
                                </TouchableOpacity>
                            </CardHeader>

                            <CardDescription>
                                <CardText>{item.amount} Un x {convertNumberToString(item.unitaryValue)}</CardText>
                                <CardText>R$ {convertNumberToString(item.amount * item.unitaryValue)}</CardText>
                            </CardDescription>
                        </Card>

                    )}
                />

                <ButtonAdd
                    onPress={() => setOpenModal(true)}
                >
                    <ButtonAddText>Adicionar item</ButtonAddText>
                </ButtonAdd>

            </Container>

            {renderModal()}
        </>
    );
};

export default Main; 
