import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../list-products/listStyles"

/* eslint-disable prettier/prettier */
const Item = ({ item , onHandlerDelete }) => {



    return (

        <View style={styles.containerItem}>
            <Text style={styles.textItem}>{item.value}</Text>
           <TouchableOpacity onPress={()=> onHandlerDelete(item.id)}><Text style={styles.icon}>X</Text></TouchableOpacity> 
        </View>
    )
}

export default Item
