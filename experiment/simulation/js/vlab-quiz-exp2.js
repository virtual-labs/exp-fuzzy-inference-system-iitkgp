var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
	"questions": [
        {// Question 1
            "q": "What Is Fuzzy Inference Systems?",
            "a": [
                {"option": "The process of formulating the mapping from a given input to an output using fuzzy logic", "correct": true},
                {"option": "Changing the output value to match the input value to give it an equal balance", "correct": false},
                {"option": "Having a larger output than the input", "correct": false},
                {"option": "Having a smaller output than the input", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2
            "q": "What Are The Two Types Of Fuzzy Inference Systems?",
            "a": [
                {"option": "Model-Type and System-Type", "correct": false},
                {"option": "Momfred-Type and Semigi-Type", "correct": false},
                {"option": "Mamdani-Type and Sugeno-Type", "correct": true},
                {"option": "Mihni-Type and Sujgani-Type", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
    
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "What Is The First Step Of Fuzzy Logic Toolbox? ",
            "a": [
                {"option": "Fuzzification of the input variables ", "correct": true},
                {"option": "Defuzzification ", "correct": false},
                {"option": "Application of the fuzzy operator (AND or OR) in the antecedent ", "correct": false},
                {"option": "Aggregation of the consequents across the rules ", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 4 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What Is The Equation For Probabilistic?",
            "a": [
                {"option": "Probor (a,b) = a-b + ab", "correct": false},
                {"option": "Probor (a,b) = ab + ab", "correct": false},
                {"option": "Probor (a,b) = a+b - ab", "correct": true},
                {"option": "Probor (a,b) = a/b x ab ", "correct":false } // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 5 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What Is The Input And Output Of Step 3 - Apply Implication Method?",
            "a": [
                {"option": "Input is a fuzzy set but the output is a whole value", "correct": false},
                {"option": "Input is a whole value but the output can be a fuzzy set", "correct": true},
                {"option": "Input and output have the same value", "correct": false},
                {"option": "Input is a smaller value than the output value", "correct":false } // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },  
        {// Question 6 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Where Has Fuzzy Inference Systems Been Implemented?",
            "a": [
                {"option": "Wireless services, heat control and printers", "correct": false},
                {"option": "Restrict power usage, telephone lines and sort data", "correct": false},
                {"option": "Simulink, boiler and CD recording", "correct": false},
                {"option": "Automatic control, decision analysis and data classification", "correct":true } // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }, 
        {// Question 7 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Mamdani's Fuzzy Inference Method Was Designed To Attempt What?",
            "a": [
                {"option": "Control any two combinations of any two products by synthesising a set of linguistic control rules obtained from experienced human operations.", "correct": false},
                {"option": "Control a television and remote combination by synthesising a set of linguistic control rules obtained from experienced human operations.", "correct": false},
                {"option": "Control a steam engine and a boiler combination by synthesising a set of linguistic control rules obtained from experienced human operations.", "correct": true},
                {"option": "Control a air craft and feul level combination by synthesising a set of linguistic control rules obtained from experienced human operations", "correct":false } // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }, 
        
        {// Question 8 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What Is The Input And Output Of Step 2 - Apply Fuzzy Operator?",
            "a": [
                {"option": "The input is a single truth value and the output has two or more values", "correct": false},
                {"option": "The input is a value greater than one and the output is a value less than the input", "correct": false},
                {"option": "The input and output have both the same values", "correct": false},
                {"option": "The input has two or more values and the output has a single truth value", "correct":true } // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }, 
		{// Question 9 - Multiple Choice, Multiple True Answers, Select All
            "q": "What Is The Purpose Of Aggregation?",
            "a": [
                {"option": "To gather all the different fuzzy set outputs and combine them into a single fuzzy set outputs", "correct": true},
                {"option": "To gather all the possible inputs and use the average to gain an output", "correct": false},
                {"option": "To gather all the different fuzzy set outputs and average them out to get a single value", "correct":false},
                {"option": "To subtract all the output fuzzy set values from the input values", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        }
    ]
};// JavaScript Document// JavaScript Document