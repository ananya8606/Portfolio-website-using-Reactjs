import React from 'react'; 
import { BrowserRouter,Link } from 'react-router-dom';
import '../App.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
function Footer() 
{ 
        return <div className='icons-list'>
        <h className="f">Contact Me: </h>
<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/ananya8606"
				>
					<GitHubIcon className="logo" style={{ color: 'white' }} />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://instagram.com/ananya_iiitr?utm_medium=copy_link"
				>
					<LinkedInIcon className="logo2" style={{ color: '#2867B2' }} />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://mobile.twitter.com/ananya8606"
				>
					<TwitterIcon className="logo2" style={{ color: '#00acee' }} />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.facebook.com/profile.php?id=100021916785704">
					<FacebookIcon className="logo2" style={{ color: '#4267B2' }} />
				</a>
				<BrowserRouter>
					<Link
						className="mail-link-tag"
						to="#"
						onClick={(e) => {
							window.location = 'mailto:ananyaiiitr@gmail.com';
							e.preventDefault();
						}}
					>
	<MailIcon
					className="logo"
					style={{ color: 'EA4335', cursor: 'default' }}
				/>
					</Link>
				</BrowserRouter>
<p>
       <div id="font"> &copy; 2021 Copyright Ananya Gupta </div>
      </p>
</div>  }

export default Footer;