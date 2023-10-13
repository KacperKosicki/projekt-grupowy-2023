import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Stars from '../../common/Stars/Stars';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './Popup.module.scss';
import Button from '../../common/Button/Button';
import PropTypes from 'prop-types';

function Popup(props) {
  const {
    show,
    handleClose,
    name,
    img,
    stars,
    userStars,
    id,
    category,
    price,
    oldPrice,
    promo,
  } = props;

  return (
    <Modal show={show} onHide={handleClose} dialogClassName='modal-lg'>
      <Modal.Header closeButton className={styles.header}>
        <Modal.Title className='text-center'>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <div className={styles.photo}>
          <img className={styles.img} src={img} alt={name} id={id} />
        </div>
        <div className={styles.description}>
          <Card style={{ width: '20rem', height: '17rem' }}>
            <ListGroup variant='flush'>
              <ListGroup.Item>Category: {category}</ListGroup.Item>

              <ListGroup.Item>
                <Stars stars={stars} userStars={userStars} id={id} />
              </ListGroup.Item>
              <ListGroup.Item>
                <div className={styles.prices}>
                  {oldPrice && <div className={styles.oldPrice}>$ {oldPrice}</div>}
                  <div className={styles.price}>
                    <Button noHover variant='big'>
                      $ {price}
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                {promo && <div className={styles.promo}>{promo} !!!</div>}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </Modal.Body>
      <Modal.Footer className={styles.footer}></Modal.Footer>
    </Modal>
  );
}

Popup.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  oldPrice: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  comparison: PropTypes.bool,
  userStars: PropTypes.number,
  category: PropTypes.string,
};

export default Popup;
