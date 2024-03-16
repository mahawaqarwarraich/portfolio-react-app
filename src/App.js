import logo from './logo.svg';
import './App.css';
import girlImage from './girl.PNG'

function App() {
  return (
    <div className="App">
     <header>
    <div>
        <h1>Maha Waqar</h1>
        <p>I am a self-driven and passionate web developer currently enrolled in the 5th semester of my Bachelor's degree in Computer Science.</p>
    </div>
    <div>
        <img src="/images/girl.PNG" alt="Profile Photo" width="100" height="100"/>
    </div>
</header>

<nav>
    <a href="#educational">Educational History</a>
    <a href="#skills">Professional Skills</a>
    <a href="#projects">Professional Projects</a>
    <a href="#hobbies">Hobbies</a>
    <a href="#ambitions">Life Ambitions</a>
    <a href="#efforts">Efforts for Country</a>
    <a style={{'margin-left': 'auto'}} href="#contact">Contact Me</a>
</nav>

<section id="educational">
    <h2>Educational History</h2>
    <table border="1" width="100%">
        <tr>
            <th>Sr. No.</th>
            <th>Degree Title</th>
            <th>Passing Year</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Matriculation</td>
            <td>2017</td>
            <td>1200</td>
            <td>1032</td>
            <td>86%</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Intermediate</td>
            <td>2019</td>
            <td>1200</td>
            <td>943</td>
            <td>78.6%</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Bachelor of Computer Science</td>
            <td>2025</td>
            <td>4</td>
            <td>3.8</td>
            <td>87.5%</td>
        </tr>
    </table>
</section>


<section id="skills">
    <h2>Professional Skills</h2>
    <ol>
        <li>Web Development</li>
        <li>Data Analysis</li>
        <li>Project Management</li>
    </ol>
</section>

<section id="projects">
    <h2>Professional Projects</h2>
    <ol>
        <li>Website Redesign</li>
        <li>Data Visualization App</li>
        <li>Mobile App Development</li>
    </ol>
</section>

<section id="hobbies">
    <h2>Hobbies</h2>
    <ul>
        <li>Photography</li>
        <li>Reading</li>
        <li>Hiking</li>
    </ul>
</section>

<section id="ambitions">
    <h2>Life Ambitions</h2>
    <ul>
        <li><strong>Achieved:</strong>
            <ul>
                <li>Travel to 10 countries</li>
                <li>Complete a marathon</li>
                <li>Learn a new language</li>
                <li>Write a book</li>
            </ul>
        </li>
        <li><strong>Struggling:</strong>
            <ul>
                <li>Start a nonprofit organization</li>
                <li>Learn to play a musical instrument</li>
                <li>Contribute to open-source projects</li>
                <li>Establish a mentoring program</li>
            </ul>
        </li>
    </ul>
</section>

<section id="efforts">
    <h2>Efforts for Country</h2>
    <ul>
        <li><strong>Succeeded:</strong>
            <ul>
                <li>Volunteer at local community events</li>
                <li>Organize environmental awareness campaigns</li>
                <li>Participate in blood donation drives</li>
                <li>Support local education initiatives</li>
            </ul>
        </li>
        <li><strong>Struggling:</strong>
            <ul>
                <li>Promote sustainable practices</li>
                <li>Advocate for social equality</li>
                <li>Collaborate on healthcare improvement projects</li>
                <li>Contribute to disaster relief efforts</li>
            </ul>
        </li>
    </ul>
</section>

<footer id="contact">
    <p>Contact Information: maha.waqar.warraich@gmail.com</p>
    <img src="https://coursecs.files.wordpress.com/2023/10/whatsappicon_20x20.png"/>
    <a href="" target="_blank">WhatsApp</a>
   
    <img src="https://coursecs.files.wordpress.com/2023/10/facebook_20x20.png"/>
    <a href="#" target="_blank">Facebook</a>

    <img src="https://coursecs.files.wordpress.com/2023/10/instagram_20x20.png"/>
    <a href="#" target="_blank">Instagram</a>

    <img src="https://coursecs.files.wordpress.com/2023/10/youtube_20x20.png"/>
    <a href="#" target="_blank">YouTube</a>
    <a href="#" target="_blank">LinkedIn</a>

    <img src="https://coursecs.files.wordpress.com/2023/10/twittericon_20x20.png"/>
    <a href="#" target="_blank">Twitter</a>
</footer>
    </div>
  );
}

export default App;
