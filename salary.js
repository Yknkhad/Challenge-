function salaryCalculator() {
    const baseSalary = parseFloat(prompt("Enter your base salary:"));
    const benefits = parseFloat(prompt("Enter your benefits:"));
   
    if (isNaN(baseSalary) || isNaN(benefits)) {
      console.log("Invalid input. Please enter numeric values.");
      return;
    }
    
    const grossSalary = baseSalary + benefits;
    console.log(`Gross Salary: ${grossSalary}`);

    let tax = 0;
    if (grossSalary <= 24000) {
      tax = grossSalary * 0.1; 
    } else if (grossSalary <= 32333) {
      tax = grossSalary * 0.25; 
    } else {
      tax = grossSalary * 0.3; 
    }
    
    console.log(`Tax Deduction: ${tax}`);
  
    let nhifDeduction = 0;
    if (grossSalary <= 5999) {
      nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
      nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
      nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
      nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
      nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
      nhifDeduction = 750;
    } else {
      nhifDeduction = 1000; 
    }
  
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    
    const nssfDeduction = baseSalary * 0.06;
    console.log(`NSSF Deduction: ${nssfDeduction}`);
    
    const totalDeductions = tax + nhifDeduction + nssfDeduction;
    console.log(`Total Deductions: ${totalDeductions}`);
    
    const netSalary = grossSalary - totalDeductions;
    console.log(`Net Salary: ${netSalary}`);
  }
  
  salaryCalculator();
  