import React from 'react';
import { Card } from 'react-bootstrap';
import "../Tabs.css";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
function ExperienceCards() 
{ 
        return <div><Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>Customer Segmentation</h2></Card.Title>
          <Card.Text>
            <h6>The project uses unsupervised learning algorithms to cluster customers into groups based on purchasing data(Under Udacity). </h6>
<a href="#" class="btn btn-primary">Go somewhere</a>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
} 

export default ExperienceCards;