const { withProjectBuildGradle } = require('@expo/config-plugins');

const REPO_ENTRY = `    maven {
      url("$rootDir/../node_modules/@react-native-async-storage/async-storage/android/local_repo")
    }`;

module.exports = function withAsyncStorageRepo(config) {
  return withProjectBuildGradle(config, (config) => {
    if (config.modResults.contents.includes('async-storage/android/local_repo')) {
      return config;
    }
    config.modResults.contents = config.modResults.contents.replace(
      "maven { url 'https://www.jitpack.io' }",
      `maven { url 'https://www.jitpack.io' }\n${REPO_ENTRY}`
    );
    return config;
  });
};
