const courses = {

"html-css": {
    id: "html-css",
    title: "HTML & CSS Basics",
    level: "Beginner",
    premium: false,

    description: "Learn how websites are structured and styled from scratch.",

    modules: [
        {
            id: "html-intro",
            title: "Introduction to HTML",

            lessons: [
                {
                    id: "what-is-html",
                    title: "What is HTML?",

                    content: {
                        text: "HTML is the standard language used to create the structure of web pages.",
                        video: null,
                        resources: []
                    },

                    quiz: {
                        question: "What does HTML stand for?",
                        options: [
                            "Hyper Text Markup Language",
                            "High Text Machine Language",
                            "Home Tool Markup Language"
                        ],
                        answer: "Hyper Text Markup Language"
                    },

                    completed: false
                },

                {
                    id: "basic-structure",
                    title: "Basic Structure of a Web Page",

                    content: {
                        text: "A web page is structured using HTML tags like html, head, and body.",
                        video: null,
                        resources: []
                    },

                    quiz: null,
                    completed: false
                },

                {
                    id: "html-tags",
                    title: "HTML Tags Overview",

                    content: {
                        text: "HTML tags define elements like headings, paragraphs, links, and images.",
                        video: null,
                        resources: []
                    },

                    quiz: null,
                    completed: false
                }
            ]
        },

        {
            id: "html-elements",
            title: "HTML Elements",

            lessons: [
                {
                    id: "headings-paragraphs",
                    title: "Headings & Paragraphs",
                    content: {
                        text: "Headings define titles (h1-h6), paragraphs define blocks of text.",
                        video: null,
                        resources: []
                    },
                    quiz: null,
                    completed: false
                },

                {
                    id: "links-images",
                    title: "Links & Images",
                    content: {
                        text: "Links connect pages and images display visual content.",
                        video: null,
                        resources: []
                    },
                    quiz: null,
                    completed: false
                },

                {
                    id: "lists-tables",
                    title: "Lists & Tables",
                    content: {
                        text: "Lists organize items, tables organize structured data.",
                        video: null,
                        resources: []
                    },
                    quiz: null,
                    completed: false
                }
            ]
        },

        {
            id: "css-basics",
            title: "CSS Basics",

            lessons: [
                {
                    id: "colors-fonts",
                    title: "Colors & Fonts",
                    content: {
                        text: "CSS controls design like colors, fonts, and spacing.",
                        video: null,
                        resources: []
                    },
                    quiz: null,
                    completed: false
                },

                {
                    id: "spacing-padding",
                    title: "Spacing & Padding",
                    content: {
                        text: "Spacing defines how elements are positioned and separated.",
                        video: null,
                        resources: []
                    },
                    quiz: null,
                    completed: false
                },

                {
                    id: "css-selectors",
                    title: "CSS Selectors",
                    content: {
                        text: "Selectors target HTML elements for styling.",
                        video: null,
                        resources: []
                    },
                    quiz: null,
                    completed: false
                }
            ]
        }
    ]
},


"javascript": {
    id: "javascript",
    title: "JavaScript Fundamentals",
    level: "Beginner",
    premium: false,

    description: "Learn logic, events, and interactive web development.",

    modules: [
        {
            id: "js-basics",
            title: "JavaScript Basics",

            lessons: [
                {
                    id: "variables",
                    title: "Variables",

                    content: {
                        text: "Variables store data values in JavaScript.",
                        video: null,
                        resources: []
                    },

                    quiz: null,
                    completed: false
                },

                {
                    id: "datatypes",
                    title: "Data Types",

                    content: {
                        text: "JavaScript supports strings, numbers, booleans, objects, arrays.",
                        video: null,
                        resources: []
                    },

                    quiz: null,
                    completed: false
                },

                {
                    id: "operators",
                    title: "Operators",

                    content: {
                        text: "Operators are used to perform operations like + - * /.",
                        video: null,
                        resources: []
                    },

                    quiz: null,
                    completed: false
                }
            ]
        },

        {
            id: "js-logic",
            title: "Functions & Logic",

            lessons: [
                {
                    id: "functions",
                    title: "Functions",

                    content: {
                        text: "Functions are reusable blocks of code.",
                        video: null,
                        resources: []
                    },

                    quiz: null,
                    completed: false
                },

                {
                    id: "conditions",
                    title: "Conditions",

                    content: {
                        text: "Conditions allow decision making using if/else.",
                        video: null,
                        resources: []
                    },

                    quiz: null,
                    completed: false
                },

                {
                    id: "loops",
                    title: "Loops",

                    content: {
                        text: "Loops repeat actions multiple times.",
                        video: null,
                        resources: []
                    },

                    quiz: null,
                    completed: false
                }
            ]
        }
    ]
},


"fullstack": {
    id: "fullstack",
    title: "Full Stack Introduction",
    level: "Intermediate",
    premium: true,

    description: "Frontend + backend systems and real-world architecture.",

    modules: [
        {
            id: "frontend",
            title: "Frontend Basics",

            lessons: [
                {
                    id: "ui-structure",
                    title: "UI Structure",
                    content: {
                        text: "Frontend is what users see in the browser.",
                        video: null,
                        resources: []
                    },
                    quiz: null,
                    completed: false
                },

                {
                    id: "frontend-review",
                    title: "HTML + CSS Review",
                    content: {
                        text: "Frontend combines HTML structure and CSS styling.",
                        video: null,
                        resources: []
                    },
                    quiz: null,
                    completed: false
                }
            ]
        },

        {
            id: "backend",
            title: "Backend Basics",

            lessons: [
                {
                    id: "server-intro",
                    title: "What is a Server?",
                    content: {
                        text: "A server processes requests and returns data.",
                        video: null,
                        resources: []
                    },
                    quiz: null,
                    completed: false
                },

                {
                    id: "apis",
                    title: "APIs Introduction",
                    content: {
                        text: "APIs connect frontend and backend systems.",
                        video: null,
                        resources: []
                    },
                    quiz: null,
                    completed: false
                }
            ]
        }
    ]
}

};

/* SAFE EXPORT */
if (typeof window !== "undefined") {
    window.courses = courses;
}
