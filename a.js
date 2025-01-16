'use strict'
// 1行目に記載している 'use strict' は削除しないでください


function getImage()　{
  const arr = ['Ima/cat1.jpeg', 'Ima/cat2.jpeg', 'Ima/cat3.jpg', 'Ima/cat4.jpg' ];
  const obj = document.getElementById("pic");
  const a = Math.floor(Math.random() * arr.length);
  obj.src = arr[a];
  
}


function ClickGator() {
  window.alert("(# ﾟДﾟ)ｺﾞﾙｧ");
  window.alert("(`・ω・́)ゝ");
}

const target = document.getElementById("target");
target.addEventListener("click", ClickGator);

// 曜日の定義
const week = ["日", "月", "火", "水", "木", "金", "土"];

// 今日の日付
var today = new Date();

// 表示用の日付
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);

// 表示された時
window.onload = function () {
// カレンダーの表示（引数には表示用の日付を設定)
showCalendar(showDate);
};

/**
 * カレンダーの表示
 */
function showCalendar(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var showDateStr = year + "年" + month + "月";

document.querySelector('#year_month_label').innerHTML = showDateStr;
    var calendarTable = createCalendarTable(year, month);

document.querySelector('#calendar_body').innerHTML = calendarTable;
}

/**
 * カレンダーテーブルの作成
 */

function createCalendarTable(year, month) {
    var _html = '';
    _html += '<table class="calendar_tbl">';
    _html += '<tr>';
    for (var i = 0; i < week.length; i++) {
        _html += "<th>" + week[i] + "</th>";
    }
    _html += '</tr>';


  // 表示するカレンダー年月の1日の曜日を取得
    var startDayOfWeek = new Date(year, month - 1, 1).getDay();
    var countDay = 0;
    var monthOfEndDay = new Date(year, month, 0).getDate()

    for (var i = 0; i < 6; i++) {
        _html += '<tr>';
        for (var j = 0; j < week.length; j++) {
            if (i === 0 && j === startDayOfWeek) {
                countDay++;
                _html += '<td class="with_date">' + countDay + '</td>'
            }
            else if (countDay !== 0 && countDay < monthOfEndDay) {
            countDay++;
            _html += '<td class="with_date">' + countDay + '</td>';
        }   else {
            _html += '<td class="no_date"></td>';
        }
        }
            _html += '</tr>';
        }
        _html += '</table>';
        return _html;
    } 

/**
 * 前年
 */

function prev_year() {
    showDate.setFullYear(showDate.getFullYear() - 1);
    showCalendar(showDate);
}

/**
 * 前月
 */

function prev_month() {
    showDate.setMonth(showDate.getMonth() - 1);
    showCalendar(showDate);
}

/**
 * 今日
 */

function now_month() {
    showDate = new Date();
    showCalendar(showDate);
}

/**
 * 来月
 */
function next_month() {
    showDate.setMonth(showDate.getMonth() + 1);
    showCalendar(showDate);
}

/**
 * 来年
 */

function next_year() {
    showDate.setFullYear(showDate.getFullYear() + 1);
    showCalendar(showDate);
}


function btnclick() {
  const number = wani.value;
  let result = "";
  let i = 0;
  while (i < number) {
  result += "🐊";
  i++;
  }
  document.getElementById("gators").textContent = result;
}





const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", btnclick); 
