import EncryptedStorage from 'react-native-encrypted-storage';

export async function storeCard(values: any) {
  let obj: any = await retrieveCards();

  obj.cards.push(values);

  try {
    await EncryptedStorage.setItem('cards', JSON.stringify(obj));
    // return "done"
    // Congrats! You've just stored your first value!
  } catch (error) {
    // There was an error on the native side
  }
}

export async function retrieveCards() {
  try {
    const cards = await EncryptedStorage.getItem('cards');
    if (cards == null) {
      return {
        cards: [],
      };
    }
    if (cards !== undefined) {
      // Congrats! You've just retrieved your first value!
      return JSON.parse(cards);
    }
  } catch (error) {
    return {
      cards: [],
    };
    // There was an error on the native side
  }
}
