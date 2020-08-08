import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import { Rate } from 'antd';
import 'antd/dist/antd.css';




export default function MovieCard({list}) {
    return (
        <div style={{margin:'3%'}}>
            <Card style={{ width: '18rem',height:'600px' }}>
                <Card.Img variant="top" src={list.posterUrl} style={{ height: '375px' }}/>
                <Card.Body>
                    <Card.Title>{list.title}</Card.Title>
                    <Card.Text>{list.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><Rate disabled defaultValue={list.rating} /></small>
                </Card.Footer>
            </Card>
        </div>
    )
}
