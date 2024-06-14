import { useState } from 'react'
import './App.css'
import Question from './Question'

function App() {
  useState
  const questions = [
    {
      question: 'What keyword is used to declare a variable in JavaScript?',
      options: ['var', 'int', 'string', 'let'],
      answer: 'var',
    },
    {
      question: 'Which function is used to print content to the console in JavaScript?',
      options: ['print()', 'log()', 'console.log()', 'display()'],
      answer: 'console.log()',
    },
    {
      question: 'Which symbol is used for comments in JavaScript?',
      options: ['//', '/* */', '<!-- -->', '-->'],
      answer: '//',
    },
    {
      question: 'What is the result of 5 + "5" in JavaScript?',
      options: ['10', '55', 'Error', '505'],
      answer: '55',
    },
    {
      question: 'What is the correct way to check if a variable is undefined in JavaScript?',
      options: ['if (variable === null)', 'if (variable === undefined)', 'if (typeof variable === undefined)', 'if (variable == undefined)'],
      answer: 'if (typeof variable === "undefined")',
    },
    {
      question: 'Which built-in method removes the last element from an array and returns that element in JavaScript?',
      options: ['last()', 'pop()', 'shift()', 'removeLast()'],
      answer: 'pop()',
    },
    {
      question: 'Which method in JavaScript can be used to convert a string to an integer?',
      options: ['toInt()', 'parseInt()', 'strToInt()', 'toInteger()'],
      answer: 'parseInt()',
    },
    {
      question: 'What does the "this" keyword refer to in JavaScript?',
      options: ['The current function', 'The parent object', 'The global object', 'The current object'],
      answer: 'The current object',
    },
    {
      question: 'What is the result of the expression 2 + 5 + "3" in JavaScript?',
      options: ['10', '25', '7', '75'],
      answer: '75',
    },
    {
      question: 'Which method is used to add new elements to the end of an array in JavaScript?',
      options: ['push()', 'append()', 'addToEnd()', 'concat()'],
      answer: 'push()',
    },
    {
      question: 'What does CSS stand for?',
      options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
      answer: 'Cascading Style Sheets',
    },
    {
      question: 'What is the correct way to add an external JavaScript file to your HTML document?',
      options: ['<js src="script.js">', '<script href="script.js">', '<script src="script.js">', '<javascript src="script.js">'],
      answer: '<script src="script.js">',
    },
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Highly Textual Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language'],
      answer: 'Hyper Text Markup Language',
    },
    {
      question: 'What is the purpose of the "alt" attribute in an HTML image tag?',
      options: ['To specify the alignment of the image', 'To provide alternative text for an image', 'To set the image source', 'To define the size of the image'],
      answer: 'To provide alternative text for an image',
    },
    {
      question: 'Which HTML tag is used to define an unordered list?',
      options: ['<ul>', '<ol>', '<li>', '<list>'],
      answer: '<ul>',
    },
    {
      question: 'Which CSS property is used to change the text color of an element?',
      options: ['color', 'text-color', 'font-color', 'foreground-color'],
      answer: 'color',
    },
    {
      question: 'What does the "href" attribute specify in an HTML anchor tag?',
      options: ['The text content of the anchor', 'The height of the anchor', 'The link destination', 'The color of the anchor'],
      answer: 'The link destination',
    },
    {
      question: 'Which HTML tag is used to define a table row?',
      options: ['<row>', '<tr>', '<table-row>', '<td>'],
      answer: '<tr>',
    },
    {
      question: 'What is the purpose of the "title" attribute in an HTML anchor tag?',
      options: ['To specify the text color of the anchor', 'To provide a title or tooltip for the anchor', 'To define the link destination', 'To set the height of the anchor'],
      answer: 'To provide a title or tooltip for the anchor',
    },
    {
      question: 'Which CSS property is used to change the font size of an element?',
      options: ['font-size', 'text-size', 'size', 'font-height'],
      answer: 'font-size',
    },
    {
      question: 'What is the correct way to select an HTML element with the id "demo" using CSS?',
      options: ['#demo', '.demo', 'id(demo)', 'element(demo)'],
      answer: '#demo',
    },
    {
      question: 'Which HTML tag is used to define a hyperlink?',
      options: ['<link>', '<anchor>', '<a>', '<href>'],
      answer: '<a>',
    },
    {
      question: 'What does the CSS property "display: none;" do?',
      options: ['Hides the element', 'Displays the element as a block-level element', 'Centers the element', 'Makes the element transparent'],
      answer: 'Hides the element',
    },
    {
      question: 'Which HTML tag is used to define a form?',
      options: ['<form>', '<input>', '<button>', '<submit>'],
      answer: '<form>',
    },
    {
      question: 'What is the correct way to add a comment in HTML?',
      options: ['<!-- Comment -->', '// Comment', '/ Comment /', '**Comment**'],
      answer: '<!-- Comment -->',
    },
    {
      question: 'Which CSS property is used to change the background color of an element?',
      options: ['background-color', 'color', 'bg-color', 'bgcolor'],
      answer: 'background-color',
    },
    {
      question: 'What does the "type" attribute specify in an HTML input tag?',
      options: ['The style of the input', 'The input value', 'The maximum length of the input', 'The type of input control'],
      answer: 'The type of input control',
    },
    {
      question: 'Which HTML tag is used to define a list item?',
      options: ['<list>', '<ul>', '<li>', '<ol>'],
      answer: '<li>',
    },
    {
      question: 'What does CSS specificity refer to?',
      options: ['The order in which styles are applied', 'The weight of a style rule', 'How specific a selector is in relation to other selectors', 'The level of importance of a style rule'],
      answer: 'How specific a selector is in relation to other selectors',
    },
    {
      question: 'Which CSS property is used to change the font family of an element?',
      options: ['font-family', 'text-family', 'font-type', 'family'],
      answer: 'font-family',
    },
    {
      question: 'What is the purpose of the "target" attribute in an HTML anchor tag?',
      options: ['To specify the link destination', 'To open the link in a new window or tab', 'To set the text color of the anchor', 'To define the font size of the anchor'],
      answer: 'To open the link in a new window or tab',
    },
    {
      question: 'Which HTML tag is used to define a heading?',
      options: ['<heading>', '<h1>', '<head>', '<header>'],
      answer: '<h1>',
    },
    {
      question: 'What does the CSS property "margin: 0 auto;" do?',
      options: ['Adds a margin of 0 to the top and bottom, and auto to the left and right', 'Centers the element horizontally', 'Centers the element vertically', 'Adds a margin of 0 to all sides of the element'],
      answer: 'Centers the element horizontally',
    },
    {
      question: 'Which HTML tag is used to define the document type and language of an HTML document?',
      options: ['<doctype>', '<html>', '<lang>', '<!DOCTYPE>'],
      answer: '<!DOCTYPE>',
    },
    {
      question: 'What is the purpose of the "action" attribute in an HTML form tag?',
      options: ['To specify the HTTP method', 'To define the form submission URL', 'To add a JavaScript action', 'To set the form enctype'],
      answer: 'To define the form submission URL',
    },
    {
      question: 'Which CSS property is used to change the font weight of an element?',
      options: ['font-weight', 'text-weight', 'weight', 'font-bold'],
      answer: 'font-weight',
    },
    {
      question: 'What is the correct way to select all paragraphs in CSS?',
      options: ['p.all', '.all.p', 'p', 'all.p'],
      answer: 'p',
    },
    {
      question: 'Which HTML tag is used to define a hyperlink in an image?',
      options: ['<link>', '<a>', '<img>', '<href>'],
      answer: '<a>',
    },
    {
      question: 'What does the CSS property "padding" define?',
      options: ['The space between the element border and its content', 'The space between elements', 'The space between the element and its parent', 'The space between lines of text'],
      answer: 'The space between the element border and its content',
    },
    {
      question: 'Which HTML tag is used to define a horizontal line?',
      options: ['<hr>', '<line>', '<break>', '<hline>'],
      answer: '<hr>',
    },
    {
      question: 'What is the purpose of the "method" attribute in an HTML form tag?',
      options: ['To define the form submission URL', 'To specify the HTTP method', 'To add a JavaScript action', 'To set the form enctype'],
      answer: 'To specify the HTTP method',
    },
    {
      question: 'Which CSS property is used to change the text alignment of an element?',
      options: ['text-align', 'align', 'text-position', 'alignment'],
      answer: 'text-align',
    },
    {
      question: 'What does the "type" attribute specify in an HTML script tag?',
      options: ['The scripting language', 'The source file', 'The type of input control', 'The function type'],
      answer: 'The scripting language',
    },
    {
      question: 'Which HTML tag is used to define a footer?',
      options: ['<footer>', '<end>', '<bottom>', '<foot>'],
      answer: '<footer>',
    },
    {
      question: 'What does the CSS property "float: left;" do?',
      options: ['Floats the element to the left of its container', 'Floats the element to the right of its container', 'Floats the element to the top of its container', 'Floats the element to the bottom of its container'],
      answer: 'Floats the element to the left of its container',
    },
    {
      question: 'Which HTML tag is used to define a division or section in an HTML document?',
      options: ['<section>', '<div>', '<division>', '<part>'],
      answer: '<div>',
    },
    {
      question: 'What is the correct way to select an element with the class "example" in CSS?',
      options: ['.example', '#example', 'class(example)', 'element(example)'],
      answer: '.example',
    },
    {
      question: 'Which CSS property is used to change the background image of an element?',
      options: ['background-image', 'image', 'bg-image', 'background'],
      answer: 'background-image',
    },
    {
      question: 'What is the purpose of the "src" attribute in an HTML image tag?',
      options: ['To specify the text color of the image', 'To define the image source', 'To set the image height', 'To provide alternative text for the image'],
      answer: 'To define the image source',
    },
    {
      question: 'Which HTML tag is used to define a header for a document or section?',
      options: ['<header>', '<head>', '<h1>', '<title>'],
      answer: '<header>',
    }
];


const [question,setQuestion] = useState(questions)
const [score,setScore] = useState(0)
  return (
    <>

    <Question question={question} setQuestion={setQuestion} score={score} setScore={setScore} />
    </>
  )
} 

export default App
