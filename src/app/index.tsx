import Aluno from "@/components/Aluno";
import Cachorro from "@/components/Cachorro";
import CalculadoraMultiplicacao from "@/components/CalculadoraMultiplicacao";
import FormAluno from "@/components/FormAluno";
import Funcionario from "@/components/Funcionario";
import Gato from "@/components/Gato";
import Multiplicacao from "@/components/Multiplicacao";
import Pessoa from "@/components/Pessoa";
import { useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";

export default function Index() {
  const [ativado, setAtivado] = useState(false);
  const [campo, setCampo] = useState('');

  const acionarPopUp = () => {
    Alert.alert("Hello World")
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Switch
        value={ativado}
        onValueChange={(valor) => { setAtivado(valor) }}
      />

      <Pressable onPress={acionarPopUp}>
        <Text>Boa noite.</Text>
      </Pressable>

      <Pressable onPress={(evento) => {
        Alert.alert(`Campo: ${campo}`)
        console.log(evento)
      }}>
        <Text>Boa noite.</Text>
      </Pressable>

      <Gato />
      <Cachorro nome="Caramelo" raca="pitbul" />

      <Funcionario 
        nome="Rafael Klein" 
        idade={16} 
        setor="Tecnologia da Informacao" 
      />

      <Aluno 
        nome="Rafael Klein" 
        idade={16} 
        turma="2 Ano A" 
        nota1={8.5} 
        nota2={9.5} 
      />

      <Multiplicacao 
        valor1={2} 
        valor2={4} 
        valor3={5} 
      />

      {/* Chamadas dos novos componentes */}
      <Pessoa />
      <FormAluno />
      <CalculadoraMultiplicacao />

      <TextInput 
        placeholder="Digite algo..."
        value={campo}
        onChangeText={(text) => { setCampo(text) }}
      />
      <Image 
        source={{ uri: ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcWbwWYOcI6vA-lYYg7v9VzBnzzldIkR57H67e5CbHDBU5UXz4Ft0EmA&s=10") }} 
        style={{ width: 200, height: 200 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
});