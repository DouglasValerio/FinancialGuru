import SelectableTag from "@/components/SelectableTag";
import styles from "@/styles";
import { useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const hasSelectedTags=():boolean => selectedTags.length > 0;

  const tags: string[] = [
    'Casado(a)',
    'Solteiro(a)',
    'Separado(a)',
    'Viúvo(a)',
    'Gosta de Viajar',
    'Nunca guarda dinheiro',
    'Tem poupança',
    'Faz bicos/renda extra',
    'Tenho filhos',
    'Sem filhos',
    'Maus hábitos',
    'Acredito na sorte',
    'Fitness',
    'Ama PETs',
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione as palavras que <Text style={styles.bold}>combinam</Text> com você</Text>
      <ScrollView contentContainerStyle={styles.tagsContainer}>
        <View style={styles.wrapContainer}>
          {tags.map((tag) => (
            <SelectableTag
              key={tag}
              label={tag}
              selected={selectedTags.includes(tag)}
              onPress={() => toggleTag(tag)}
            />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={hasSelectedTags()?styles.button: styles.disabledButton} disabled={!hasSelectedTags()}>
        <Text style={hasSelectedTags()?styles.buttonText:styles.disabledButtonText}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
}
