var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var today = moment();
var month1 = moment(today.startOf('month'));
var month2 = moment(today.add(1, 'month'));
var month3 = moment(today.add(1, 'month'));

$('.calendar1 .title').text(months[month1.month()]);
$('.calendar2 .title').text(months[month1.month()]);
$('.calendar3 .title').text(months[month1.month()]);

month1Days = month1.endOf('month').date();
month1WeekOffset = month1.startOf('month').day();
month1.startOf('month');
for (var i = 0; i < month1Days; i++) {
  var week = Math.ceil((month1WeekOffset + month1.date())/7);
  $(`.calendar1 .week${week} .day${month1.day()}`).text(`${month1.date()}`);
  month1.add(1, 'day');
}

month2Days = month2.endOf('month').date();
month2WeekOffset = month2.startOf('month').day();
month2.startOf('month');
for (var i = 0; i < month2Days; i++) {
  var week = Math.ceil((month2WeekOffset + month2.date())/7);
  $(`.calendar2 .week${week} .day${month2.day()}`).text(`${month2.date()}`);
  month2.add(1, 'day');
}

month3Days = month3.endOf('month').date();
month3WeekOffset = month3.startOf('month').day();
month3.startOf('month');
for (var i = 0; i < month3Days; i++) {
  var week = Math.ceil((month3WeekOffset + month3.date())/7);
  $(`.calendar3 .week${week} .day${month3.day()}`).text(`${month3.date()}`);
  month3.add(1, 'day');
}
