module.exports = {
  preset: 'react-native',
  setupFiles: ['./setupTest.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons))',
  ],
};
