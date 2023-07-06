/* eslint-disable prettier/prettier */
import React from 'react'
import { Button, TextInput, View } from 'react-native'

import { styles } from "./inputStyles"

const InputProduct = ({product,setProduct,products,setProducts,onHandlerAddProduct}) => {




  return (

    <View style={styles.containerInput}>
      <TextInput style={styles.textInput}

        placeholder='Add product...'
        backgroundColor="white"
        borderRadius={10}
        onChangeText={setProduct}
        value={product}
       
        



      />
      <Button title='Add' color="indigo" onPress={onHandlerAddProduct}></Button>
    </View>

  )
}

export default InputProduct;
