// Test script to verify French locale is properly configured
const { routing } = require('./i18n/routing.ts');

console.log('Supported locales:', routing.locales);
console.log('French is supported:', routing.locales.includes('fr'));

// Test if French messages can be loaded
async function testFrenchMessages() {
  try {
    const frMessages = await import('./messages/fr.json');
    console.log('French messages loaded successfully');
    console.log('Nav home translation:', frMessages.default.nav.home);
  } catch (error) {
    console.error('Error loading French messages:', error);
  }
}

testFrenchMessages();
