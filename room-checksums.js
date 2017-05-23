function sumSectorIDsOfRealRooms(rooms) {
  return rooms.reduce(function(acc, room) {
    const {isReal, id} = checkRoom(room);
    return isReal ? acc + id : acc;
  }, 0);
}

function checkRoom(room) {
  const checksum = getChecksum(room);
  const id = getId(room);
  const commonChars = getCommonChars(room);

  const isReal = (commonChars === checksum);

  return {isReal: isReal, id: id};
}

function getChecksum(string) {
  return string.split('[').pop().split(']').shift();
}

function getId(string) {
  const allButChecksum = getAllButChecksum(string);
  return parseInt(allButChecksum.split('-').pop());
}

function getSortedEncryptedName(string) {
  const allButChecksum = getAllButChecksum(string);
  return allButChecksum.replace(/[^a-z]/g, '').split('').sort().join('');
}

function getAllButChecksum(string) {
  return string.split('[').shift();
}

function countChars(string) {
  var linkedList = {};

  for (let char of string) {
    if (linkedList[char] === undefined) {
      linkedList[char] = 1;
    } else {
      linkedList[char]++;
    }
  }

  return linkedList;
}

function getCommonChars(string) {
  const list = getLinkedListOfChars(string);

  var sortable = [];

  for (var entries in list) {
    sortable.push([entries, list[entries]]);
  }

  sortable.sort(function(a, b) {
    return (b[1] - a[1]) || a[0].localeCompare(b[0]);
  });

  return sortable.slice(0,5).map(function(entry) {
    return entry[0];
  }).join('');
}

function getLinkedListOfChars(string) {
  const sortedEncryptedName = getSortedEncryptedName(string);
  return countChars(sortedEncryptedName);
}

module.exports = {
  checkRoom: checkRoom,
  sumSectorIDsOfRealRooms: sumSectorIDsOfRealRooms
}
