import { StyleSheet, Dimensions } from 'react-native';
import { defaultTheme} from './theme'; // Using lightTheme only


const { width } = Dimensions.get('window');

const Theme = defaultTheme;

export const globalStyles = StyleSheet.create({

  
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 45, // ✅ Space from the status bar
    backgroundColor: Theme.background,
  },
  textPrimary: {
    color: Theme.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSecondary: {
    color: Theme.textSecondary,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    backgroundColor: Theme.input,
    color: Theme.textPrimary,
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Theme.border,
    marginBottom: 12,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: Theme.buttonPrimary,
  },
  buttonDanger: {
    backgroundColor: Theme.buttonDanger,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  searchButton: {
    flex: 1,
    backgroundColor: Theme.buttonPrimary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 5,
  },
  favoritesButton: {
    flex: 1,
    backgroundColor: Theme.buttonDanger,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 5,
  },
  header: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: Theme.textPrimary,
    textAlign: 'center',
    marginBottom: 15,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: Theme.textSecondary,
    fontSize: width * 0.045,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  listContainer: {
    paddingBottom: 15,
  },
  cardWrapper: {
    backgroundColor: Theme.card,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: width * 0.07,
    paddingHorizontal: width * 0.06,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 1,
    textAlign: 'center',
    borderColor: Theme.border,
  },
  avatar: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: Theme.highlight,
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
    color: Theme.highlight,
    backgroundColor: 'rgba(241, 196, 15, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  date: {
    color: Theme.textSecondary,
    fontSize: width * 0.035,
    textAlign: 'center',
    paddingVertical: 4,
  },
  contributorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 14,
    marginVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Theme.border,
  },
  contributorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 14,
  },
  contributorName: {
    color: Theme.textPrimary,
    fontSize: 17,
    fontWeight: 'bold',
  },
});
