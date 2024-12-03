function gradeGenerator() {
    const marks = prompt("Enter the student's marks out off 100 marks:");
    const score = parseInt(marks);  
    
    if (isNaN(marks) | score < 0 || score > 100 || isNaN(score)) {
      alert("Invalid input. Please enter a number between 0 and 100.");
    } else if (score > 79) {
      alert("Grade: A");
    } else if (score >= 60) {
      alert("Grade: B");
    } else if (score >= 49) {
      alert("Grade: C");
    } else if (score >= 40) {
      alert("Grade: D");
    } else {
      alert("Grade: E");
    }
  }
  
  gradeGenerator(); 
  