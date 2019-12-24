module.exports = {
  name: 'ui-widgets',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-widgets',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
