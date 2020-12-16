import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Modal from 'react-native-modal';

const CustomModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <View style = {styles.container}>
            <Modal isVisible = {isModalVisible}>
                <View style = {{flex:1}}>

                </View>
            </Modal>
        </View>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
