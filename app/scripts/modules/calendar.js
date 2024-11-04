import VanillaCalendar from "vanilla-calendar-pro";
// import { IOptions } from "vanilla-calendar-pro/types";

const commonOptions = {
  input: true,
  settings: {
    lang: "ru",
    visibility: {
      weekend: false,
      daysOutside: false,
    },
  },
};

const options = {
  ...commonOptions,
  type: "default",
  actions: {
    changeToInput(e, self) {
      if (!self.HTMLInputElement) return;
      if (self.selectedDates[0]) {
        const date = self.selectedDates[0];
        const day = date.split("-").at(-1);
        self.HTMLInputElement.value = day;
      } else {
        self.HTMLInputElement.value = "";
      }
    },
    clickDay(e, self) {
      self.hide();
    },
  },
};

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const calendarTriggerDays = document.querySelectorAll(".calendar-day input");
[...calendarTriggerDays].forEach((calendarTrigger) => {
  if (calendarTrigger) {
    const calendarInput = new VanillaCalendar(calendarTrigger, options);
    calendarInput.init();
  }
});

const calendarTriggerMonth = document.querySelectorAll(".calendar-month input");
[...calendarTriggerMonth].forEach((calendarTrigger) => {
  if (calendarTrigger) {
    const calendarInput = new VanillaCalendar(calendarTrigger, {
      type: "month",
      ...commonOptions,
      actions: {
        clickMonth(e, self) {
          if (!self.HTMLInputElement) return;
          if (self.selectedMonth >= 0) {
            self.HTMLInputElement.value = months[self.selectedMonth];
          } else {
            self.HTMLInputElement.value = "";
          }
          self.hide();
        },
      },
    });
    calendarInput.init();
  }
});

const calendarTriggerYear = document.querySelectorAll(".calendar-year input");
[...calendarTriggerYear].forEach((calendarTrigger) => {
  if (calendarTrigger) {
    const calendarInput = new VanillaCalendar(calendarTrigger, {
      type: "year",
      ...commonOptions,
      actions: {
        clickYear(event, self) {
          if (!self.HTMLInputElement) return;
          if (self.selectedYear) {
            self.HTMLInputElement.value = self.selectedYear;
          } else {
            self.HTMLInputElement.value = "";
          }
          self.hide();
        },
      },
    });
    calendarInput.init();
  }
});
