var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {}
function deleteFromObjectByKey(object, key) {
  thing = object ;
  delete thing[key] ;
  return thing ;
}
function destructivelyDeleteFromObjectByKey(object, key) {}
