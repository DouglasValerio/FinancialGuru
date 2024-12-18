import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 16,
    },
    bold: {
        fontWeight: 'bold',
    },
    tagsContainer: {
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#2E6EE6',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#f2f2f2',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    disabledButtonText: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 16,
    },
    tag: {
        backgroundColor: '#f2f2f2',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 16,
        margin: 6,
        alignItems: 'center',
        justifyContent: 'center',
      },
      selectedTag: {
        backgroundColor: '#d1e7fd',
        borderWidth: 1,
        borderColor: '#007aff',
      },
      text: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
      },
      selectedText: {
        color: '#007aff',
        fontWeight: '600',
      },
      wrapContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
});
export default styles;