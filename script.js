$(document).ready(function () {
    $(".sidenav").sidenav();
    $(".materialboxed").materialbox();
    $(".parallax").parallax();
    $(".tabs").tabs();
    $('.datepicker').datepicker({
      i18n: {
        months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
        monthsShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
        weekdays: ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"],
        weekdaysShort: ["Пон", "Вів", "Сер", "Чет", "П'ят", "Суб", "Нед"],
        weekdaysAbbrev: ["П", "В", "С", "Ч", "П", "С", "Н"],
        cancel: "Скасувати",
        clear: "Очистити",
        done: "Зберегти"
      }
    });
    $(".tooltipped").tooltip();
    $(".scrollspy").scrollSpy({
      throttle: 1
    });
  });