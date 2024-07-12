// globalStyles.js
import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  header: {
    backgroundColor: colors.primary,
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.secondaryCoral,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  highlightText: {
    color: colors.secondaryYellow,
    fontSize: 16,
  },
  infoText: {
    color: colors.secondaryPurple,
    fontSize: 14,
  },
});
