/***
 * import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50, // ✅ Ensure space from the status bar
    backgroundColor: '#121212',
  },
  textPrimary: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSecondary: {
    color: '#bbb',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#444',
  },
  button: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#1E90FF',
  },
  buttonDanger: {
    backgroundColor: '#d9534f',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#444',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  searchButton: {
    flex: 1,
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 5,
  },
  favoritesButton: {
    flex: 1,
    backgroundColor: '#d9534f',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#aaaaaa',
    fontSize: width * 0.045,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  listContainer: {
    paddingBottom: 15,
  },
  cardWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  }, container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#000000',
  },
  card: {
    backgroundColor: 'rgba(3, 3, 3, 0.15)',
    borderRadius: 16,
    paddingVertical: width * 0.07,
    paddingHorizontal: width * 0.06,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 1,
    textAlign: 'center',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  avatar: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#f1c40f',
  },
  cardContent: {
    alignItems: 'center',
    width: '100%',
  },
  textPrimary: {
    color: '#ffffff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  textSecondary: {
    color: '#cccccc',
    fontSize: width * 0.04,
    marginBottom: 12,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 12,
  },
  stats: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: '#f1c40f',
    backgroundColor: 'rgba(241, 196, 15, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  date: {
    color: '#aaaaaa',
    fontSize: width * 0.035,
    textAlign: 'center',
    paddingVertical: 4,
  },
  contributorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 14,
    marginVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  contributorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 14,
  },
  contributorName: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

 */

  import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const baseButton = {
  paddingVertical: 12,
  borderRadius: 10,
  alignItems: 'center',
};

const baseText = {
  textAlign: 'center',
  color: '#ffffff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 40,
    backgroundColor: '#121212',
  },
  textPrimary: {
    ...baseText,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSecondary: {
    ...baseText,
    color: '#bbb',
    fontSize: 16,
  },
  errorText: {
    ...baseText,
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#444',
    marginBottom: 12,
  },
  button: {
    ...baseButton,
  },
  buttonPrimary: {
    ...baseButton,
    backgroundColor: '#1E90FF',
  },
  buttonDanger: {
    ...baseButton,
    backgroundColor: '#d9534f',
  },
  buttonText: {
    ...baseText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  searchButton: {
    ...baseButton,
    flex: 1,
    backgroundColor: '#1E90FF',
    marginRight: 5,
  },
  favoritesButton: {
    ...baseButton,
    flex: 1,
    backgroundColor: '#d9534f',
    marginLeft: 5,
  },
  header: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 15,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    ...baseText,
    color: '#aaaaaa',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  listContainer: {
    paddingBottom: 15,
  },
  cardWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  card: {
    backgroundColor: 'rgba(3, 3, 3, 0.15)',
    borderRadius: 16,
    paddingVertical: width * 0.07,
    paddingHorizontal: width * 0.06,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  avatar: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#f1c40f',
  },
  cardContent: {
    alignItems: 'center',
    width: '100%',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 12,
  },
  stats: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: '#f1c40f',
    backgroundColor: 'rgba(241, 196, 15, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  date: {
    ...baseText,
    color: '#aaaaaa',
    fontSize: width * 0.035,
    paddingVertical: 4,
  },
  contributorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 14,
    marginVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  contributorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 14,
  },
  contributorName: {
    ...baseText,
    fontSize: 17,
    fontWeight: 'bold',
  },
});

