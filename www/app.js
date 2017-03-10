function onConfirmChoice(choiceIndex) {
  if (choiceIndex === 0)
    navigator.notification.alert('Confirmed no choice');
  else
    navigator.notification.alert('Confirmed choice: ' + choiceIndex);
}

function confirm2() {
  navigator.notification.confirm(
    'Please confirm a choice',
    onConfirmChoice,
    'Confirm 2 choices',
    ['Choice 1', 'Choice 2']
  );
}

function confirm3() {
  navigator.notification.confirm(
    'Please confirm a choice',
    onConfirmChoice,
    'Confirm 3 choices',
    ['Choice 1', 'Choice 2', 'Choice 3']
  );
}

function confirm4() {
  navigator.notification.confirm(
    'Please confirm a choice',
    onConfirmChoice,
    'Confirm 4 choices',
    ['Choice 1', 'Choice 2', 'Choice 3', '4th choice']
  );
}

function popup1() {
  navigator.notification.popup(
    'IGNORED 1',
    onConfirmChoice,
    'IGNORED 2',
    ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
    {x:50,y:75}
  );
}

function popup2() {
  navigator.notification.popup2(
    'IGNORED 1',
    onConfirmChoice,
    'IGNORED 2',
    ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4']
  );
}

document.addEventListener('deviceready', function() {
  $('#confirm-2').click(confirm2);
  $('#confirm-3').click(confirm3);
  $('#confirm-4').click(confirm4);
  $('#popup-1').click(popup1);
  $('#popup-2').click(popup2);
});
