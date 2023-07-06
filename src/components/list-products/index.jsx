/* eslint-disable prettier/prettier */
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./listStyles"







const ProductList = ({ products,onHandlerDelete }) => {



    const renderItem = ({ item  }) => {



        
          

        return (
    
            <View style={styles.containerItem}>
                <Text style={styles.textItem}>{item.value}</Text>
               <TouchableOpacity onPress={()=> onHandlerDelete(item.id)}><Text style={styles.icon}>X</Text></TouchableOpacity> 
            </View>
        )
    }


    return (
        <View style={styles.containerList}>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                
            />
        </View>
    );
};

export default ProductList;
