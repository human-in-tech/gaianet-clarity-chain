document.getElementById('summary-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent page refresh on form submission

    const userInputElement = document.getElementById('user-input');
    const fileInputElement = document.getElementById('file-input');
    const apiUrl = 'https://0x57f6e4dc322f50110598a6900b4060071622b831.us.gaianet.network/v1/chat/completions';
    let userInput = userInputElement.value;

    // Check if the user uploaded a file
    if (fileInputElement.files.length > 0) {
        const file = fileInputElement.files[0];
        const fileText = await file.text(); // Read the text content from the uploaded file
        userInput = fileText;
    }

    // If there is no user input from either textarea or file, alert the user
    if (!userInput.trim()) {
        alert('Please enter text or upload a file.');
        return;
    }

    // Prepare data for the POST request
    const requestBody = {
        "messages": [
            { "role": "system", "content": "You are a helpful assistant." },
            { "role": "user", "content": userInput }
        ]
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const result = await response.json();

        // Extract summary or assistant's response from the result
        const summary = result?.choices?.[0]?.message?.content || 'No summary generated.';

        // Display the summary in the explanation textarea
        document.getElementById('explanation-output').textContent = summary;
    } catch (error) {
        console.error('Error generating summary:', error);
        document.getElementById('explanation-output').textContent = 'Error generating summary. Please try again.';
    }
});