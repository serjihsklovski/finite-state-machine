function log(previousState, currentState, isInfo, isWarning) {
  if (vm.logs.length > 7) {
    vm.logs.pop();
  }

  vm.logs.unshift({
    previousState: previousState,
    currentState: currentState,
    isInfo: isInfo,
    isWarning: isWarning
  });
}

var STATES = [
  "Состояние 1",
  "Состояние 2",
  "Состояние 3",
  "Состояние 4",
];

var vm = new Vue({
  el: '#finite-state-machine',

  data: {
    currentState: STATES[0],
    previousState: null,
    logs: [],

    btnAClassObject: {
      'btn-success': true,
      'btn-danger': false
    },

    btnBClassObject: {
      'btn-success': false,
      'btn-danger': true
    },

    btnCClassObject: {
      'btn-success': false,
      'btn-danger': true
    }
  },

  methods: {
    switchButtonStyles: function () {
      this.btnBClassObject['btn-success'] = !this.btnBClassObject['btn-success'];
      this.btnBClassObject['btn-danger'] = !this.btnBClassObject['btn-danger'];
      this.btnCClassObject['btn-success'] = !this.btnCClassObject['btn-success'];
      this.btnCClassObject['btn-danger'] = !this.btnCClassObject['btn-danger'];
    },

    clearOutLogs: function () {
      this.logs.splice(0);
    },

    btnA: function () {
      var previousState = this.currentState;

      switch (this.currentState) {
        case STATES[0]:
          this.currentState = STATES[1];
          this.switchButtonStyles();

          log(previousState, this.currentState, true, false);

          break;

        case STATES[1]:
          this.currentState = STATES[0];
          this.switchButtonStyles();

          log(previousState, this.currentState, true, false);

          break;

        case STATES[2]:
          this.currentState = STATES[0];
          this.switchButtonStyles();

          log(previousState, this.currentState, true, false);

          break;

        case STATES[3]:
          this.currentState = STATES[0];
          this.switchButtonStyles();

          log(previousState, this.currentState, true, false);

          break;

        default:
          log(previousState, this.currentState, false, true);
          break;
      }
    },

    btnB: function () {
      var previousState = this.currentState;

      switch (this.currentState) {
        case STATES[1]:
          this.currentState = STATES[2];
          log(previousState, this.currentState, true, false);
          break;

        case STATES[2]:
          this.currentState = STATES[1];
          log(previousState, this.currentState, true, false);
          break;

        case STATES[3]:
          this.currentState = STATES[2];
          log(previousState, this.currentState, true, false);
          break;

        default:
          log(previousState, this.currentState, false, true);
          break;
      }
    },

    btnC: function () {
      var previousState = this.currentState;

      switch (this.currentState) {
        case STATES[1]:
          this.currentState = STATES[3];
          log(previousState, this.currentState, true, false);
          break;

        case STATES[2]:
          this.currentState = STATES[3];
          log(previousState, this.currentState, true, false);
          break;

        case STATES[3]:
          this.currentState = STATES[1];
          log(previousState, this.currentState, true, false);
          break;

        default:
          log(previousState, this.currentState, false, true);
          break;
      }
    }
  }
});
