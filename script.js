function AvgExpCalc() {
    const EmployeeDates = [];
    for (let i = 1; i <= 5; i++) {
      const DateInput = document.getElementById(`EmployeeDate${i}`).value;
      if (DateInput !== '') {
        EmployeeDates.push(new Date(DateInput));
      }
    }

    const CurrentDate = new Date();
    const TotalDifferenceInYears = EmployeeDates.reduce((Total, date) => {
      const Difference = CurrentDate.getFullYear() - date.getFullYear();
      return Total + Difference;
    }, 0);

    const AvgYears = Math.round(TotalDifferenceInYears / EmployeeDates.length);

    if (EmployeeDates.length !== 0) {
        document.getElementById("Result").innerText = AvgYears;
    }
    
  }