const employees = [
    {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        firstName: "Aarav",
        tasks: [
            {
                taskTitle: "Update Client Records",
                taskDescription: "Update the CRM records for client ABC Corp.",
                taskDate: "2024-12-01",
                category: "Admin",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Prepare Report",
                taskDescription: "Prepare the sales report for Q4.",
                taskDate: "2024-12-05",
                category: "Sales",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Team Meeting",
                taskDescription: "Attend the weekly team meeting and discuss project updates.",
                taskDate: "2024-12-03",
                category: "Meetings",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ],
        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 2,
            failed: 0
        }
    },
    {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        firstName: "Vihaan",
        tasks: [
            {
                taskTitle: "Code Review",
                taskDescription: "Review the pull requests for the new feature.",
                taskDate: "2024-12-02",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Deploy Application",
                taskDescription: "Deploy the latest build to the staging server.",
                taskDate: "2024-12-03",
                category: "DevOps",
                active: false,
                newTask: true,
                completed: false,
                failed: true
            },
            {
                taskTitle: "Documentation Update",
                taskDescription: "Update the API documentation with the latest endpoints.",
                taskDate: "2024-12-06",
                category: "Documentation",
                active: false,
                newTask: true,
                completed: true,
                failed: false
            }
        ],
        taskNumbers: {
            active: 3,
            newTask: 2,
            completed: 1,
            failed: 1
        }
    },
    {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        firstName: "Aanya",
        tasks: [
            {
                taskTitle: "Customer Feedback",
                taskDescription: "Analyze customer feedback from the latest survey.",
                taskDate: "2024-12-01",
                category: "Research",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                taskTitle: "Market Analysis",
                taskDescription: "Prepare a market analysis report for the new product launch.",
                taskDate: "2024-12-08",
                category: "Marketing",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ],
        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        firstName: "Ishaan",
        tasks: [
            {
                taskTitle: "Bug Fixing",
                taskDescription: "Fix critical bugs reported by the QA team.",
                taskDate: "2024-12-04",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Release Planning",
                taskDescription: "Plan the next release cycle with the project manager.",
                taskDate: "2024-12-07",
                category: "Management",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ],
        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 0
        }
    },
    {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        firstName: "Kavya",
        tasks: [
            {
                taskTitle: "Social Media Campaign",
                taskDescription: "Design and launch a campaign for the holiday season.",
                taskDate: "2024-12-10",
                category: "Marketing",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                taskTitle: "Content Creation",
                taskDescription: "Write and publish three blog posts for the company website.",
                taskDate: "2024-12-12",
                category: "Content",
                active: false,
                newTask: true,
                completed: true,
                failed: false
            }
        ],
        taskNumbers: {
            active: 2,
            newTask: 2,
            completed: 1,
            failed: 0
        }
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}


export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
 
    return { employees, admin }; // Object me dono ko return karenge
 }
 