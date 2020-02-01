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
    }); console.log(countArr[countArr.length-1]);

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
    
    console.log(document.getElementById(countArr[countArr.length-1].id.toString()));

    var newPlus = document.getElementsByClassName('plus');
    newPlus[newPlus.length-1].addEventListener('click',plusPlus);

    var newMinus = document.getElementsByClassName('minus');
    newMinus[newMinus.length-1].addEventListener('click',minusMinus);

    var newReset = document.getElementsByClassName('reset');
    newReset[newReset.length-1].addEventListener('click',zeroZero);

    var newDelete = document.getElementsByClassName('delete');
    newDelete[newDelete.length-1].addEventListener('click',delDel);

}

// document.getElementById('addnewcounter').onclick = addNewCounter(countArr);
document.getElementById('addnewcounter').addEventListener('click',addNewCounter);

function plusPlus() {
    for (j = 0; j < countArr.length; j++) {
        if (countArr[j].id == this.parentNode.id) {
            countArr[j].count++;
            console.log(countArr[j]);
        this.previousElementSibling.previousElementSibling.children[1].innerHTML = countArr[j].count;
        // console.log(this.parentNode);
        break;
      }
    }

}

var plusButtons = document.getElementsByClassName('plus');

for (i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener('click',plusPlus);
}

function minusMinus() {

    if (this.previousElementSibling.children[1].innerHTML == 0) {return false;}

    for (j = 0; j < countArr.length; j++) {
      if (countArr[j].id == this.parentNode.id) {
        countArr[j].count--;
        this.previousElementSibling.children[1].innerHTML = countArr[j].count;
        break;
      }
    }

}

var minusButtons = document.getElementsByClassName('minus');

for (i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener('click',minusMinus);
}

function zeroZero() {
    
    for (j = 0; j < countArr.length; j++) {
      if (countArr[j].id == this.parentNode.id) {

        var resConfirm = confirm(`Are You sure You want to reset this counter named \"${countArr[j].name}\" ?`);
        if (!resConfirm) {return false;}

        countArr[j].count = 0;
        this.nextElementSibling.children[1].innerHTML = countArr[j].count;
        break;
      }
    }

}

var resetButtons = document.getElementsByClassName('reset');

for (i = 0; i < resetButtons.length; i++) {
    resetButtons[i].addEventListener('click',zeroZero);
}

function delDel() {
    
    for (j = 0; j < countArr.length; j++) {
      if (countArr[j].id == this.parentNode.id) {

        var resConfirm = confirm(`Are You sure You want to delete this counter named \"${countArr[j].name}\" ?`);
        if (!resConfirm) {return false;}


        var toDel = document.getElementById(countArr[j].id);
        toDel.parentNode.removeChild(toDel);
        countArr.splice([j],1);
        break;
      }
    }

}

var deleteButtons = document.getElementsByClassName('delete');

for (i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click',delDel);
}

function menuAlert() {
    alert('You didn\'t think i\'d be bothered to make a menu, did You?');
}

function infoAlert() {
    alert('2020 © Muhammad Ramadhan');
}

document.getElementById('menubutton').addEventListener('click',menuAlert);
document.getElementById('infobutton').addEventListener('click',infoAlert);