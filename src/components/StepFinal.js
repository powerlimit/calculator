import React, {useState} from 'react';
import cover from '../assets/images/cover.png';
import {BundleBuild} from "./BundleBuild";
import {BundleBurn} from "./BundleBurn";
import {BundleMaintain} from "./BundleMaintain";
import {Circle} from "./Circle";
import {useShopify} from "../hooks";
import {activityOptions, calculate, dietOptions, getStepClass, healthOptions, STEP_FINAL} from "../utils";
import Modal from 'react-modal';
import {Video} from './Video';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    inset: 'auto',
    left: 'auto',
    right: 'auto',
    top: 'auto',
    bottom: 'auto',
    position: 'relative',
    borderRadius: '40px 40px 0 40px',
    padding: '50px 20px',
    margin: '50px auto',
  },
};

export const StepFinal = ({data, step, setStep}) => {

  const {total, protein, fat, carbs, meals, result} = calculate(data);

  const [variant, setVariant] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
    setVariant(null);
  };

  const {
    product,
    fetchProduct,
    openCart,
    checkoutState,
    addVariant,
  } = useShopify();
  const quantity = 1;

  const changeSize = quantity => {
    openCart();
    const sizeId = variant || (product.variants ? product.variants[0].id.toString() : product.id);
    const lineItemsToAdd = [
      {variantId: sizeId, quantity: parseInt(quantity, 10)},
    ];
    const checkoutId = checkoutState.id;
    addVariant(checkoutId, lineItemsToAdd);
    setVariant(null);
  };

  const addToCart = () => {
    setIsOpen(false);
    changeSize(quantity);
  };

  const openModal = id => {
    fetchProduct(id).then((resp) => {
      console.log(resp);
      setIsOpen(true);
    });
  };

  const getVideoId = () => {
    switch (data.health) {
      case 300:
        return 512884117;
      case -300:
        return 512880016;
      case 0:
      default:
        return 512882923;
    }
  }

  const getBundle = () => {
    switch (data.health) {
      case 300:
        return <BundleBuild openModal={openModal}/>;
      case -300:
        return <BundleBurn openModal={openModal}/>;
      case 0:
      default:
        return <BundleMaintain openModal={openModal}/>;
    }
  };

  return (
    <div className={getStepClass(step, STEP_FINAL) + ' step-final'}>
      <div className="step-title">
        <div className="colored">
          <span className="colored-first">Results.</span> <span className="colored-second">Results.</span> <span className="colored-third">Results.</span>
        </div>
        <br/> <a href="#bundle" className="button filled sm-w-100">View your bundle</a>
      </div>
      <div className="step-content">
        <div className="res-circles">
          <Circle label={`Protein`} value={protein} total={total}/> <Circle label={`Carbs`} value={carbs} total={total}/> <Circle label={`Fat`} value={fat} total={total}/>
        </div>
        <div className="final-video">
          <Video id={getVideoId()} />
        </div>
        <div className="calorie-intake">
          Your Total Daily Calorie Intake:
          <div className="colored">
            <span className="colored-first">{result}</span> <span className="colored-second">{result}</span> <span className="colored-third">{result}</span>
          </div>
        </div>
        <div className="meal-cards">
          {meals}
        </div>
        <div className="selections fw-700">
          <h3 className="selections-title"><span>Your Selections:</span></h3>
          <ul className="selections-cont">
            <li className="selections-item age">
              <span className="selections-item-title">Age</span> <span>{data.age}</span>
            </li>
            <li className="selections-item">
              <span className="selections-item-title">Weight</span> <span>{data.weight} lbs.</span>
            </li>
            <li className="selections-item">
              <span className="selections-item-title">Health Goal:</span> <span>{healthOptions.find(o => o.value === data.health)?.text} </span>
            </li>
            <li className="selections-item">
              <span className="selections-item-title">Height</span> <span>{data.feet}’ {data.inches || 0}”</span>
            </li>
            <li className="selections-item">
              <span className="selections-item-title">Diet Style:</span> <span>{dietOptions.find(o => o.value === data.diet)?.text} </span>
            </li>
            <li className="selections-item">
              <span className="selections-item-title">Activity</span> <span>{activityOptions.find(o => o.value === data.activity)?.text}</span>
            </li>
            <li className="selections-item">
              <span className="selections-item-title">No. Of Meals:</span> <span>{data.meals} </span>
            </li>
          </ul>
          <div className="edit">
            <button onClick={() => setStep(1)} className="button filled">Edit</button>
          </div>
          <h2 className="bundle-title" id="bundle">
            Your custom bundle </h2>
          <p className="mt-2 bundle-subtitle">Click on the product name or product circle for more details.</p>
        </div>
        {getBundle()}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Modal"
        style={customStyles}
      >
        <span onClick={handleCloseModal} className="modal-close">Dismiss</span>
        <div className="modal-content">
          {modalIsOpen && (
            <div className='modal-img-wrap'>
              <img src={product.images[0]?.src || ''} alt=""/>
            </div>
          )}
          <div className="flex">
            <h2 className="modal-product-title mb-2">{product?.title || 'Empty'}</h2>
            <p>
              TRU Protein is the all-natural and delicious plant-based protein powder built to deliver your body the protein, amino acids, and micronutrients needed to get the most out of your healthy
              lifestyle. </p>
            <ul className="check">
              <li><span>✓</span> 20 grams of protein</li>
              <li><span>✓</span> 27 vitamins and minerals</li>
              <li><span>✓</span> 100 calories per serving</li>
            </ul>
          </div>
        </div>
        <div className="text-center flex-box align-center mt-4">
          {!!product.variants && product.variants.length > 1 && <select name="" id="" value={variant} onChange={(e) => {
            setVariant(e.target.value);
          }}>
            {product.variants.map(variant => {
              return <option key={variant.id} value={variant.id}>{variant.title}</option>;
            })}
          </select>}
          <button className="button filled mt-2" onClick={addToCart}>Buy This Product</button>
        </div>
      </Modal>
    </div>
  );
};
