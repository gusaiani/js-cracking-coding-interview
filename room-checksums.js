function sumSectorIDsOfRealRooms(rooms) {
  let sum = 0;

  for (let i = 0; i < rooms.length; i++) {
    const {isReal, id} = checkRoom(rooms[i]);

    if (isReal === true) {
      sum += id;
    }
  }

  return sum;
}

function checkRoom(room) {
  const checksumWithBracket = room.split('[').pop();
  const checksum = checksumWithBracket.split(']').shift();

  const allButChecksum = room.split('[').shift();
  const id = parseInt(allButChecksum.split('-').pop());

  const encryptedName = allButChecksum.replace(/[^a-z]/g, '');

  const sortedEncryptedName = encryptedName.split('').sort().join('');

  const charCount = countChars(sortedEncryptedName);

  const commonChars = getCommonChars(charCount);

  const isReal = (commonChars === checksum);

  return {isReal: isReal, id: id};
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

function getCommonChars(list) {
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

module.exports = {
  checkRoom: checkRoom,
  sumSectorIDsOfRealRooms: sumSectorIDsOfRealRooms
}
