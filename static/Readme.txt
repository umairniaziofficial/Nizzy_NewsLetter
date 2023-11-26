<h1>Email Subscription App using Mailchimp API</h1>

    <p>This repository contains a simple Node.js application that enables users to subscribe to a Mailchimp mailing list. The application utilizes the Mailchimp API to seamlessly add new subscribers.</p>

    <h2>Setup</h2>

    <ol>
        <li>Clone the repository to your local machine.</li>
        <pre><code>git clone [repository-url]
cd [repository-name]</code></pre>

        <li>Install dependencies.</li>
        <pre><code>npm install</code></pre>

        <li>Replace the placeholder values in the <code>app.js</code> file with your Mailchimp API key (<code>api</code>) and list ID (<code>listId</code>).</li>
        <pre><code>const api = "[Your Mailchimp API Key]";
const listId = "[Your Mailchimp List ID]";</code></pre>
    </ol>

    <h2>How to Run</h2>

    <ol>
        <li>Start the application.</li>
        <pre><code>node app.js</code></pre>

        <li>Open your web browser and navigate to <a href="http://localhost:3000/">http://localhost:3000/</a>.</li>

        <li>Fill out the subscription form with your first name, last name, and email address.</li>

        <li>Click the "Subscribe" button to submit the form.</li>
    </ol>

    <h2>Important Files</h2>

    <ul>
        <li><code>app.js</code>: The main Node.js application file.</li>
        <li><code>index.html</code>: HTML file containing the subscription form.</li>
        <li><code>static/</code>: Directory containing static files like stylesheets.</li>
    </ul>

    <h2>Dependencies</h2>

    <ul>
        <li><code>express</code>: Web application framework for Node.js.</li>
        <li><code>body-parser</code>: Middleware to parse incoming request bodies.</li>
        <li><code>https</code>: Module for making HTTPS requests.</li>
        <li><code>path</code>: Module for handling file paths.</li>
    </ul>

    <h2>Notes</h2>

    <ul>
        <li>Make sure to keep your Mailchimp API key and list ID secure.</li>
        <li>This application serves as a basic example and can be expanded to include additional features or customized according to specific requirements.</li>
    </ul>

    <p>Feel free to explore and enhance the functionality of this application as needed. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.</p>
