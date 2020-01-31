var countArr = [
    {
        id: 0,
        name: 'Subhanallah',
        count: 33,
    },
    {
        id: 1,
        name: 'Alhamdulillah',
        count: 69,
    },
    {
        id: 2,
        name: 'Allahuakbar',
        count: 420,
    },
];

function addNewCounter(param) {

    var newName = document.getElementById('newcountername').value;
    
    if (!newName.length) {
        alert('Nama Counter tidak boleh kosong!');
        return false;
    }

    if (!countArr.length) {
      var lastID = -1;
    } else {
      var lastID = document.getElementById(countArr.length-1);
    }

    param.push({
        id: lastID+1,
        name: newName,
        count: 0,
    });



}