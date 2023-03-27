import React from 'react'

const ProductFreshnessForm = ({onChange, checkedBrandNew, checkedSecondHand, checkedRefurbisned}) => {
  return (
    <div>
        <div className="mb-3">
        <label htmlFor="formRadio" className="form-radio">
          Product Freshness
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="ProductsFreshness"
            id="flexRadioDefault1"
            defaultValue="Brand New"
            checked={checkedBrandNew}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Brand New
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="ProductsFreshness"
            id="flexRadioDefault2"
            defaultValue="Second Hand"
            checked={checkedSecondHand}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Second Hand
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="ProductsFreshness"
            id="flexRadioDefault3"
            defaultValue="Refurbisned"
            checked={checkedRefurbisned}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            Refurbisned
          </label>
        </div>
      </div>
    </div>
  )
}

export default ProductFreshnessForm