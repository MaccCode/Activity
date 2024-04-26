const quiz = [
    {
        "subject": "Sport",
        "quiz": [
            {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        ]
    },
    {
        "subject": "Math",
        "quiz": [
            {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        ]
    }

]

/* 
    Challenge: 30 mins
    Display all the subject, question and corresponding answers with the following format
    e.g.
    Subject:  Sport
    Question 1:  Which one is correct team name in NBA?
    Answer:  Huston Rocket
    -----------------------
    Subject:  Math
    Question 1:  5 + 7 = ?
    Answer:  12
    Question 2:  12 - 8 = ?
    Answer:  4
*/

// Write your answer here
quiz.forEach((subjectData) => {
    console.log(`Subject: ${subjectData.subject}`);
    subjectData.quiz.forEach((questionData, index) => {
        console.log(`Question ${index + 1}: ${questionData.question}`);
        console.log("Options:");
        questionData.options.forEach((option, optionIndex) => {
            console.log(`${optionIndex + 1}. ${option}`);
        });
        console.log(`Answer: ${questionData.answer}`);
        if (index < subjectData.quiz.length - 1) {
            console.log("-----------------------");
        }
    });
    console.log();
});