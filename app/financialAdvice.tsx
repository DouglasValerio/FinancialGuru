import { Text, View } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from "react";
import { generateFinancialAdvice } from "@/services/ai/generator";
import styles from "@/styles";
const FinancialAdvice = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState("")
    const { tags } = useLocalSearchParams();
    const callFinancialService = async () => {

        setIsLoading(true);

        try {
            const result = await generateFinancialAdvice(tags.toString());
            setResult(result)
        } catch (error) {
            setResult("Erro ao gerar conselho")
            alert(error)
        } finally {
            setIsLoading(false);
        }


    }
    useEffect(() => {
       callFinancialService();
    }   , [])
    if (isLoading) {
       return <View style={{...styles.container, alignContent: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign:'center'}} >Carregando...</Text>
      </View>
    }
    return (

       <View style={styles.container}>
         <Text>{result}</Text>
       </View>
    );
};

export default FinancialAdvice;

//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