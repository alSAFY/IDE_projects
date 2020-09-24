function displayElement (id1,id2) {
    document.getElementById(id1).addEventListener("click", hideElements);
    function hideElements () {
        document.getElementById(id2).style.display = 'block';
        document.getElementById(id2).style.transition = "all 2s";
        let check = id1 ;
        if (check == 'btn1'){
            document.getElementById('hidden2').style.display = 'none';
            document.getElementById('hidden3').style.display = 'none';
            document.getElementById('hidden4').style.display = 'none';
        } else if (check == 'btn2'){
            document.getElementById('hidden1').style.display = 'none';
            document.getElementById('hidden3').style.display = 'none';
            document.getElementById('hidden4').style.display = 'none';
        } else if (check == 'btn3'){
            document.getElementById('hidden1').style.display = 'none';
            document.getElementById('hidden2').style.display = 'none';
            document.getElementById('hidden4').style.display = 'none';
        } else {
            document.getElementById('hidden1').style.display = 'none';
            document.getElementById('hidden2').style.display = 'none';
            document.getElementById('hidden3').style.display = 'none';
        }
    }
}
displayElement('btn1','hidden1');
displayElement('btn2','hidden2');
displayElement('btn3','hidden3');
displayElement('btn4','hidden4');
