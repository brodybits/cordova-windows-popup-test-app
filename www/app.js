function nativeAlertTest() {
  navigator.notification.alert('Native alert test message');
}

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

function onPromptRes(res) {
  navigator.notification.alert('Response with choice: ' + res.buttonIndex + ' input: ' + res.input1);
}

function prompt2() {
  navigator.notification.prompt(
    'Enter input & confirm choice',
    onPromptRes,
    'Prompt',
    ['Choice 1', 'Choice 2'],
    'default input'
  );
}

function prompt3() {
  navigator.notification.prompt(
    'Enter input & confirm choice',
    onPromptRes,
    'Prompt 3 choices',
    ['Choice 1', 'Choice 2', 'Choice 3'],
    'default input'
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

function reload() {
  location.reload();
}

function goToPage2() {
  window.location = "page2.html";
}

document.addEventListener('deviceready', function() {
  $('#native-alert-test').click(nativeAlertTest);
  $('#confirm-2').click(confirm2);
  $('#confirm-3').click(confirm3);
  $('#prompt-2').click(prompt2);
  $('#prompt-3').click(prompt3);
  $('#popup-1').click(popup1);
  $('#popup-2').click(popup2);
  $('#reload').click(reload);
  $('#location-page2').click(goToPage2);
});
