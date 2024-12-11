const evaluatePerformance = (employees) => {
    const filteredEmployees = employees.filter(employee => employee.tasksCompleted > 5);

    const performanceMapped = filteredEmployees.map(({ name, rating }) => {
        let performance = "Needs Improvement";
        if (rating > 4.5) {
            performance = "Excellent";
        } else if (rating >= 3 && rating <= 4.5) {
            performance = "Good";
        }
        return { name, performance };
    });

    const sortedEmployees = performanceMapped.sort((a, b) => {
        const levels = { Excellent: 3, Good: 2, "Needs Improvement": 1 };
        return levels[b.performance] - levels[a.performance];
    });

    return sortedEmployees;
};

const employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

const result = evaluatePerformance(employees);
console.log(result);

