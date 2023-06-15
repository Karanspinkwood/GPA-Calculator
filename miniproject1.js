function calculateGPA(arr) {
    var gradeSum = 0;
    var numSubjects = arr.length;
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "A") {
        gradeSum += 100;
      } else if (arr[i] === "B") {
        gradeSum += 75;
      } else if (arr[i] === "C") {
        gradeSum += 50;
      }
    }
  
    var averageGPA = gradeSum / numSubjects;
  
    var alphabeticGPA;
    if (averageGPA > 80) {
      alphabeticGPA = "A";
    } else if (averageGPA > 70) {
      alphabeticGPA = "B";
    } else {
      alphabeticGPA = "C";
    }
  
    document.write("Your GPA is " + alphabeticGPA);
  }
  
  // Example usage
  calculateGPA(["A", "A", "B"]);
  