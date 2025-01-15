```javascript
// Correct usage of $elemMatch operator
db.collection.find({ "field": { $elemMatch: { "subfield": { $in: [ "value1", "value2" ] } } } });
```