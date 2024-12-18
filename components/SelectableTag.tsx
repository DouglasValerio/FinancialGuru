import { TouchableOpacity, Text } from "react-native";
import styles from "../styles/index";

interface SelectableTagProps {
    label: string;
    selected?: boolean;
    onPress: () => void;
}

const SelectableTag = (props: SelectableTagProps) => {
    const { label, selected, onPress } = props;
    return (
      <TouchableOpacity
        style={[styles.tag, selected && styles.selectedTag]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={[styles.text, selected && styles.selectedText]}>{label}</Text>
      </TouchableOpacity>
    );
  };

  export default SelectableTag;