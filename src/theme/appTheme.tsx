import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#77DD77',
  secondary: '#00ADFF',
  terciary : '#FF8835',
  quaternary : '#FFD700',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  touchable: {
    alignSelf: 'center', // Align the TouchableOpacity based on its content
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    marginTop: 20,
  },
  contentWrapper: {
    alignSelf: 'flex-start', // Align the content within the TouchableOpacity
  },
  textContent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 75,
    height: 75,
    backgroundColor: 'rgba(27, 163, 156, 0.5)',
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
    gap: 20,
  },
  menuItemButton: {
    backgroundColor: 'rgba(10,10,10,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  menuItemText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',

  },
});
