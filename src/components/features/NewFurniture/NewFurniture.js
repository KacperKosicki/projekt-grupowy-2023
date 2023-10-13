import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    pagesCount: 0,
    categoryProducts: [],
    transition: false,
  };

  constructor(props) {
    super(props);
    this.state.categoryProducts = props.products.filter(
      item => item.category === this.state.activeCategory
    );
    const pagesCount = Math.ceil(this.state.categoryProducts.length / 8);
    this.state.pagesCount = pagesCount;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      const categoryProducts = this.props.products.filter(
        item => item.category === this.state.activeCategory
      );

      this.setState({
        categoryProducts: categoryProducts,
      });
    }
  }

  swipeLeft = () => {
    if (this.state.activePage === this.state.pagesCount - 1) return;
    this.handlePageChange(this.state.activePage + 1);
  };

  swipeRight = () => {
    if (this.state.activePage === 0) return;
    this.handlePageChange(this.state.activePage - 1);
  };

  handlePageChange(newPage) {
    this.setState({ transition: true });
    setTimeout(() => {
      this.setState({ activePage: newPage });
      this.setState({ transition: false });
    }, 500);
  }

  handleCategoryChange(newCategory) {
    this.setState({ transition: true });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
      this.setState({ transition: false });
      this.setState({ activePage: 0 });
    }, 500);
  }

  productDisplay(screenMode) {
    let number = 8;
    if (screenMode === 'desktop') {
      number = 8;
    } else if (screenMode === 'tablet') {
      number = 3;
    } else if (screenMode === 'mobile') {
      number = 2;
    }
    return number;
  }

  render() {
    const { categories, screenMode } = this.props;

    const { activeCategory, activePage, transition } = this.state;

    const dots = [];
    for (let i = 0; i < this.state.pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }
    const isFeatured = false;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory ? styles.active : ''}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipeable leftAction={this.swipeLeft} rightAction={this.swipeRight}>
            <div className={clsx(styles.galleryImg, transition ? styles.hidden : '')}>
              <div className='row'>
                {this.state.categoryProducts
                  .slice(
                    activePage * 8,
                    (activePage + 1) * this.productDisplay(screenMode)
                  )
                  .map(item => (
                    <div key={item.id} className='col-sm-6 col-md-4 col-lg-3'>
                      <ProductBox {...item} isFeatured={isFeatured} />
                    </div>
                  ))}
              </div>
            </div>
          </Swipeable>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  screenMode: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  screenMode: '',
};

const mapStateToProps = state => {
  return {
    screenMode: state.screenMode,
  };
};

export default connect(mapStateToProps)(NewFurniture);

//export default NewFurniture;
