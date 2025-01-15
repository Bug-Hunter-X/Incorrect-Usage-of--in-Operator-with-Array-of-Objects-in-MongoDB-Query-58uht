# Incorrect Usage of $in Operator with Array of Objects in MongoDB Query
This repository demonstrates an uncommon error related to the use of the `$in` operator in MongoDB queries when dealing with arrays of objects. The incorrect query fails to return the expected results, while the corrected query addresses the issue.

## Bug Description
The provided MongoDB query utilizes the `$in` operator with an array of objects.  The intention is to find documents where the 'field' matches any of the objects in the array, based on the 'subfield'.  However, this approach is not correct and will likely yield unexpected or empty results.

## Solution
To achieve the desired behavior, the correct approach uses the `$elemMatch` operator to match elements within an array of embedded documents.
