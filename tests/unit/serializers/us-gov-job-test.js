import { moduleForModel, test } from 'ember-qunit';

moduleForModel('us-gov-job', 'Unit | Serializer | us gov job', {
  // Specify the other units that are required for this test.
  needs: ['serializer:us-gov-job']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
