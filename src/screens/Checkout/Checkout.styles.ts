import { StyleSheet } from 'react-native';

type ThemeColors = {
  background: string;
  text: string;
  card: string;
  border: string;
  accent: string;
};

const Styles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: colors.background,
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },

    headerTitle: {
      fontSize: 22,
      fontWeight: '700',
      color: colors.text,
      marginLeft: 8,
    },

    listContainer: {
      paddingBottom: 16,
    },

    itemCard: {
      flexDirection: 'row',
      backgroundColor: colors.card,
      borderRadius: 10,
      padding: 12,
      marginBottom: 12,
    },

    itemImage: {
      width: 70,
      height: 70,
      borderRadius: 8,
      marginRight: 12,
    },

    itemDetails: {
      flex: 1,
    },

    itemName: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
    },

    itemPrice: {
      fontSize: 14,
      marginTop: 4,
      color: colors.accent,
    },

    itemQuantity: {
      fontSize: 14,
      marginTop: 2,
      color: colors.text,
    },

    itemSubtotal: {
      fontSize: 14,
      marginTop: 4,
      fontWeight: '600',
      color: colors.text,
    },

    emptyContainer: {
      alignItems: 'center',
      marginTop: 40,
    },

    emptyText: {
      fontSize: 16,
      color: colors.text,
      opacity: 0.6,
    },

    footer: {
      borderTopWidth: 1,
      borderColor: colors.border,
      paddingTop: 12,
    },

    summaryContainer: {
      marginBottom: 12,
    },

    summaryRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
    },

    summaryLabel: {
      fontSize: 14,
      color: colors.text,
    },

    summaryValue: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.text,
    },

    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginVertical: 8,
    },

    totalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    totalLabel: {
      fontSize: 16,
      fontWeight: '700',
      color: colors.text,
    },

    totalValue: {
      fontSize: 16,
      fontWeight: '700',
      color: colors.accent,
    },

    checkoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.accent,
      paddingVertical: 14,
      borderRadius: 10,
      marginTop: 12,
    },

    checkoutButtonDisabled: {
      opacity: 0.5,
    },

    checkoutButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '700',
    },
  });

export default Styles;
