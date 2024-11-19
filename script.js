<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Converter</title>
    <link rel="stylesheet" href="./styles.css" />
</head>
<body>
    <h1 class="text-center">Text Converter</h1>
    <input type="text" id="input" class="textbox" placeholder="Enter a text to perform a text operation" />
    <input type="text" id="output" class="textbox" placeholder="Output will be displayed here" />
    <script src="./script.js"></script>

    <div class="btn-container">
        <button type="button" class="action-btns" onclick="handleUpperCase()">UpperCase</button>
        <button type="button" class="action-btns" onclick="handleLowerCase()">LowerCase</button>
        <button type="button" class="action-btns" onclick="handleWordCount()">Word Count</button>
        <button type="button" class="action-btns" onclick="handleCharacterCount()">Character Count</button>
        <button type="button" class="clear-btn" onclick="clearInput()">Clear</button>
    </div>
</body>
</html>