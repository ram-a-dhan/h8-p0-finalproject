var countArr = [
    {
        id: 0,
        name: 'Sugar',
        count: 16,
    },
    {
        id: 1,
        name: 'Spice',
        count: 16,
    },
    {
        id: 2,
        name: 'Everything Nice',
        count: 7,
    }
];

function addNewCounter() {

    var newName = document.getElementById('newcountername').value;
    
    if (newName == '') {
        alert('New counter name cannot be empty!');
        return false;
    }
    
    if (!countArr.length) {
        var lastID = -1;
    } else {
        var lastID = Number(document.getElementById(countArr.length-1).id);
    }
    
    countArr.push({
        id: lastID+1,
        name: newName,
        count: 0,
    });

    var ctr0 = document.createElement('div');
    ctr0.setAttribute('class','counter');
    ctr0.setAttribute('id',countArr[countArr.length-1].id.toString());
    document.getElementById('container').appendChild(ctr0);
    
        var ctr00 = document.createElement('div');
        ctr00.setAttribute('class','button delete');
        document.getElementById(countArr[countArr.length-1].id.toString()).appendChild(ctr00);

        var ctr01 = document.createElement('div');
        ctr01.setAttribute('class','button reset');
        document.getElementById(countArr[countArr.length-1].id.toString()).appendChild(ctr01);

        var ctr02 = document.createElement('div');
        ctr02.setAttribute('class','count');
        document.getElementById(countArr[countArr.length-1].id.toString()).appendChild(ctr02);

            var ctr020 = document.createElement('p');
            ctr020.setAttribute('class','countername');
            document.getElementById(countArr[countArr.length-1].id.toString()).children[2].appendChild(ctr020);
            document.getElementById(countArr[countArr.length-1].id.toString()).children[2].children[0].innerHTML = countArr[countArr.length-1].name;

            var ctr021 = document.createElement('p');
            ctr021.setAttribute('class','counternumber');
            document.getElementById(countArr[countArr.length-1].id.toString()).children[2].appendChild(ctr021);
            document.getElementById(countArr[countArr.length-1].id.toString()).children[2].children[1].innerHTML = countArr[countArr.length-1].count;

        var ctr03 = document.createElement('div');
        ctr03.setAttribute('class','button minus');
        document.getElementById(countArr[countArr.length-1].id.toString()).appendChild(ctr03);

        var ctr04 = document.createElement('div');
        ctr04.setAttribute('class','button plus');
        document.getElementById(countArr[countArr.length-1].id.toString()).appendChild(ctr04);
    

}

// document.getElementById('addnewcounter').onclick = addNewCounter(countArr);
document.getElementById('addnewcounter').addEventListener('click',addNewCounter);

