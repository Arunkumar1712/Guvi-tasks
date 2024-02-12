
import './App.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { FaXmark } from "react-icons/fa6";
import { ImCheckmark } from "react-icons/im";

import Button from 'react-bootstrap/Button';
function App() {

  const products = {
    pro: [
      { dat: "Single User", checked: true },
      { dat: "50GB Storage", checked: true },
      { dat: "Unlimited Public Projects", checked: true },
      { dat: "Community Access", checked: true },
      { dat: "Unlimited Private Projects", checked: false },
      { dat: "Dedicated Phone Support", checked: false },
      { dat: "Free Subdomain", checked: false },
      { dat: "Monthly Status Reports", checked: false }
    ],
    pro1: [
      { dat: "5 User", checked: true },
      { dat: "50GB Storage", checked: true },
      { dat: "Unlimited Public Projects", checked: true },
      { dat: "Community Access", checked: true },
      { dat: "Unlimited Private Projects", checked: true },
      { dat: "Dedicated Phone Support", checked: true },
      { dat: "Free Subdomain", checked: true },
      { dat: "Monthly Status Reports", checked: false }
    ],
    pro2: [
      { dat: "Unlimited User", checked: true },
      { dat: "50GB Storage", checked: true },
      { dat: "Unlimited Public Projects", checked: true },
      { dat: "Community Access", checked: true },
      { dat: "Unlimited Private Projects", checked: true },
      { dat: "Dedicated Phone Support", checked: true },
      { dat: "Free Subdomain", checked: true },
      { dat: "Monthly Status Reports", checked: true }
    ]
  };
  

  return (
    <div className="App">
     <Row xs={1} md={3} className="g-4">
           <Card className='card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title class="tit">FREE</Card.Title>
          <h1>$0/month</h1>
          <hr/>
          <Card.Text>
          <ProductList productList={products.pro  }/>
          </Card.Text>
          <Button className="btn" variant="primary" disabled style={{ width: '15rem',borderRadius: '20px' }}>Button</Button>{' '}

        </Card.Body>
      </Card>
      <Card className='card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title class="tit">PLUS</Card.Title>
          <h1>$9/month</h1>
          <hr/>
          <Card.Text>
          <ProductList productList={products.pro1  }/>
          </Card.Text>
          <Button className="btn"variant="primary" disabled style={{ width: '15rem',borderRadius: '20px' }}>Button</Button>{' '}

        </Card.Body>
      </Card>

      <Card  className='card' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title class="tit">PRO</Card.Title>
          <h1>$49/month</h1>
          <hr/>
          <Card.Text>
          <ProductList productList={products.pro2  }/>
          </Card.Text>
          <Button className="btn" variant="primary" style={{ width: '15rem',borderRadius: '20px' }}>Button</Button>{' '}

        </Card.Body>
      </Card></Row>
     
     
     
    </div>
  );
}

export default App;

function ProductList(props) {
  const { productList } = props;
 return (
    <ul className="product-list">
      {productList.map((product, index) => (
        <li key={index}>
       {product.checked ? (
              
              <ImCheckmark className="checkmark" />
            ) : (
             
              <FaXmark className="cross" />
            )}
            <span className={product.checked ? "product-data" : "crossed-product-data"}>
            {product.dat}
          </span>
          </li>
      ))}
    </ul>
  );
}


