import { Link } from 'react-router-dom';
import '../styles/aboutUs.css'; 

export default function About() {
    return (
        <div className="about-us">
            <div className="about-us-container">
                <div className="content">
                    <h1 className="page-header_title">About World University</h1>
                    <h2>1. Introduction to WorldUniversity</h2>
                    <p>A brief introduction explaining what WorldUniversity is, the purpose behind the platform, and its commitment to providing valuable information to students around the world. For example:</p>
                    <p>"WorldUniversity is a comprehensive platform developed by PT World University, aimed at helping students gain detailed insights into various countries across the globe. We provide a wide range of features, including country data search, flags, locations, and the ability to filter countries based on specific criteria."</p>
                    <h2>2. Our Mission</h2>
                    <p>A section that clearly defines the mission and vision of WorldUniversity. This section should emphasize the platform's goal of making information accessible, reliable, and useful for students and researchers. For example:</p>
                    <p>"Our mission is to empower students and researchers by providing them with easy access to reliable and detailed information about countries worldwide. We strive to create an informative and user-friendly experience that caters to the needs of our users."</p>
                    <h2>3. Vision:</h2>
                    <p>"Our vision is to be the leading platform that empowers students and individuals with comprehensive and accessible information about countries worldwide, fostering global understanding and education."</p>
                    <h2>Social Media</h2>
                    <ul className="social-media-links">
                        <li><a href="https://www.instagram.com/newjeans_official/">Instagram</a></li>
                        <Link to="/" className="back-button">Back to Home</Link>
                    </ul>
                </div>
                
            </div>
        </div>
    );
}
